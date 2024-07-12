import fs from "node:fs";
import { GetMealProps, PostMealProps } from "@/app/meals/MealsType";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { v4 as uuid } from "uuid";

const db = sql("meals.db");
export async function getMeal(): Promise<GetMealProps[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw new Error("error Message - ");

  return db.prepare("SELECT * FROM meals").all() as GetMealProps[];
}

export function getMealalone(slug: string): GetMealProps {
  return db
    .prepare("SELECT * from meals WHERE slug = ?")
    .get(slug) as GetMealProps;
}

export async function saveMeal(meal: PostMealProps) {
  const slug = slugify(meal.title, { lower: true });
  const instructdions = xss(meal.instructions);

  const extenstion = meal.image.name.split(".").pop();
  const fileName = `${slug}_${uuid()}.${extenstion}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const burfferImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(burfferImage), (error) => {
    if (error) {
      throw new Error("에러");
    }
  });

  meal.image = `/images/${fileName}` as unknown as File;
  db.prepare(
    `
      INSERT INTO meals 
        (title, summary, instructions, creator, creator_email , image, slug) 
      VALUES (
        @title,
        @summary,
        ${instructdions},
        @creator,
        @creator_email,
        @image,
        ${slug}
      )
    `
  ).run(meal);
}

// export function saveMeal(meal) {}

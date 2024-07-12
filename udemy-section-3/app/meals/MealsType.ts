export interface MealProps {
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export interface GetMealProps extends MealProps {
  slug: string | number;
  image: string;
}

export interface PostMealProps extends MealProps {
  image: File;
}

export interface ComplexProps {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: Date;
}

export interface MealsItemProps {
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
  image: string;
}

export interface ComplexProps {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: Date;
}

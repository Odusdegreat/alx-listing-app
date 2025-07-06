export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

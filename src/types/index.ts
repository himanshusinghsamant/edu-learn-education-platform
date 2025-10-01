export interface User {
  id: string;
  email: string;
  username: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

export interface SignInFormData {
  email: string;
  password: string;
}

export interface SignUpFormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface DetailProps {
  id: string;
  name: string;
  amount: number;
  description: string;
  created_at: string;
  category: {
    id: string;
    name: string;
  }
}
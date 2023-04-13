interface APIProps {
  data: ExpenseProps[];
  paging: PageProps;
}

interface ExpenseProps {
  id: string;
  amount: number;
  created_at: string;
  category: {
    name: string;
  };
}

interface PageProps {
  page: number;
  limit: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

interface DetailProps {
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
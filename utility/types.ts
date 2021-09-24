export interface Item {
  title: string;
  isbn: string;
  authors: string;
}

export interface TableProps {
  data: Array<Item>;
}

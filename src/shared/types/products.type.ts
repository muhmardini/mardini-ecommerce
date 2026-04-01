export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  availabilityStatus: string;
  stock: number;
  tags: string[];
  reviews: {
    rating: number;
    comment?: string;
    reviewerName?: string;
    reviewerEmail?: string;
  }[];
};
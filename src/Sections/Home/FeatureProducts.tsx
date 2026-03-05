import HomeProducts from "../../components/Home/HomeProducts";
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

export const FeatureProducts = () => {
  return (
    <section className="mt-20 mx-5 max-w-full">
      <h1 className="text-center text-secondary">Featured Products</h1>
      <div className="mx-5 max-w-full">
        <HomeProducts />
      </div>
    </section>
  );
};



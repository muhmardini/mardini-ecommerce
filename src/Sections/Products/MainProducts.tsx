import { useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import { ProductCard } from "../../components/Global/ProductCard";
import type { Product } from "../Home/FeatureProducts";
import NoProducts from "../../components/Products/NoProducts";
import {NavLink, useLocation} from 'react-router-dom'
import { motion } from "motion/react";
type CategoryKey =
  | "clothes"
  | "electronics"
  | "shoes"
  | "furniture"
  | "miscellaneous"
  | "beauty"
  | "fragrances"
  | "groceries";

  const randomNum = () => {
    const ran1 = Math.floor(Math.random() * 10);
    const ran2 = ran1+4;
    return [ran1,ran2];
  };
  console.log("random",randomNum(),"Number");
const MainProducts = () => {
  const location = useLocation();
  const { data = [], isLoading } = useProduct();
  const [showedProducts, setShowedProducts] = useState(8);
  const [isChecked, setIsChecked] = useState<Record<CategoryKey, boolean>>({
    clothes: false,
    electronics: false,
    shoes: false,
    furniture: false,
    miscellaneous: false,
    beauty: false,
    fragrances: false,
    groceries: false,
  });
  const filteredProducts: Product[] = data.filter((e: Product) => {
    const category = e.category as CategoryKey;
    return isChecked[category] === true;
  });
  console.log("whole Data from products page", data, "---------------");
  console.log("filtered products", filteredProducts, "---------------");

  //   return data
  //     .filter((e: product) => {
  //       const category = e.category.name as CategoryKey;
  //       return isChecked[category] === true;
  //     })
  //     .map((e) => <ProductCard data={e} location={window.location.pathname} />);
  // };
  const handleChange = (id: string | null, e: boolean) => {
    switch (id) {
      case "ccb":
        setIsChecked((previous) => ({ ...previous, clothes: e }));
        break;
      case "ecb":
        setIsChecked((previous) => ({ ...previous, electronics: e }));
        break;
      case "scb":
        setIsChecked((previous) => ({ ...previous, shoes: e }));
        break;
      case "fcb":
        setIsChecked((previous) => ({ ...previous, furniture: e }));
        break;
      case "bcb":
        setIsChecked((previous) => ({ ...previous, beauty: e }));
        break;
      case "frcb":
        setIsChecked((previous) => ({ ...previous, fragrances: e }));
        break;
      case "gcb":
        setIsChecked((previous) => ({ ...previous, groceries: e }));
        break;
      case "mcb":
        setIsChecked((previous) => ({ ...previous, miscellaneous: e }));
        break;
      default:
        setIsChecked(() => ({
          clothes: true,
          electronics: true,
          shoes: true,
          furniture: true,
          miscellaneous: true,
          beauty: true,
          fragrances: true,
          groceries: true,
        }));
    }
    // if(id === "ccb"){
      // setIsChecked((previous) => ({
        //   ...previous,
        //   clothes: e.target.checked
        // }))
        // }
      };
      const noItems:boolean = isChecked.beauty || isChecked.clothes || isChecked.electronics || isChecked.fragrances || isChecked.furniture || isChecked.groceries || isChecked.miscellaneous || isChecked.shoes
      console.log(showedProducts);
      
      

  return (
    <section className="flex flex-col mt-10">
      <div className="flex">
        <motion.div layout className="min-w-[20%] bg-background border text-secondary h-screen rounded-2xl pl-4 pt-4 shadow-2xl">
          <h2 className="text-center mb-10">Filters</h2>
          <ul className="flex flex-col gap-10">
            <li>
              <label className="flex items-center gap-2">
                <input
                  checked={isChecked.clothes}
                  onChange={(e) =>
                    handleChange(e.target.getAttribute("id"), e.target.checked)
                  }
                  id="ccb"
                  className="peer sr-only"
                  type="checkbox"
                />
                <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
                Clothes
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  checked={isChecked.electronics}
                  onChange={(e) =>
                    handleChange(e.target.getAttribute("id"), e.target.checked)
                  }
                  id="ecb"
                  className="peer sr-only"
                  type="checkbox"
                />
                <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
                Electronics
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  checked={isChecked.shoes}
                  onChange={(e) =>
                    handleChange(e.target.getAttribute("id"), e.target.checked)
                  }
                  id="scb"
                  className="peer sr-only"
                  type="checkbox"
                />
                <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
                Shoes
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  checked={isChecked.furniture}
                  onChange={(e) =>
                    handleChange(e.target.getAttribute("id"), e.target.checked)
                  }
                  id="fcb"
                  className="peer sr-only"
                  type="checkbox"
                />
                <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
                Furniture
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  checked={isChecked.beauty}
                  onChange={(e) =>
                    handleChange(e.target.getAttribute("id"), e.target.checked)
                  }
                  id="bcb"
                  className="peer sr-only"
                  type="checkbox"
                />
                <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
                Beauty
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  checked={isChecked.fragrances}
                  onChange={(e) =>
                    handleChange(e.target.getAttribute("id"), e.target.checked)
                  }
                  id="frcb"
                  className="peer sr-only"
                  type="checkbox"
                />
                <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
                Fragrances
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  checked={isChecked.groceries}
                  onChange={(e) =>
                    handleChange(e.target.getAttribute("id"), e.target.checked)
                  }
                  id="gcb"
                  className="peer sr-only"
                  type="checkbox"
                />
                <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
                Groceries
              </label>
            </li>
            <li>
              <label className="flex items-center gap-2">
                <input
                  checked={isChecked.miscellaneous}
                  onChange={(e) =>
                    handleChange(e.target.getAttribute("id"), e.target.checked)
                  }
                  id="mcb"
                  className="peer sr-only"
                  type="checkbox"
                />
                <span className="checkbox-box w-3.25 h-3.25 border-[1.5px] border-subColor flex items-center justify-center transition peer-checked:bg-primary peer-checked:border-subColor peer-checked:shadow-[inset_0_0_0_1.5px_white]"></span>
                Miscellaneous
              </label>
            </li>
          </ul>
        </motion.div>
        <div className="flex flex-col items-center gap-20 h-[120vh] overflow-y-scroll py-10 px-4 border-b border-b-subColor mx-6 rounded-2xl ">
          <div className="flex-3 grid grid-cols-4 px-10 gap-y-6 gap-x-4 rounded-2xl mt-4 relative">
            {isLoading ? (
              <h1>Loading...</h1> // change it to spinner
            ) : ( filteredProducts.length > 0 ? (
              filteredProducts.map((e: Product) => (
                <ProductCard key={e.id} location={location.pathname} data={e} />
              )).slice(0,showedProducts)) : (noItems  ?(<NoProducts />):(data.map((e: Product) => (
                <ProductCard key={e.id} location={location.pathname} data={e} />
              )).slice(0,showedProducts)))
            )}
          </div>
            <button onClick={() => setShowedProducts((prev) => prev+8)} className={ (filteredProducts.length > 0
          ? filteredProducts.length
          : data.length) < 8
        ||
        showedProducts >=
          (filteredProducts.length > 0
            ? filteredProducts.length
            : data.length)?"hidden":"btn btn-primary w-[20%]"}>Load More</button>
        </div>
      </div>
      <div className="mt-6">
        <h1>Recommended Products</h1>
        <div className="flex h-50 gap-6 justify-center mt-10">
          {data.slice(6,10).map((e:Product)=>(
            <NavLink className="" to="/SingleProduct"><ProductCard key={e.id} location={location.pathname+"Recommended"} data={e} /></NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainProducts;

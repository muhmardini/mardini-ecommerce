import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBagShopping, faBolt, faClock, faEllipsis, faHatCowboy, faHeadphones, faShirt, faShoePrints, faCouch, faBook } from "@fortawesome/free-solid-svg-icons";
type first = {
    iconName: IconProp,
    title: string
};
export const categories:first[] = [
    {     
        iconName: faBagShopping,
        title: "Bags"
    },
    {
        iconName: faBolt,
        title: "Chargers & Cables"
    },
    {     iconName: faHeadphones  ,
        title: "Headphones"
    },
    {     iconName: faShirt,
        title: "Clothes"
    },
    {
        iconName: faClock,
        title: "Watches"
    },
    // {
    //     iconName: "/images/Smart-Watches-Category.png",
    //     imageALT: "Smart Watches category",
    //     title: "Smart Watches"
    // },
    {
        iconName: faHatCowboy,
        title: "Accessories"
    },
    {
        iconName: faShoePrints,
        title: "Shoes"
    },
    {
        iconName: faBook,
        title: "Books"
    },
    {
        iconName: faCouch,
        title: "Furniture"
    },
    // {
    //     iconName: faFutbol,
    //     title: "Foot Ball"
    // },
    // {
    //     iconName: faPizzaSlice,
    //     title: "Food"
    // },  
    {
        iconName: faEllipsis,
        title: "Others"
    },
    
]
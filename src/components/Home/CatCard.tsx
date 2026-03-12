import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "motion/react";

type iconCard = {
        iconName: IconProp,
        catText: string
};
const item = {
    hidden: {opacity: 0, y: 30},
    show: {opacity: 1, y: 0}
}
export const CatCard = ({iconName,catText}:iconCard) => {
    return(
        <motion.div variants={item}  whileHover={{scale: 1.1}} transition={{type: "spring",duration: 2, stiffness: 200, damping: 15}} className="rounded-full md:size-50 size-35 justify-center items-center flex-col flex hover:shadow-cyan-900 hover:shadow-2xl group transition-shadow cursor-pointer">
            <FontAwesomeIcon icon={iconName} className="text-secondary md:text-5xl text-4xl group-hover:text-primary transition-all" />
            <h3 className="pt-4 md:text-md text-sm text-secondary group-hover:text-primary transition-all">{catText}</h3>
        </motion.div>
    )
}


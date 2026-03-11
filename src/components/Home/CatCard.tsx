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
        <motion.div variants={item}  whileHover={{scale: 1.1}} transition={{type: "spring",duration: 2, stiffness: 200, damping: 15}} className="rounded-full w-50 h-50 justify-center items-center flex-col flex hover:shadow-cyan-900 hover:shadow-2xl group transition-shadow cursor-pointer">
            <FontAwesomeIcon icon={iconName} className="text-secondary text-5xl group-hover:text-primary transition-all" />
            <h3 className="pt-4 text-secondary group-hover:text-primary transition-all">{catText}</h3>
        </motion.div>
    )
}


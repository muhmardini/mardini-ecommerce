import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type iconCard = {
        iconName: IconProp,
        catText: string
};

export const CatCard = ({iconName,catText}:iconCard) => {
    return(
        <div className="rounded-full w-50 h-50 justify-center items-center flex-col flex hover:shadow-cyan-900 hover:shadow-2xl group transition-shadow cursor-pointer">
            <FontAwesomeIcon icon={iconName} className="text-secondary text-5xl group-hover:text-primary transition-all" />
            <h3 className="pt-4 text-secondary group-hover:text-primary transition-all">{catText}</h3>
        </div>
    )
}


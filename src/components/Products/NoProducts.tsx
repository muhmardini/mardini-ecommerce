import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NoProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center self-center justify-self-center col-start-2 col-end-4">
        <h1 className="text-red-500 mb-4">Sorry There is No Products Yet</h1>
        <FontAwesomeIcon icon={faXmark} className="text-4xl text-red-500" />
    </div>
  )
}

export default NoProducts
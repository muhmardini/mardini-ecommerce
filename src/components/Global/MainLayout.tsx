import { Outlet } from "react-router-dom"
import Footer from "../../Sections/Global/Footer"

const MainLayout = () => {
  return (
    <>
        <Outlet/>
        <Footer />
    </>
  )
}

export default MainLayout
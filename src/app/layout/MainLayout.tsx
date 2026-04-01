import { Outlet } from "react-router-dom"
import Footer from "../../shared/components/Footer"

const MainLayout = () => {
  return (
    <>
        <Outlet/>
        <Footer />
    </>
  )
}

export default MainLayout
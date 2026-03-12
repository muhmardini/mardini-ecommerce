import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FooterInfo from "../../components/Global/FooterInfo"
import {Link} from 'react-router-dom'
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import {useFormik} from 'formik'
import {addEmail} from '../../constant/emails'

const footerInfo:string[] = [
    "A modern e-commerce platform built to demonstrate real-world online shopping experiences, secure payments, and user-friendly design.",
    "Policies shown are examples and do not represent a real business.",
    "Payment methods and security badges are displayed for UI demonstration only.",
    "Shipping information displayed is for demonstration only and does not represent real services.",
    "Subscribe to see how newsletter UI and validation work in a real e-commerce environment.No emails are stored or processed."
]
const Footer = () => {
  const formik = useFormik({
    initialValues: {
      email: "Example@email.com",
      message: "Hello I'm Ben , I want to ask you about making my own products and added to your E-commerce , waiting for your response."
    },
    onSubmit: values => {
      addEmail({email:values.email,message:values.message})
    }
  })
  return (
    <footer className="bg-black w-full py-10 px-6 md:px-12 space-y-8">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center gap-4 md:gap-10 md:hidden">
            <img
            className="md:size-16 size-12"
            src="/icons/mardini-logo.svg"
            alt="mardini logo"
            />
            <h1 className="text-background text-3xl md:text-4xl">Mardini</h1>
          </div>
        <div className="hidden md:block">
          <div className="flex items-center gap-4 md:gap-10">
            <img
            className="md:size-16 size-12"
            src="/icons/mardini-logo.svg"
            alt="mardini logo"
            />
            <h1 className="text-background text-3xl md:text-4xl">Mardini</h1>
          </div>
          <div className="hidden md:flex md:w-full lg:w-[520px] flex-col gap-5 mt-3">
            {footerInfo.map((e, index) => (
              <FooterInfo key={index} info={e}/>
            ))}
          </div>
        </div>
        <div className=" hidden md:block w-[0.5px] ml-12 bg-background self-center"></div>
        <div className="flex flex-col ml-10 mt-10 gap-10">
          <nav>
            <ul className="flex flex-col gap-6">
              <li><Link to="/" className="text-subColor hover:text-primary text-2xl">Home</Link></li>
              <li><Link to="/products" className="text-subColor hover:text-primary text-2xl">Products</Link></li>
              <li><Link to="/cart" className="text-subColor hover:text-primary text-2xl">Cart</Link></li>
              <li><Link to="/about" className="text-subColor hover:text-primary text-2xl">About</Link></li>
              <li><Link to="/contact-us" className="text-subColor hover:text-primary text-2xl">Contact Us</Link></li>
              <li><Link to="/favorite" className="text-subColor hover:text-primary text-2xl">Favorite</Link></li>
            </ul>
          </nav>
          <div>
            <ul className="flex gap-4">
              <li><Link to="www.facebook.com"><FontAwesomeIcon className="text-subColor hover:text-primary text-3xl" icon={faFacebook}/></Link></li>
              <li><Link to="www.instagram.com"><FontAwesomeIcon className="text-subColor hover:text-primary text-3xl" icon={faInstagram} /></Link></li>
              <li><Link to="www.instagram.com"><FontAwesomeIcon className="text-subColor hover:text-primary text-3xl" icon={faTiktok} /></Link></li>
              <li><Link to="www.instagram.com"><FontAwesomeIcon className="text-subColor hover:text-primary text-3xl" icon={faWhatsapp} /></Link></li>
            </ul>
          </div>
        </div>
        <div className="w-full hidden md:block">
          <form className="flex flex-col items-center w-full" onSubmit={formik.handleSubmit}>
            <h1 className="text-subColor text-center">Reach Out To Us</h1>
            <div className="field flex flex-col mt-6">
              <label htmlFor="footer-email" className="text-subColor">Your Email</label>
              <input
              className="border border-subColor rounded-2xl w-full md:w-[420px] bg-basic text-subColor h-10 mt-2 pl-4"
              id="footer-email"
              type="email"
              name="footer-email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
              <div className="error"></div>
              {formik.errors.email && formik.touched.email && formik.errors.email}
            </div>
            <div className="field flex flex-col mt-6">
              <label htmlFor="footer-message" className="text-subColor">Your Message</label>
              <textarea
              className="border border-subColor rounded-2xl w-full md:w-[420px] bg-basic text-subColor h-36 mt-2 pl-5 pt-3 resize-none"
              id="footer-message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
              <div className="error">
              {formik.errors.message && formik.touched.message && formik.errors.message}
              </div>
            </div>
            <button className="btn bg-basic border border-subColor text-subColor mt-10 hover:text-basic hover:bg-subColor " type="submit">Submit</button>
          </form>
        </div>
      </div>
          <h3 className="text-subColor text-center mt-5"><FontAwesomeIcon className="mr-3" icon={faCopyright}/> 2026 80Z Mardini All Rights reserved. This website is a portfolio project and does not process real transactions</h3> 
    </footer>
  )
}

export default Footer
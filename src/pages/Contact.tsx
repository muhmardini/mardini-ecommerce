import { useContactForm } from "@/features/contact/hooks/useContactForm";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faEnvelope,
  faMessage,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";




export const Contact = () => {
  const contact = useContactForm();

  return (
    <>
      <main className="py-24">
        <motion.h1 initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration: 1, ease: "easeInOut"}} className="text-center">Contact Us</motion.h1>
        <div className="flex md:flex-row flex-col justify-between px-6 w-full pt-8 gap-y-8">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration: 1, ease: "easeInOut"}} className="flex-1 flex flex-col items-center gap-8 border md:border-0 shadow-2xl rounded-2xl py-4">
            <h2 className="text-secondary">Get In Touch</h2>
            <p className="text-center w-1/2">
              We’re always happy to hear from you! Whether you have a question
              about your order, a product, or just want to share feedback the
              Mardini team is here to help.
            </p>
            <h2 className="text-secondary">Direct Contact & Social Media</h2>
            <div className="md:flex md:flex-wrap grid grid-cols-4 gap-x-6 gap-y-4 md:w-1/3">
              <a
                href="mailto:mardinimuh@gmail.com"
                className="size-10 bg-secondary rounded-full flex justify-center items-center group hover:bg-primary transition duration-300"
                type=""
                title="social-media-email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-primary text-xl group-hover:text-secondary transition duration-300"
                  icon={faEnvelope}
                />
              </a>
              <a
                href="tel:+963937906697"
                className="size-10 bg-secondary rounded-full flex justify-center items-center group  hover:bg-primary transition duration-300"
                title="social-media-phone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-primary text-xl group-hover:text-secondary transition duration-300"
                  icon={faPhone}
                />
              </a>
              <a
                href="https://www.instagram.com/mar_dini.me/"
                className="size-10 bg-secondary rounded-full flex justify-center items-center hover:bg-primary transition duration-300 group"
                title="social-media-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-primary text-xl group-hover:text-secondary transition duration-300"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://www.facebook.com/mar.dini.727554"
                className="size-10 bg-secondary rounded-full flex justify-center items-center hover:bg-primary transition duration-300 group"
                title="social-media-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-primary text-xl group-hover:text-secondary transition duration-300"
                  icon={faFacebook}
                />
              </a>
              <a
                href=""
                title="social-media-tiktok"
                className="size-10 bg-secondary rounded-full flex justify-center items-center hover:bg-primary transition duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-primary text-xl group-hover:text-secondary transition duration-300"
                  icon={faTiktok}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCNYDcKrn_KKZ7w3vUMApA3w"
                title="social-media-youtube"
                className="size-10 bg-secondary rounded-full flex justify-center items-center hover:bg-primary transition duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-primary text-xl group-hover:text-secondary transition duration-300"
                  icon={faYoutube}
                />
              </a>
              <a
                href="https://wa.me/<phone>?text=Hello,%20I%20have%20a%20problem%20with20%my20%order"
                className="size-10 bg-secondary rounded-full flex justify-center items-center hover:bg-primary transition duration-300 group"
                title="social-media-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-primary text-xl group-hover:text-secondary transition duration-300"
                  icon={faWhatsapp}
                />
              </a>
              <a
                href="www.linkedin.com/in/muhammed-khier-mardini-832b12320"
                className="size-10 bg-secondary rounded-full flex justify-center items-center hover:bg-primary transition duration-300 group"
                title="social-media-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="text-primary text-xl group-hover:text-secondary transition duration-300"
                  icon={faLinkedin}
                />
              </a>
            </div>
            <p className="text-center w-1/2">
              Our team responds to all messages within 24 hours. We appreciate
              your time and look forward to assisting you!
            </p>
          </motion.div>
          <div className="md:w-px h-px bg-basic text-center"></div>
          <div className="flex-1 flex justify-center">
            <motion.form
              initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration: 1, ease: "easeInOut"}}
              onSubmit={contact.handleSubmit}
              className="bg-secondary px-8 py-8 md:w-10/12 w-full flex flex-col items-center gap-6 rounded-3xl shadow-2xl"
            >
              <h1 className="text-center text-primary">Reaching out To us</h1>
              <div className="flex flex-col gap-6 w-full">
                <label
                  className="text-background flex flex-col relative gap-y-3"
                  htmlFor="contact-name"
                >
                  Full Name
                  <FontAwesomeIcon
                    className="absolute text-subColor top-11.5 left-4"
                    icon={faUser}
                  />
                  <input
                    {...contact.register("name")}
                    className="w-10/12 h-9 ml-2 rounded-full border px-8 border-background bg-subBackground"
                    id="contact-name"
                    type="text"
                    placeholder="Your full name"
                  />
                  {contact.errors.name && (
                    <p className="text-red-500">{contact.errors.name.message}</p>
                  )}
                </label>
                <label
                  className="text-background flex flex-col relative gap-y-3"
                  htmlFor="contact-email"
                >
                  Email Address
                  <FontAwesomeIcon
                    className="absolute text-subColor top-11.5 left-4"
                    icon={faEnvelope}
                  />
                  <input
                    {...contact.register("email")}
                    className="w-10/12 h-9 ml-2 rounded-full border px-8 border-background bg-subBackground"
                    id="contact-email"
                    type="text"
                    placeholder="Your email address"
                  />
                  {contact.errors.email && (
                    <p className="text-red-500">{contact.errors.email.message}</p>
                  )}
                </label>
                <label
                  className="text-background flex flex-col relative gap-y-3"
                  htmlFor="phone"
                >
                  Phone Number
                  <FontAwesomeIcon
                    className="absolute text-subColor top-11.5 left-4"
                    icon={faPhone}
                  />
                  <input
                    {...contact.register("phone")}
                    className="w-10/12 h-9 ml-2 rounded-full border px-8 border-background bg-subBackground"
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                  />
                  {contact.errors.phone && (
                    <p className="text-red-500">{contact.errors.phone?.message}9</p>
                  )}
                </label>
                <label
                  className="text-background flex flex-col relative gap-y-3"
                  htmlFor="subject"
                >
                  Subject
                  <FontAwesomeIcon
                    className="absolute text-subColor top-11.5 left-4"
                    icon={faMessage}
                  />
                  <input
                    {...contact.register("subject")}
                    className="w-10/12 h-9 ml-2 rounded-full border px-8 border-background bg-subBackground"
                    id="subject"
                    type="text"
                    placeholder="What is your Message about"
                  />
                  {contact.errors.subject && (
                    <p className="text-red-500">{contact.errors.subject?.message}</p>
                  )}
                </label>
                <label
                  className="text-background flex flex-col relative gap-y-3"
                  htmlFor="message"
                >
                  Message
                  <textarea
                    {...contact.register("message")}
                    id="message"
                    className="resize-none bg-subBackground border border-background p-2 w-10/12 h-40 rounded-2xl ml-2"
                    placeholder="Your Message"
                  ></textarea>
                  {contact.errors.message && (
                    <p className="text-red">{contact.errors.message.message}</p>
                  )}
                </label>
                {contact.errors.root && (
                  <p className="text-red-500">{contact.errors.root.message}</p>
                )}
                <button
                  disabled={contact.isSubmitting}
                  className="btn btn-background"
                  type="submit"
                >
                  {contact.isSubmitting ? "Processing..." : "Send"}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </main>
      <h3 className="text-center text-subColor">
        <FontAwesomeIcon icon={faCopyright} />
        2026 80Z Mardini All Rights reserved. This website is a portfolio
        project and does not process real transactions
      </h3>
    </>
  );
};

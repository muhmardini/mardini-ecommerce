import ChooseUs from "../components/About/ChooseUs";
import Commitment from "../components/About/Commitment";
import OurPromises from "../components/About/OurPromises";
import Testimonials from "../components/About/Testimonials";

export const About = () => {
  return (
    <main className="py-24 items-center gap-8 px-6 flex flex-col">
      <h1 className="text-secondary">About us</h1>
      <div className="flex justify-around gap-14">
        <div className="border rounded-2xl shadow-2xl flex flex-col items-center py-8 px-6 gap-4 flex-1">
          <h2 className="text-secondary">Who are we?</h2>
          <div>
            <p className="text-center">
              Welcome to our store, a place built with passion, creativity, and a
              commitment to offering products that make every day life better.
            </p>
            <p className="text-center">
              We believe shopping should be simple, enjoyable, and safe , that
              every customer deserves high-quality products they can truly rely
              on.
            </p>
          </div>
        </div>
        <div className="border rounded-2xl shadow-2xl flex flex-col items-center py-8 px-6 gap-4 flex-1 ">
          <h2 className="text-secondary">Our Mission</h2>
          <div>
            <p className="text-center">
              Our mission is to deliver products that combine quality, design, and
              practicality.
            </p>
            <p className="text-center">
              We focus on items that add comfort, style, and value to your lifestyle
              — whether at home, at work, or on the go.
            </p>
          </div>
        </div>
      </div>
      <div className="border rounded-2xl shadow-2xl w-4/5 flex flex-col items-center py-8 px-6 gap-4">
        <h2 className="text-secondary">Our Promises</h2>
        <p className="text-center">We provide a carefully curated selection of products chosen for</p>
        <OurPromises />
      </div>
      <div className="border rounded-2xl shadow-2xl w-4/5 flex flex-col items-center py-8 px-6 gap-4">
        <h2>Why Customers Choose Us</h2>
        <ChooseUs />
      </div>
      <div className="border rounded-2xl shadow-2xl w-4/5 flex flex-col items-center py-8 px-6 gap-8">
        <h2>What Our Customers Say?</h2>
        <Testimonials />
      </div>
      <div className="border rounded-2xl shadow-2xl w-4/5 flex flex-col items-center py-8 px-6 gap-4">
        <h2>Our Commitment To You</h2>
        <h3>
          Your trust means everything to us. That's why we stand behind every
          product we offer with
        </h3>
        <Commitment />
      </div>
    </main>
  );
};

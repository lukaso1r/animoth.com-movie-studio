import React from "react";
import { Link } from "react-router-dom";

const Offer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold mb-4">ANIMOTH Offer</h1>
      <p className="text-lg mb-6">
        Here you will find all the information about our services and offers. 
        We specialize in creating high-quality animations tailored to your needs.
        Stay tuned for more details!
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default Offer;

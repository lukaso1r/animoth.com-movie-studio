import React from "react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <h1 className="text-4xl font-bold mb-4">Contact ANIMOTH</h1>
            <p className="text-lg mb-6">
                For inquiries, please reach out to us at{" "}
                <a href="mailto:studioanimoth@gmail.com" className="text-blue-500 hover:underline">studioanimoth@gmail.com</a>
            </p>
            <Link to="/" className="text-blue-500 hover:underline">
                Go back to Home
            </Link>
        </div>
    );
}

export default Contact;
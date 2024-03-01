import { Link } from "react-router-dom";

const ThankYou = () => {
    return (
        <div className="bg-slate-800 h-screen grid place-content-center">
            <h2 className="text-gray-200 text-3xl mb-16">
                Thank you for your registration!
            </h2>
            <Link
                className="text-gray-300 hover:text-blue-400 text-center"
                to="/"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default ThankYou;

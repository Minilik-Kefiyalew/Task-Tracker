import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-lg z-50"
      style={{
        background: "linear-gradient(135deg, rgba(14, 165, 233, 0.9) 0%, rgba(56, 182, 255, 0.9) 50%, rgba(125, 211, 252, 0.9) 100%)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        textAlign : "left"
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 py-4 flex justify-end items-center">
        <ul className="flex space-x-6 text-white text-lg font-semibold">
          <li>
            <Link 
              to="/" 
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className="hover:text-gray-200 transition-colors duration-200"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
    setEmail("");
    setPassword("");
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen py-12 px-4"
      style={{
        background: "linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(56, 182, 255, 0.1) 50%, rgba(125, 211, 252, 0.1) 100%)"
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Welcome Back</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 shadow-sm"
        >
          Log In
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden flex">
        {/* Left Section */}
        <div className="w-1/2 bg-teal-500 text-white flex flex-col items-center justify-center p-12">
          <h1 className="text-4xl font-bold mb-2">MarketPlace</h1>
          <p className="text-2xl font-semibold">Sign Up</p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-12">
          {/* First Name */}
          <label className="text-gray-700 font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="mt-1 mb-4 w-full px-4 py-2 border rounded-xl focus:outline-teal-500"
          />

          {/* Mobile Number */}
          <label className="text-gray-700 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            className="mt-1 mb-4 w-full px-4 py-2 border rounded-xl focus:outline-teal-500"
          />

          {/* Password */}
          <label className="text-gray-700 font-medium">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="mt-1 mb-4 w-full px-4 py-2 border rounded-xl focus:outline-teal-500"
          />

          {/* Terms */}
          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm text-gray-700">
              accept all terms and conditions{" "}
              <span className="text-red-500">*</span>
            </span>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-teal-500 text-white py-3 rounded-2xl font-semibold text-lg shadow-md hover:bg-teal-600 transition">
            Sign in
          </button>

          {/* Social Login */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="flex items-center gap-2 border px-4 py-2 rounded-2xl shadow-sm hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="google"
                className="w-6"
              />
              Google
            </button>

            <button className="flex items-center gap-2 border px-4 py-2 rounded-2xl shadow-sm hover:bg-gray-100 transition">
              <img
                src="https://www.svgrepo.com/show/448224/facebook.svg"
                alt="facebook"
                className="w-6"
              />
              Facebook
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center mt-6 text-gray-700">
            Already have account?{" "}
            <span
              className="text-teal-600 font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

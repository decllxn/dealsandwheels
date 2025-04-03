import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { registerUser, loginUser } from "../../api"; // Assuming your API functions are in "../api"

const AuthModal = ({ showAuthModal, setShowAuthModal, isSignUp, setIsSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle authentication (Sign In / Sign Up)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        // Register user
        await registerUser(email, password, confirmPassword);
        alert("Account created successfully! You can now sign in.");
        setIsSignUp(false); // Switch to login mode
      } else {
        // Login user
        const data = await loginUser(email, password);
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        alert("Login successful!");
        setShowAuthModal(false);
      }
    } catch (err) {
      setError(err.detail || "An error occurred. Please try again.");
    }

    setLoading(false);
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      // Initiate Google OAuth flow on the backend
      const response = await fetch("/api/social/google/"); // Replace with your actual backend endpoint
      if (!response.ok) {
        throw new Error("Google login initiation failed.");
      }
      const data = await response.json();

      // Open a new window for the Google OAuth URL
      const googleAuthWindow = window.open(data.authorization_url, "_blank", "width=600,height=600");

      // Listen for messages from the Google OAuth window (poll for completion)
      const pollGoogleAuth = setInterval(async () => {
        try {
          if (googleAuthWindow.closed) {
            clearInterval(pollGoogleAuth);

            // Check if the user is now logged in
            const loginCheckResponse = await fetch("/api/social/google/login_check/"); // Replace with your login check endpoint
            if (loginCheckResponse.ok) {
              const loginData = await loginCheckResponse.json();
              localStorage.setItem("accessToken", loginData.access);
              localStorage.setItem("refreshToken", loginData.refresh);
              alert("Google login successful!");
              setShowAuthModal(false);
            } else {
                setError("Google login failed.");
            }

          }
        } catch (error) {
            setError("Google login failed.")
            clearInterval(pollGoogleAuth);
        }

      }, 500); // Poll every 500ms
    } catch (err) {
      setError(err.message || "Google login failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {showAuthModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#1F1F1F] text-white p-8 rounded-2xl shadow-2xl max-w-sm w-full relative backdrop-blur-lg bg-opacity-90 border border-gray-700"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ✖
            </button>

            {/* Title & Toggle */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-3">{isSignUp ? "Create an Account" : "Welcome Back!"}</h2>
              <p className="text-gray-400">{isSignUp ? "Join us and start bidding!" : "Sign in to continue."}</p>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            {/* Form */}
            <form className="flex flex-col space-y-4 mt-6" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none border border-gray-700 focus:border-[#4A90E2]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none border border-gray-700 focus:border-[#4A90E2]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Confirm Password (Only for Sign Up) */}
              {isSignUp && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none border border-gray-700 focus:border-[#4A90E2]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              )}

              <button
                type="submit"
                className="px-5 py-3 bg-[#4A90E2] hover:bg-[#357ABD] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                disabled={loading}
              >
                {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="px-3 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex flex-col space-y-3">
              <button
                className="flex items-center justify-center px-4 py-3 bg-white text-black rounded-lg font-medium transition-all duration-300 shadow-lg hover:bg-gray-200"
                onClick={handleGoogleLogin}
                disabled={loading}
              >
                <i className="ri-google-fill text-xl mr-2"></i> Continue with Google
              </button>
              {/* Other social buttons remain, but are not implemented yet */}
              <button
                className="flex items-center justify-center px-4 py-3 bg-[#1877F2] text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:bg-[#125BC9]"
                onClick={() => alert("Facebook login not implemented yet.")}
                disabled={loading}
              >
                <i className="ri-facebook-fill text-xl mr-2"></i> Continue with Facebook
              </button>
              <button
                className="flex items-center justify-center px-4 py-3 bg-black text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:bg-gray-900"
                onClick={() => alert("X login not implemented yet.")}
                disabled={loading}
              >
                <i className="ri-twitter-x-fill text-xl mr-2"></i> Continue with X
              </button>
            </div>

            {/* Toggle Between Sign In & Sign Up */}
            <div className="text-center mt-6 text-sm">
              {isSignUp ? (
                <p>
                  Already have an account?{" "}
                  <button onClick={() => setIsSignUp(false)} className="text-[#4A90e2] hover:underline">
                    Sign In
                  </button>
                  </p>
              ) : (
<p>
New here?{" "}
<button onClick={() => setIsSignUp(true)} className="text-[#4A90E2] hover:underline">
Create an Account
</button>
</p>
)}
</div>
</motion.div>
</motion.div>
)}
</AnimatePresence>
);
};


export default AuthModal;
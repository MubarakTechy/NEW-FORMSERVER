// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Eye, EyeOff } from "lucide-react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import max from "@/images/snap.png"; // adjust path if needed

// export default function SignupPage() {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     purpose: "",
//     password: "",
//     confirmPassword: "",
//     news: false,
//   });

//   // UI states
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Handle input changes
//   const handleChange = () => {
//     const { name, value, type } = e.target;
//     const checked = (e.target as ).checked;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // Validation
//   const validateForm = () => {
//     if (!formData.first_name.trim()) return "First name is required";
//     if (!formData.last_name.trim()) return "Last name is required";
//     if (!formData.email.trim()) return "Email is required";
//     if (!/\S+@\S+\.\S+/.test(formData.email)) return "Email is invalid";
//     if (!formData.purpose) return "Please select a purpose";
//     if (!formData.password) return "Password is required";
//     if (formData.password.length < 6) return "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword) return "Passwords do not match";
//     return "";
//   };

//   // Submit handler
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     const validationError = validateForm();
//     if (validationError) {
//       setError(validationError);
//       return;
//     }

//     setLoading(true);

//     // Prepare payload – exclude confirmPassword and news
//     const payload = {
//       first_name: formData.first_name,
//       last_name: formData.last_name,
//       email: formData.email,
//       purpose: formData.purpose,
//       password: formData.password,
//     };

//     try {
//       const response = await fetch("https://formserver-srjh.onrender.com/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         // Handle server errors (e.g., email already exists)
//         throw new Error(data.message || "Registration failed");
//       }

//       setSuccess("Account created successfully! Redirecting...");
//       // Optionally redirect to login page after a short delay
//       setTimeout(() => {
//         window.location.href = "/login";
//       }, 2000);
//     } catch (err: ) {
//       setError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       className="min-h-screen flex flex-col items-center justify-start bg-[#FBFBFD] py-6 px-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Logo + Stepper (unchanged) */}
//       <motion.div
//         className="flex flex-col items-center mb-4"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <Image src={max} alt="FORM Server Logo" width={80} height={60} priority />
//         <h1 className="text-3xl font-semibold text-gray-800 font-serif text-center mt-2">
//           Create Account
//         </h1>

//         {/* Stepper */}
//         <div className="flex items-center justify-center gap-0 relative mt-1 scale-90">
//           {/* Step 1 */}
//           <div className="flex flex-col items-center z-10">
//             <p className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
//               1
//             </p>
//             <h2 className="mt-1 text-xs font-medium text-gray-700">Create Account</h2>
//           </div>

//           <div className="w-24 sm:w-32 md:w-52 h-[2px] bg-slate-200 -ml-[25px] -mr-[15px]" />

//           {/* Step 2 */}
//           <div className="flex flex-col items-center z-10">
//             <div className="bg-white mt-2 text-purple-600 border-purple-600 border-[2px] rounded-full text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
//               2
//             </div>
//             <h2 className="mt-1 text-xs font-medium text-gray-700">Purpose</h2>
//           </div>

//           <div className="w-24 sm:w-32 md:w-52 h-[2px] bg-slate-200 -ml-[25px] -mr-[10px]" />

//           {/* Step 3 */}
//           <div className="flex flex-col items-center z-10">
//             <div className="bg-white mt-2 text-purple-600 border-purple-600 border-[2px] rounded-full text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
//               3
//             </div>
//             <h2 className="mt-1 text-xs font-medium text-gray-700">Sign In</h2>
//           </div>
//         </div>
//       </motion.div>

//       {/* Form Section */}
//       <motion.form
//         onSubmit={handleSubmit}
//         className="w-[90vw] max-w-md bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-5"
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//       >
//         {/* First Name */}
//         <div>
//           <label className="text-base text-gray-800 font-medium">First Name</label>
//           <input
//             type="text"
//             name="first_name"
//             placeholder="John"
//             value={formData.first_name}
//             onChange={handleChange}
//             className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             required
//           />
//         </div>

//         {/* Last Name */}
//         <div>
//           <label className="text-base text-gray-800 font-medium">Last Name</label>
//           <input
//             type="text"
//             name="last_name"
//             placeholder="Doe"
//             value={formData.last_name}
//             onChange={handleChange}
//             className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             required
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label className="text-base text-gray-800 font-medium">Email Address</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="xyz@gmail.com"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             required
//           />
//         </div>

//         {/* Purpose */}
//         <div>
//           <label className="text-base text-gray-800 font-medium">Purpose of using FormServer</label>
//           <select
//             name="purpose"
//             value={formData.purpose}
//             onChange={handleChange}
//             className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none appearance-none bg-white"
//             required
//           >
//             <option value="">Select a purpose</option>
//             <option value="personal">Personal</option>
//             <option value="business">Business</option>
//             <option value="education">Education</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         {/* Password */}
//         <div className="relative">
//           <label className="text-base text-gray-800 font-medium">Password</label>
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 pr-10 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
//           >
//             {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//           </button>
//         </div>

//         {/* Confirm Password */}
//         <div className="relative">
//           <label className="text-base text-gray-800 font-medium">Confirm Password</label>
//           <input
//             type={showConfirm ? "text" : "password"}
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="mt-2 w-full rounded-full border border-gray-300 px-5 py-3 pr-10 text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirm(!showConfirm)}
//             className="absolute right-4 top-9 text-gray-400 hover:text-gray-600"
//           >
//             {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
//           </button>
//         </div>

//         {/* Checkbox */}
//         <div className="flex items-center space-x-3 pt-2">
//           <input
//             type="checkbox"
//             name="news"
//             checked={formData.news}
//             onChange={handleChange}
//             className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
//           />
//           <label className="text-sm text-gray-700">
//             Please send me occasional FormServer news updates
//           </label>
//         </div>

//         {/* Error / Success messages */}
//         {error && <p className="text-sm text-red-500 font-medium text-center">{error}</p>}
//         {success && <p className="text-sm text-green-600 font-medium text-center">{success}</p>}

//         {/* Create Account Button */}
//         <motion.button
//           type="submit"
//           disabled={loading}
//           whileTap={{ scale: 0.95 }}
//           whileHover={{ scale: 1.02 }}
//           className={`w-full bg-gradient-to-r from-purple-500 to-purple-800 text-white rounded-full py-3 text-base font-semibold hover:opacity-90 transition ${
//             loading ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//         >
//           {loading ? "Creating Account..." : "Create Account"}
//         </motion.button>

//         {/* Divider (social section removed) */}
//         <div className="flex items-center my-3">
//           <div className="flex-1 h-px bg-gray-200"></div>
//           <span className="px-3 text-sm text-gray-500">Or continue with</span>
//           <div className="flex-1 h-px bg-gray-200"></div>
//         </div>

//         {/* Social Buttons Removed */}
//         <p className="text-center text-sm text-gray-500">
//           We’ll never post without your permission.
//         </p>
//       </motion.form>

//       {/* Footer */}
//       <p className="text-center text-[15px] text-gray-600 mt-3">
//         Already have an account?{" "}
//         <Link href="/login" className="text-purple-600 font-medium hover:underline">
//           Sign in
//         </Link>
//       </p>
//     </motion.div>
//   );
// }






"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import StepIndicator from "@/components/StepIndicator";
import AuthCard from "@/components/AuthCard";

export default function CreateAccountPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.full_name || !form.email || !form.password || !form.confirm_password) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password !== form.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    const nameParts = form.full_name.trim().split(" ");
    const first_name = nameParts[0] || "";
    const last_name = nameParts.slice(1).join(" ") || " ";

    sessionStorage.setItem(
      "formserver_register",
      JSON.stringify({
        first_name,
        last_name,
        email: form.email,
        password: form.password,
      })
    );

    setLoading(false);
    router.push("/purpose");
  };

  const EyeIcon = ({ open }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {open ? (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </>
      ) : (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </>
      )}
    </svg>
  );

  return (
    <AuthCard>
      <div className="flex justify-center mb-4">
        <Logo />
      </div>

      <h1 className="text-xl font-bold text-center text-gray-800 mb-1">Create Account</h1>

      <StepIndicator currentStep={1} />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs text-gray-500 mb-1">Enter your full name</label>
          <input
            type="text"
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Enter your email address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition"
          />
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Account Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <EyeIcon open={showPassword} />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 mb-1">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirm_password"
              value={form.confirm_password}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <EyeIcon open={showConfirm} />
            </button>
          </div>
        </div>

        <p className="text-[11px] text-center text-gray-400">
          Please read the use{" "}
          <a href="#" className="text-[#7c3aed] underline">form server terms</a>{" "}
          before signing up.
        </p>

        {error && (
          <p className="text-xs text-red-500 text-center bg-red-50 border border-red-100 rounded px-3 py-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold py-2.5 rounded-md transition disabled:opacity-60"
        >
          {loading ? "Please wait..." : "Create Account"}
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-gray-400">or sign up with</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-md py-2 text-xs text-gray-600 hover:bg-gray-50 transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-md py-2 text-xs text-gray-600 hover:bg-gray-50 transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        <p className="text-xs text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-[#7c3aed] font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </form>

      <p className="text-[10px] text-center text-gray-300 mt-6">
        © 2025 FormServer Designed by Form Group Inc.
      </p>
    </AuthCard>
  );
}
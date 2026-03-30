// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Eye, EyeOff } from "lucide-react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";
// import max from "@/images/snap.png";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const [error, setError] = useState(""); // Removed error state
//   const router = useRouter();
//   const year = new Date().getFullYear();

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Validation and error setting removed
    
//     console.log("✅ Logged In (Simulated):", { email, password });
//     router.push("/dashboard"); // Navigate immediately
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="min-h-screen flex flex-col items-center justify-center bg-white font-sans p-4 overflow-hidden"
//     >
//       {/* ===== TOP SECTION ===== */}
//       <div className="flex flex-col items-center mb-6 mt-10">
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <Image
//             src={max}
//             alt="FORM Server Logo"
//             width={80}
//             height={60}
//             className="object-contain"
//             priority
//           />
//         </motion.div>

//         <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 font-serif text-center mt-2">
//           Welcome Back to Form Server
//         </h1>

//         {/* Stepper */}
//         <div className="flex items-center justify-center flex-wrap gap-0 relative mt-3 scale-90 sm:scale-100">
//           {/* Step 1 */}
//           <div className="flex flex-col items-center cursor-pointer z-10">
//             <p className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
//               1
//             </p>
//             <h2 className="mt-1 text-xs font-medium text-gray-700">Create Account</h2>
//           </div>

//           <div className="w-20 sm:w-32 md:w-44 h-[2px] bg-slate-200 mx-[-10px] z-0"></div>

//           {/* Step 2 */}
//           <div className="flex flex-col items-center cursor-pointer z-10">
//             <div className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
//               2
//             </div>
//             <h2 className="mt-1 text-xs font-medium text-gray-700">Purpose</h2>
//           </div>

//           <div className="w-20 sm:w-32 md:w-44 h-[2px] bg-slate-200 mx-[-10px] z-0"></div>

//           {/* Step 3 */}
//           <div className="flex flex-col items-center cursor-pointer z-10">
//             <div className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
//               3
//             </div>
//             <h2 className="mt-1 text-xs font-medium text-gray-700">Sign In</h2>
//           </div>
//         </div>
//       </div>

//       {/* ===== LOGIN FORM ===== */}
//       <motion.div
//         // Removed error shaking animation
//         animate={{ x: 0 }}
//         transition={{ duration: 0.3 }}
//         className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-8"
//       >
//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Enter your email address
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 // setError(""); // Error removal adjustment
//               }}
//               placeholder="xyz@gmail.com"
//               // Removed conditional error border class
//               className={`w-full px-5 py-3 rounded-full text-base border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none transition`}
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Account Password
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   // setError(""); // Error removal adjustment
//                 }}
//                 placeholder="Enter Password"
//                 // Removed conditional error border class
//                 className={`w-full px-5 py-3 rounded-full text-base border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none pr-10 transition`}
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//               </button>
//             </div>

//             <p className="text-right mt-2">
//               <a
//                 href="/forget"
//                 className="text-sm text-purple-600 hover:underline font-medium"
//               >
//                 Forgot Password? Get a new one
//               </a>
//             </p>
//           </div>

//           {/* Error Message removed */}

//           {/* Button - Updated to pure purple gradient */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="w-full py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full text-base font-semibold hover:opacity-90 transition"
//           >
//             Sign In
//           </motion.button>
//         </form>

//         {/* Signup */}
//         <p className="text-center text-sm text-gray-600 mt-5">
//           Don’t have an account yet?{" "}
//           <a href="/signup" className="text-purple-600 font-medium hover:underline">
//             Create one
//           </a>
//         </p>

//         {/* Footer */}
//         <footer className="text-xs text-gray-400 mt-12 text-center">
//           © {year} FormServer — Designed by Tosh Consult Inc.
//         </footer>
//       </motion.div>
//     </motion.div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import StepIndicator from "@/components/StepIndicator";
import AuthCard from "@/components/AuthCard";
import { signInUser } from "@/lib/api";

export default function SignInPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const savedEmail = sessionStorage.getItem("formserver_email");
    if (savedEmail) {
      setForm((prev) => ({ ...prev, email: savedEmail }));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    const result = await signInUser({
      email: form.email,
      password: form.password,
    });

    if (result.success) {
      if (result.data?.token) {
        sessionStorage.setItem("formserver_token", result.data.token);
      }
      sessionStorage.removeItem("formserver_email");
      router.push("/dashboard"); // change to your dashboard route
    } else {
      setError(result.message || "Sign in failed. Please try again.");
    }

    setLoading(false);
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

      <h1 className="text-xl font-bold text-center text-gray-800 mb-1">
        Sign in to Form server
      </h1>

      <StepIndicator currentStep={3} />

      <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="text-right mt-1">
            <a href="#" className="text-[10px] text-[#7c3aed] hover:underline">
              Forgot Password? Get on the account!
            </a>
          </div>
        </div>

        {error && (
          <p className="text-xs text-red-500 text-center bg-red-50 border border-red-100 rounded px-3 py-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold py-2.5 rounded-md transition disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-xs text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link href="/create-account" className="text-[#7c3aed] font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </form>

      <p className="text-[10px] text-center text-gray-300 mt-6">
        © 2025 FormServer Designed by Form Group Inc.
      </p>
    </AuthCard>
  );
}
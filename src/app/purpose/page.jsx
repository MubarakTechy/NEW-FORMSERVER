// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import max from "@/images/snap.png";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";

// const PurposePage = () => {
//   const [selected, setSelected] = useState("");
//   // const [error, setError] = useState(""); // Error state removed
//   const router = useRouter();
//   const year = new Date().getFullYear();

//   const handleProceed = () => {
//     // Validation check removed
//     router.push("/login");
//   };

//   const handleSelect = (id) => {
//     setSelected(id);
//     // Error clearing removed
//   };

//   return (
//     <motion.div
//       className="min-h-screen flex flex-col items-center justify-center bg-[#FBFBFD] py-8 px-4 overflow-x-hidden"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Outer container - Error shake class removed */}
//       <motion.div
//         className={`bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-4xl p-6 sm:p-10 text-center overflow-hidden`}
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* ===== Logo & Header ===== */}
//         <motion.div
//           className="flex flex-col items-center mb-6"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Image
//             src={max}
//             alt="FORM Server Logo"
//             width={80}
//             height={60}
//             priority
//             className="drop-shadow-sm"
//           />
//           <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 font-serif text-center mt-2 px-2">
//             What do you plan on using Form Server For?
//           </h1>

//           {/* Stepper */}
//           <div className="flex items-center justify-center flex-wrap gap-0 relative mt-3 scale-90 sm:scale-100">
//             {/* Step 1 */}
//             <div className="flex flex-col items-center z-10 cursor-pointer">
//               <p className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
//                 1
//               </p>
//               <h2 className="mt-1 text-xs font-medium text-gray-700">
//                 Create Account
//               </h2>
//             </div>

//             <div className="w-20 sm:w-32 md:w-44 h-[2px] bg-slate-200 mx-[-10px] z-0"></div>

//             {/* Step 2 */}
//             <div className="flex flex-col items-center z-10 cursor-pointer">
//               <div className="bg-gradient-to-r mt-2 from-purple-600 to-purple-500 text-white rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
//                 2
//               </div>
//               <h2 className="mt-1 text-xs font-medium text-gray-700">Purpose</h2>
//             </div>

//             <div className="w-20 sm:w-32 md:w-44 h-[2px] bg-slate-200 mx-[-10px] z-0"></div>

//             {/* Step 3 */}
//             <div className="flex flex-col items-center z-10 cursor-pointer">
//               <div className="bg-white mt-2 text-purple-600 border-purple-600 border-[2px] rounded-full text-sm sm:text-base w-8 h-8 flex items-center justify-center font-semibold shadow-md">
//                 3
//               </div>
//               <h2 className="mt-1 text-xs font-medium text-gray-700">Sign In</h2>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===== Purpose Options ===== */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-8 mt-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.1, duration: 0.6 }}
//         >
//           {[
//             {
//               id: "forms",
//               title: "Forms",
//               desc: "I want to collect form submissions easily.",
//             },
//             {
//               id: "surveys",
//               title: "Surveys",
//               desc: "I want to create surveys and gather responses.",
//             },
//             {
//               id: "both",
//               title: "Both",
//               desc: "I want to use FormServer for both forms and surveys.",
//             },
//           ].map((opt) => (
//             <motion.div
//               key={opt.id}
//               onClick={() => handleSelect(opt.id)}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               className={`relative border rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-200 flex flex-col justify-center items-center text-center ${
//                 selected === opt.id
//                   ? "border-purple-500 bg-purple-50 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
//                   : "border-gray-200 bg-white hover:border-purple-300"
//               }`}
//             >
//               {/* Selection Circle */}
//               <div
//                 className={`absolute top-4 right-4 w-6 h-6 rounded-full border-[2.5px] transition-all duration-200 flex items-center justify-center ${
//                   selected === opt.id
//                     ? "border-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.4)]"
//                     : "border-gray-300"
//                 }`}
//               >
//                 <div
//                   // Retaining original pink gradient for the selection dot
//                   className={`w-3.5 h-3.5 rounded-full transition-all duration-200 ${
//                     selected === opt.id
//                       ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-100"
//                       : "bg-transparent scale-75"
//                   }`}
//                 ></div>
//               </div>

//               <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
//                 {opt.title}
//               </h2>
//               <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
//                 {opt.desc}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Error message animation removed */}

//         {/* ===== Proceed Button - Changed gradient to pure purple ===== */}
//         <motion.button
//           onClick={handleProceed}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full py-3 px-10 text-base sm:text-lg font-semibold hover:opacity-90 transition"
//         >
//           Proceed to Sign In
//         </motion.button>

//         <p className="text-xs sm:text-sm text-gray-500 mt-8">
//           © {year} FormServer — Designed by Tosh Consult Inc.
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default PurposePage;






// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import max from "@/images/snap.png";

// export default function PurposePage() {
//   const router = useRouter();
//   const [selected, setSelected] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleContinue = async () => {
//     setError("");

//     const storedData = JSON.parse(localStorage.getItem("registerData"));

//     if (!storedData) {
//       return router.push("/register");
//     }

//     if (!selected) {
//       return setError("Please select a purpose");
//     }

//     try {
//       setLoading(true);

//       const response = await fetch(
//         "https://formserver-srjh.onrender.com/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             first_name: storedData.first_name,
//             last_name: storedData.last_name,
//             email: storedData.email,
//             password: storedData.password,
//             purpose: "",
//           }),
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Registration failed");
//       }

//       localStorage.removeItem("registerData");

//       router.push("/login");

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-[#FBFBFD] py-10 px-4">
//       <Image src={max} alt="Logo" width={80} height={60} />
//       <h1 className="text-2xl font-semibold mt-4">
//         What do you plan on using Form Server For?
//       </h1>

//       <div className="grid grid-cols-3 gap-4 mt-10 max-w-xl w-full">
//         {["Forms", "Surveys", "Both"].map((item) => (
//           <div
//             key={item}
//             onClick={() => setSelected(item)}
//             className={`p-6 border rounded-xl text-center cursor-pointer
//             ${selected === item ? "border-purple-600 bg-purple-50" : "border-gray-200"}`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       <motion.button
//         whileTap={{ scale: 0.95 }}
//         onClick={handleContinue}
//         className="mt-8 bg-purple-600 text-white px-10 py-3 rounded-full"
//       >
//         {loading ? "Creating..." : "Proceed to Sign in"}
//       </motion.button>
//     </div>
//   );
// }






"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import StepIndicator from "@/components/StepIndicator";
import AuthCard from "@/components/AuthCard";
import { registerUser } from "@/lib/api";

const options = [
  {
    id: "forms",
    title: "Forms",
    description: "I want to collect form submissions easily.",
  },
  {
    id: "surveys",
    title: "Surveys",
    description: "I want to create surveys and gather responses.",
  },
  {
    id: "both",
    title: "Both",
    description: "I want to use FormServer for both forms and surveys.",
  },
];

export default function PurposePage() {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleProceed = async () => {
    if (!selected) {
      setError("Please select a purpose to continue.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const stored = sessionStorage.getItem("formserver_register");
      if (!stored) {
        router.push("/create-account");
        return;
      }

      const { first_name, last_name, email, password } = JSON.parse(stored);

      const result = await registerUser({
        first_name,
        last_name,
        email,
        purpose: selected,
        password,
      });

      if (result.success) {
        sessionStorage.setItem("formserver_email", email);
        sessionStorage.removeItem("formserver_register");
        router.push("/sign-in");
      } else {
        setError(result.message || "Registration failed. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <div className="flex justify-center mb-4">
        <Logo />
      </div>

      <h1 className="text-xl font-bold text-center text-gray-800 mb-1">
        What do you plan on using Form Server For?
      </h1>

      <StepIndicator currentStep={2} />

      <div className="grid grid-cols-3 gap-3 mb-6">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => {
              setSelected(option.id);
              setError("");
            }}
            className={`relative border rounded-lg p-4 text-left transition-all hover:border-[#7c3aed]
              ${selected === option.id
                ? "border-[#7c3aed] bg-[#f5f3ff]"
                : "border-gray-200 bg-white"
              }
            `}
          >
            {selected === option.id && (
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#7c3aed] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            <h3 className="font-semibold text-gray-800 text-sm mb-2">{option.title}</h3>
            <p className="text-xs text-gray-400 leading-snug">{option.description}</p>
          </button>
        ))}
      </div>

      {error && (
        <p className="text-xs text-red-500 text-center bg-red-50 border border-red-100 rounded px-3 py-2 mb-4">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleProceed}
        disabled={loading}
        className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-semibold py-2.5 rounded-md transition disabled:opacity-60"
      >
        {loading ? "Creating your account..." : "Proceed to Sign In"}
      </button>

      <p className="text-[10px] text-center text-gray-300 mt-6">
        © 2025 FormServer Designed by Form Group Inc.
      </p>
    </AuthCard>
  );
}
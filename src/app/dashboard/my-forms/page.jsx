"use client";

import {
  Search,
  ChevronDown,
  Bell,
  Plus,
  Filter,
  ArrowRight,
  ArrowLeft,
  FileText, // ✅ Added missing import
} from "lucide-react";

export default function ProjectsPage() {
  return (
    // Main Container - Dark background
    <div className="min-h-screen bg-[#0E1020] text-white">
      {/* Header / Navbar */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800 sticky top-0 bg-[#0E1020] z-10">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold">My Forms</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search here..."
              className="py-2 pl-10 pr-4 rounded-lg bg-[#181A2A] text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="h-6 w-6 text-white cursor-pointer" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border-2 border-[#0E1020]" />
          </div>

          <div className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-[#181A2A]">
            <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-semibold">
              A
            </div>
            <span className="text-sm">Ibrahim</span>
            <span className="text-xs text-gray-400">| Admin</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="p-6">
        {/* Page Title */}
        <h2 className="text-xl font-medium text-indigo-400 mb-4">Projects</h2>

        {/* Main Content Card */}
        <div className="bg-[#181A2A] rounded-xl shadow-2xl p-6 min-h-[70vh] flex flex-col justify-between">
          {/* Top Filter Bar */}
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-grow mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search here..."
                className="w-full py-3 pl-10 pr-4 rounded-lg bg-[#0E1020] text-sm text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="flex items-center space-x-2 p-3 bg-indigo-600/20 text-indigo-400 rounded-lg font-medium hover:bg-indigo-600/30 transition">
              <Filter className="h-5 w-5" />
              <span>Filter</span>
            </button>
          </div>

          {/* Empty State */}
          <div className="flex-grow flex flex-col items-center justify-center text-center py-20">
            <div className="mb-6 p-4 bg-[#252838] rounded-full border-4 border-[#3B3E5B]">
              <FileText className="h-10 w-10 text-gray-400" />
            </div>

            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              No project found
            </h3>
            <p className="text-gray-400 max-w-sm mb-6">
              Click “Create A New Project” to start building and organizing your forms.
            </p>

            <button className="flex items-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 transition duration-150">
              <Plus className="h-5 w-5 mr-2" />
              Create A New Project
            </button>
          </div>

          {/* Pagination Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-800">
            <span className="text-sm text-gray-400">Page 1 of 30</span>

            <div className="flex items-center space-x-2">
              <button
                className="flex items-center px-4 py-2 text-sm text-gray-400 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
                disabled
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-1">
                <PageNumber number="1" isActive={true} />
                <PageNumber number="2" />
                <PageNumber number="3" />
                <span className="px-2 py-1.5 text-gray-500">...</span>
                <PageNumber number="10" />
                <PageNumber number="11" />
                <PageNumber number="12" />
              </div>

              <button className="flex items-center px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pagination Button Component
const PageNumber = ({ number, isActive }) => (
  <button
    className={`px-3 py-1.5 text-sm rounded-lg font-medium transition duration-150 ${
      isActive
        ? "bg-indigo-600 text-white"
        : "text-gray-400 hover:bg-[#3B3E5B]/50"
    }`}
  >
    {number}
  </button>
);

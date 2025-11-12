"use client";
import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Bell,
  User,
  CreditCard,
  Shield,
  Eye,
  Camera,
  Plus,
  Crown,
  FileText,
  Check,
} from "lucide-react";
// import Image from "next/image";

// --- Main Component ---
export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-20">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              className="py-2 pl-10 pr-4 rounded-lg bg-gray-100 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 border border-gray-200"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="h-6 w-6 text-gray-700 cursor-pointer" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
          </div>
          <div className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100 border border-gray-200">
            <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-semibold text-white">
              A
            </div>
            <span className="text-sm">Ibrahim</span>
            <span className="text-xs text-gray-500">| Admin</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          <TabItem
            icon={<User />}
            label="Profile"
            isActive={activeTab === "Profile"}
            onClick={() => setActiveTab("Profile")}
          />
          <TabItem
            icon={<CreditCard />}
            label="Plan"
            isActive={activeTab === "Plan"}
            onClick={() => setActiveTab("Plan")}
          />
          <TabItem
            icon={<Shield />}
            label="Security"
            isActive={activeTab === "Security"}
            onClick={() => setActiveTab("Security")}
          />
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "Profile" && <ProfileSettings />}
        {activeTab === "Plan" && <PlanSettings />}
        {activeTab === "Security" && <SecuritySettings />}
      </div>
    </div>
  );
}

// --- Tab Item ---
const TabItem = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 py-4 px-1 transition-colors duration-150 ${
      isActive
        ? "border-b-2 border-indigo-600 text-indigo-600 font-semibold"
        : "text-gray-500 hover:text-gray-700"
    }`}
  >
    {React.cloneElement(icon, { className: "h-5 w-5" })}
    <span>{label}</span>
  </button>
);

// --- Profile Settings ---
const ProfileSettings = () => (
  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-4xl mx-auto">
    {/* Profile Photo */}
    <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
      <div className="relative">
        {/* <Image
          className="h-24 w-24 rounded-full object-cover"
          src="https://placehold.co/100x100/E8D5FF/6B21A8"
          alt="Profile"
          width={100}
          height={100}
        /> */}
        <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center border-2 border-white">
          <Check className="h-4 w-4 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900">Profile photo</h3>
        <p className="text-gray-500 mb-3">This image will be displayed on your profile</p>
        <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg border border-indigo-200 hover:bg-indigo-100">
          <Camera className="h-4 w-4" />
          <span>Change Photo</span>
        </button>
      </div>
    </div>

    {/* Personal Info */}
    <div className="pt-6">
      <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
      <p className="text-gray-500 mb-6">Update your personal details here.</p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <FormInput label="First name" defaultValue="Gabriella" />
        <FormInput label="Last name" defaultValue="McPherson" />
      </div>
      <FormInput
        label="Email address"
        defaultValue="thegabriellamcpherson@email.com"
        isDisabled
      />

      <div className="text-right mt-6">
        <button
          className="px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed"
          disabled
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

// --- Plan Settings ---
const PlanSettings = () => (
  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-6xl mx-auto">
    <div className="grid grid-cols-3 gap-12">
      {/* Usage */}
      <div className="col-span-2">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full">
              Current Plan
            </span>
            <div className="flex items-center space-x-2 mt-2">
              <Crown className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-bold">Silver Plan</h2>
              <span className="text-gray-500 text-lg">₦10,000 / Month</span>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4">Usage This Month</h3>
        <div className="space-y-4">
          <UsageItem label="Forms" value="24" max="100" />
          <UsageItem label="Team Members" value="2" max="3" />
          <UsageItem label="Uploads" value="30" max="70" />
          <UsageItem label="Projects" value="2" max="3" />
        </div>
      </div>

      {/* Upgrade Card */}
      <div className="col-span-1">
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-600">Next Billing Date</p>
          <p className="text-lg font-semibold">February 15, 2024</p>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 text-center text-white shadow-2xl">
          <div className="p-4 bg-white/20 rounded-lg inline-block mb-3">
            <FileText className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Form Server</h3>
          <p className="text-indigo-200 mb-6">Unlock all features</p>
          <button className="w-full py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  </div>
);

// --- Security Settings ---
const SecuritySettings = () => (
  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 max-w-lg mx-auto">
    <h2 className="text-2xl font-semibold text-center mb-6">Update Password</h2>
    <div className="space-y-6">
      <FormInput label="Old Password" type="password" />
      <FormInput label="New Password" type="password" hasEyeIcon />
      <FormInput label="Confirm New Password" type="password" hasEyeIcon />

      <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
        Update Password
      </button>
    </div>
  </div>
);

// --- Form Input ---
const FormInput = ({
  label,
  type = "text",
  defaultValue,
  isDisabled = false,
  hasEyeIcon = false,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <input
        type={type}
        defaultValue={defaultValue}
        disabled={isDisabled}
        className={`w-full px-4 py-3 rounded-lg border ${
          isDisabled
            ? "bg-gray-100 border-gray-200 text-gray-500"
            : "border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        }`}
      />
      {hasEyeIcon && (
        <Eye className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer" />
      )}
    </div>
  </div>
);

// --- Usage Item ---
const UsageItem = ({ label, value, max }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
    <p className="text-gray-600">{label}</p>
    <p className="font-medium">{value} out of {max}</p>
  </div>
);

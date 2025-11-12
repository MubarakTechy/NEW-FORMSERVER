"use client "
import { Search, ChevronDown, Bell, Plus, Users, UploadCloud, FileText, Clock, CheckCircle } from 'lucide-react';

// Tailwind requires the main component wrapper to handle the dark background
// and text color, as well as the overall spacing.

export default function DashboardPage() {
  return (
    // Main Container - Dark background for the whole page/app
    <div className="min-h-screen bg-[#0E1020] text-white"> 
      {/* Header / Navbar */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800 sticky top-0 bg-[#0E1020] z-10">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
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
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 border-2 border-[#0E1020]"></span>
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">Welcome back, Ibrahim 👋</h2>
          <p className="text-gray-400">
            Here’s what’s happening with your forms and surveys today.
          </p>
        </div>

        {/* --- Stats Cards --- */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* Card 1: Total Forms */}
          <StatCard title="Total Forms" value="24" icon={<FileText className="h-6 w-6 text-white" />} />
          
          {/* Card 2: Total Survey */}
          <StatCard title="Total Survey" value="8" icon={<FileText className="h-6 w-6 text-white" />} />
          
          {/* Card 3: Monthly Submission */}
          <StatCard 
            title="Monthly Submission" 
            value="10/20" 
            icon={<FileText className="h-6 w-6 text-white" />} 
            // The value has a different style (bold + different color on "20")
            // Re-creating the visual effect:
            customValue={
                <p className="text-3xl font-bold">
                    10/<span className="text-gray-400 font-normal">20</span>
                </p>
            }
          />

          {/* Card 4: Active Team Members */}
          <StatCard 
            title="Active Team Members" 
            value="2/3" 
            icon={<Users className="h-6 w-6 text-white" />} 
            customValue={
                <p className="text-3xl font-bold">
                    2/<span className="text-gray-400 font-normal">3</span>
                </p>
            }
          />

          {/* Card 5: Monthly File Upload */}
          <StatCard 
            title="Monthly File Upload" 
            value="24/70" 
            icon={<UploadCloud className="h-6 w-6 text-white" />} 
            customValue={
                <p className="text-3xl font-bold">
                    24/<span className="text-gray-400 font-normal">70</span>
                </p>
            }
          />
        </div>
        {/* --- End Stats Cards --- */}


        {/* --- Recent Activities & Quick Actions --- */}
        <div className="grid grid-cols-3 gap-6">
          {/* Recent Activities Panel (2/3 width) */}
          <div className="col-span-2 bg-[#181A2A] rounded-xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Recent Activities</h3>
              <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
                View all
              </button>
            </div>
            
            <div className="space-y-4">
              <ActivityItem 
                description="New submission on Contact Form" 
                time="2 minutes ago" 
                tag="New" 
                tagClass="bg-red-500/20 text-red-400" 
              />
              <ActivityItem 
                description="Newsletter Signup form updated" 
                time="2 minutes ago" 
                tag="Success" 
                tagClass="bg-green-500/20 text-green-400"
                icon={<CheckCircle className="h-4 w-4 text-green-400" />}
              />
              <ActivityItem 
                description="New submission on Product Inquiry" 
                time="2 minutes ago" 
                tag="Updated" 
                tagClass="bg-yellow-500/20 text-yellow-400" 
              />
              <ActivityItem 
                description="Sarah joined your team" 
                time="2 minutes ago" 
                tag="Team" 
                tagClass="bg-indigo-500/20 text-indigo-400" 
                icon={<Users className="h-4 w-4 text-indigo-400" />}
              />
              {/* Add a few more to fill the space visually */}
               <ActivityItem 
                description="Report generated for last month" 
                time="3 minutes ago" 
                tag="New" 
                tagClass="bg-red-500/20 text-red-400" 
                icon={<FileText className="h-4 w-4 text-red-400" />}
              />
            </div>
          </div>

          {/* Quick Actions Panel (1/3 width) */}
          <div className="col-span-1 relative">
            {/* The Quick Actions card has a prominent, layered background effect */}
            {/* Layer 1: Main card with rounded corners and shadow */}
            <div className="bg-[#181A2A] rounded-xl p-6 shadow-2xl relative z-10">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <QuickActionButton text="Create New Form" icon={<Plus className="h-5 w-5" />} primary={true} />
                <QuickActionButton text="Create New Surveys" icon={<Plus className="h-5 w-5" />} />
                <QuickActionButton text="Invite Teammate" icon={<Plus className="h-5 w-5" />} />
              </div>
            </div>
             {/* Layer 2: Visual background element for the layered shadow effect */}
            <div className="absolute inset-0 bg-[#3B3E5B]/50 rounded-xl transform translate-x-3 translate-y-3 -z-0"></div>
          </div>
        </div>
        {/* --- End Recent Activities & Quick Actions --- */}
        
        {/* --- Recent Forms and Surveys --- */}
        <div className="grid grid-cols-2 gap-6 mt-6">
            {/* Recent Forms */}
            <div className="bg-[#181A2A] rounded-xl p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Recent Forms</h3>
                    <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
                        View all forms
                    </button>
                </div>
                <div className="space-y-2">
                    {Array(4).fill(
                        <RecentEntry 
                            description="New submission on Contact Form" 
                            time="2 minutes ago" 
                        />
                    )}
                </div>
            </div>

            {/* Recent Surveys */}
            <div className="bg-[#181A2A] rounded-xl p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Recent Surveys</h3>
                    <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
                        View all Surveys
                    </button>
                </div>
                <div className="space-y-2">
                    {Array(4).fill(
                        <RecentEntry 
                            description="New submission on Contact Form" 
                            time="2 minutes ago" 
                        />
                    )}
                </div>
            </div>
        </div>
        {/* --- End Recent Forms and Surveys --- */}
      </div>
    </div>
  );
}

// --- Helper Components ---

// A helper component for the Dashboard Statistics Cards
const StatCard = ({ title, value, icon, customValue }) => (
    <div className="flex flex-col p-5 bg-[#181A2A] rounded-xl shadow-2xl hover:bg-[#1f2135] transition duration-200">
        <div className="flex justify-between items-start mb-4">
            <p className="text-base text-gray-400">{title}</p>
            {/* Simple purple circle background for the icon */}
            <div className="p-2 rounded-full bg-indigo-600/50"> 
                {icon}
            </div>
        </div>
        {/* Either use the custom value for the 10/20 style or the default bold value */}
        {customValue ? customValue : (
             <p className="text-3xl font-bold">{value}</p>
        )}
    </div>
);

// A helper component for the Recent Activities list items
const ActivityItem = ({ description, time, tag, tagClass, icon }) => (
    <div className="flex items-center justify-between py-2 border-b border-gray-800 last:border-b-0">
        <div className="flex items-center space-x-3">
            {/* The subtle icon on the left (if present) */}
            {icon && icon} 
            <p className="text-sm text-gray-200">{description}</p>
        </div>
        <div className="flex items-center space-x-3">
            <p className="text-xs text-gray-500 pr-4">{time}</p>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tagClass}`}>
                {tag}
            </span>
        </div>
    </div>
);

// A helper component for the Quick Actions buttons
const QuickActionButton = ({ text, icon, primary }) => (
    <button 
        className={`w-full flex items-center justify-start px-4 py-3 rounded-xl transition duration-150 ${
            primary 
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white' // Primary purple button
                : 'bg-transparent hover:bg-gray-800 text-gray-200 border border-gray-700' // Secondary/outline button
        }`}
    >
        {icon}
        <span className="ml-3 font-medium">{text}</span>
    </button>
);

// A helper component for the Recent Forms and Surveys list items
const RecentEntry = ({ description, time }) => (
    <div className="flex items-center justify-between py-2 border-b border-gray-800 last:border-b-0">
        <p className="text-sm text-gray-200">{description}</p>
        <div className="flex items-center space-x-2 text-gray-500">
            <Clock className="h-4 w-4" />
            <p className="text-xs">{time}</p>
        </div>
    </div>
);
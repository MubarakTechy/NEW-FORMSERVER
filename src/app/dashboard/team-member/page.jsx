import React from 'react';
import { Search, ChevronDown, Bell, Plus, Users } from 'lucide-react';

const TeamMembersPage = () => {
    // Base background is white (bg-white)
    // Text is dark (text-gray-900)

    return (
        <div className="min-h-screen bg-white text-gray-900">
            
            {/* --- Header / Navbar (Reusing the light mode style) --- */}
            <header className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-20">
                <div className="flex items-center space-x-6">
                    <h1 className="text-2xl font-bold text-gray-800">Team Members</h1> {/* Updated title */}
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

            {/* --- Main Content Area --- */}
            <div className="p-6">
                {/* Page Heading */}
                <div className="mb-6">
                    <h2 className="text-3xl font-semibold text-gray-900">Meet your Team Members</h2>
                    <p className="text-gray-500">
                        All your team members, right where you need them.
                    </p>
                </div>

                {/* --- Empty State Card --- */}
                <div className="bg-white rounded-xl shadow-lg p-6 min-h-[70vh] flex flex-col items-center justify-center border border-gray-200">
                    
                    {/* Illustration Icon */}
                    <div className="mb-6 p-6 bg-gray-100 rounded-full border-4 border-gray-200">
                        {/* Simple icon to represent the illustration for an empty team */}
                        <Users className="h-16 w-16 text-gray-400" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-700 mb-2">No Team Member Added yet</h3>
                    <p className="text-gray-500 max-w-sm text-center mb-6">
                        No form responses yet. Check back when users start submitting.
                    </p>

                    {/* Invite A New Team Member Button */}
                    <button className="flex items-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition duration-150">
                        <Plus className="h-5 w-5 mr-2" />
                        Invite A New Team Member
                    </button>
                </div>
                {/* --- End Empty State Card --- */}
            </div>
        </div>
    );
}

export default TeamMembersPage;
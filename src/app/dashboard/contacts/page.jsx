import React from 'react';
import { Search, ChevronDown, Bell, SortAsc, ArrowRight, ArrowLeft } from 'lucide-react';

const ContactsPage = () => {
    // Base background is white (bg-white)
    // Text is dark (text-gray-900)

    // Sample data for the table
    const contacts = [
        { name: "Olamide Akintan", email: "olamideakintan@gmail.com", project: "Form Server", purpose: "Form Server", avatar: "/path/to/avatar1.jpg" },
        { name: "Alison David", email: "alisondavid@gmail.com", project: "Elab Acad.", purpose: "Elab Acad.", avatar: "/path/to/avatar2.jpg" },
        { name: "Megan Willow", email: "meganwillow@gmail.com", project: "Elab Acad.", purpose: "Elab Acad.", avatar: "/path/to/avatar3.jpg" },
        { name: "Janelle Levi", email: "janellelevi@gmail.com", project: "Form Server", purpose: "Form Server", avatar: "/path/to/avatar4.jpg" },
        { name: "King Fisher", email: "kingfisher@gmail.com", project: "Form Server", purpose: "Form Server", avatar: "/path/to/avatar5.jpg" },
        { name: "Olivia Mahun", email: "oliviamahun@gmail.com", project: "Form Server", purpose: "Form Server", avatar: "/path/to/avatar6.jpg" },
        { name: "Vivian Kalu", email: "viviankalu@gmail.com", project: "Elab Acad.", purpose: "Elab Acad.", avatar: "/path/to/avatar7.jpg" },
        { name: "Douglas Smith", email: "douglassmith@gmail.com", project: "Elab Acad.", purpose: "Elab Acad.", avatar: "/path/to/avatar8.jpg" },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            
            {/* --- Header / Navbar (Reusing the light mode style) --- */}
            <header className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-20">
                <div className="flex items-center space-x-6">
                    <h1 className="text-2xl font-bold text-gray-800">Contacts</h1> {/* Updated title */}
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
                    <h2 className="text-xl font-medium text-gray-900">Form Users Contacts</h2>
                    <p className="text-gray-500">
                        All the people who’ve reached out through your forms, in one place.
                    </p>
                </div>

                {/* --- Contacts Table Card --- */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    
                    {/* Filter/Sort Row */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="relative flex-grow mr-4 max-w-lg">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="w-full py-3 pl-10 pr-4 rounded-lg bg-white text-sm text-gray-800 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        
                        {/* Sort Button */}
                        <button className="flex items-center space-x-2 p-3 bg-gray-100 text-gray-600 rounded-lg font-medium border border-gray-300 hover:bg-gray-200 transition">
                            <SortAsc className="h-5 w-5" />
                            <span>Sort by</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Contacts Table (Simplified list style to match the design) */}
                    <div className="divide-y divide-gray-200">
                        {contacts.map((contact, index) => (
                            <ContactRow key={index} contact={contact} />
                        ))}
                    </div>

                    {/* Pagination Footer */}
                    <div className="flex justify-between items-center pt-4 mt-6 border-t border-gray-200">
                        <span className="text-sm text-gray-500">Page 1 of 30</span>
                        
                        <div className="flex items-center space-x-2">
                            {/* Page Numbers */}
                            <div className="flex space-x-1">
                                <PageNumber number="1" />
                                <PageNumber number="2" />
                                <PageNumber number="3" isActive={true} />
                                <span className="px-2 py-1.5 text-gray-500">...</span>
                                <PageNumber number="10" />
                                <PageNumber number="11" />
                                <PageNumber number="12" />
                            </div>

                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Previous
                            </button>
                            <button className="flex items-center px-4 py-2 text-sm text-gray-700 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
                                Next
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </button>
                        </div>
                    </div>

                </div>
                {/* --- End Contacts Table Card --- */}
            </div>
        </div>
    );
}

// --- Helper Components ---

// Component for a single row in the Contacts table
const ContactRow = ({ contact }) => (
    <div className="grid grid-cols-5 gap-4 py-3 items-center text-sm">
        {/* Name Column (Col 1) */}
        <div className="col-span-1 flex items-center space-x-3 font-medium text-gray-900">
            {/* Simple Avatar Placeholder */}
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                {/*  */}
            </div>
            <span>{contact.name}</span>
        </div>
        
        {/* Email Column (Col 2) */}
        <div className="col-span-1 text-gray-600 truncate">{contact.email}</div>
        
        {/* Project Name Column (Col 3) */}
        <div className="col-span-1 text-gray-600">{contact.project}</div>
        
        {/* Purpose Column (Col 4) */}
        <div className="col-span-1 text-gray-600">{contact.purpose}</div>
    </div>
);

// Component for a pagination number
const PageNumber = ({ number, isActive }) => (
    <button 
        className={`px-3 py-1.5 text-sm rounded-lg font-medium transition duration-150 ${
            isActive 
                ? 'bg-indigo-600 text-white' // Active page style
                : 'text-gray-600 hover:bg-gray-100' // Inactive page style
        }`}
    >
        {number}
    </button>
);


export default ContactsPage;
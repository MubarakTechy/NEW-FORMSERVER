"use client";
import React from 'react';
import { Search, ChevronDown, Bell, Settings, MessageCircle, FileText, Layout, Plus, Trash2, Copy, Bold, Italic, Underline, ChevronUp, Image, Star, Calendar, Clock } from 'lucide-react';

const SurveyBuilderPage = () => {
  // Base background is white (bg-white)
  // Text is dark (text-gray-900)
  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* --- Header / Navbar --- */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-20">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-gray-800">MY SURVEYS</h1> 
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
        
        {/* Tab Navigation and Actions Row */}
        <div className="flex justify-between items-center mb-6">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-300">
            <TabItem icon={<Layout className="h-5 w-5" />} label="Questions" isActive={true} />
            <TabItem icon={<MessageCircle className="h-5 w-5" />} label="Responses" isActive={false} />
            <TabItem icon={<Settings className="h-5 w-5" />} label="Settings" isActive={false} />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ActionIcon icon={<i className="h-5 w-5 fas fa-undo-alt" />} label="Undo" /> {/* Assuming FontAwesome for these icons */}
            <ActionIcon icon={<i className="h-5 w-5 fas fa-redo-alt" />} label="Redo" />
            <ActionIcon icon={<FileText className="h-5 w-5" />} label="Preview survey" />
            
            <button className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
              Publish
            </button>
          </div>
        </div>

        {/* --- Survey Editor Grid --- */}
        <div className="grid grid-cols-12 gap-6 relative">
          
          {/* Editor Column (Col 1 to 9/10) */}
          <div className="col-span-8 space-y-6"> 

            {/* Title / Description Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <button className="flex items-center space-x-2 px-3 py-1 mb-6 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition">
                <Plus className="h-4 w-4" />
                <span>Add Logo</span>
              </button>
              
              <p className="text-lg font-semibold mb-1">Survey Title</p>
              <input
                type="text"
                placeholder="Untitled"
                className="w-full text-2xl font-bold py-2 border-b-2 border-indigo-500 focus:outline-none mb-2"
              />
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  You’re good up to 250 characters.
                </p>
                <div className="flex space-x-2 text-gray-500">
                  <Bold className="h-5 w-5 cursor-pointer hover:text-indigo-600" />
                  <Italic className="h-5 w-5 cursor-pointer hover:text-indigo-600" />
                  <Underline className="h-5 w-5 cursor-pointer hover:text-indigo-600" />
                </div>
              </div>
            </div>

            {/* Question Card 1 (Sample Question) */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 relative">
                <div className="flex justify-end items-center mb-4 space-x-3 text-gray-400">
                    <Copy className="h-5 w-5 cursor-pointer hover:text-indigo-600" />
                    <Trash2 className="h-5 w-5 cursor-pointer hover:text-red-500" />
                    <div className="h-6 w-px bg-gray-300 mx-2"></div>
                    <span className='text-sm font-medium'>Required</span>
                    {/* Simple Toggle Switch */}
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:bg-indigo-600" />
                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                </div>

                <div className='flex space-x-4'>
                    <p className="text-md font-medium text-gray-600 pt-3">Q1</p>
                    <div className='flex-grow'>
                        <input
                            type="text"
                            placeholder="Enter your question here"
                            className="w-full text-md py-3 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    
                </div>
                
                <div className='flex items-center space-x-4 mt-4 ml-10'>
                    <div className='h-4 w-4 rounded-full border-2 border-gray-400'></div>
                    <input
                        type="text"
                        placeholder="Type Option 1 here"
                        className="py-2 px-3 border-b border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-700"
                    />
                    <button className='text-sm text-indigo-500 hover:text-indigo-700'>Add Option</button>
                </div>
            </div>
            
            {/* Add More Question Button */}
            <div className="flex justify-center">
              <button className="flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition">
                <Plus className="h-5 w-5 mr-2" />
                Add more Question
              </button>
            </div>
          </div>
          
          {/* Question Type Selector Column (Col 9 to 12) */}
          <div className="col-span-4 relative">
            <div className="sticky top-20 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
              
              {/* Question Type Header/Search */}
              <div className="flex justify-between items-center pb-3 border-b border-gray-200 mb-3">
                <p className="font-semibold">Multiple Choice</p>
                <ChevronUp className="h-5 w-5 text-gray-500 cursor-pointer" />
              </div>

              {/* Question Type List */}
              <div className="space-y-1">
                <QuestionTypeItem icon={<i className="h-5 w-5 far fa-circle" />} label="Multiple Choice" isSelected={true} />
                <QuestionTypeItem icon={<FileText className="h-5 w-5" />} label="Short Answer" />
                <QuestionTypeItem icon={<FileText className="h-5 w-5" />} label="Paragraph" />
                <QuestionTypeItem icon={<i className="h-5 w-5 far fa-check-square" />} label="Checkboxes" />
                <QuestionTypeItem icon={<ChevronDown className="h-5 w-5" />} label="Dropdown" />
                <QuestionTypeItem icon={<i className="h-5 w-5 fas fa-ellipsis-h" />} label="Linear Scaling" />
                <QuestionTypeItem icon={<Star className="h-5 w-5" />} label="Rating" />
                <QuestionTypeItem icon={<Calendar className="h-5 w-5" />} label="Date" />
                <QuestionTypeItem icon={<Clock className="h-5 w-5" />} label="Time" />
                <QuestionTypeItem icon={<i className="h-5 w-5 far fa-dot-circle" />} label="Multiple Choice Grid" />
                <QuestionTypeItem icon={<i className="h-5 w-5 far fa-check-circle" />} label="Checkbox Grid" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---

// Component for the top navigation tabs
const TabItem = ({ icon, label, isActive }) => (
    <div 
        className={`flex items-center space-x-2 py-2 px-4 cursor-pointer transition ${
            isActive 
                ? 'border-b-2 border-indigo-600 text-indigo-600 font-semibold' 
                : 'text-gray-500 hover:text-gray-700'
        }`}
    >
        {/* Assuming icons need to be colorized for the light theme */}
        {React.cloneElement(icon, { className: `${icon.props.className} ${isActive ? 'text-indigo-600' : 'text-gray-500'}` })}
        <span>{label}</span>
    </div>
);

// Component for the header action icons (Undo, Redo, Preview)
const ActionIcon = ({ icon, label }) => (
    <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100 transition" aria-label={label}>
      {React.cloneElement(icon, { className: `${icon.props.className} h-5 w-5` })}
    </button>
);

// Component for an item in the Question Type list
const QuestionTypeItem = ({ icon, label, isSelected }) => (
    <div 
        className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition ${
            isSelected 
                ? 'bg-indigo-100 text-indigo-700 font-medium' 
                : 'text-gray-700 hover:bg-gray-100'
        }`}
    >
        {/* Assuming icons need to be colorized for the selected state */}
        {React.cloneElement(icon, { className: `${icon.props.className} h-5 w-5 ${isSelected ? 'text-indigo-600' : 'text-gray-500'}` })}
        <span>{label}</span>
    </div>
);


const page = SurveyBuilderPage;

export default page;
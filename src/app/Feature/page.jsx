import React from 'react'
import Navbar from '@/Component/Navbar'
import Footer from "@/Component/Footer"
import Ingration from "@/Component/Integrations"
import Feature  from "@/Component/Feature"

const page = () => {
  return (
    <div>
        
        <Navbar />
        <Feature />
        <Ingration />
        <Footer />
    </div>
  )
}

export default page
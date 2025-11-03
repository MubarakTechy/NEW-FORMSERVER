import React from 'react'
import Hero from "./Hero";
import Work from "./Work";
import Feature from "./Feature";
import Integrations from "./Integrations";
import Faq from "./Faq";
import Trust from "./Trust"

const Home = () => {
  return (
    <div>
      <Hero />
      <Work/>
      <Feature/>
      <Integrations />
      <Trust />
      <Faq/>
      
    </div>
  )
}

export default Home

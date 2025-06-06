import React from 'react'
import ProfileCard from './components/ProfileCard'
import './App.css';


function App() {
  return (
    <div className='app-container'>
      <h1 className="section-title">User Profiles</h1>

      <div className='card-container'>
        <ProfileCard
        name="Aastha Anand"
        role="Frontend Developer"
        image="https://ik.imagekit.io/u0m8d9r7j/WhatsApp%20Image%202025-06-01%20at%2010.13.41%20PM.jpeg?updatedAt=1748797863345"
        description="Expert in CSS, React and HTML."
        />
        <ProfileCard
        name="Arjun Nirwal"
        role="Backend Developer"
        image="https://ik.imagekit.io/u0m8d9r7j/WhatsApp%20Image%202025-06-01%20at%2010.13.42%20PM.jpeg?updatedAt=1748797926795"
        description="Expert in Javascipt, Node.js and Python."
        />
        <ProfileCard
        name="Surya Khubiyan"
        role="Full Stack Developer"
        image="https://ik.imagekit.io/u0m8d9r7j/WhatsApp%20Image%202025-06-01%20at%2010.13.42%20PM%20(1).jpeg?updatedAt=1748797925044"
        description="Expert Frontend, Backend, Database."
        />
        <ProfileCard
        name="Maahi Sharma"
        role="Fashion Designer"
        image="https://ik.imagekit.io/u0m8d9r7j/WhatsApp%20Image%202025-06-01%20at%2010.14.18%20PM.jpeg?updatedAt=1748797926106"
        description="Expert in design, aesthetics, and clothing construction."
        />
        <ProfileCard
        name="Khyati Singh"
        role="Graphic Designer"
        image="https://ik.imagekit.io/u0m8d9r7j/WhatsApp%20Image%202025-06-01%20at%2010.14.36%20PM.jpeg?updatedAt=1748797926709"
        description="Expert in arranging visual elements."
        />

      </div>
    </div>
  )
}

export default App


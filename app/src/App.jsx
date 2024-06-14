import React, { useEffect } from 'react'
import { useState } from 'react';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {


  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions." },
    { text1: "Give into  ", text2: "your passions." }
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {

    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })

    }, 3000)

  }, [])

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar></Navbar>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />

    </div>
  )
}

export default App
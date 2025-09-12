import { useState, useEffect } from 'react'




function Intro({ onDone }) {


  const [started, setStarted] = useState(false);

  const startAudio = () => {
    setStarted(true);

    const audio = new Audio('/sounds/intro-sound.mp3');
    audio.volume = 0.8;

   
    audio.play().catch(e => console.log("Audio could not be played", e));

    setTimeout(() => {
      onDone();
    }, 2500);
  };

  if (!started) {
    return (
      <div className="intro-screen" onClick={startAudio} style={{cursor: 'pointer'}}>
        <h1 className="intro-title" >NETFOLIO</h1>
        <p style={{ color: 'white', fontSize: '16px' }}>Click to skip...</p>
      </div>
    );
  }

  return (
    <div className="intro-screen">
      <h1 className="intro-title">NETFOLIO</h1>
    </div>
  );
} 

export default Intro 
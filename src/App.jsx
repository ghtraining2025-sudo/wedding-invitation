
import { useRef, useState } from 'react';
import gsap from 'gsap';

import StarField from './components/StarField/StarField';

import OpeningScreen from './components/OpeningScreen/OpeningScreen';
import Invitation from './components/Invitation/Invitation';
import Events from './components/Events/Events';
import Countdown from './components/Countdown/Countdown';
import Dua from './components/Dua/Dua';
import ClosingSection from './components/Footer/ClosingSection';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';

function App() {
  const [invitationOpened, setInvitationOpened] = useState(false);
  const audioRef = useRef(null);

  const startMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0;

    const playPromise = audio.play();

    if (playPromise) {
      playPromise.catch((error) => {
        console.warn('Music playback was blocked:', error);
      });
    }
  };

  const completeOpening = () => {
    setInvitationOpened(true);

    if (audioRef.current) {
      gsap.to(audioRef.current, {
        volume: 0.65,
        duration: 2,
        ease: 'power2.out',
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/wedding-music.mp3"
        loop
        preload="auto"
      />

      {!invitationOpened ? (
        <OpeningScreen
          onStartOpening={startMusic}
          onOpenComplete={completeOpening}
        />
      ) : (
        <>
        <StarField />
          <Invitation />
          <Events />
          <Countdown />
          <Dua />
          <ClosingSection />
          <MusicPlayer audioRef={audioRef} />
        </>
      )}
    </>
  );
}

export default App;

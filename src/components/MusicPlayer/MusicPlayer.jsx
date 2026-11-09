
import { useEffect, useState } from 'react';
import { Music2, Pause, Play } from 'lucide-react';
import './MusicPlayer.scss';

function MusicPlayer({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef?.current;

    if (!audio) return;

    const updatePlayingState = () => {
      setIsPlaying(!audio.paused && !audio.ended);
    };

    audio.addEventListener('play', updatePlayingState);
    audio.addEventListener('pause', updatePlayingState);
    audio.addEventListener('ended', updatePlayingState);

    // Sync with the current audio state on mount.
    updatePlayingState();

    return () => {
      audio.removeEventListener('play', updatePlayingState);
      audio.removeEventListener('pause', updatePlayingState);
      audio.removeEventListener('ended', updatePlayingState);
    };
  }, [audioRef]);

  const toggleMusic = async () => {
    const audio = audioRef?.current;

    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      console.error('Unable to play wedding music:', error);
    }
  };

  return (
    <button
      type="button"
      className={`music-player ${isPlaying ? 'is-playing' : 'is-paused'}`}
      onClick={toggleMusic}
      aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
      aria-pressed={isPlaying}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Pause size={20} />
      ) : (
        <Play size={20} />
      )}

      <Music2 size={9} />
    </button>
  );
}

export default MusicPlayer;

import React, { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = ({ isMuted, setIsMuted }) => {
  const playerRef = useRef(null);

  const toggleMusic = () => {
    const audio = playerRef.current?.audio.current;

    if (!audio) return;

    if (isMuted) {
      audio.play();         
      audio.volume = 1.0;
    } else {
      audio.pause();
    }

    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-10 right-4 z-40">
      <button
        onClick={toggleMusic}
        className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:scale-110 transition"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Hidden but controlled audio */}
      <div className="hidden">
        <AudioPlayer
          ref={playerRef}
          src="/video/song.webm"
          loop
          preload="none"
          muted={isMuted}
        />
      </div>
    </div>
  );
};

export default BackgroundMusic;

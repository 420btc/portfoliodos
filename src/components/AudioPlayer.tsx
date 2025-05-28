import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface AudioPlayerProps {
  src: string | null;
  title: string;
  label?: string;
}

export function AudioPlayer({ src, title, label = 'Audiobook' }: AudioPlayerProps) {
  // Don't render anything if there's no audio source
  if (!src) return null;
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration !== Infinity && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleLoadedMetadata = () => {
      updateDuration();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', () => setIsPlaying(false));

    // Forzar carga de metadatos
    audio.load();

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [src]); // Añadido src como dependencia para recargar cuando cambie

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (value: number[]) => {
    if (!audioRef.current) return;
    const newTime = value[0];
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0] / 100;
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Ensure title is always a string
  const audioTitle = title || 'Audio player';
  
  return (
    <div className="w-full">
      <audio ref={audioRef} src={src} preload="metadata" title={audioTitle} />
      <div className="flex items-center gap-1 sm:gap-2 p-1 sm:p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <button
          onClick={togglePlay}
          className="p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          <Icon icon={isPlaying ? "mdi:pause" : "mdi:play"} className="text-sm sm:text-lg" />
        </button>
        
        <div className="flex-1 flex items-center gap-1 sm:gap-2">
          {label && <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 hidden sm:inline">{label}</span>}
          <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 w-8 sm:w-10">{formatTime(currentTime)}</span>
          <input
            type="range"
            value={currentTime}
            max={duration || 100}
            step={1}
            onChange={(e) => handleTimeChange([Number(e.target.value)])}
            className="flex-1 h-0.5 sm:h-1 bg-gray-300 dark:bg-gray-600 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / (duration || 100)) * 100}%, #d1d5db ${(currentTime / (duration || 100)) * 100}%, #d1d5db 100%)`
            }}
          />
          <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 w-8 sm:w-10 text-right">
            {formatTime(duration || 0)}
          </span>
        </div>
        
        <div className="flex items-center gap-0.5 sm:gap-1">
          <button
            onClick={toggleMute}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          >
            <Icon 
              icon={isMuted || volume === 0 ? "mdi:volume-off" : "mdi:volume-high"} 
              className="text-sm sm:text-lg" 
            />
          </button>
          <input
            type="range"
            value={isMuted ? 0 : volume * 100}
            max={100}
            step={1}
            onChange={(e) => handleVolumeChange([Number(e.target.value)])}
            className="w-10 sm:w-16 h-0.5 sm:h-1 bg-gray-300 dark:bg-gray-600 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${isMuted ? 0 : volume * 100}%, #d1d5db ${isMuted ? 0 : volume * 100}%, #d1d5db 100%)`
            }}
          />
        </div>
      </div>
    </div>
  );
}
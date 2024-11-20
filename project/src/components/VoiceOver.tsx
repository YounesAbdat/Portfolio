import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";

type Project = {
  title: string;
  description: string;
  audioUrl: string;
  category: string;
  duration: string;
};

const projects: Project[] = [
  {
    title: "National Geographic Documentary",
    description:
      "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "../../voice overr/maalip.mp3",
    category: "Documentary",
    duration: "2:30",
  },

  {
    title: "Nike Commercial",
    description: "Dynamic voice-over for Nike's latest running shoe campaign.",
    audioUrl: "../../voice overr/maalip.mp3",
    category: "Commercial",
    duration: "0:30",
  },
  {
    title: "Another Documentary",
    description:
      "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "../../voice overr/maalip.mp3",
    category: "Documentary",
    duration: "2:30",
  },
  {
    title: "Arabic Documentary",
    description:
      "Nature documentary narration showcasing wildlife in their natural habitat.",
    audioUrl: "../../voice overr/maalip.mp3",
    category: "Documentary",
    duration: "2:30",
  },
];

const VoiceOver: React.FC = () => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [playingState, setPlayingState] = useState<Record<string, boolean>>({});
  const [volume, setVolume] = useState<number>(1);

  const handlePlayPause = (audioUrl: string) => {
    console.log(`Attempting to play/pause: ${audioUrl}`);

    // Check if the current audio is already playing or paused
    if (currentAudio && playingState[audioUrl]) {
      // If it's playing, pause it
      console.log("Pausing audio...");
      currentAudio.pause();
      setPlayingState((prevState) => ({
        ...prevState,
        [audioUrl]: false, // Set the state to false when paused
      }));
    } else {
      // If it's not playing, create a new audio instance and play it
      if (currentAudio) {
        currentAudio.pause(); // Pause any current audio
        setPlayingState((prevState) => ({
          ...prevState,
          [audioUrl]: false, // Stop the currently playing audio
        }));
      }

      // Create a new audio instance
      console.log("Creating new audio instance...");
      const newAudio = new Audio(audioUrl);
      newAudio.volume = volume;

      // Set event listener for when the audio ends
      newAudio.onended = () => {
        console.log("Audio ended");
        setPlayingState((prevState) => ({
          ...prevState,
          [audioUrl]: false, // Reset play state when audio ends
        }));
      };

      newAudio
        .play()
        .then(() => {
          console.log("Audio started successfully");
          setCurrentAudio(newAudio);
          setPlayingState((prevState) => ({
            ...prevState,
            [audioUrl]: true, // Set the state to true when the audio starts playing
          }));
        })
        .catch((error) => {
          console.error("Audio playback error:", error);
        });
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    console.log(`Changing volume to: ${newVolume}`);
    setVolume(newVolume);
    if (currentAudio) {
      currentAudio.volume = newVolume;
    }
  };

  return (
    <section
      id="voice-over"
      className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-purple-950 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Voice-Over Work</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-sm text-gray-400">{project.category}</span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handlePlayPause(project.audioUrl)}
                    className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                  >
                    {playingState[project.audioUrl] ? (
                      <Pause className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Play className="w-5 h-5 text-blue-400" />
                    )}
                  </button>

                  <Volume2 className="w-5 h-5 text-gray-400" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-32"
                  />
                </div>
                <span className="text-sm text-gray-400">{project.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoiceOver;

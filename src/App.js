import { useState, useEffect } from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Inima Nu Fi De Piatra",
      artist: "Roxen",
      img_src: "./images/inima-nu-fi-de-piatra.jpg",
      src: "./music/Inima-Nu-Fi-De-Piatra.mp3"
    },
    {
      title: "Marto Shemovrchi",
      artist: "Trio Manidili",
      img_src: "./images/with-love.jpg",
      src: "./music/Marto-Shemovrchi.mp3"
    },
    {
      title: "Sneakers & Weed",
      artist: "Alex Parker",
      img_src: "./images/sneakers-&-weed.jpg",
      src: "./music/Sneakers-&-Weed.mp3"
    },
    {
      title: "Papaoutai",
      artist: "Stromae",
      img_src: "./images/papaoutai.jpg",
      src: "./music/Papaoutai.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    }); // eslint-disable-next-line
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;

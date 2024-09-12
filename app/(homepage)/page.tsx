"use client";
import { useState } from "react";
import Player from "../components/player/Player";

export default function Home() {
  const [songs, setSongs] = useState([
    {
      title: "song 1",
      artist: "artist 1",
      img_src: "",
      src: "",
    },
    {
      title: "song 2",
      artist: "artist 2",
      img_src: "",
      src: "",
    },
    {
      title: "song 3",
      artist: "artist 3",
      img_src: "",
      src: "",
    },
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div>
      <h1>Components here</h1>
      <Player 
        song={songs[currentSongIndex]}
        nextSong={songs[nextSongIndex]}
      />
    </div>
  );
}

import style from "./player.module.css";

export interface PlayerProps {
  song: {
    title: string;
    artist: string;
    img_src: string;
    src: string;
  };
  nextSong: {
    title: string;
    artist: string;
    img_src: string;
    src: string;
  };
}

export default function Player({ song, nextSong }: PlayerProps) {
  return (
    <div className={style.cplayer}>
      <audio></audio>
      <h4>Playing now: {song.title}</h4>
      <p>Artist: {song.artist}</p>
      {/*music search functionality */}
      {/*player Details here */}
      {/*plaer controls here */}
      <p>
        <strong>Next up: </strong>
        {nextSong.title} by {nextSong.artist}
      </p>
    </div>
  );
}

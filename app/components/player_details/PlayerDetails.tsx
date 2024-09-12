import Image from "next/image";

export interface PlayerDetailsProps {
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

export default function PlayerDetails({ song, nextSong }: PlayerDetailsProps) {
  return (
    <div className={style.playerDetails}>
      <div className={style.detailsImg}>
        <Image alt="" src=""></Image>
      </div>
      <h3 className={style.detailstitle}>{song.title}</h3>
      <h3 className={style.detailstitle}>{song.artist}</h3>
    </div>
  )
}
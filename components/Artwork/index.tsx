import Link from "next/link";

interface ArtworkPropsType {
  id: number;
  artworkName: string;
  artistName: string;
}

const Artwork = ({ id, artworkName, artistName }: ArtworkPropsType) => {
  return (
    <article className="flex flex-col gap-3">
      <Link href={`/board/${id}`}>
        <div className="w-[265px] h-[170px] bg-slate-500" />
      </Link>
      <div className="flex flex-col gap-0.5">
        <Link href={`/board/${id}`}>
          <p className="text-xl text-black font-semibold">{artworkName}</p>
          <p className="text-base text-gray-400 font-normal">{artistName}</p>
        </Link>
      </div>
    </article>
  );
};

export default Artwork;

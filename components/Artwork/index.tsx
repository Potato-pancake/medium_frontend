interface ArtworkPropsType {
  artworkName: string;
  artistName: string;
}

const Artwork = ({ artworkName, artistName }: ArtworkPropsType) => {
  return (
    <article className="flex flex-col gap-3">
      <div className="w-[265px] h-[170px] bg-slate-500" />
      <div className="flex flex-col gap-0.5">
        <p className="text-xl text-black font-semibold">{artworkName}</p>
        <p className="text-base text-gray-400 font-normal">{artistName}</p>
      </div>
    </article>
  );
};

export default Artwork;

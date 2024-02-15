interface ArtworkPropsType {
  artworkName: string;
  artistName: string;
}

const Artwork = ({ artworkName, artistName }: ArtworkPropsType) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full h-[170px] bg-slate-500" />
      <div className="flex flex-col gap-0.5">
        <span className="text-xl text-black font-semibold">{artworkName}</span>
        <span className="text-base text-gray-400 font-normal">
          {artistName}
        </span>
      </div>
    </div>
  );
};

export default Artwork;

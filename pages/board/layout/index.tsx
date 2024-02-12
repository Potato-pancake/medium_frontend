import Artwork from "@/components/Artwork";

const BoardLayout = () => {
  return (
    <div className="min-h-screen my-[156px]">
      <div className="max-w-[1600px] flex flex-col gap-8 mx-40">
        <span className="text-5xl text-black font-bold">게시판</span>
        <div className="flex flex-col items-center gap-12">
          <div className="flex gap-5 flex-wrap">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
              <Artwork
                key={value}
                artworkName="작업물 제목"
                artistName="아티스트"
              />
            ))}
          </div>
          <button className="w-[98px] h-[44px] text-lg text-white font-normal bg-gray-900">
            더보기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardLayout;

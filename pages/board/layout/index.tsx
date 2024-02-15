import Artwork from "@/components/Artwork";

const BoardLayout = () => {
  return (
    <div className="min-h-screen my-[156px]">
      <main className="max-w-[1120px] w-[calc(100%-2rem)] flex flex-col gap-8 m-auto">
        <h1 className="text-5xl text-black font-bold">게시판</h1>
        <div className="flex flex-col items-center gap-12">
          <section className="w-full grid grid-cols-4 gap-x-5 gap-y-12">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value) => (
              <Artwork
                key={value}
                artworkName="작업물 제목"
                artistName="아티스트"
              />
            ))}
          </section>
          <button className="w-[98px] h-[44px] text-lg text-white font-normal bg-gray-900">
            더보기
          </button>
        </div>
      </main>
    </div>
  );
};

export default BoardLayout;

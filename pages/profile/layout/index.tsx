import Image from "next/image";
import ArrowBack from "../assets/arrow_back_ios_new.svg";

const ProfileLayout = () => {
  return (
    <div className="min-h-screen my-[156px]">
      <main className="max-w-[740px] w-[calc(100%-2rem)] flex flex-col gap-12 m-auto">
        <button className="w-fit flex items-center text-base text-gray-900 font-medium">
          <Image src={ArrowBack} alt="arrow_back" />
          뒤로 가기
        </button>
        <div className="flex flex-col gap-12">
          <section className="w-full flex gap-6">
            <div className="w-[180px] h-[180px] bg-slate-500"></div>
            <article className="flex-1 flex flex-col justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-3xl text-black font-bold">신준서</span>
                <span className="text-sm text-gray-600">[분야]/[세부분야]</span>
              </div>
              <div className="h-[90px] bg-gray-200"></div>
            </article>
          </section>
          <section className="flex flex-col gap-8">
            <div className="flex flex-col border-t-[1px] border-t-gray-300">
              <div className="flex gap-3 text-2xl font-semibold mt-4">
                <span className="text-gray-900">신준서님의 작업물</span>
                <span className="text-gray-400">5</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-y-10 gap-x-5">
              {[0, 1, 2, 3, 4].map((value) => (
                <article key={value} className="flex flex-col gap-3">
                  <div className="w-[360px] bg-gray-400 aspect-[3/2]"></div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-lg text-black font-semibold">
                      작업물 제목
                    </span>
                    <span className="text-sm text-gray-600">아티스트</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProfileLayout;

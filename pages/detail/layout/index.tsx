import Artwork from "@/components/Artwork";
import Image from "next/image";
import ArrowBack from "../assets/arrow_back_ios_new.svg";
import Link from "next/link";

const BoardDetailLayout = () => {
  return (
    <div className="min-h-screen my-[156px]">
      <main className="max-w-[1120px] w-[calc(100%-2rem)] flex flex-col gap-12 m-auto">
        <div className="flex flex-col gap-12">
          <section className="max-w-[740px] w-full flex flex-col gap-9 m-auto">
            <Link href="/board">
              <button className="w-fit flex items-center text-base text-gray-900 font-medium">
                <Image src={ArrowBack} alt="arrow_back" />
                뒤로 가기
              </button>
            </Link>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl text-gray-900 font-bold whitespace-pre-wrap">
                이 곳은 작업물 제목이 들어갈 자리입니다{"\n"}최대 2줄까지 들어갈
                수 있습니다
              </h1>
              <span className="text-lg text-gray-900">홍길동 · 2023.12.06</span>
            </div>
            <article className="w-full h-[740px] flex justify-center items-center  border border-gray-400">
              콘텐츠 들어갈 자리
            </article>
          </section>
          <hr className="h-[1px] bg-gray-300 mt-4" />
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl text-gray-900 font-bold">
              홍길동 님에게 문의하기
            </h2>
            <article className="flex flex-col gap-6 items-center">
              <div className="w-full flex flex-col gap-1">
                <span>문의 내용</span>
                <textarea
                  className="min-h-[200px] border border-black"
                  placeholder="문의 내용을 작성해주세요. (최대 500자)"
                />
              </div>
              <button className="w-40 h-12 bg-gray-900 text-white">
                문의하기
              </button>
            </article>
          </section>
        </div>
        <hr className="h-[1px] bg-gray-300 mt-16" />
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl text-gray-900 font-bold">
            다른 작품들도 둘러보기
          </h2>
          <section className="w-full flex gap-x-5 overflow-scroll scrollbar-hide">
            {[0, 1, 2, 3, 4, 5].map((value) => (
              <Artwork
                key={value}
                id={value}
                artworkName="작업물 제목"
                artistName="아티스트"
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default BoardDetailLayout;

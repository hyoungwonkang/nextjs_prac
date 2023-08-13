import Image from "next/image";

function ImagePage() {
  return (
    <div>
      <div
        style={{
          width: 500,
          height: 200,
          position: "relative",
        }}
      >
        <Image
          src="https://recipe1.ezmember.co.kr/cache/recipe/2021/05/30/e457e303db8b14a604175933e15826051.jpg"
          layout="fill"
          objectFit="cover"
          alt="장조림 버터 계란 비빔밥"
        />
      </div>
    </div>
  );
}

export default ImagePage;

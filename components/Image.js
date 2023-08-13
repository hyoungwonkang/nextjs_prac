import Image from "next/image";

function ImagePage() {
  return (
    <div>
      <Image
        src="https://recipe1.ezmember.co.kr/cache/recipe/2021/05/30/e457e303db8b14a604175933e15826051.jpg"
        width={500}
        height={200}
        alt="장조림 버터 계란 비빔밥"
      />
    </div>
  );
}

export default ImagePage;

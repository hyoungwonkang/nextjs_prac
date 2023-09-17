import Image from "next/image";

const loader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
function CustomImage() {
  return (
    <Image
      loader={loader}
      src="/345142f9-a6a0-47fc-a8e2-dd0d11ed2f65.webp"
      alt="thecartgolf"
      width={350}
      height={540}
    />
  );
}

export default CustomImage;

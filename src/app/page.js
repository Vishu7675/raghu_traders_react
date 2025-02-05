import Headers from "@/components/headers";
import Image from "next/image";
import bannerImage from "../../public/images/bannerImage.png";
export default function Home() {
  return (
    <div className="">
      <Image
        className="w-screen h-screen px-1 py-1 relative"
        src={bannerImage}
        alt="bannerImage"
        width={100}
        height={100}
      />
      <div className="absolute top-5 left-5 right-5">
        <Headers />
      </div>
    </div>
  );
}

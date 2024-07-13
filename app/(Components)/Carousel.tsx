import { useTime } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel({ images }: { images: { url: string }[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  }, []);
  return (
    <>
      {images.length !== 0 && (
        <div className="w-[400px] md:w-[500px] overflow-hidden flex flex-col items-center justify-center h-[500px] border border-black relative">
          <Image
            src={images[imageIndex].url}
            alt="Image"
            width={500}
            height={500}
            layout="responsive"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      )}
    </>
  );
}

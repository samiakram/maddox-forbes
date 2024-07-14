import { useTime } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel({
  images,
}: {
  images: { url: string; isImage: boolean; duration: number }[];
}) {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, images[imageIndex].duration);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [imageIndex, images]);
  return (
    <>
      {images.length !== 0 && (
        <div className="w-[400px] md:w-[500px] overflow-hidden flex flex-col items-center justify-center h-[500px]  relative">
          {images[imageIndex].isImage && (
            <Image
              src={images[imageIndex].url}
              alt="Image"
              width={500}
              height={500}
              // layout="responsive"
              // objectFit="contain"
              // objectPosition="center"
            />
          )}
          {!images[imageIndex].isImage && (
            <video
              src={images[imageIndex].url}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}
    </>
  );
}

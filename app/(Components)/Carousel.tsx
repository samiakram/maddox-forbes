import { useTime } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Carousel({ images }: { images: { url: string }[] }) {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setImageIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 5000);
  }, []);
  return (
    <>
      {images.length !== 0 && (
        <div className="w-[500px]">
          {" "}
          <Image
            src={images[imageIndex].url}
            alt="Image"
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      )}
    </>
  );
}

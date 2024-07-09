import { useEffect, useRef } from "react";
import ApplyNow from "./ApplyNow";
import SlidingInComponent from "./SlidingIn";
import Image from "next/image";

export default function USDA() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      // Slow down the video
      (videoRef.current as HTMLVideoElement).playbackRate = 0.5;
    }
  }, []);
  return (
    <>
      <section className=" px-8 md:px-0 bg-offWhite text-lightBlue">
        <div className="container mx-auto py-20 flex flex-col items-center justify-center">
          <SlidingInComponent delay={0}>
            <h1 className="text-2xl underline font-bold mb-5">
              USDA, Land, and Farm
            </h1>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.2}
            class="md:w-3/4 text-center relative h-[400px]"
          >
            <div className="relative h-[400px] z-10 left-0 right-0 top-0 bottom-0 flex items-end justify-center">
              <video
                ref={videoRef}
                muted
                autoPlay
                className="absolute w-full h-full"
                loop
                playsInline
              >
                <source src="/videos/video.mp4" type="video/mp4" />
              </video>
              <p className="mb-5 px-4 font-bold text-lg z-10 text-offWhite">
                Did you know nationwide there is a shortage of young farmers? 1
                in 3 farmers is 65 years or older, with latest census reporting
                roughly only 300,000 farmers are under the age of 35. We have
                specialty loan programs that finance everything from hobby farms
                to raw land. Let us help you break through this barrier to
                entry, while filling an essential void for our country&apos;s
                future.
              </p>
            </div>
          </SlidingInComponent>
          <hr className="mt-10 w-full" />
          <SlidingInComponent delay={0.4} class="mt-10">
            <div className="flex flex-col md:flex-row gap-2">
              <Image
                src={"/images/USDA Photo.jpg"}
                width={500}
                height={500}
                alt="USDA Photo"
                className="w-full"
              />
              <Image
                src={"/images/farm2.jpg"}
                width={500}
                height={500}
                alt="USDA Photo"
                className="w-full"
              />
              <Image
                src={"/images/land.jpg"}
                width={500}
                height={500}
                alt="USDA Photo"
                className="w-full"
              />
            </div>
            <ApplyNow classes="mt-10" />
          </SlidingInComponent>
        </div>
      </section>
    </>
  );
}

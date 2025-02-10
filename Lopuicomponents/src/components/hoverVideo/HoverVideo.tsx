import { useEffect, useRef } from "react";

type Props = {
  src: string;
  seekTo: number;
  width: number;
  height: number;
  borderRadius: number;
};

const HoverVideo = (props: Props) => {
  const { src, seekTo, width, height, borderRadius } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    const videoElement = videoRef.current;
    videoElement.currentTime = seekTo;

    videoElement.addEventListener("mouseenter", () => {
      videoElement.play();
    });
    videoElement.addEventListener("mouseleave", () => {
      videoElement.pause();
    });
    return () => {
      videoElement.removeEventListener("mouseenter", () => {
        videoElement.play();
      });
      videoElement.removeEventListener("mouseleave", () => {
        videoElement.pause();
      });
    };
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      className={`w-[${width}px] h-[${height}px] object-cover rounded-[${borderRadius}px]`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default HoverVideo;

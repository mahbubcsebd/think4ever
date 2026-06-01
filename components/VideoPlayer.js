'use client';

export default function VideoPlayer({ videoId, className = '' }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-[24px] shadow-2xl ${className}`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

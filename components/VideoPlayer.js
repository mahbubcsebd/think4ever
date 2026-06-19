'use client';
import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function VideoPlayer({ url, videoId, className, imageClassName, iframeClassName, thumbnail, title = "Watch how it works", ...props }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const iframeId = `yt-player-${videoId || 'default'}`;

  // Get YouTube thumbnail from videoId if not provided
  const getYouTubeThumbnail = (id) => {
    return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null;
  };

  const currentThumbnail = thumbnail || getYouTubeThumbnail(videoId);

  // Translate youtube watch URL or videoId to embed URL
  const getEmbedUrl = (videoUrl, autoplay = false) => {
    if (!videoUrl && videoId) {
      videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }
    if (!videoUrl) return '';
    const match = videoUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    let embedUrl = match && match[1] ? `https://www.youtube.com/embed/${match[1]}?enablejsapi=1&rel=0&loop=1&playlist=${match[1]}` : videoUrl;
    if (autoplay) {
      embedUrl += embedUrl.includes('?') ? '&autoplay=1' : '?autoplay=1';
    }
    return embedUrl;
  };

  const videoUrl = url || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : '');

  // Load YouTube Player API to listen to pause event
  useEffect(() => {
    if (!isPlaying) return;

    let player;
    const onPlayerStateChange = (event) => {
      // YT.PlayerState.PAUSED = 2
      if (event.data === 2) {
        setIsPlaying(false);
      }
    };

    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        player = new window.YT.Player(iframeId, {
          events: {
            onStateChange: onPlayerStateChange,
          },
        });
        playerRef.current = player;
      }
    };

    if (!window.YT) {
      // Load script
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
      
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      // Wait a small timeout to make sure the iframe has mounted in DOM
      const timer = setTimeout(() => {
        initPlayer();
      }, 300);
      return () => clearTimeout(timer);
    }

    return () => {
      if (player && typeof player.destroy === 'function') {
        try {
          player.destroy();
        } catch (e) {
          console.error(e);
        }
      }
    };
  }, [isPlaying, iframeId]);

  return (
    <div className={cn("relative rounded-xl overflow-hidden shadow-xl border border-zinc-200 bg-black group transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl", className)}>
      {!isPlaying && currentThumbnail && (
        <div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer bg-black/30 transition-all duration-300"
          onClick={() => setIsPlaying(true)}
        >
          {/* Background Thumbnail Image (Screenshot of the video, zoomed slightly to hide YouTube black bars) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
             <Image 
               src={currentThumbnail} 
               alt="Video Preview" 
               fill 
               sizes="(max-width: 768px) 100vw, 800px"
               className={cn("object-cover opacity-90 transition-transform duration-700 scale-[1.04] group-hover:scale-[1.08]", imageClassName)} 
               priority
             />
          </div>

          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 z-[1]" />

          {/* Play Button */}
          <div className="relative z-10 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-brand-blue/90 hover:bg-brand-blue backdrop-blur-sm rounded-full shadow-lg transition-transform group-hover:scale-110">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white translate-x-[2px]" />
          </div>

          {/* Title Text */}
          {title && (
            <p className="absolute bottom-4 left-4 z-10 text-white/95 text-[11px] sm:text-[13px] font-semibold tracking-wide drop-shadow-md">
              {title}
            </p>
          )}
        </div>
      )}

      {(!currentThumbnail || isPlaying) && (
        <iframe
          id={iframeId}
          src={getEmbedUrl(videoUrl, isPlaying && currentThumbnail)}
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          className={iframeClassName}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video player"
          {...props}
        />
      )}
    </div>
  );
}



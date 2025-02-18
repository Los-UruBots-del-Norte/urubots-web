"use client";
import React, { useRef } from 'react';

export const VideoPlayer = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    return (
        <div>
            <video ref={videoRef} src={src} autoPlay muted loop
                   className='w-full h-full object-cover mix-blend-overlay absolute bg-opacity-50'
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

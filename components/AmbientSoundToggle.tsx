'use client';

import { useState } from 'react';

export function AmbientSoundToggle() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState<HTMLAudioElement | null>(
        typeof window !== 'undefined'
            ? new Audio('/sounds/ambient-spring-forest.mp3')
            : null
    );

    const toggleSound = () => {
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.loop = true;
            // audio.volume = 0.15;
            audio.play().catch(() => {
                // Autoplay blocked - user must interact first
            });
            setIsPlaying(true);
        }
    };

    return (
        <button
            onClick={toggleSound}
            className="sound-toggle group"
            aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient sound'}
            title={isPlaying ? 'Mute ambient sound' : 'Play ambient sound'}
        >
            {isPlaying ? (
                <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 6.253v11.494M5.636 18.364L12 12 5.636 5.636a2.121 2.121 0 00-3 3v6.728a2.121 2.121 0 003 3z"
                    />
                </svg>
            ) : (
                <svg
                    className="w-5 h-5 text-foreground-muted group-hover:text-gold-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    />
                </svg>
            )}
        </button>
    );
}

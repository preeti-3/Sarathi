'use client';

import { useState, useEffect } from 'react';
import { toggleBookmark, isBookmarked } from '@/lib/bookmarks';

interface BookmarkButtonProps {
    shlokId: string;
    className?: string;
}

export function BookmarkButton({ shlokId, className = '' }: BookmarkButtonProps) {
    const [bookmarked, setBookmarked] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setBookmarked(isBookmarked(shlokId));
    }, [shlokId]);

    const handleClick = () => {
        const newState = toggleBookmark(shlokId);
        setBookmarked(newState);
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
    };

    return (
        <button
            onClick={handleClick}
            className={`
        relative inline-flex items-center gap-2 px-6 py-3 rounded-xl
        border transition-all duration-300
        ${bookmarked
                    ? 'bg-gold-400/20 border-gold-400/50 text-gold-400'
                    : 'bg-navy-700/50 border-gold-400/20 text-foreground-muted hover:text-gold-400 hover:border-gold-400/40'
                }
        ${isAnimating ? 'scale-95' : 'scale-100'}
        ${className}
      `}
            aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
            <svg
                className={`w-5 h-5 transition-transform ${isAnimating ? 'scale-125' : 'scale-100'}`}
                fill={bookmarked ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
            </svg>
            <span className="text-sm font-medium">
                {bookmarked ? 'Saved' : 'Save'}
            </span>
        </button>
    );
}

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

interface Shlok {
    id: string;
    chapter: number;
    verse: number;
    sanskrit: string;
    simpleMeaning: string;
}

interface InfiniteVerseListProps {
    shloks: Shlok[];
    chapterId: number;
    initialLoadCount?: number;
    loadMoreCount?: number;
}

export function InfiniteVerseList({
    shloks,
    chapterId,
    initialLoadCount = 15,
    loadMoreCount = 10
}: InfiniteVerseListProps) {
    const [displayedCount, setDisplayedCount] = useState(initialLoadCount);
    const [isLoading, setIsLoading] = useState(false);
    const observerTarget = useRef<HTMLDivElement>(null);

    const displayedShloks = shloks.slice(0, displayedCount);
    const hasMore = displayedCount < shloks.length;

    const loadMore = useCallback(() => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
        // Small delay to prevent too rapid loading and allow smooth rendering
        setTimeout(() => {
            setDisplayedCount(prev => Math.min(prev + loadMoreCount, shloks.length));
            setIsLoading(false);
        }, 100);
    }, [isLoading, hasMore, loadMoreCount, shloks.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    loadMore();
                }
            },
            {
                root: null,
                rootMargin: '200px', // Start loading before reaching the end
                threshold: 0
            }
        );

        const target = observerTarget.current;
        if (target) {
            observer.observe(target);
        }

        return () => {
            if (target) {
                observer.unobserve(target);
            }
        };
    }, [hasMore, isLoading, loadMore]);

    return (
        <div className="scroll-optimized">
            <div className="space-y-4">
                {displayedShloks.map((shlok) => (
                    <Link
                        key={shlok.id}
                        href={`/chapter/${shlok.chapter}/shlok/${shlok.verse}`}
                        className="verse-list-item block group p-6 card-ethereal rounded-lg hover:border-gold-500/30 transition-all duration-500"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <p className="sanskrit-text text-lg text-gold-500/80 sanskrit-glow mb-3 line-clamp-1">
                                    {shlok.sanskrit}
                                </p>
                                <p className="text-foreground-muted text-sm leading-relaxed line-clamp-2">
                                    {shlok.simpleMeaning}
                                </p>
                            </div>
                            <span className="text-foreground-muted/40 text-sm whitespace-nowrap">
                                Verse {shlok.verse}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Loading indicator and observer target */}
            {hasMore && (
                <div
                    ref={observerTarget}
                    className="py-8 flex justify-center"
                >
                    {isLoading ? (
                        <div className="flex items-center gap-3 text-foreground-muted/50">
                            <div className="w-5 h-5 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin" />
                            <span className="text-sm">Loading more verses...</span>
                        </div>
                    ) : (
                        <div className="w-8 h-1 bg-gold-500/20 rounded-full" />
                    )}
                </div>
            )}

            {/* End indicator */}
            {!hasMore && shloks.length > initialLoadCount && (
                <div className="py-8 text-center">
                    <p className="text-foreground-muted/40 text-sm">
                        All {shloks.length} verses loaded
                    </p>
                </div>
            )}
        </div>
    );
}

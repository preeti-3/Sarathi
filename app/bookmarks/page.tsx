'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBookmarks } from '@/lib/bookmarks';
import { getShlokById } from '@/lib/shloks';
import { Shlok } from '@/lib/types';

export default function BookmarksPage() {
    const [bookmarkedShloks, setBookmarkedShloks] = useState<Shlok[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const bookmarkIds = getBookmarks();
        const shloks = bookmarkIds
            .map(id => getShlokById(id))
            .filter((shlok): shlok is Shlok => shlok !== undefined);
        setBookmarkedShloks(shloks);
        setIsLoading(false);
    }, []);

    return (
        <main className="min-h-screen py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back navigation */}
                <Link
                    href="/enter"
                    className="inline-flex items-center gap-2 text-foreground-muted/50 text-sm tracking-wide hover:text-gold-500 transition-colors mb-12"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </Link>

                {/* Header */}
                <header className="text-center mb-16">
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-500/10 mb-6 opacity-0 animate-fade-in"
                        style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
                    >
                        <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </div>
                    <h1
                        className="text-3xl md:text-5xl font-light text-foreground mb-6 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
                    >
                        Saved Verses
                    </h1>
                    <div
                        className="golden-divider-short mx-auto mb-6 opacity-0 animate-fade-in"
                        style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
                    />
                    <p
                        className="text-foreground-muted max-w-lg mx-auto opacity-0 animate-fade-in"
                        style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
                    >
                        Your personal collection of wisdom from the Bhagavad Gita
                    </p>
                </header>

                {/* Content */}
                {isLoading ? (
                    <div className="text-center py-16">
                        <div className="inline-block w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : bookmarkedShloks.length > 0 ? (
                    <div
                        className="space-y-4 mb-16 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                    >
                        {bookmarkedShloks.map((shlok) => (
                            <Link
                                key={shlok.id}
                                href={`/chapter/${shlok.chapter}/shlok/${shlok.verse}`}
                                className="block group p-6 card-ethereal rounded-lg hover:border-gold-500/30 transition-all duration-500"
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
                                        {shlok.chapter}.{shlok.verse}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div
                        className="text-center py-16 card-ethereal rounded-lg opacity-0 animate-fade-in"
                        style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                    >
                        <svg className="w-16 h-16 text-foreground-muted/30 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                        <h2 className="text-xl font-light text-foreground mb-2">
                            No saved verses yet
                        </h2>
                        <p className="text-foreground-muted mb-8 max-w-md mx-auto">
                            When you find a verse that resonates with your soul, save it here.
                        </p>
                        <Link
                            href="/chapters"
                            className="btn-sacred"
                        >
                            Explore Verses
                        </Link>
                    </div>
                )}

                {/* Tip */}
                {bookmarkedShloks.length > 0 && (
                    <div
                        className="text-center opacity-0 animate-fade-in"
                        style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
                    >
                        <div className="golden-divider mb-8" />
                        <p className="text-foreground-muted/50 text-sm">
                            Your saved verses are stored locally in your browser
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}

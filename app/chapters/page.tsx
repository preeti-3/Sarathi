import { Metadata } from 'next';
import { getAllChapters, getShloksByChapter } from '@/lib/shloks';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'The 18 Chapters | Sarathi',
    description: 'Journey through all 18 chapters of the Bhagavad Gita. The complete dialogue of wisdom between Lord Krishna and Arjuna on the battlefield of Kurukshetra.',
};

export default function ChaptersPage() {
    const chapters = getAllChapters();

    return (
        <main className="min-h-screen py-16 md:py-24 px-4">
            <div className="max-w-5xl mx-auto">
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
                    <h1
                        className="text-3xl md:text-5xl font-light text-foreground mb-6 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
                    >
                        The 18 Chapters
                    </h1>
                    <div
                        className="golden-divider-short mx-auto mb-6 opacity-0 animate-fade-in"
                        style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
                    />
                    <p
                        className="text-foreground-muted max-w-xl mx-auto opacity-0 animate-fade-in"
                        style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
                    >
                        The complete dialogue between Lord Krishna and Arjuna
                    </p>
                </header>

                {/* Chapters List */}
                <div
                    className="space-y-3 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                >
                    {chapters.map((chapter, index) => {
                        const shlokCount = getShloksByChapter(chapter.id).length;
                        return (
                            <Link
                                key={chapter.id}
                                href={`/chapter/${chapter.id}`}
                                className="group flex items-center gap-6 p-5 card-ethereal rounded-lg hover:border-gold-500/30 transition-all duration-500"
                            >
                                {/* Chapter Number */}
                                <div className="w-12 h-12 flex items-center justify-center border border-gold-500/20 rounded-full group-hover:border-gold-500/50 transition-colors">
                                    <span className="text-gold-500/70 font-light text-lg group-hover:text-gold-500 transition-colors">
                                        {chapter.id}
                                    </span>
                                </div>

                                {/* Chapter Info */}
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-foreground font-light text-lg mb-1 group-hover:text-gold-500 transition-colors truncate">
                                        {chapter.englishName}
                                    </h2>
                                    <p className="text-foreground-muted/60 text-sm sanskrit-text">
                                        {chapter.name}
                                    </p>
                                </div>

                                {/* Verse Count */}
                                <div className="text-right hidden sm:block">
                                    <span className="text-foreground-muted/40 text-sm">
                                        {chapter.verseCount} verses
                                    </span>
                                    {shlokCount > 0 && (
                                        <span className="block text-gold-500/60 text-xs mt-1">
                                            {shlokCount} available
                                        </span>
                                    )}
                                </div>

                                {/* Arrow */}
                                <svg
                                    className="w-5 h-5 text-gold-500/30 group-hover:text-gold-500 group-hover:translate-x-1 transition-all"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

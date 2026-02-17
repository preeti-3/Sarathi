import Link from 'next/link';
import { Chapter } from '@/lib/types';

interface ChapterCardProps {
    chapter: Chapter;
    shlokCount?: number;
}

export function ChapterCard({ chapter, shlokCount }: ChapterCardProps) {
    return (
        <Link
            href={`/chapter/${chapter.id}`}
            className="group block rounded-2xl border-glow bg-navy-800/30 backdrop-blur-sm p-6 hover:bg-navy-700/40 transition-all duration-300"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/20 to-gold-600/20 flex items-center justify-center border border-gold-400/20 group-hover:border-gold-400/40 transition-colors">
                    <span className="text-gold-400 font-bold">{chapter.id}</span>
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-gold-400 transition-colors">
                        {chapter.name}
                    </h3>
                    <p className="text-foreground-muted text-sm">
                        {chapter.englishName}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between text-sm">
                <span className="text-foreground-muted">
                    {chapter.verseCount} verses
                    {shlokCount !== undefined && shlokCount > 0 && (
                        <span className="text-gold-400 ml-1">
                            ({shlokCount} available)
                        </span>
                    )}
                </span>
                <svg
                    className="w-5 h-5 text-gold-400/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    );
}

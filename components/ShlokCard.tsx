import Link from 'next/link';
import { Shlok } from '@/lib/types';

interface ShlokCardProps {
    shlok: Shlok;
    variant?: 'default' | 'featured';
}

export function ShlokCard({ shlok, variant = 'default' }: ShlokCardProps) {
    const isFeatured = variant === 'featured';

    return (
        <Link
            href={`/chapter/${shlok.chapter}/shlok/${shlok.verse}`}
            className={`
        block group rounded-2xl border-glow bg-navy-800/30 backdrop-blur-sm
        hover:bg-navy-700/40 transition-all duration-300
        ${isFeatured ? 'p-8' : 'p-6'}
      `}
        >
            {/* Chapter & Verse Badge */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-gold-400 bg-gold-400/10 px-3 py-1 rounded-full">
                    Chapter {shlok.chapter}, Verse {shlok.verse}
                </span>
                <svg
                    className="w-5 h-5 text-gold-400/50 group-hover:text-gold-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>

            {/* Sanskrit Text */}
            <p className={`
        sanskrit-text text-gold-300/90 mb-4 leading-relaxed
        ${isFeatured ? 'text-2xl sanskrit-glow' : 'text-lg'}
      `}>
                {shlok.sanskrit.length > 80 ? shlok.sanskrit.substring(0, 80) + '...' : shlok.sanskrit}
            </p>

            {/* Simple Meaning */}
            <p className="text-foreground-muted text-sm line-clamp-3 mb-4">
                {shlok.simpleMeaning}
            </p>

            {/* Emotion Tags */}
            <div className="flex flex-wrap gap-2">
                {shlok.emotions.slice(0, 3).map((emotion) => (
                    <span
                        key={emotion}
                        className="text-xs text-foreground-muted/70 bg-navy-600/50 px-2 py-1 rounded-md capitalize"
                    >
                        {emotion.replace('-', ' ')}
                    </span>
                ))}
                {shlok.emotions.length > 3 && (
                    <span className="text-xs text-foreground-muted/50 px-2 py-1">
                        +{shlok.emotions.length - 3} more
                    </span>
                )}
            </div>
        </Link>
    );
}

import Link from 'next/link';
import { Emotion } from '@/lib/types';

interface EmotionCardProps {
    emotion: Emotion;
}

export function EmotionCard({ emotion }: EmotionCardProps) {
    return (
        <Link
            href={`/emotions/${emotion.id}`}
            className="group block rounded-2xl border-glow bg-navy-800/30 backdrop-blur-sm p-6 hover:bg-navy-700/40 transition-all duration-300"
        >
            <div className="flex items-start gap-4">
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {emotion.icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-gold-400 transition-colors mb-1">
                        {emotion.name}
                    </h3>
                    <p className="text-foreground-muted text-sm">
                        {emotion.description}
                    </p>
                </div>
                <svg
                    className="w-5 h-5 text-gold-400/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all mt-1"
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

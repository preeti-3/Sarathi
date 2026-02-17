import { Metadata } from 'next';
import { getAllEmotions, getShloksByEmotion } from '@/lib/shloks';
import Link from 'next/link';
import { EmotionId } from '@/lib/types';

export const metadata: Metadata = {
    title: 'What Troubles Your Mind? | Sarathi',
    description: 'Find wisdom from the Bhagavad Gita based on what you are feeling. Verses for fear, self-doubt, anger, attachment, and more.',
};

export default function EmotionsPage() {
    const emotions = getAllEmotions();

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
                    <h1
                        className="text-3xl md:text-5xl font-light text-foreground mb-6 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
                    >
                        What Troubles Your Mind?
                    </h1>
                    <div
                        className="golden-divider-short mx-auto mb-6 opacity-0 animate-fade-in"
                        style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
                    />
                    <p
                        className="text-foreground-muted max-w-lg mx-auto opacity-0 animate-fade-in"
                        style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
                    >
                        Select your inner struggle and receive wisdom that speaks to your soul
                    </p>
                </header>

                {/* Emotions Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                >
                    {emotions.map((emotion) => {
                        const count = getShloksByEmotion(emotion.id as EmotionId).length;
                        return (
                            <Link
                                key={emotion.id}
                                href={`/emotions/${emotion.id}`}
                                className="group flex items-center gap-5 p-6 card-ethereal rounded-lg hover:border-gold-500/30 transition-all duration-500"
                            >
                                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                    {emotion.icon}
                                </span>
                                <div className="flex-1">
                                    <h2 className="text-foreground font-light text-lg mb-1 group-hover:text-gold-500 transition-colors">
                                        {emotion.name}
                                    </h2>
                                    <p className="text-foreground-muted/60 text-sm">
                                        {emotion.description}
                                    </p>
                                </div>
                                {count > 0 && (
                                    <span className="text-gold-500/50 text-sm">
                                        {count}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Sacred Quote */}
                <div
                    className="text-center opacity-0 animate-fade-in"
                    style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
                >
                    <div className="golden-divider mb-12" />
                    <p className="sanskrit-text text-xl md:text-2xl text-gold-500/70 sanskrit-glow mb-4">
                        युद्ध्यस्व विगतज्वरः
                    </p>
                    <p className="text-foreground-muted italic mb-2">
                        "Fight free from mental fever"
                    </p>
                    <p className="text-foreground-muted/50 text-sm">
                        — Bhagavad Gita 3.30
                    </p>
                </div>
            </div>
        </main>
    );
}

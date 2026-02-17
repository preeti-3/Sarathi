import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getEmotionById, getShloksByEmotion, getAllEmotions } from '@/lib/shloks';
import { EmotionId } from '@/lib/types';

interface EmotionPageProps {
    params: Promise<{
        emotionId: string;
    }>;
}

export async function generateStaticParams() {
    const emotions = getAllEmotions();
    return emotions.map((emotion) => ({
        emotionId: emotion.id,
    }));
}

export async function generateMetadata({ params }: EmotionPageProps): Promise<Metadata> {
    const { emotionId } = await params;
    const emotion = getEmotionById(emotionId as EmotionId);

    if (!emotion) {
        return { title: 'Emotion Not Found' };
    }

    return {
        title: `${emotion.name} - Bhagavad Gita Wisdom | Sarathi`,
        description: `${emotion.description}. Find verses from the Bhagavad Gita to help with ${emotion.name.toLowerCase()}.`,
    };
}

export default async function EmotionPage({ params }: EmotionPageProps) {
    const { emotionId } = await params;
    const emotion = getEmotionById(emotionId as EmotionId);

    if (!emotion) {
        notFound();
    }

    const shloks = getShloksByEmotion(emotionId as EmotionId);
    const allEmotions = getAllEmotions();

    return (
        <main className="min-h-screen py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back navigation */}
                <Link
                    href="/emotions"
                    className="inline-flex items-center gap-2 text-foreground-muted/50 text-sm tracking-wide hover:text-gold-500 transition-colors mb-12"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                    All Emotions
                </Link>

                {/* Header */}
                <header className="text-center mb-16">
                    <div
                        className="text-5xl mb-6 opacity-0 animate-fade-in"
                        style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
                    >
                        {emotion.icon}
                    </div>
                    <h1
                        className="text-3xl md:text-5xl font-light text-foreground mb-4 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
                    >
                        {emotion.name}
                    </h1>
                    <div
                        className="golden-divider-short mx-auto mb-6 opacity-0 animate-fade-in"
                        style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
                    />
                    <p
                        className="text-foreground-muted max-w-lg mx-auto opacity-0 animate-fade-in"
                        style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
                    >
                        {emotion.description}
                    </p>
                    <p
                        className="text-gold-500/60 mt-4 text-sm opacity-0 animate-fade-in"
                        style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
                    >
                        {shloks.length} verse{shloks.length !== 1 ? 's' : ''} for guidance
                    </p>
                </header>

                {/* Shloks List */}
                {shloks.length > 0 ? (
                    <div
                        className="space-y-4 mb-20 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                    >
                        {shloks.map((shlok) => (
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
                        className="text-center py-16 card-ethereal rounded-lg mb-20 opacity-0 animate-fade-in"
                        style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                    >
                        <p className="text-foreground-muted mb-4">
                            No verses tagged with this emotion yet.
                        </p>
                        <p className="text-foreground-muted/50 text-sm">
                            More verses are being added. Check back soon.
                        </p>
                    </div>
                )}

                {/* Other Emotions */}
                <section
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
                >
                    <div className="golden-divider mb-12" />
                    <h2 className="text-center text-foreground-muted/60 text-sm tracking-wider uppercase mb-8">
                        Other Struggles
                    </h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {allEmotions
                            .filter(e => e.id !== emotion.id)
                            .map((otherEmotion) => (
                                <Link
                                    key={otherEmotion.id}
                                    href={`/emotions/${otherEmotion.id}`}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-gold-500/10 text-foreground-muted/70 hover:text-gold-500 hover:border-gold-500/30 transition-all text-sm"
                                >
                                    <span>{otherEmotion.icon}</span>
                                    <span>{otherEmotion.name}</span>
                                </Link>
                            ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

import Link from 'next/link';
import { Metadata } from 'next';
import { getAllEmotions, getTodayShlok } from '@/lib/shloks';

export const metadata: Metadata = {
    title: 'Enter the Battlefield | Sarathi',
    description: 'Choose your path through the sacred wisdom of the Bhagavad Gita.',
};

export default function EnterPage() {
    const emotions = getAllEmotions();
    const todayShlok = getTodayShlok();

    return (
        <main className="min-h-screen py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <header className="text-center mb-20">
                    <Link
                        href="/"
                        className="inline-block text-foreground-muted/50 text-sm tracking-[0.2em] uppercase hover:text-gold-500 transition-colors mb-8"
                    >
                        ← Return
                    </Link>
                    <h1
                        className="text-3xl md:text-5xl font-light text-foreground mb-6 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
                    >
                        Choose Your Path
                    </h1>
                    <div className="golden-divider-short mx-auto mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }} />
                    <p
                        className="text-foreground-muted text-lg opacity-0 animate-fade-in"
                        style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
                    >
                        How would you like to receive guidance?
                    </p>
                </header>

                {/* Path Options */}
                <div
                    className="grid gap-6 md:grid-cols-2 mb-16 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
                >
                    {/* By Chapter */}
                    <Link
                        href="/chapters"
                        className="group relative block p-8 md:p-10 card-ethereal rounded-lg hover:border-gold-500/30 transition-all duration-500"
                    >
                        <div className="mb-6">
                            <span className="text-gold-500/60 text-xs tracking-[0.2em] uppercase">
                                Structured Path
                            </span>
                        </div>
                        <h2 className="text-2xl font-light text-foreground mb-4 group-hover:text-gold-500 transition-colors">
                            Explore by Chapter
                        </h2>
                        <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                            Journey through the 18 chapters of the Gita. Follow the dialogue
                            between Krishna and Arjuna from beginning to end.
                        </p>
                        <span className="inline-flex items-center gap-2 text-gold-500/70 text-sm group-hover:text-gold-500 transition-colors">
                            18 Chapters
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </Link>

                    {/* By Emotion */}
                    <Link
                        href="/emotions"
                        className="group relative block p-8 md:p-10 card-ethereal rounded-lg hover:border-gold-500/30 transition-all duration-500"
                    >
                        <div className="mb-6">
                            <span className="text-gold-500/60 text-xs tracking-[0.2em] uppercase">
                                Intuitive Path
                            </span>
                        </div>
                        <h2 className="text-2xl font-light text-foreground mb-4 group-hover:text-gold-500 transition-colors">
                            Find by Emotion
                        </h2>
                        <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                            What troubles your mind today? Select your inner struggle and
                            receive verses that speak directly to your soul.
                        </p>
                        <span className="inline-flex items-center gap-2 text-gold-500/70 text-sm group-hover:text-gold-500 transition-colors">
                            {emotions.length} Emotions
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </Link>
                </div>

                {/* Today's Wisdom */}
                <section
                    className="text-center opacity-0 animate-fade-in"
                    style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
                >
                    <div className="golden-divider mb-12" />

                    <span className="text-gold-500/50 text-xs tracking-[0.2em] uppercase">
                        Today's Wisdom
                    </span>

                    <Link
                        href={`/chapter/${todayShlok.chapter}/shlok/${todayShlok.verse}`}
                        className="group block mt-8 max-w-2xl mx-auto"
                    >
                        <p className="sanskrit-text text-xl md:text-2xl text-gold-500/70 sanskrit-glow mb-6 leading-relaxed">
                            {todayShlok.sanskrit.substring(0, 60)}...
                        </p>
                        <p className="text-foreground-muted text-sm mb-4">
                            Chapter {todayShlok.chapter}, Verse {todayShlok.verse}
                        </p>
                        <span className="text-gold-500/60 text-sm group-hover:text-gold-500 transition-colors">
                            Read full verse →
                        </span>
                    </Link>
                </section>
            </div>
        </main>
    );
}

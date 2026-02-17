import Link from 'next/link';
import { Shlok } from '@/lib/types';

interface TodayShlokProps {
    shlok: Shlok;
}

export function TodayShlok({ shlok }: TodayShlokProps) {
    return (
        <section className="relative py-20">
            {/* Background glow effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                <div className="w-96 h-96 bg-gold-500/10 rounded-full filter blur-3xl" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <span className="inline-block text-xs font-medium text-gold-400 bg-gold-400/10 px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
                        Today's Shlok
                    </span>
                    <p className="text-foreground-muted text-sm">
                        Chapter {shlok.chapter}, Verse {shlok.verse}
                    </p>
                </div>

                <div className="border-glow rounded-3xl bg-navy-800/20 backdrop-blur-sm p-8 md:p-12 text-center">
                    {/* Sanskrit Text */}
                    <p className="sanskrit-text text-2xl md:text-3xl lg:text-4xl text-gold-300 sanskrit-glow leading-relaxed mb-8">
                        {shlok.sanskrit}
                    </p>

                    {/* Transliteration */}
                    <p className="transliteration-text text-foreground-muted/80 text-lg mb-8">
                        {shlok.transliteration}
                    </p>

                    {/* Divider */}
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent mx-auto mb-8" />

                    {/* Simple Meaning */}
                    <p className="text-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                        {shlok.simpleMeaning}
                    </p>

                    {/* CTA */}
                    <Link
                        href={`/chapter/${shlok.chapter}/shlok/${shlok.verse}`}
                        className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors group"
                    >
                        Read Full Reflection
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

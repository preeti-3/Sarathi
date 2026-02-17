import { Shlok } from '@/lib/types';

interface ManuscriptCardProps {
    shlok: Shlok;
}

export function ManuscriptCard({ shlok }: ManuscriptCardProps) {
    return (
        <div className="relative max-w-3xl mx-auto">
            {/* Warm radial glow behind card */}
            <div className="manuscript-glow" />

            {/* Main manuscript card */}
            <article className="manuscript-card px-8 py-12 md:px-12 md:py-16">
                {/* Chapter & Verse indicator */}
                <div className="text-center mb-8">
                    <span className="text-gold-700/80 text-sm tracking-[0.2em] uppercase">
                        Chapter {shlok.chapter} • Verse {shlok.verse}
                    </span>
                </div>

                {/* Sanskrit Text */}
                <div className="text-center mb-10">
                    <p className="sanskrit-text text-2xl md:text-3xl lg:text-4xl text-gold-800 sanskrit-glow-warm leading-relaxed">
                        {shlok.sanskrit}
                    </p>
                </div>

                {/* Transliteration */}
                <div className="text-center mb-10">
                    <p className="transliteration-text text-gold-600/80 text-base md:text-lg">
                        {shlok.transliteration}
                    </p>
                </div>

                {/* Golden Divider */}
                <div className="golden-divider-short mx-auto mb-10" />

                {/* Simple Meaning */}
                <div className="mb-12">
                    <h2 className="text-gold-800/60 text-xs tracking-[0.2em] uppercase text-center mb-6">
                        Meaning
                    </h2>
                    <p className="meaning-text text-gold-900/90 text-lg md:text-xl text-center max-w-2xl mx-auto">
                        {shlok.simpleMeaning}
                    </p>
                </div>

                {/* Practical Explanation */}
                <div className="mb-12 px-4 md:px-8">
                    <p className="meaning-text text-gold-800/80 text-base md:text-lg leading-relaxed text-center">
                        {shlok.practicalExplanation}
                    </p>
                </div>

                {/* Golden Divider */}
                <div className="golden-divider mb-12" />

                {/* Strength Reflection */}
                <div className="mb-10">
                    <h3 className="flex items-center justify-center gap-3 text-gold-700 text-sm tracking-[0.15em] uppercase mb-6">
                        <span className="w-8 h-px bg-gold-500/40" />
                        Strength Reflection
                        <span className="w-8 h-px bg-gold-500/40" />
                    </h3>
                    <blockquote className="text-center">
                        <p className="meaning-text text-gold-800/90 text-lg italic leading-relaxed max-w-xl mx-auto">
                            "{shlok.strengthReflection}"
                        </p>
                    </blockquote>
                </div>

                {/* Devotional Reflection */}
                <div>
                    <h3 className="flex items-center justify-center gap-3 text-gold-700 text-sm tracking-[0.15em] uppercase mb-6">
                        <span className="w-8 h-px bg-gold-500/40" />
                        Devotional Surrender
                        <span className="w-8 h-px bg-gold-500/40" />
                    </h3>
                    <blockquote className="text-center">
                        <p className="meaning-text text-gold-800/80 text-base leading-relaxed max-w-xl mx-auto">
                            {shlok.devotionalSurrender}
                        </p>
                    </blockquote>
                </div>
            </article>
        </div>
    );
}

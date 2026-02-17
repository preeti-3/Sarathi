import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getShlokByChapterAndVerse, getChapterById, getShloksByChapter, getAllShloks } from '@/lib/shloks';
import { ManuscriptCard } from '@/components/ManuscriptCard';
import { BookmarkButton } from '@/components/BookmarkButton';

interface ShlokPageProps {
    params: Promise<{
        id: string;
        verseId: string;
    }>;
}

export async function generateStaticParams() {
    const shloks = getAllShloks();
    return shloks.map((shlok) => ({
        id: shlok.chapter.toString(),
        verseId: shlok.verse.toString(),
    }));
}

export async function generateMetadata({ params }: ShlokPageProps): Promise<Metadata> {
    const { id, verseId } = await params;
    const shlok = getShlokByChapterAndVerse(parseInt(id), parseInt(verseId));

    if (!shlok) {
        return { title: 'Verse Not Found' };
    }

    return {
        title: `Bhagavad Gita ${shlok.chapter}.${shlok.verse} | Sarathi`,
        description: shlok.simpleMeaning,
        openGraph: {
            title: `Bhagavad Gita ${shlok.chapter}.${shlok.verse}`,
            description: shlok.simpleMeaning,
        },
    };
}

export default async function ShlokPage({ params }: ShlokPageProps) {
    const { id, verseId } = await params;
    const chapterId = parseInt(id);
    const verseNumber = parseInt(verseId);

    const shlok = getShlokByChapterAndVerse(chapterId, verseNumber);
    const chapter = getChapterById(chapterId);

    if (!shlok || !chapter) {
        notFound();
    }

    // Get chapter shloks for navigation
    const chapterShloks = getShloksByChapter(chapterId);
    const currentIndex = chapterShloks.findIndex(s => s.id === shlok.id);
    const prevShlok = currentIndex > 0 ? chapterShloks[currentIndex - 1] : null;
    const nextShlok = currentIndex < chapterShloks.length - 1 ? chapterShloks[currentIndex + 1] : null;

    return (
        <main className="min-h-screen py-16 md:py-24 px-4">
            {/* Back navigation */}
            <div className="max-w-3xl mx-auto mb-8">
                <Link
                    href={`/chapter/${chapterId}`}
                    className="inline-flex items-center gap-2 text-foreground-muted/50 text-sm tracking-wide hover:text-gold-500 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                    {chapter.englishName}
                </Link>
            </div>

            {/* Manuscript Card */}
            <div
                className="opacity-0 animate-fade-in-scale"
                style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
            >
                <ManuscriptCard shlok={shlok} />
            </div>

            {/* Actions & Navigation */}
            <div className="max-w-3xl mx-auto mt-12">
                {/* Emotion Tags */}
                <div
                    className="flex flex-wrap justify-center gap-3 mb-10 opacity-0 animate-fade-in"
                    style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                >
                    {shlok.emotions.map((emotion) => (
                        <Link
                            key={emotion}
                            href={`/emotions/${emotion}`}
                            className="px-4 py-2 rounded-full card-ethereal text-foreground-muted hover:text-gold-500 hover:border-gold-500/30 transition-all text-sm capitalize"
                        >
                            {emotion.replace('-', ' ')}
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div
                    className="flex justify-center gap-4 mb-16 opacity-0 animate-fade-in"
                    style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
                >
                    <BookmarkButton shlokId={shlok.id} />
                </div>

                {/* Verse Navigation */}
                <nav
                    className="flex items-center justify-between opacity-0 animate-fade-in"
                    style={{ animationDelay: '1000ms', animationFillMode: 'forwards' }}
                >
                    <div className="flex-1">
                        {prevShlok ? (
                            <Link
                                href={`/chapter/${prevShlok.chapter}/shlok/${prevShlok.verse}`}
                                className="group inline-flex items-center gap-3 text-foreground-muted/60 hover:text-gold-500 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                </svg>
                                <span className="text-sm">Verse {prevShlok.verse}</span>
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>

                    <Link
                        href={`/chapter/${chapterId}`}
                        className="text-foreground-muted/40 hover:text-gold-500 transition-colors text-xs tracking-[0.15em] uppercase"
                    >
                        All Verses
                    </Link>

                    <div className="flex-1 flex justify-end">
                        {nextShlok ? (
                            <Link
                                href={`/chapter/${nextShlok.chapter}/shlok/${nextShlok.verse}`}
                                className="group inline-flex items-center gap-3 text-foreground-muted/60 hover:text-gold-500 transition-colors"
                            >
                                <span className="text-sm">Verse {nextShlok.verse}</span>
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </nav>
            </div>
        </main>
    );
}

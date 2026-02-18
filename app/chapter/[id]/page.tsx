import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getChapterById, getShloksByChapter, getAllChapters } from '@/lib/shloks';
import { InfiniteVerseList } from '@/components/InfiniteVerseList';

interface ChapterPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    const chapters = getAllChapters();
    return chapters.map((chapter) => ({
        id: chapter.id.toString(),
    }));
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
    const { id } = await params;
    const chapter = getChapterById(parseInt(id));

    if (!chapter) {
        return { title: 'Chapter Not Found' };
    }

    return {
        title: `Chapter ${chapter.id}: ${chapter.englishName} | Sarathi`,
        description: `Explore the wisdom of ${chapter.name} (${chapter.englishName}) from the Bhagavad Gita. ${chapter.verseCount} verses of divine guidance.`,
    };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
    const { id } = await params;
    const chapterId = parseInt(id);
    const chapter = getChapterById(chapterId);

    if (!chapter) {
        notFound();
    }

    const shloks = getShloksByChapter(chapterId);

    // Get previous and next chapters
    const prevChapter = chapterId > 1 ? getChapterById(chapterId - 1) : null;
    const nextChapter = chapterId < 18 ? getChapterById(chapterId + 1) : null;

    return (
        <main className="min-h-screen py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back navigation */}
                <Link
                    href="/chapters"
                    className="inline-flex items-center gap-2 text-foreground-muted/50 text-sm tracking-wide hover:text-gold-500 transition-colors mb-12"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                    All Chapters
                </Link>

                {/* Chapter Header */}
                <header className="text-center mb-16">
                    <div
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/20 mb-6 opacity-0 animate-fade-in"
                        style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
                    >
                        <span className="text-2xl font-light text-gold-500">{chapter.id}</span>
                    </div>
                    <h1
                        className="text-3xl md:text-5xl font-light text-foreground mb-4 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
                    >
                        {chapter.englishName}
                    </h1>
                    <p
                        className="sanskrit-text text-xl md:text-2xl text-gold-500/70 sanskrit-glow mb-4 opacity-0 animate-fade-in"
                        style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
                    >
                        {chapter.name}
                    </p>
                    <div
                        className="golden-divider-short mx-auto mb-6 opacity-0 animate-fade-in"
                        style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
                    />
                    <p
                        className="text-foreground-muted/60 text-sm opacity-0 animate-fade-in"
                        style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
                    >
                        {chapter.verseCount} verses
                        {shloks.length > 0 && ` • ${shloks.length} available`}
                    </p>
                </header>

                {/* Shloks List with Infinite Scrolling */}
                {shloks.length > 0 ? (
                    <div
                        className="mb-16 opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                    >
                        <InfiniteVerseList
                            shloks={shloks}
                            chapterId={chapterId}
                            initialLoadCount={15}
                            loadMoreCount={10}
                        />
                    </div>
                ) : (
                    <div
                        className="text-center py-16 card-ethereal rounded-lg mb-16 opacity-0 animate-fade-in"
                        style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
                    >
                        <p className="text-foreground-muted mb-4">
                            No verses available yet for this chapter.
                        </p>
                        <p className="text-foreground-muted/50 text-sm">
                            More verses are being added. Check back soon.
                        </p>
                    </div>
                )}

                {/* Chapter Navigation */}
                <div
                    className="flex items-center justify-between pt-8 opacity-0 animate-fade-in"
                    style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
                >
                    <div className="golden-divider flex-1" />
                </div>

                <div
                    className="flex items-center justify-between py-8 opacity-0 animate-fade-in"
                    style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
                >
                    <div>
                        {prevChapter ? (
                            <Link
                                href={`/chapter/${prevChapter.id}`}
                                className="group flex items-center gap-3 text-foreground-muted/60 hover:text-gold-500 transition-colors"
                            >
                                <svg
                                    className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                </svg>
                                <span className="text-sm">Chapter {prevChapter.id}</span>
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>

                    <div>
                        {nextChapter ? (
                            <Link
                                href={`/chapter/${nextChapter.id}`}
                                className="group flex items-center gap-3 text-foreground-muted/60 hover:text-gold-500 transition-colors"
                            >
                                <span className="text-sm">Chapter {nextChapter.id}</span>
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
                </div>
            </div>
        </main>
    );
}

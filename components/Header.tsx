import Link from 'next/link';

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy-900/80 border-b border-gold-500/10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center gold-glow transition-glow">
                            <span className="text-navy-900 font-bold text-sm">ॐ</span>
                        </div>
                        <span className="text-xl font-semibold text-gold-400 group-hover:text-gold-300 transition-colors">
                            Sarathi
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/chapters"
                            className="text-foreground-muted hover:text-gold-400 transition-colors text-sm font-medium"
                        >
                            Chapters
                        </Link>
                        <Link
                            href="/emotions"
                            className="text-foreground-muted hover:text-gold-400 transition-colors text-sm font-medium"
                        >
                            By Emotion
                        </Link>
                        <Link
                            href="/bookmarks"
                            className="text-foreground-muted hover:text-gold-400 transition-colors text-sm font-medium"
                        >
                            Saved
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden p-2 text-foreground-muted hover:text-gold-400 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gold-500/10 bg-navy-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <span className="text-navy-900 font-bold text-sm">ॐ</span>
              </div>
              <span className="text-xl font-semibold text-gold-400">Sarathi</span>
            </div>
            <p className="text-foreground-muted text-sm max-w-xs">
              Your companion on the path of self-discovery through the timeless wisdom of the Bhagavad Gita.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-gold-400 font-semibold">Explore</h3>
            <div className="flex flex-col gap-2">
              <Link href="/chapters" className="text-foreground-muted hover:text-gold-400 transition-colors text-sm">
                All Chapters
              </Link>
              <Link href="/emotions" className="text-foreground-muted hover:text-gold-400 transition-colors text-sm">
                Browse by Emotion
              </Link>
              <Link href="/bookmarks" className="text-foreground-muted hover:text-gold-400 transition-colors text-sm">
                Saved Verses
              </Link>
            </div>
          </div>

          {/* Sanskrit Quote */}
          <div className="space-y-4">
            <h3 className="text-gold-400 font-semibold">Daily Wisdom</h3>
            <p className="sanskrit-text text-foreground-muted text-lg">
              योगस्थः कुरु कर्माणि
            </p>
            <p className="text-foreground-muted text-sm italic">
              "Perform actions established in yoga"
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold-500/10 text-center">
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} Sarathi. Crafted with devotion.
          </p>
        </div>
      </div>
    </footer>
  );
}

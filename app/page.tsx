import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative h-screen bg-[url('/painting-representing-krishna.jpg')] bg-cover bg-center flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      {/* Fog layers for atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="fog-layer fog-1" />
        <div className="fog-layer fog-2" />
        <div className="fog-layer fog-3" />
      </div>

      {/* Golden radial glow behind heading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
        <div className="golden-aura animate-breathe" />
      </div>

      {/* Sacred content */}
      <div className="relative z-20 text-center max-w-2xl mx-auto">
        {/* Sanskrit invocation */}
        <p
          className="sanskrit-text text-gold-400 text-sm md:text-base tracking-[0.3em] mb-12 opacity-0 animate-fade-in drop-shadow-lg"
          style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
        >
          ॐ श्री कृष्णाय नमः
        </p>

        {/* Main heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight opacity-0 animate-fade-in-up drop-shadow-2xl"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards', textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9)' }}
        >
          <span className="block">The Battle</span>
          <span className="block mt-2 text-gold-400" style={{ textShadow: '0 0 40px rgba(212, 175, 55, 0.5), 0 0 80px rgba(212, 175, 55, 0.3), 0 4px 20px rgba(0,0,0,0.8)' }}>Is Within.</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-white/90 text-lg md:text-xl font-medium tracking-wide mb-16 opacity-0 animate-fade-in drop-shadow-lg"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          Ancient wisdom for modern warriors.
        </p>

        {/* Sacred button */}
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1200ms', animationFillMode: 'forwards' }}
        >
          <Link href="/enter" className="btn-sacred-hero">
            Enter the Battlefield
          </Link>
        </div>
      </div>
    </main>
  );
}

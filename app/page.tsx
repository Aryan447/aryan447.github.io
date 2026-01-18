'use client';

import { useState } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/create-order', { method: 'POST' });
      const order = await response.json();

      const options = {
        key: 'rzp_test_S5E4EoiNrboy8m',
        amount: order.amount,
        currency: order.currency,
        name: 'Aryan - Portfolio',
        description: 'Get in Touch Payment',
        order_id: order.id,
        handler: function (response: any) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          window.location.href = 'mailto:singharyan4477@gmail.com';
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#d4a373',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
    return (
        <>
            <main>
                <div className="noise-overlay"></div>

                {/* Navigation */}
                <nav className="fixed w-full z-40 bg-rose-base/90 backdrop-blur-sm py-6 border-b border-rose-muted/10">
                    <div
                        className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center text-sm font-medium tracking-widest uppercase">
                        <a href="#"
                            className="text-rose-text font-serif italic text-xl tracking-normal normal-case hover:text-rose-rose transition-colors">
                            Aryan.
                        </a>
                        <div className="hidden md:flex space-x-12 text-rose-muted">
                            <a href="#work" className="hover:text-rose-text transition-colors text-xs tracking-[0.2em]">Selected Work</a>
                            <a href="#about" className="hover:text-rose-text transition-colors text-xs tracking-[0.2em]">Philosophy</a>
                            <a href="#contact" className="hover:text-rose-text transition-colors text-xs tracking-[0.2em]">Contact</a>
                        </div>
                        <button
                            onClick={handlePayment}
                            disabled={loading}
                            className="text-rose-gold border border-rose-gold/20 px-6 py-2 rounded-full hover:bg-rose-gold hover:text-rose-base transition-all duration-300 disabled:opacity-50">
                            {loading ? 'Processing...' : 'Get in touch'}
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 pt-20 max-w-7xl mx-auto">
                    <div className="max-w-4xl">
                        <p className="text-rose-rose font-medium tracking-widest text-sm mb-6 uppercase">Software Engineer • ML Practitioner
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-rose-text leading-[1] mb-12">
                            Crafting <span className="italic text-rose-love">intelligent</span> systems<br />
                            with <span className="italic text-rose-foam">precision</span> and <span
                                className="italic text-rose-gold">purpose</span>.
                        </h1>

                        <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-rose-subtle max-w-3xl">
                            <p className="text-lg font-light leading-relaxed">
                                I bridge the gap between heavy-duty machine learning algorithms and refined user experiences.
                                Specializing in scalable architecture, swarm intelligence, and clean, maintainable code.
                            </p>
                            <div className="flex flex-col gap-4 text-sm font-medium tracking-widest uppercase min-w-max">
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-rose-pine"></span> Available for hire
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-rose-iris"></span> Remote / Relocation
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery / Work Section */}
                <section id="work" className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
                    <div className="flex justify-between items-baseline mb-20 border-b border-rose-muted/10 pb-6">
                        <h2 className="text-3xl font-serif italic text-rose-text">Selected Works</h2>
                        <span className="text-rose-muted text-xs tracking-widest uppercase hidden md:inline-block">2024 — 2025</span>
                    </div>

                    {/* Masonry Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">

                        {/* Project 1 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-rose-surface rounded-sm mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-rose-overlay/50 group-hover:bg-rose-overlay/0 transition-all duration-500">
                                </div>
                                {/* Placeholder Icon/Visual */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-rose-subtle group-hover:text-rose-love transition-colors duration-500 group-hover:scale-105 transform">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-rose-text mb-2 group-hover:text-rose-love transition-colors">AML
                                        Detection</h3>
                                    <p className="text-rose-muted text-sm leading-relaxed max-w-sm">Anti-Money Laundering pipeline using XGBoost &
                                        Swarm Intelligence.</p>
                                </div>
                                <a href="https://github.com/Aryan447/AML-XGBoost-Swarm-Optimization" target="_blank" rel="noopener noreferrer"
                                    className="text-xs tracking-widest uppercase border-b border-rose-muted/30 pb-1 hover:border-rose-love hover:text-rose-love transition-all">View
                                    Code</a>
                            </div>
                        </div>

                        {/* Project 2 (Offset top) */}
                        <div className="group cursor-pointer md:mt-24">
                            <div className="aspect-[4/3] bg-rose-surface rounded-sm mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-rose-overlay/50 group-hover:bg-rose-overlay/0 transition-all duration-500">
                                </div>
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-rose-subtle group-hover:text-rose-gold transition-colors duration-500 group-hover:scale-105 transform">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-rose-text mb-2 group-hover:text-rose-gold transition-colors">Store Rails
                                    </h3>
                                    <p className="text-rose-muted text-sm leading-relaxed max-w-sm">Full-stack e-commerce architecture built with
                                        Ruby on Rails 7.</p>
                                </div>
                                <a href="https://github.com/Aryan447/store-rails" target="_blank" rel="noopener noreferrer"
                                    className="text-xs tracking-widest uppercase border-b border-rose-muted/30 pb-1 hover:border-rose-gold hover:text-rose-gold transition-all">View
                                    Code</a>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-rose-surface rounded-sm mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-rose-overlay/50 group-hover:bg-rose-overlay/0 transition-all duration-500">
                                </div>
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-rose-subtle group-hover:text-rose-pine transition-colors duration-500 group-hover:scale-105 transform">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-rose-text mb-2 group-hover:text-rose-pine transition-colors">House Price
                                        AI</h3>
                                    <p className="text-rose-muted text-sm leading-relaxed max-w-sm">Containerized MLOps prediction service with
                                        Docker & Python.</p>
                                </div>
                                <a href="https://github.com/Aryan447/house-price-predictor" target="_blank" rel="noopener noreferrer"
                                    className="text-xs tracking-widest uppercase border-b border-rose-muted/30 pb-1 hover:border-rose-pine hover:text-rose-pine transition-all">View
                                    Code</a>
                            </div>
                        </div>

                        {/* Project 4 (Offset) */}
                        <div className="group cursor-pointer md:mt-24">
                            <div className="aspect-[4/3] bg-rose-surface rounded-sm mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-rose-overlay/50 group-hover:bg-rose-overlay/0 transition-all duration-500">
                                </div>
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-rose-subtle group-hover:text-rose-foam transition-colors duration-500 group-hover:scale-105 transform">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-rose-text mb-2 group-hover:text-rose-foam transition-colors">Clarity
                                        Cartel</h3>
                                    <p className="text-rose-muted text-sm leading-relaxed max-w-sm">High-performance analytics dashboard using
                                        TypeScript.</p>
                                </div>
                                <a href="https://github.com/Aryan447/clarity-cartel" target="_blank" rel="noopener noreferrer"
                                    className="text-xs tracking-widest uppercase border-b border-rose-muted/30 pb-1 hover:border-rose-foam hover:text-rose-foam transition-all">View
                                    Code</a>
                            </div>
                        </div>

                        {/* Project 5 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/3] bg-rose-surface rounded-sm mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-rose-overlay/50 group-hover:bg-rose-overlay/0 transition-all duration-500">
                                </div>
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-rose-subtle group-hover:text-rose-iris transition-colors duration-500 group-hover:scale-105 transform">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-rose-text mb-2 group-hover:text-rose-iris transition-colors">True
                                        Ratings</h3>
                                    <p className="text-rose-muted text-sm leading-relaxed max-w-sm">GitHub profile analysis and scoring algorithm.
                                    </p>
                                </div>
                                <a href="https://github.com/Aryan447/true-ratings" target="_blank" rel="noopener noreferrer"
                                    className="text-xs tracking-widest uppercase border-b border-rose-muted/30 pb-1 hover:border-rose-iris hover:text-rose-iris transition-all">View
                                    Code</a>
                            </div>
                        </div>

                        {/* Project 6 (Offset) */}
                        <div className="group cursor-pointer md:mt-24">
                            <div className="aspect-[4/3] bg-rose-surface rounded-sm mb-6 overflow-hidden relative">
                                <div className="absolute inset-0 bg-rose-overlay/50 group-hover:bg-rose-overlay/0 transition-all duration-500">
                                </div>
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-rose-subtle group-hover:text-rose-rose transition-colors duration-500 group-hover:scale-105 transform">
                                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-rose-text mb-2 group-hover:text-rose-rose transition-colors">Go Chat
                                        Client</h3>
                                    <p className="text-rose-muted text-sm leading-relaxed max-w-sm">Low-latency realtime chat built with Go and
                                        WebSockets.</p>
                                </div>
                                <a href="https://github.com/Aryan447/go-chat-client" target="_blank" rel="noopener noreferrer"
                                    className="text-xs tracking-widest uppercase border-b border-rose-muted/30 pb-1 hover:border-rose-rose hover:text-rose-rose transition-all">View
                                    Code</a>
                            </div>
                        </div>

                    </div>

                    <div className="mt-24 text-center">
                        <a href="https://github.com/Aryan447" target="_blank" rel="noopener noreferrer"
                            className="inline-block text-rose-text border border-rose-text px-8 py-3 hover:bg-rose-text hover:text-rose-base transition-all duration-300">
                            View Active Repositories
                        </a>
                    </div>
                </section>

                {/* About / Philosophy */}
                <section id="about" className="py-24 bg-rose-surface relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif italic text-rose-text mb-8">The Philosophy</h2>
                            <div className="space-y-6 text-rose-subtle font-light leading-loose text-lg">
                                <p>
                                    I believe that great software is indistinguishable from art. It should be robust beneath the surface, yet
                                    elegant and intuitive to the touch.
                                </p>
                                <p>
                                    My approach blends rigorous engineering principles—proven patterns, type safety, and automated testing—with
                                    a refined aesthetic sensibility.
                                </p>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium tracking-[0.2em] text-rose-gold uppercase">
                                <span>Python</span>
                                <span>Rust</span>
                                <span>Go</span>
                                <span>Next.js</span>
                                <span>Docker</span>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px] border border-rose-muted/10 p-8 flex items-center justify-center">
                            {/* Abstract Decoration */}
                            <div className="absolute inset-0 bg-rose-base/30"></div>
                            <div className="relative z-10 text-center">
                                <span className="text-6xl font-serif text-rose-love block mb-2">"</span>
                                <p className="text-2xl font-serif text-rose-text italic text-center max-w-md">
                                    Simplicity is the ultimate sophistication.
                                </p>
                                <span className="block mt-6 text-sm tracking-widest text-rose-muted uppercase">— Leonardo da Vinci</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Footer */}
                <section id="contact" className="py-32 px-6 sm:px-12 max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif text-rose-text mb-8">Let's build something timeless.</h2>
                    <p className="text-rose-muted mb-12 max-w-xl mx-auto font-light">
                        I am currently open to new collaborations and opportunities. If you have a vision, let's discuss how we can bring
                        it to life.
                    </p>
                    <a href="mailto:singharyan4477@gmail.com"
                        className="text-2xl md:text-3xl font-serif italic text-rose-gold hover:text-rose-love transition-colors underline decoration-1 underline-offset-8">
                        singharyan4477@gmail.com
                    </a>

                    <div className="mt-24 flex justify-between items-end border-t border-rose-muted/10 pt-12 text-sm text-rose-subtle">
                        <div className="flex flex-col text-left gap-2">
                            <span>&copy; 2025 Aryan</span>
                            <span className="text-xs text-rose-muted">Engineered in India</span>
                        </div>

                        <div className="flex gap-8">
                            <a href="https://x.com/aryan_447" className="hover-underline-animation">Twitter / X</a>
                            <a href="https://github.com/Aryan447" className="hover-underline-animation">GitHub</a>
                            <a href="https://linkedin.com/in/aryan447" className="hover-underline-animation">LinkedIn</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

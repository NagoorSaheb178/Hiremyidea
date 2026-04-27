'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const avatars = [
  { src: 'https://www.oliveapp.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1599566150163-29194dcaad36%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D3387%26q%3D80&w=256&q=75', alt: 'John Doe' },
  { src: 'https://www.oliveapp.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1535713875002-d1d0cf377fde%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=256&q=75', alt: 'Robert Johnson' },
  { src: 'https://www.oliveapp.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1580489944761-15a19d654956%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=256&q=75', alt: 'Jane Smith' },
  { src: 'https://www.oliveapp.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1438761681033-6461ffad8d80%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%253D%253D%26auto%3Dformat%26fit%3Dcrop%26w%3D800%26q%3D60&w=256&q=75', alt: 'Emily Davis' },
];

const SafeBadgeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
    <g filter="url(#safe-badge-filter)">
      <path
        fill="#1F3824"
        d="M9.104 2.58c.545 0 1.07.198 1.48.558l.108.102.488.488a.84.84 0 0 0 .497.239l.095.006h.7a2.24 2.24 0 0 1 2.237 2.112l.003.128v.7c0 .189.065.373.18.52l.064.07.488.489a2.24 2.24 0 0 1 .103 3.068l-.102.107-.488.49a.84.84 0 0 0-.24.496l-.005.095v.7a2.24 2.24 0 0 1-2.113 2.236l-.127.004h-.7a.84.84 0 0 0-.52.18l-.07.064-.489.488a2.24 2.24 0 0 1-3.068.103l-.108-.102-.488-.489a.84.84 0 0 0-.497-.238l-.095-.006h-.7A2.24 2.24 0 0 1 3.5 13.075l-.003-.127v-.7a.84.84 0 0 0-.18-.52l-.064-.07-.488-.49a2.24 2.24 0 0 1-.103-3.067l.102-.108.488-.488a.84.84 0 0 0 .24-.498l.005-.094v-.7l.003-.128a2.24 2.24 0 0 1 2.11-2.109l.127-.003h.7a.84.84 0 0 0 .52-.181l.07-.063.489-.488a2.24 2.24 0 0 1 1.588-.66Zm2.589 5.098a.7.7 0 0 0-.99 0L8.397 9.983l-.905-.905-.066-.058a.7.7 0 0 0-.924 1.048l1.4 1.4.066.059a.7.7 0 0 0 .924-.059l2.8-2.8.059-.066a.7.7 0 0 0-.058-.924Z"
      />
    </g>
    <defs>
      <filter id="safe-badge-filter" width="17.398" height="17.398" x="0.406" y="0.881" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation="0.849" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.121569 0 0 0 0 0.219608 0 0 0 0 0.141176 0 0 0 0.3 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
    <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
  </svg>
);

const products = [
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-1.png&w=256&q=75', alt: 'Organic Bagels', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-1-details.png' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-2.png&w=256&q=75', alt: 'Cocao-nectar Bar, Oregon Peppermint', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-2-details.png' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-3.png&w=256&q=75', alt: 'Strawberry Vanilla Sparkling Tonic', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-3-details.png' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-4.png&w=256&q=75', alt: 'Fig and Olive Crackers', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-4-details.png' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-5.png&w=256&q=75', alt: 'San Pellegrino Sparkling Natural Mineral Water', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-5-details.png' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-6.png&w=256&q=75', alt: 'Sea Salt & Vinegar Potato Crisps', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-6-details.png' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-7.png&w=256&q=75', alt: 'Larabar Chocolate Chip Cookie Dough Fruit & Nut Bar', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-7-details.png' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-8.png&w=256&q=75', alt: 'Sourlittles', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-8-details.png' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-9.png&w=256&q=75', alt: 'Gradea Raw Pure Jersey Milk', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-9-details.png' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-10.png&w=256&q=75', alt: 'Late July Snacks Thin and Crispy Organic Tortilla', detailsSrc: 'https://www.oliveapp.com/assets/images/how-to/slider/product-10-details.png' },
];

const allProducts = [...products, ...products, ...products];
const ITEM_WIDTH = 100;
const GAP = 8;
const STEP = ITEM_WIDTH + GAP;

export default function HeroSection() {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(products.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeIndex === products.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(products.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section aria-labelledby="hero-heading" className="hero-section flex flex-col items-center">
      <div className="hero-card-inner">
        <div className="hero-card-padding">

          {/* ── Social proof / Trust badge ── */}
          <div className="hero-social-proof animate-fade-in-up">
            <div className="hero-avatars">
              {avatars.map((a) => (
                <div key={a.alt} className="hero-avatar">
                  <div className="hero-avatar-img-wrap">
                    <Image src={a.src} alt={a.alt} width={32} height={32} className="hero-avatar-img" />
                  </div>
                </div>
              ))}
              <div className="hero-avatar">
                <div className="hero-avatar-badge">
                  <span>+3k</span>
                </div>
              </div>
            </div>
            <span className="hero-tagline">Trusted by thousands of healthy families</span>
          </div>

          {/* ── Headline ── */}
          <h1 id="hero-heading" className="hero-headline animate-fade-in-up-delay-1">
            The Safest Way to Shop for Groceries
          </h1>

          {/* ── Sub-headline ── */}
          <p className="hero-subtitle animate-fade-in-up-delay-2">
            Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your
            Family&apos;s Diet and Get Expert-Backed Food Insights
          </p>

          {/* ── CTA ── */}
          <div className="hero-cta-row">
            <Link
              href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn"
            >
              <AppleIcon />
              Download for iOS
            </Link>
            <Link
              href="https://discord.gg/olive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-800 hover:text-neutral-600 transition-colors flex items-center gap-1"
            >
              Join the Olive Community
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* ── Phone Mockup + Product Strip ── */}
          <div className="relative z-50 h-[500px] max-w-6xl mx-auto overflow-hidden mt-2">

            {/* PRODUCT STRIP - sits IN FRONT OF the phone */}
            <div
              className="flex absolute inset-0 top-[158px] -translate-y-1/2 left-0 right-0 md:left-1/4 md:right-1/4 z-[20] justify-center translate-x-[15px] pointer-events-none"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
              }}
            >
              <div className="h-full w-full overflow-hidden relative">
                <div
                  className="absolute z-1 top-1/2 -translate-y-1/2 flex gap-2 items-center left-1/2"
                  style={{
                    transition: isTransitioning ? 'transform 500ms ease-in-out' : 'none',
                    transform: `translateX(-${activeIndex * STEP + ITEM_WIDTH / 2}px)`
                  }}
                >
                  {allProducts.map((p, i) => {
                    const isCenter = i === activeIndex;
                    return (
                      <div
                        key={i}
                        className="relative w-[6.25rem] h-[6.25rem] shrink-0 bg-white rounded-2xl"
                        style={{
                          opacity: isCenter ? 1 : 0.3,
                          transform: isCenter ? 'scale(1.2)' : 'scale(0.8)',
                          transition: 'opacity 500ms, transform 500ms',
                        }}
                      >
                        {p.src ? (
                          <Image
                            alt={p.alt}
                            className="rounded-2xl object-cover"
                            src={p.src}
                            fill
                            sizes="150px"
                            style={{ color: 'transparent' }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 rounded-2xl" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* IPHONE MOCKUP */}
            <div
              className="absolute left-[calc(50%+15px)] -translate-x-1/2 z-[10] w-[300px] h-[600px]"
              style={{
                top: '20px',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0px)' : 'translateY(120px)',
                transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1), transform 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* ── Phone background body ── */}
              <div
                className="absolute inset-0 rounded-[38px] z-[1]"
                style={{
                  background: 'linear-gradient(180deg, rgba(88, 88, 88, 0.24) 0%, rgba(255, 255, 255, 0.24) 100%)',
                }}
              />

              {/* ── Phone border frame ── */}
              <div
                className="absolute inset-0 rounded-[38px] z-[30] pointer-events-none"
                style={{
                  border: '8px solid #d1d5db',
                  boxShadow: '0 0 0 1px rgba(209,213,219,0.5), 0 20px 60px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(255,255,255,0.8)',
                }}
              />

              {/* ── Screen area (white bg, clips everything) ── */}
              <div className="absolute inset-[8px] rounded-[30px] overflow-hidden z-[10] bg-white">

                {/* Notch */}
                <div className="relative top-[20px] flex items-center justify-end left-1/2 -translate-x-1/2 bg-black h-[26px] w-[100px] rounded-full z-[5]">
                  <div className="h-[16px] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,255,255,0.04)_72%,_rgba(255,255,255,0.16)_100%)] w-[16px] mr-[5px] rounded-full absolute right-0"></div>
                </div>



                {/* Product details card — slides up from bottom */}
                {products.map((p, i) => {
                  if (!p.detailsSrc) return null;
                  const normalizedIndex = activeIndex % products.length;
                  const isActive = normalizedIndex === i;
                  return (
                    <div
                      key={`card-${i}`}
                      className="absolute inset-x-0 bottom-0"
                      style={{
                        height: 'calc(100% - 170px)',
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? 'translateY(0px)' : 'translateY(100%)',
                        transition: isActive
                          ? 'opacity 700ms ease-in-out, transform 700ms cubic-bezier(0.4, 0, 0.2, 1)'
                          : 'opacity 300ms ease-in-out, transform 0ms',
                        pointerEvents: isActive ? 'auto' : 'none',
                        zIndex: isActive ? 25 : 1,
                      }}
                    >
                      <div className="bg-white rounded-t-[36px] mx-auto w-[280px] h-full flex flex-col items-center pt-[10px] overflow-hidden shadow-xl">
                        {/* Handle bar */}
                        <div className="w-10 h-[5px] bg-gray-300/70 rounded-full mb-2 shrink-0" />
                        <Image
                          alt={p.alt}
                          className="object-cover "
                          width={280}
                          height={600}
                          src={p.detailsSrc}
                          style={{ color: 'transparent', height: 'auto' }}
                          priority={i === 0}
                          sizes="280px"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

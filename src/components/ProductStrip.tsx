'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

// The 10 real product images from the original site
const products = [
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-1.png&w=256&q=75', alt: 'Organic Bagels' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-2.png&w=256&q=75', alt: 'Cocao-nectar Bar, Oregon Peppermint' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-3.png&w=256&q=75', alt: 'Strawberry Vanilla Sparkling Tonic' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-4.png&w=256&q=75', alt: 'Fig and Olive Crackers' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-5.png&w=256&q=75', alt: 'San Pellegrino Sparkling Natural Mineral Water' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-6.png&w=256&q=75', alt: 'Sea Salt & Vinegar Potato Crisps' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-7.png&w=256&q=75', alt: 'Larabar Chocolate Chip Cookie Dough' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-8.png&w=256&q=75', alt: 'Sourlittles' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-9.png&w=256&q=75', alt: 'Gradea Raw Pure Jersey Milk' },
  { src: 'https://www.oliveapp.com/_next/image?url=%2Fassets%2Fimages%2Fhow-to%2Fslider%2Fproduct-10.png&w=256&q=75', alt: 'Late July Snacks Organic Tortilla' },
];

// Duplicate for seamless loop
const allProducts = [...products, ...products, ...products];

interface ProductStripProps {
  centerIndex?: number;
}

export default function ProductStrip({ centerIndex = 4 }: ProductStripProps) {
  return (
    <div className="flex absolute inset-0 top-[5%] -translate-y-1/2 left-0 right-0 z-50 justify-center mask-sides overflow-hidden">
      <div className="h-full w-full overflow-hidden relative">
        {/* Scrolling track */}
        <div className="absolute top-1/2 -translate-y-1/2 flex gap-3 items-center animate-scroll-left whitespace-nowrap">
          {allProducts.map((p, i) => {
            const isCenter = i % products.length === centerIndex;
            return (
              <div
                key={i}
                className="relative shrink-0 rounded-2xl overflow-hidden transition-all duration-500"
                style={{
                  width: isCenter ? '7.5rem' : '6.25rem',
                  height: isCenter ? '7.5rem' : '6.25rem',
                  opacity: isCenter ? 1 : 0.3,
                  transform: isCenter ? 'scale(1.15)' : 'scale(0.85)',
                  flexShrink: 0,
                }}
              >
                {p.src ? (
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="120px"
                    priority={i < 10}
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
  );
}

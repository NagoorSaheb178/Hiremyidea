'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

// The 10 real product images from the original site
const products = [
  { src: '/images/image_11.png', alt: 'Organic Bagels' },
  { src: '/images/image_4.png', alt: 'Cocao-nectar Bar, Oregon Peppermint' },
  { src: '/images/image_17.png', alt: 'Strawberry Vanilla Sparkling Tonic' },
  { src: '/images/image_19.png', alt: 'Fig and Olive Crackers' },
  { src: '/images/image_12.png', alt: 'San Pellegrino Sparkling Natural Mineral Water' },
  { src: '/images/image_13.png', alt: 'Sea Salt & Vinegar Potato Crisps' },
  { src: '/images/image_22.png', alt: 'Larabar Chocolate Chip Cookie Dough' },
  { src: '/images/image_18.png', alt: 'Sourlittles' },
  { src: '/images/image_16.png', alt: 'Gradea Raw Pure Jersey Milk' },
  { src: '/images/image_14.png', alt: 'Late July Snacks Organic Tortilla' },
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

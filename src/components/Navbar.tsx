'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const OliveLogo = ({ className = '' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 235 43"
    fill="none"
    className={className}
    aria-label="Olive logo"
  >
    {/* ── Olive mascot (green circle body + seed + eyes + mouth) ── */}
    <path d="M11.6445 7.9541C12.4104 9.37799 12.8738 10.4285 12.7638 12.2955" stroke="#B47E54" strokeWidth="1.74943" strokeLinecap="round"/>
    <path d="M25.1663 27.0132C25.1663 35.8274 22.081 42.9728 12.5992 42.9728C3.1175 42.9728 0.0322266 35.8274 0.0322266 27.0132C0.0322266 18.1991 7.69597 12.3589 12.5992 12.3589C17.5025 12.3589 25.1663 18.1991 25.1663 27.0132Z" fill="#AEB93E"/>
    <path d="M25.1668 27.0132C25.1668 35.8272 22.0816 42.9726 12.5998 42.9726C8.59668 42.9726 5.73372 41.6989 3.76172 39.5639C6.2414 40.6582 9.69106 41.6785 13.4808 41.3384C17.2705 40.9983 23.0118 39.5639 25.1668 27.0132Z" fill="black" fillOpacity="0.17"/>
    <path d="M22.2615 1.75041C21.7345 0.808721 17.9008 0.622276 15.7399 1.7504C13.5792 2.87853 12.5756 5.55323 12.7304 7.92803C13.9888 8.30191 15.5759 8.67554 18.2322 7.56102C20.8882 6.44651 22.6101 3.11565 22.2615 1.75041Z" fill="#AEB93E"/>
    <path d="M20.5462 2.678C20.721 2.20308 16.6358 6.00599 13.0654 7.26714C13.0654 7.26714 15.7484 6.79644 17.2876 5.70094C18.8267 4.60545 20.2372 3.5175 20.5462 2.678Z" fill="#8F9838"/>
    <path d="M5.94531 23.5363C5.94531 22.4632 6.81526 21.5933 7.8884 21.5933C8.96155 21.5933 9.83151 22.4632 9.83151 23.5363V24.0836C9.83151 25.1567 8.96155 26.0266 7.8884 26.0266C6.81526 26.0266 5.94531 25.1567 5.94531 24.0836V23.5363Z" fill="#2D2D2D"/>
    <path d="M15.3652 23.5363C15.3652 22.4632 16.2351 21.5933 17.3083 21.5933C18.3814 21.5933 19.2514 22.4632 19.2514 23.5363V24.0836C19.2514 25.1567 18.3814 26.0266 17.3083 26.0266C16.2351 26.0266 15.3652 25.1567 15.3652 24.0836V23.5363Z" fill="#2D2D2D"/>
    <path d="M11.168 25.903C11.4712 26.3679 11.9867 26.6672 12.6389 26.6672C13.4864 26.6672 13.8868 26.378 14.2133 25.8237" stroke="#2D2D2D" strokeWidth="0.728929" strokeLinecap="round"/>
    <path d="M8.89323 23.2728C9.19778 23.2728 9.44467 23.0259 9.44467 22.7214C9.44467 22.4168 9.19778 22.1699 8.89323 22.1699C8.58868 22.1699 8.3418 22.4168 8.3418 22.7214C8.3418 23.0259 8.58868 23.2728 8.89323 23.2728Z" fill="#D9D9D9"/>
    <path d="M18.3249 23.2728C18.6294 23.2728 18.8763 23.0259 18.8763 22.7214C18.8763 22.4168 18.6294 22.1699 18.3249 22.1699C18.0203 22.1699 17.7734 22.4168 17.7734 22.7214C17.7734 23.0259 18.0203 23.2728 18.3249 23.2728Z" fill="#D9D9D9"/>
    {/* ── Wordmark letter paths: O-l-i-v-e ── */}
    {/* l (tall vertical bar) */}
    <path d="M32.4408 13.3464C32.0595 12.6154 26.9215 13.2964 26.636 13.7735C26.3506 14.2505 27.3026 41.5301 27.4797 41.8046C27.657 42.079 37.0964 42.036 37.3851 41.8046C37.6739 41.5731 37.7469 36.9571 37.3851 36.5275C37.0234 36.0979 32.8783 36.1003 32.8783 36.1003C32.8783 36.1003 32.8219 14.0773 32.4408 13.3464Z" fill="#AEB93E"/>
    {/* i dot */}
    <path d="M44.7833 14.607C43.9394 13.9851 39.7642 13.7631 38.9202 14.607C38.0763 15.4508 38.3872 19.8595 38.9202 20.7923C39.4532 21.725 43.9394 21.503 44.7833 20.7923C45.6273 20.0816 45.6273 15.2288 44.7833 14.607Z" fill="#AEB93E"/>
    {/* i stem */}
    <path d="M44.7833 23.9464C43.9394 23.3245 39.7642 23.1024 38.9202 23.9464C38.0763 24.7903 38.3872 40.6473 38.9202 41.58C39.4532 42.5128 43.9394 42.2907 44.7833 41.58C45.6273 40.8693 45.6273 24.5682 44.7833 23.9464Z" fill="#AEB93E"/>
    {/* v chevron */}
    <path d="M51.3794 22.8744C50.7456 22.6747 46.7038 24.7708 46.4888 25.6298C46.2737 26.4887 54.0113 42.1087 54.7547 42.4371C55.498 42.7654 58.468 42.7291 58.8188 42.4371C59.1695 42.145 67.2049 26.4956 66.9432 25.6298C66.6816 24.7638 62.7917 21.8492 61.5307 22.8744C60.2698 23.8996 56.4767 33.0691 56.4767 33.0691C56.4767 33.0691 52.0133 23.0741 51.3794 22.8744Z" fill="#AEB93E"/>
    {/* e */}
    <path fillRule="evenodd" clipRule="evenodd" d="M75.784 34.6549C74.9453 34.6396 74.1819 34.6257 73.5794 34.6257C73.5794 35.1707 73.8896 36.1295 76.0495 36.551C77.4942 36.8329 79.4763 36.2989 80.783 35.947C81.4298 35.7728 81.9112 35.643 82.0796 35.6792C82.5881 35.7881 84.9857 38.8758 84.1137 40.5468C83.2419 42.2178 73.325 44.361 69.4745 40.1109C65.624 35.8608 65.5514 30.4845 68.1668 26.852C70.7824 23.2194 73.979 22.7109 76.3402 22.7109C78.7012 22.7109 81.6239 23.0979 84.1137 26.2344C86.6036 29.3712 84.4095 34.1559 83.4599 34.4078C82.0959 34.7696 78.5345 34.7049 75.784 34.6549ZM73.5793 31.1021C73.7851 30.2787 74.6744 28.7733 76.558 28.632C78.9653 28.4514 78.709 30.1096 78.5748 30.9787C78.5681 31.0219 78.5616 31.0632 78.5559 31.1021H73.5793Z" fill="#AEB93E"/>
  </svg>
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6l6 -6"/>
  </svg>
);

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l14 0"/>
    <path d="M13 18l6 -6"/>
    <path d="M13 6l6 6"/>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6l16 0"/>
    <path d="M4 12l16 0"/>
    <path d="M4 18l16 0"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6L6 18"/>
    <path d="M6 6l12 12"/>
  </svg>
);

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z"/>
    <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z"/>
  </svg>
);

const navItems = [
  { label: 'Solutions', href: '#', hasDropdown: true },
  { label: 'Features', href: '/#features', hasDropdown: false },
  { label: 'Pricing', href: '/#pricing', hasDropdown: false },
  { label: 'Blog', href: '/blogs', hasDropdown: true },
  { label: 'Restaurants', href: '/restaurants', hasDropdown: false },
  { label: 'Food', href: '/foods', hasDropdown: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="w-full relative z-[100]" aria-label="Main navigation">
      {/* ── DESKTOP NAV ── */}
      <div className={`navbar-desktop ${scrolled ? 'backdrop-blur-sm bg-white/80' : ''}`}>
        {/* Left: Logo */}
        <Link href="/" aria-label="Return to homepage" className="navbar-logo-link">
          <OliveLogo className="navbar-logo-svg" />
        </Link>

        {/* Center: Nav Links */}
        <div className="navbar-center">
          <div className="navbar-nav">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <p className="navbar-dropdown-trigger">
                    <Link href={item.href}>{item.label}</Link>
                    <span className="navbar-chevron group-hover:rotate-180">
                      <ChevronDown />
                    </span>
                  </p>
                ) : (
                  <Link href={item.href} className="navbar-link flex items-center">
                    <span className="block">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Sign In + CTA */}
        <div className="flex items-center">
          <Link href="/sign-in" className="navbar-signin">
            Sign in
          </Link>
          <Link
            href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta-btn"
            id="desktop-cta-btn"
          >
            Get Olive
            <ArrowRight />
          </Link>
        </div>
      </div>

      {/* ── MOBILE NAV ── */}
      <div className="navbar-mobile">
        <div className="navbar-mobile-row">
          {/* Mobile Logo */}
          <Link href="/" aria-label="Return to homepage" className="relative z-20 flex items-center">
            <OliveLogo className="w-[160px] sm:w-[200px] h-auto" />
          </Link>

          {/* Hamburger / Close */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="navbar-hamburger transition-opacity"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            id="mobile-menu-btn"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-[#f5faf6] rounded-b-2xl shadow-xl border-t border-neutral-200 p-4 animate-in slide-in-from-top-2 z-[100]">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-3 py-3 text-neutral-700 hover:bg-black/[0.03] rounded-xl transition-all font-medium"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown />}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-3">
                <Link
                  href="/sign-in"
                  className="text-center text-[#386641] font-medium py-2 hover:opacity-80 transition-opacity"
                >
                  Sign in
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar-cta-btn !mr-0 w-full"
                  id="mobile-cta-btn"
                >
                  <AppleIcon />
                  Download for iOS
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

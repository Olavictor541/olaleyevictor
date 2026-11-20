/** Victor's mark (circle, triangle, mountain), drawn in the current text colour. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 4000 4000" className={className} fill="currentColor" aria-hidden="true">
      <path d="M2104.69,1211.11c0,427.95-346.92,774.87-774.87,774.87-1027.85-40.81-1027.56-1509.08,0-1549.74,427.94,0,774.86,346.92,774.86,774.87Z" />
      <polygon points="2008.84 434.5 3546.41 434.5 2772.21 1987.73 2008.84 434.5" />
      <path d="M554.95,3579.99l942.39-1549.74c691.17,583.68,548.7,538.68,1199.12-46.1,0,.08,858.49,1595.83,858.49,1595.83H554.95Z" />
    </svg>
  );
}

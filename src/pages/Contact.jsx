import { useEffect } from 'react';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Blank page as requested */}
    </div>
  );
}

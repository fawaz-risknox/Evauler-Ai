'use client';

import { useEffect, useRef } from 'react';

/**
 * Pinned heading + first card, with the second card scrolling over it.
 * The first card shrinks as it is overlapped by the second card.
 */
export default function InsightStage({ children }) {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const inners = Array.from(stage.querySelectorAll('.insight-chamfer-inner'));
    const cards = Array.from(stage.querySelectorAll('.insight-chamfer-card'));
    const pin = stage.querySelector('.insight-stage-pin');
    const firstCard = cards[0];
    const incomingCard = cards[1];
    const media = window.matchMedia('(min-width: 768px)');
    let frame = 0;
    let progressFrame = 0;
    let mounted = true;

    const updateProgress = () => {
      if (!mounted || !pin || !firstCard || !incomingCard) return;

      if (!media.matches) {
        firstCard.style.removeProperty('--insight-overlap');
        return;
      }

      const firstCardRect = firstCard.getBoundingClientRect();
      const incomingRect = incomingCard.getBoundingClientRect();
      const height = firstCard.offsetHeight || 1;
      
      // Calculate overlap progress: 0 when incoming card top reaches first card bottom,
      // 1 when incoming card top aligns with first card top
      const raw = (firstCardRect.bottom - incomingRect.top) / height;
      const progress = Math.min(1, Math.max(0, raw));

      firstCard.style.setProperty('--insight-overlap', progress.toFixed(3));
    };

    const scheduleProgress = () => {
      window.cancelAnimationFrame(progressFrame);
      progressFrame = window.requestAnimationFrame(updateProgress);
    };

    const equalize = () => {
      if (!mounted) return;

      inners.forEach((inner) => {
        inner.style.minHeight = '';
      });

      if (media.matches) {
        const tallest = Math.max(...inners.map((inner) => inner.offsetHeight));
        if (Number.isFinite(tallest) && tallest > 0) {
          inners.forEach((inner) => {
            inner.style.minHeight = `${Math.ceil(tallest)}px`;
          });
        }
      }

      updateProgress();
    };

    const schedule = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(equalize);
    };

    equalize();
    window.addEventListener('resize', schedule);
    window.addEventListener('scroll', scheduleProgress, { passive: true });

    if (document.fonts?.ready) {
      document.fonts.ready.then(schedule).catch(() => {});
    }

    return () => {
      mounted = false;
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(progressFrame);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('scroll', scheduleProgress);
      inners.forEach((inner) => {
        inner.style.minHeight = '';
      });
      firstCard?.style.removeProperty('--insight-overlap');
    };
  }, []);

  return (
    <div className="insight-stage" ref={stageRef}>
      {children}
    </div>
  );
}

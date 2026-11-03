"use client";

import { useEffect, useRef, useState } from "react";

const svg = (children) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const ICONS = {
  evaluation: svg(<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />),
  classification: svg(
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </>
  ),
  risk: svg(
    <>
      <path d="M12 3 4.5 6v5.5c0 4.5 3 8 7.5 9.5 4.5-1.5 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="M12 8.5v4M12 15.5v.01" />
    </>
  ),
  action: svg(
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  insights: svg(
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
    </>
  ),
  cohort: svg(
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 14c2.5 0 4 1.8 4 4.5" />
    </>
  ),
};

export const TABS = [
  { id: "evaluation", label: "Evaluation" },
  { id: "classification", label: "Classification", accent: "#852546", ink: "#E58CB0", wash: "rgba(133, 37, 70, 0.28)" },
  { id: "risk", label: "Risk analysis", accent: "#2E8B57", ink: "#7FD8A6", wash: "rgba(46, 139, 87, 0.26)" },
  { id: "action", label: "Action plan", accent: "#3B82F6", ink: "#ADC7FF", wash: "rgba(59, 130, 246, 0.25)" },
  { id: "insights", label: "Insights", accent: "#2F6FDB", ink: "#8DB6FA", wash: "rgba(47, 111, 219, 0.28)" },
  { id: "cohort", label: "Cohort analytics", accent: "#93B3FF", ink: "#B9CDFF", wash: "rgba(147, 179, 255, 0.22)" },
];

const FALLBACK_QUERY = "(max-width: 1000px), (max-height: 700px)";

export default function Tabs({ header, panels }) {
  const [active, setActive] = useState(0);
  const scroller = useRef(null);
  const refs = useRef([]);
  const N = TABS.length;

  // Scroll position -> active section (only in the sticky layout).
  useEffect(() => {
    const mq = window.matchMedia(FALLBACK_QUERY);
    let raf = 0;
    const update = () => {
      raf = 0;
      if (mq.matches || !scroller.current) return;
      const rect = scroller.current.getBoundingClientRect();
      const offsetTop = 70;
      const span = rect.height - (window.innerHeight - offsetTop);
      if (span <= 0) return;
      const progress = Math.min(1, Math.max(0, (offsetTop - rect.top) / span));
      setActive(Math.min(N - 1, Math.floor(progress * N)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [N]);

  // Tab click -> scroll to the middle of that section (or just switch in the fallback layout).
  const go = (i) => {
    setActive(i);
    const el = scroller.current;
    if (!el || window.matchMedia(FALLBACK_QUERY).matches) return;
    const offsetTop = 70;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - (window.innerHeight - offsetTop);
    window.scrollTo({
      top: top - offsetTop + ((i + 0.5) / N) * span,
      behavior: "smooth"
    });
  };

  const onKeyDown = (e, i) => {
    let next = null;
    if (e.key === "ArrowRight") next = (i + 1) % N;
    else if (e.key === "ArrowLeft") next = (i - 1 + N) % N;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = N - 1;
    if (next === null) return;
    e.preventDefault();
    go(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="scroller" ref={scroller} style={{ "--n": N }}>
      <div className="stick">
        {header}

        <div className="tabs" role="tablist" aria-label="Investability sections">
          {TABS.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.id}
                ref={(el) => (refs.current[i] = el)}
                id={`tab-${t.id}`}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls={`panel-${t.id}`}
                tabIndex={on ? 0 : -1}
                className={on ? "tab tab--on" : "tab"}
                style={on && t.accent ? { "--tab-accent": t.accent, "--tab-ink": t.ink, "--tab-wash": t.wash } : undefined}
                onClick={() => go(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {ICONS[t.id]}
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="stage">
          {TABS.map((t, i) => (
            <div
              key={t.id}
              id={`panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${t.id}`}
              aria-hidden={i !== active}
              className={i === active ? "pane pane--on" : "pane"}
            >
              {panels[t.id] ?? (
                <div className="soon">
                  <div className="chip">
                    <span>{t.label.toUpperCase()}</span>
                  </div>
                  <p>Content for {t.label} will be added here.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SceneInput, SceneAnalyze, SceneReport, SceneGrow } from './Scenes';
import './HowItWorks.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    n: 1,
    kicker: 'You start with what you already know about the company.',
    title: 'Enter your entity general information',
    desc: 'Add business, financial, and market details.',
    Scene: SceneInput,
  },
  {
    n: 2,
    kicker: 'The model scores the data you entered.',
    title: 'The model scores the data',
    desc: 'It scores investability and valuation factors from that input.',
    Scene: SceneAnalyze,
  },
  {
    n: 3,
    kicker: 'The report shows the valuation and the score.',
    title: 'You get the report',
    desc: 'You receive a valuation estimate and an investability score.',
    Scene: SceneReport,
  },
  {
    n: 4,
    kicker: 'You work the gaps before you raise.',
    title: 'Fix the gaps',
    desc: 'Use the ranked list to fix issues before you raise.',
    Scene: SceneGrow,
  },
];

/* One small timeline per illustration. Returned paused so the caller decides how it is driven. */
function buildScene(i, el) {
  const q = gsap.utils.selector(el);
  const tl = gsap.timeline();

  if (i === 0) {
    tl.fromTo(q('.f-label'), { opacity: 0 }, { opacity: 1, stagger: 0.12, duration: 0.3 })
      .fromTo(q('.f-field'), { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, stagger: 0.25, duration: 0.6, ease: 'power3.out' }, 0.1)
      .fromTo(q('.f-check'), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.5, ease: 'back.out(2.4)' }, '>-0.1');
  }
  if (i === 1) {
    tl.fromTo(q('.g-arc'), { strokeDashoffset: 1, opacity: 0 }, { strokeDashoffset: 0.12, opacity: 1, duration: 1, ease: 'power2.inOut' })
      .fromTo(q('.g-dot'), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, stagger: 0.15, duration: 0.4, ease: 'back.out(3)' }, 0.2)
      .fromTo(q('.g-needle'), { rotation: -80, svgOrigin: '200 220' }, { rotation: 48, svgOrigin: '200 220', duration: 1, ease: 'elastic.out(1, 0.6)' }, 0.3)
      .fromTo(q('.g-tag'), { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: 0.15 }, 0.6);
  }
  if (i === 2) {
    const counter = { v: 0 };
    const num = q('.r-num')[0];
    tl.fromTo(q('.r-line'), { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, stagger: 0.15, duration: 0.5, ease: 'power3.out' })
      .fromTo(q('.r-range'), { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.7, ease: 'power3.out' }, 0.3)
      .fromTo(q('.r-ring'), { strokeDashoffset: 1, opacity: 0 }, { strokeDashoffset: 0.18, opacity: 1, duration: 1, ease: 'power2.out' }, 0.1)
      .to(counter, { v: 82, duration: 1, ease: 'power2.out', onUpdate: () => { if (num) num.textContent = Math.round(counter.v); } }, 0.1);
  }
  if (i === 3) {
    tl.fromTo(q('.b-bar'), { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, stagger: 0.12, duration: 0.6, ease: 'power3.out' })
      .fromTo(q('.b-line'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, 0.3)
      .fromTo(q('.b-arrow'), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.4, ease: 'back.out(3)' }, '>-0.1')
      .fromTo(q('.b-flag'), { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4 }, '<');
  }
  return tl;
}

export default function HowItWorks() {
  const root = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ---- Hero: orchestrated entrance when scrolled into view ---- */
      gsap.timeline({
        defaults: { ease: 'power4.out' },
        scrollTrigger: {
          trigger: '.process-hero',
          start: 'top 80%',
        },
      })
        .from('.process-hero .process-pill', { y: 16, opacity: 0, duration: 0.7 })
        .from('.process-hero .word', { yPercent: 115, duration: 1.1, stagger: 0.12 }, 0.1)
        .from('.process-hero-sub', { y: 16, opacity: 0, duration: 0.8 }, 0.8)
        .from('.scroll-cue', { opacity: 0, duration: 0.8 }, 1.2);

      gsap.to('.process-hero-inner', {
        opacity: 0,
        y: -80,
        scale: 0.96,
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-hero',
          start: 'top top',
          end: 'bottom 20%',
          scrub: true,
        },
      });

      const chapters = gsap.utils.toArray('.chapter');
      const mm = gsap.matchMedia();

      /* ---- Desktop: one pinned stage, scroll scrubs through the four chapters ---- */
      mm.add('(min-width: 900px)', () => {
        const rest = chapters.slice(1);
        gsap.set(rest, { autoAlpha: 0, y: 40 });

        const tl = gsap.timeline({
          defaults: { ease: 'power2.out' },
          scrollTrigger: {
            trigger: '.story-stage',
            start: 'top top',
            end: '+=400%',
            pin: true,
            scrub: 0.8,
            onUpdate: (self) => setActive(Math.min(STEPS.length - 1, Math.floor(self.progress * STEPS.length))),
          },
        });

        tl.to('.rail-fill', { scaleY: 1, ease: 'none', duration: STEPS.length }, 0);

        chapters.forEach((ch, i) => {
          const scene = buildScene(i, ch);
          scene.duration(0.6);
          if (i === 0) {
            tl.add(scene, 0.05);
            return;
          }
          tl.to(chapters[i - 1], { autoAlpha: 0, y: -40, duration: 0.25 }, i)
            .fromTo(ch, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.25 }, i + 0.1)
            .fromTo(
              ch.querySelectorAll('.chapter-text > *'),
              { y: 28, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.05, duration: 0.25 },
              i + 0.15
            )
            .add(scene, i + 0.3);
        });
        tl.to({}, { duration: 0.1 }, STEPS.length - 0.1);
      });

      /* ---- Mobile: chapters stack, each one tells itself as it enters ---- */
      mm.add('(max-width: 899px)', () => {
        chapters.forEach((ch, i) => {
          const scene = buildScene(i, ch);
          scene.pause(0);
          gsap.from(ch.querySelectorAll('.chapter-text > *'), {
            y: 28,
            opacity: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: ch, start: 'top 80%' },
          });
          ScrollTrigger.create({ trigger: ch, start: 'top 60%', once: true, onEnter: () => scene.play() });
        });
      });

      /* ---- Outro ---- */
      gsap.timeline({
        scrollTrigger: { trigger: '.outro', start: 'top 65%' },
        defaults: { ease: 'power4.out' },
      })
        .from('.outro .word', { yPercent: 115, duration: 1, stagger: 0.08 })
        .from('.outro p, .outro .cta', { y: 20, opacity: 0, duration: 0.7, stagger: 0.12 }, 0.5);
    }, root);

    return () => ctx.revert();
  }, []);

  const words = (text) =>
    text.split(' ').map((w, i) => (
      <span className="word-wrap" key={i} aria-hidden="true">
        <span className="word">{w}</span>
      </span>
    ));

  return (
    <section className="evaluer-process-root" ref={root} id="process">
      <div className="process-hero">
        <div className="process-hero-inner">
          <span className="process-pill">The process</span>
          <h2 aria-label="How EvaluerAI works">{words('How EvaluerAI works')}</h2>
          <p className="process-hero-sub">Four steps: enter data, score it, read the report, work the gaps.</p>
        </div>
        <div className="scroll-cue" aria-hidden="true" />
      </div>

      <div className="story" aria-label="How EvaluerAI works, step by step">
        <div className="story-stage">
          <div className="rail" aria-hidden="true">
            <div className="rail-track"><div className="rail-fill" /></div>
            {STEPS.map((s, i) => (
              <span
                key={s.n}
                className={'rail-dot' + (i <= active ? ' on' : '')}
                style={{ top: `${(i / (STEPS.length - 1)) * 100}%` }}
              />
            ))}
          </div>

          {STEPS.map(({ n, kicker, title, desc, Scene }) => (
            <article className="chapter" key={n}>
              <span className="ghost" aria-hidden="true">{n}</span>
              <div className="chapter-text">
                <span className="step-pill">Step {n}</span>
                <p className="kicker">{kicker}</p>
                <h3>{title}</h3>
                <p className="desc">{desc}</p>
              </div>
              <div className="chapter-scene">
                <div className="scene-card"><Scene /></div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="outro">
        <div className="outro-inner">
          <h2 aria-label="A report you can take to investors.">{words('A report you can take to investors.')}</h2>
          <p>Start with a few details. Leave with a valuation estimate and a list of what to fix.</p>
          <a className="cta" href="#evaluation">Get your report</a>
        </div>
      </div>
    </section>
  );
}

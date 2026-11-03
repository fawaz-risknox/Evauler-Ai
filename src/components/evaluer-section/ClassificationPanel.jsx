import Image from "next/image";
import BeatBars from "./BeatBars";

const ACCENT = "#852546";
// Shades built around #852546, lighter ones so the bars read on black.
const ROSE = ["#852546", "#A63A63", "#C25580", "#6B1D3A", "#D97BA0", "#561630", "#B8416F"];

function Layers({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </svg>
  );
}

export default function ClassificationPanel() {
  return (
    <div className="panel panel--visualfirst" style={{ "--accent": ACCENT, "--accent-ink": "#E58CB0", "--accent-wash": "rgba(133, 37, 70, 0.28)" }}>
      {/* LEFT: product visual */}
      <div className="visual">
        <BeatBars height={180} shades={ROSE} />
        <div className="visual__body">
          <div className="frame--big">
            <Image
              src="/classification.png"
              alt="Evaluer AI dashboard showing an overall investment readiness score of 52 percent with Idea Validation, Qualitative, ESG, Financial and Fundability section scores"
              width={956}
              height={461}
            />
          </div>
        </div>
      </div>

      {/* RIGHT: title + description */}
      <div className="right">
        <div className="chip">
          <Layers />
          <span>CLASSIFICATION</span>
        </div>
        <h2>A score and a class</h2>
        <p>
          You enter the data once. You get an investability score and a class such
          as Conditionally Investable. Each section score shows which of the five
          blocks is weak, so you spend time there.
        </p>
      </div>
    </div>
  );
}


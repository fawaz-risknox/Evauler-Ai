import Image from "next/image";
import BeatBars from "./BeatBars";

const ACCENT = "#93B3FF";
// Periwinkles built around #93B3FF, deeper ones so the bars read on black.
const PERI = ["#93B3FF", "#6F94F0", "#B9CDFF", "#4C6FC4", "#D3E0FF", "#34508F", "#7FA2F7"];

function People({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17 14c2.5 0 4 1.8 4 4.5" />
    </svg>
  );
}

export default function CohortPanel() {
  return (
    <div className="panel panel--visualfirst" style={{ "--accent": ACCENT, "--accent-ink": "#B9CDFF", "--accent-wash": "rgba(147, 179, 255, 0.22)" }}>
      {/* LEFT: product visual */}
      <div className="visual">
        <BeatBars height={180} shades={PERI} />
        <div className="visual__body">
          <div className="frame--big">
            <Image
              src="/cohort.png"
              alt="Evaluer AI Report Library dashboard showing total, in-progress and completed reports with investability scores for each venture"
              width={957}
              height={459}
            />
          </div>
        </div>
      </div>

      {/* RIGHT: title + description */}
      <div className="right">
        <div className="chip">
          <People />
          <span>COHORT ANALYTICS</span>
        </div>
        <h2>Portfolio and cohort view</h2>
        <p>
          Funds, accelerators, and incubators score many companies, compare them
          on the five sections, and watch scores over time. White-label and API
          options attach the same reports to tools they already run.
        </p>
      </div>
    </div>
  );
}


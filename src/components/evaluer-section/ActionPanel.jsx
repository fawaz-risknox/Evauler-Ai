import Image from "next/image";
import BeatBars from "./BeatBars";

const ACCENT = "#3B82F6";
// Electric blue shades tuned for a black background (no purple).
const BLUE_SHADES = ["#3B82F6", "#60A5FA", "#93B3FF", "#2563EB", "#ADC7FF", "#1D4ED8", "#93C5FD"];

function Target({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
  );
}

export default function ActionPanel() {
  return (
    <div className="panel panel--visualfirst" style={{ "--accent": ACCENT, "--accent-ink": "#ADC7FF", "--accent-wash": "rgba(59, 130, 246, 0.25)" }}>
      {/* LEFT: product visual */}
      <div className="visual">
        <BeatBars height={180} shades={BLUE_SHADES} />
        <div className="visual__body">
          <div className="frame--big">
            <Image
              src="/action.png"
              alt="Evaluer AI Immediate Actions list: five prioritized actions such as implementing a cost reduction program, each with an impact and a timeline"
              width={966}
              height={418}
            />
          </div>
        </div>
      </div>

      {/* RIGHT: title + description */}
      <div className="right">
        <div className="chip">
          <Target />
          <span>ACTION PLAN</span>
        </div>
        <h2>Ranked action list</h2>
        <p>
          The report lists work in now, next, and later buckets. Each item has a
          time window and a success metric.
        </p>
      </div>
    </div>
  );
}


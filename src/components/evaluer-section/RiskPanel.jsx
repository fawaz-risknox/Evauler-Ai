import Image from "next/image";
import BeatBars from "./BeatBars";

const ACCENT = "#2E8B57";
// Greens tuned for a black background.
const GREEN = ["#2E8B57", "#3FA76C", "#6FD39B", "#1F6B41", "#8FE3B3", "#17492D", "#4FBF84"];

function Shield({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 4.5 6v5.5c0 4.5 3 8 7.5 9.5 4.5-1.5 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="M12 8.5v4M12 15.5v.01" />
    </svg>
  );
}

export default function RiskPanel() {
  return (
    <div className="panel panel--visualfirst" style={{ "--accent": ACCENT, "--accent-ink": "#7FD8A6", "--accent-wash": "rgba(46, 139, 87, 0.26)" }}>
      {/* LEFT: product visual */}
      <div className="visual">
        <BeatBars height={180} shades={GREEN} />
        <div className="visual__body">
          <div className="frame--big">
            <Image
              src="/risk.png"
              alt="Evaluer AI Idea Validation Analysis report showing a 42 percent score, key strengths, critical gaps and immediate actions"
              width={954}
              height={934}
            />
          </div>
        </div>
      </div>

      {/* RIGHT: title + description */}
      <div className="right">
        <div className="chip">
          <Shield />
          <span>RISK ANALYSIS</span>
        </div>
        <h2>Market and risk notes</h2>
        <p>
          The model pulls market signals and peer numbers and attaches them to
          the score. It flags risks and shows how you sit next to peers in the
          same sector.
        </p>
      </div>
    </div>
  );
}


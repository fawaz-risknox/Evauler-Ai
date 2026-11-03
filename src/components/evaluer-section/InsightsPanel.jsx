import Image from "next/image";
import BeatBars from "./BeatBars";

const ACCENT = "#2F6FDB";
// Blues tuned for a black background.
const BLUE = ["#2F6FDB", "#4A88F0", "#8DB6FA", "#1E4FA3", "#B3CDFB", "#143670", "#6A9FF5"];

function Bulb({ size = 18, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export default function InsightsPanel() {
  return (
    <div className="panel panel--visualfirst" style={{ "--accent": ACCENT, "--accent-ink": "#8DB6FA", "--accent-wash": "rgba(47, 111, 219, 0.28)" }}>
      {/* LEFT: product visual */}
      <div className="visual">
        <BeatBars height={180} shades={BLUE} />
        <div className="visual__body">
          <div className="frame--big">
            <Image
              src="/insights.png"
              alt="Evaluer AI ESG Perspective Executive Summary showing a 47 percent score, key strengths and priority improvements"
              width={960}
              height={717}
            />
          </div>
        </div>
      </div>

      {/* RIGHT: title + description */}
      <div className="right">
        <div className="chip">
          <Bulb />
          <span>INSIGHTS</span>
        </div>
        <h2>ESG and fundability pages</h2>
        <p>
          The ESG, financials, and capital-structure pages show the scores and
          the missing items. Recommendations cover compliance, profit, funding
          documents, and use of funds.
        </p>
      </div>
    </div>
  );
}


import Image from "next/image";
import BeatBars from "./BeatBars";

const CHECKS = [
  "Idea validation",
  "Qualitative aspects",
  "ESG",
  "Financial position",
  "Fundability, scored out of 100",
];


function Bolt({ size = 18, color = "#C97F10" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  );
}

function Check() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#E8A23A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export default function EvaluationPanel() {
  return (
    <div className="panel">
      {/* LEFT: image on top, info below */}
      <div className="left">
        <div className="left__image">
          <BeatBars height={200} />
          <div className="left__imageInner">
            <div className="frame">
              <Image
                src="/form.png"
                alt="Evaluer AI report generator, step 1 of 6: Basic Information with entity type options"
                width={957}
                height={457}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: title + description */}
      <div className="right">
        <div className="chip">
          <Bolt />
          <span>EVALUATION</span>
        </div>
        <h2>Five sections, 88 criteria</h2>
        <p>
          We score the company in five sections. There are 88 criteria and a total
          out of 100.
        </p>
        <ul className="checks">
          {CHECKS.map((c) => (
            <li key={c}>
              <Check />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

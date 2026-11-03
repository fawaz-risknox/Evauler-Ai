// Amber "beam" texture. Every bar hangs from the top and stretches up and down
// like an equalizer. All durations are multiples of one beat, so the bars
// move together like a song instead of at random.

const BPM = 52; // slow, steady pulse
const BEAT = 60 / BPM; // seconds per beat
const COUNT = 64;
// Amber shades tuned for a black background: pale tones are dimmed so they
// don't glare, saturated ones carry the glow.
const SHADES = ["#B8893A", "#8F6A2C", "#E9A23B", "#F0C65C", "#E39A2D", "#6B4F22", "#D9B25A"];

// Deterministic pseudo-random so server and client render identical markup.
function makeBars(shades) {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  return Array.from({ length: COUNT }, (_, i) => {
    const tall = rnd() < 0.35;
    const beats = [1, 2, 2, 3][Math.floor(rnd() * 4)]; // slow legs: ~1.2s to 3.5s
    return {
      id: i,
      // % of the container, so no bar is ever taller than the strip and gets clipped
      height: Math.round(tall ? 70 + rnd() * 30 : 30 + rnd() * 40),
      color: shades[Math.floor(rnd() * shades.length)],
      min: (0.15 + rnd() * 0.3).toFixed(2), // lowest scaleY
      duration: (BEAT * beats).toFixed(3),
      // delay snaps to the beat grid
      delay: (-Math.floor(rnd() * 8) * (BEAT / 2)).toFixed(3),
    };
  });
}

const cache = new Map();
function getBars(shades) {
  const key = shades.join();
  if (!cache.has(key)) cache.set(key, makeBars(shades));
  return cache.get(key);
}

export default function BeatBars({ height = 200, shades = SHADES }) {
  const bars = getBars(shades);
  return (
    <div className="beat" style={{ height }} aria-hidden="true">
      {bars.map((b) => (
        <span
          key={b.id}
          className="beat__bar"
          style={{
            height: `${b.height}%`,
            background: b.color,
            "--min": b.min,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}


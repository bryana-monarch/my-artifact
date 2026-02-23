import { useState } from "react";

const weeks = [
  {
    number: 0,
    type: "audit",
    label: "Audit + Brief",
    sublabel: "WEEK 0",
    color: "#7C3AED",
    accentColor: "#C4B5FD",
    days: [
      { day: "MON", content: "Designer begins product audit", highlight: true },
      { day: "TUE", content: "Audit continues — friction points, weak UX moments, anxiety triggers", highlight: false },
      { day: "WED", content: "Strategist synthesizes audit notes into hypothesis brief", highlight: false },
      { day: "THU", content: "Brief review + alignment with growth", highlight: true },
      { day: "FRI", content: "Brief finalized and handed to production", highlight: true },
    ],
    description: "Designer audits the feature in product — exploring all functional use cases in a demo environment and documenting their findings in a one-sheeter. They follow up with the product team or product marketing to gut-check their understanding and fill any gaps. The goal is for the designer to feel fully equipped to speak to the nuance of the feature before a single brief is written. Strategist uses this to build the first hypothesis brief before a single ad is made.",
    ongoing: "No creative production yet. Thinking only.",
  },
  {
    number: 1,
    type: "build",
    label: "Build",
    sublabel: "BATCH A",
    color: "#EA580C",
    accentColor: "#FDB272",
    days: [
      { day: "MON", content: "Production starts — designer receives brief", highlight: true },
      { day: "TUE", content: "Creative build continues", highlight: false },
      { day: "WED", content: "Internal review + revisions", highlight: false },
      { day: "THU", content: "QA and final checks", highlight: false },
      { day: "FRI", content: "Final files handed off — ready to launch Monday", highlight: true },
    ],
    description: "Production week for Batch A. Designer builds 4 deliverables (2 visual systems × 2 framings) against the approved brief. Files handed off Friday for Monday launch.",
    ongoing: "No live data yet. Full focus on production quality.",
  },
  {
    number: 2,
    type: "live",
    label: "Live",
    sublabel: "BATCH A",
    color: "#1A56DB",
    accentColor: "#93B4F8",
    days: [
      { day: "MON", content: "Batch A launches", highlight: true },
      { day: "TUE", content: "Designer supports overflow work", highlight: false },
      { day: "WED", content: "Early results reviewed — signal starting to bake", highlight: false },
      { day: "THU", content: "Results review with strategist + growth. Batch B brief written.", highlight: true },
      { day: "FRI", content: "Brief finalized and handed to production", highlight: true },
    ],
    description: "Batch A is live. Designer has capacity for overflow work while results accumulate. By Wednesday signal is clear enough to read. Thursday is the key moment — results reviewed, Batch B brief written same day.",
    ongoing: "Brief for Batch B written Thursday. Production starts Monday.",
  },
  {
    number: 3,
    type: "build",
    label: "Build",
    sublabel: "BATCH B",
    color: "#EA580C",
    accentColor: "#FDB272",
    days: [
      { day: "MON", content: "Production starts — Batch B brief informed by Batch A signal", highlight: true },
      { day: "TUE", content: "Creative build continues", highlight: false },
      { day: "WED", content: "Internal review + revisions", highlight: false },
      { day: "THU", content: "QA and final checks", highlight: false },
      { day: "FRI", content: "Final files handed off — ready to launch Monday", highlight: true },
    ],
    description: "Production week for Batch B. Hypothesis compounds on Batch A learnings — brief was written last week so production hits the ground running Monday.",
    ongoing: "Compounding begins. Batch B is a response to Batch A, not a fresh start.",
  },
  {
    number: 4,
    type: "live",
    label: "Live",
    sublabel: "BATCH B",
    color: "#1A56DB",
    accentColor: "#93B4F8",
    days: [
      { day: "MON", content: "Batch B launches", highlight: true },
      { day: "TUE", content: "Designer supports overflow work", highlight: false },
      { day: "WED", content: "Early results reviewed", highlight: false },
      { day: "THU", content: "Results review with strategist + growth. Batch C brief written.", highlight: true },
      { day: "FRI", content: "Brief finalized and handed to production", highlight: true },
    ],
    description: "Same rhythm as Week 2. Designer has capacity, results bake by Wednesday, Thursday is the review and brief-writing moment. Batch C brief is the sharpest of the cycle — two live windows of signal behind it.",
    ongoing: "Brief for Batch C written Thursday. Production starts Monday.",
  },
  {
    number: 5,
    type: "build",
    label: "Build",
    sublabel: "BATCH C",
    color: "#EA580C",
    accentColor: "#FDB272",
    days: [
      { day: "MON", content: "Production starts — Batch C informed by Batches A + B", highlight: true },
      { day: "TUE", content: "Creative build continues", highlight: false },
      { day: "WED", content: "Internal review + revisions", highlight: false },
      { day: "THU", content: "QA and final checks", highlight: false },
      { day: "FRI", content: "Final files handed off — ready to launch Monday", highlight: true },
    ],
    description: "Final production week of the cycle. This brief is the most refined — two live windows of compounding signal inform exactly what to test in the last batch.",
    ongoing: "Retro happens inside next week's live window on Thursday.",
  },
  {
    number: 6,
    type: "live-retro",
    label: "Live + Retro",
    sublabel: "BATCH C",
    color: "#059669",
    accentColor: "#6EE7B7",
    days: [
      { day: "MON", content: "Batch C launches", highlight: true },
      { day: "TUE", content: "Designer supports overflow work", highlight: false },
      { day: "WED", content: "Final signal baking — all 3 batches reviewable", highlight: false },
      { day: "THU", content: "Full retro: synthesize all 3 batches, verdict on sprint question, package notes for PM", highlight: true },
      { day: "FRI", content: "Next cycle scoped — feature selected, W0 audit begins Monday", highlight: true },
    ],
    description: "Batch C is live and the cycle closes on the same Thursday. All three batches synthesized into a verdict on the sprint question. Product audit notes packaged for PM. Friday scopes the next cycle.",
    ongoing: "Sprint question answered. Next feature selected. Cycle resets.",
  },
];

const typeConfig = {
  audit:      { label: "Audit + Brief", symbol: "◈" },
  build:      { label: "Build",         symbol: "⚙" },
  live:       { label: "Live",          symbol: "●" },
  "live-retro": { label: "Live + Retro", symbol: "✓" },
};

export default function SprintCycle() {
  const [active, setActive] = useState(null);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      background: "#0B1120",
      minHeight: "100vh",
      padding: "44px 24px",
      color: "#F1F5F9",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .wcard { transition: transform 0.18s ease, box-shadow 0.18s ease; cursor: pointer; }
        .wcard:hover { transform: translateY(-4px); }
        .detail { animation: fadeUp 0.2s ease; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        .drow { transition: background 0.12s; border-radius: 6px; }
        .drow:hover { background: rgba(255,255,255,0.03) !important; }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.35;} }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: 1060, margin: "0 auto 40px" }}>
        <div style={{ fontFamily: "'DM Mono'", fontSize: 10, letterSpacing: 3, color: "#1E3A5F", textTransform: "uppercase", marginBottom: 10 }}>
          Exploratory Workstream · Sprint Cycle
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.2 }}>
          Exploratory Workstream
        </h1>
        <p style={{ marginTop: 8, color: "#475569", fontSize: 13, lineHeight: 1.7, maxWidth: 560 }}>
          A focused, hypothesis-driven engine that generates granular, decision-shaping insight for the business on specific product features and how to position them effectively for marketing and product development purposes.
        </p>
      </div>

      <div style={{ maxWidth: 1060, margin: "0 auto" }}>

        {/* Cards row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 7, marginBottom: 6 }}>
          {weeks.map((week, i) => {
            const isActive = active === i;
            const isLive = week.type === "live" || week.type === "live-retro";
            return (
              <div
                key={i}
                className="wcard"
                onClick={() => setActive(isActive ? null : i)}
                style={{
                  background: isActive ? week.color : "#111827",
                  border: `1.5px solid ${isActive ? week.color : `${week.color}30`}`,
                  borderRadius: 11,
                  padding: "16px 13px 14px",
                  boxShadow: isActive ? `0 0 0 3px ${week.color}25, 0 10px 36px ${week.color}15` : "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {isActive && (
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `radial-gradient(circle at 50% -10%, ${week.color}30 0%, transparent 65%)`,
                    pointerEvents: "none",
                  }} />
                )}

                <div style={{
                  fontFamily: "'DM Mono'",
                  fontSize: 9, letterSpacing: 2,
                  color: isActive ? "rgba(255,255,255,0.4)" : "#1E3A5F",
                  marginBottom: 9, textTransform: "uppercase",
                }}>W{week.number}</div>

                {isLive ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 9 }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: isActive ? "#fff" : week.accentColor,
                      animation: "pulse 2s infinite", flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: "'DM Mono'", fontSize: 8.5, letterSpacing: 1.5,
                      color: isActive ? "rgba(255,255,255,0.65)" : week.accentColor,
                      textTransform: "uppercase",
                    }}>{week.sublabel}</span>
                  </div>
                ) : (
                  <div style={{ marginBottom: 9 }}>
                    <span style={{
                      fontFamily: "'DM Mono'", fontSize: 8.5, letterSpacing: 1.5,
                      color: isActive ? "rgba(255,255,255,0.65)" : week.accentColor,
                      textTransform: "uppercase",
                    }}>{week.sublabel}</span>
                  </div>
                )}

                <div style={{
                  fontSize: 13, fontWeight: 600,
                  color: isActive ? "#fff" : "#64748B",
                  lineHeight: 1.3, marginBottom: 13,
                }}>{week.label}</div>

                <div style={{
                  paddingTop: 9,
                  borderTop: `1px solid ${isActive ? "rgba(255,255,255,0.1)" : "#0F172A"}`,
                  fontSize: 9.5,
                  color: isActive ? "rgba(255,255,255,0.38)" : "#1E3A5F",
                }}>
                  {typeConfig[week.type].symbol} {typeConfig[week.type].label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rhythm bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 7, marginBottom: 3 }}>
          {weeks.map((week, i) => (
            <div key={i} style={{
              height: 3, borderRadius: 2,
              background: `linear-gradient(90deg, ${week.color}40, ${week.color}90)`,
            }} />
          ))}
        </div>

        {/* Type labels */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 7, marginBottom: 28 }}>
          {weeks.map((week, i) => (
            <div key={i} style={{
              textAlign: "center", paddingTop: 5,
              fontFamily: "'DM Mono'", fontSize: 8,
              letterSpacing: 1, textTransform: "uppercase",
              color: `${week.color}80`,
            }}>
              {typeConfig[week.type].label}
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {active !== null && (
          <div className="detail" style={{
            background: "#111827",
            border: `1.5px solid ${weeks[active].color}30`,
            borderRadius: 14,
            padding: "26px 30px",
            marginBottom: 28,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>

              <div>
                <div style={{
                  fontFamily: "'DM Mono'",
                  fontSize: 9.5, letterSpacing: 2,
                  color: weeks[active].accentColor,
                  textTransform: "uppercase", marginBottom: 12,
                }}>Week {weeks[active].number} — {weeks[active].label}</div>

                <p style={{ fontSize: 13.5, color: "#64748B", lineHeight: 1.8 }}>
                  {weeks[active].description}
                </p>

                <div style={{
                  marginTop: 16, padding: "11px 14px",
                  background: `${weeks[active].color}0A`,
                  border: `1px solid ${weeks[active].color}20`,
                  borderRadius: 8,
                  fontSize: 12.5, color: "#334155", lineHeight: 1.6,
                }}>
                  <span style={{ color: weeks[active].accentColor, fontWeight: 600 }}>Note: </span>
                  {weeks[active].ongoing}
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: "'DM Mono'",
                  fontSize: 9.5, letterSpacing: 2,
                  color: "#1E3A5F", textTransform: "uppercase", marginBottom: 10,
                }}>Day-by-Day</div>

                {weeks[active].days.map(({ day, content, highlight }, di) => (
                  <div key={di} className="drow" style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "8px 10px", marginBottom: 2,
                    background: highlight ? `${weeks[active].color}0D` : "transparent",
                  }}>
                    <div style={{
                      fontFamily: "'DM Mono'", fontSize: 9.5, letterSpacing: 1,
                      color: highlight ? weeks[active].accentColor : "#1E293B",
                      width: 28, flexShrink: 0, paddingTop: 2,
                    }}>{day}</div>
                    <div style={{
                      width: 4, height: 4, borderRadius: "50%", flexShrink: 0,
                      background: highlight ? weeks[active].color : "#1A2540",
                      marginTop: 5,
                    }} />
                    <div style={{
                      fontSize: 12.5,
                      color: highlight ? "#CBD5E1" : "#1E3A5F",
                      lineHeight: 1.55,
                    }}>{content}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div style={{
          display: "flex", gap: 20, flexWrap: "wrap",
          alignItems: "center", paddingTop: 18,
          borderTop: "1px solid #111827",
        }}>
          {[
            { color: "#7C3AED", label: "Audit + Brief", desc: "Thinking before making" },
            { color: "#EA580C", label: "Build",         desc: "Production week" },
            { color: "#1A56DB", label: "Live",          desc: "Data collection" },
            { color: "#059669", label: "Live + Retro",  desc: "Final window + synthesis" },
          ].map(({ color, label, desc }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: 3, background: color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 600, color: "#334155" }}>{label}</div>
                <div style={{ fontSize: 10.5, color: "#1E293B" }}>{desc}</div>
              </div>
            </div>
          ))}
          <div style={{ marginLeft: "auto", fontFamily: "'DM Mono'", fontSize: 9, color: "#1E293B", letterSpacing: 0.5 }}>
            W0 audit · 3× build · 3× live · retro in W6
          </div>
        </div>

      </div>

      <ExamplesSection />

    </div>
  );
}

/* ── Reference / Examples Section ── */
function AdCard({ badges, tagline, copyAngleColor, copyAngle, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        {badges.map(b => (
          <span key={b.label} style={{
            fontFamily: "'DM Mono'", fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
            padding: "4px 9px", borderRadius: 4, fontWeight: 500,
            color: b.color, background: b.bg, border: `1px solid ${b.border}`,
          }}>{b.label}</span>
        ))}
        <span style={{ fontFamily: "'DM Mono'", fontSize: 9, letterSpacing: 0.5, color: "#334155" }}>{tagline}</span>
      </div>
      <div style={{ width: "100%", aspectRatio: "1/1", borderRadius: 16, overflow: "hidden", position: "relative" }}>
        {children}
      </div>
      <div style={{ background: "#111827", border: "1px solid #1C1C2A", borderRadius: 10, padding: "14px 16px" }}>
        <div style={{ fontFamily: "'DM Mono'", fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: copyAngleColor, marginBottom: 8 }}>Copy angle</div>
        <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.7 }}>{copyAngle}</div>
      </div>
    </div>
  );
}

function AdSysA({ accentColor, headline, ringLabel, ringValue, ringOffset, rows, ctaLabel }) {
  return (
    <div style={{ width: "100%", height: "100%", background: "#0A0F1E", position: "relative" }}>
      <div style={{ position: "absolute", top: "6%", left: "6%", right: "6%" }}>
        <div style={{ fontFamily: "'DM Mono'", fontSize: "clamp(7px,1.1vw,9px)", letterSpacing: 2, textTransform: "uppercase", color: accentColor, marginBottom: 6 }}>Goals feature</div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 800, fontSize: "clamp(13px,2.6vw,20px)", color: "#F0EEE9", lineHeight: 1.2 }}>{headline}</div>
      </div>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -58%)", width: "52%", aspectRatio: "1" }}>
        <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", transform: "rotate(-90deg)" }}>
          <circle cx="50" cy="50" r="42" fill="none" stroke="#1C2340" strokeWidth="8"/>
          <circle cx="50" cy="50" r="42" fill="none" stroke={accentColor} strokeWidth="8"
            strokeDasharray="263.9" strokeDashoffset={ringOffset} strokeLinecap="round"/>
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 800, fontSize: "clamp(18px,4vw,28px)", color: accentColor, lineHeight: 1 }}>{ringValue}</div>
          <div style={{ fontFamily: "'DM Mono'", fontSize: "clamp(7px,1.2vw,10px)", color: "#4A5070", letterSpacing: 1.5, textTransform: "uppercase", marginTop: 4 }}>{ringLabel}</div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 6% 6%" }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <div style={{ fontSize: "clamp(8px,1.4vw,11px)", color: "#8890B0", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.label}</div>
            <div style={{ flex: 2, height: 4, background: "#1C2340", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ width: `${r.pct}%`, height: "100%", borderRadius: 2, background: r.color }} />
            </div>
            <div style={{ fontFamily: "'DM Mono'", fontSize: "clamp(7px,1.2vw,10px)", color: "#4A5070", width: 28, textAlign: "right" }}>{r.pct}%</div>
          </div>
        ))}
        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'DM Mono'", fontSize: "clamp(7px,1.1vw,9px)", color: "#3D3D50", letterSpacing: 1, textTransform: "uppercase" }}>Clarity App</span>
          <span style={{ display: "inline-flex", alignItems: "center", fontSize: "clamp(8px,1.3vw,10px)", fontWeight: 600, padding: "6px 12px", borderRadius: 20, background: accentColor, color: "#fff", whiteSpace: "nowrap" }}>{ctaLabel}</span>
        </div>
      </div>
    </div>
  );
}

function AdSysB({ blob1, blob2, headline, sub, barLabel, barSub, barPct, barColor, barPctColor, ctaLabel }) {
  return (
    <div style={{ width: "100%", height: "100%", background: "#F5F0E8", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: "55%", aspectRatio: "1", borderRadius: "50%", filter: "blur(60px)", opacity: 0.35, background: blob1.color, top: blob1.top, right: blob1.right, left: blob1.left }} />
      <div style={{ position: "absolute", width: "45%", aspectRatio: "1", borderRadius: "50%", filter: "blur(60px)", opacity: 0.35, background: blob2.color, bottom: blob2.bottom, left: blob2.left, right: blob2.right }} />
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", padding: "7% 7% 6%" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "auto" }}>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 800, fontSize: "clamp(9px,1.5vw,12px)", color: "#1A1A2E", letterSpacing: 0.5 }}>Clarity</div>
          <div style={{ fontFamily: "'DM Mono'", fontSize: "clamp(7px,1.1vw,9px)", letterSpacing: 1.5, textTransform: "uppercase", color: "#9B8E7A" }}>Goals</div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontFamily: "'Georgia',serif", fontSize: "clamp(22px,5.5vw,44px)", fontWeight: 900, lineHeight: 1.05, color: "#1A1A2E", marginBottom: 12 }}>{headline}</div>
          <div style={{ fontSize: "clamp(9px,1.6vw,13px)", color: "#6B6355", lineHeight: 1.6, maxWidth: "85%" }}>{sub}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
          <div style={{ flex: 1, paddingRight: 16, display: "flex", flexDirection: "column", gap: 5 }}>
            <div style={{ fontFamily: "'DM Mono'", fontSize: "clamp(7px,1.1vw,9px)", color: "#9B8E7A", letterSpacing: 1, textTransform: "uppercase" }}>{barLabel}</div>
            <div style={{ height: 5, background: "#DDD5C8", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: `${barPct}%`, height: "100%", borderRadius: 3, background: barColor }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "'DM Mono'", fontSize: "clamp(7px,1.1vw,9px)", color: "#9B8E7A" }}>{barSub}</span>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: "clamp(9px,1.5vw,12px)", color: barPctColor }}>{barPct}%</span>
            </div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", fontSize: "clamp(8px,1.3vw,10px)", fontWeight: 600, padding: "6px 12px", borderRadius: 20, background: "#1A1A2E", color: "#F5F0E8", whiteSpace: "nowrap" }}>{ctaLabel}</span>
        </div>
      </div>
    </div>
  );
}

export function ExamplesSection() {
  return (
    <div style={{ maxWidth: 1060, margin: "64px auto 0", paddingTop: 48, borderTop: "1px solid #131C2E" }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontFamily: "'DM Mono'", fontSize: 10, letterSpacing: 3, color: "#1E3A5F", textTransform: "uppercase", marginBottom: 10 }}>
          Reference · Examples
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.3, color: "#F1F5F9", marginBottom: 8 }}>
          2 Visual Systems × 2 Framings
        </h2>
        <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.7, maxWidth: 560 }}>
          Batch A hypothesis: does functional framing (what the feature does) outperform emotional framing (how it feels)? Illustrated below using a Goals feature from a personal finance app.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 32px" }}>
        <AdCard
          badges={[
            { label: "Visual System A", color: "#7B6EF6", bg: "#1A1A2E", border: "#7B6EF633" },
            { label: "Functional", color: "#C9A84C", bg: "#1C1A12", border: "#C9A84C33" },
          ]}
          tagline="What it does" copyAngleColor="#C9A84C"
          copyAngle="Feature-forward. Names the mechanic (set, track, hit). UI shown literally. CTA is transactional."
        >
          <AdSysA accentColor="#7B6EF6" headline={<>Set a goal.<br/>Track it.<br/>Hit it.</>}
            ringLabel="of $5,000" ringValue="$3,420" ringOffset={73}
            rows={[
              { label: "Emergency fund", pct: 72, color: "#7B6EF6" },
              { label: "Vacation", pct: 38, color: "#4AB8D4" },
              { label: "New laptop", pct: 91, color: "#6EBF8B" },
            ]} ctaLabel="Start saving →" />
        </AdCard>

        <AdCard
          badges={[
            { label: "Visual System A", color: "#7B6EF6", bg: "#1A1A2E", border: "#7B6EF633" },
            { label: "Emotional", color: "#D46E9B", bg: "#1A1218", border: "#D46E9B33" },
          ]}
          tagline="How it feels" copyAngleColor="#D46E9B"
          copyAngle="Same UI layout, different labels — goals named as feelings not targets. Headline sells relief, not the feature."
        >
          <AdSysA accentColor="#D46E9B" headline={<>Finally feel like you're getting somewhere.</>}
            ringLabel="there" ringValue="68%" ringOffset={73}
            rows={[
              { label: "Peace of mind", pct: 68, color: "#D46E9B" },
              { label: "Something to look forward to", pct: 42, color: "#C9A84C" },
              { label: "Breathing room", pct: 85, color: "#7B6EF6" },
            ]} ctaLabel="Make it happen →" />
        </AdCard>

        <AdCard
          badges={[
            { label: "Visual System B", color: "#6EBF8B", bg: "#1A2518", border: "#6EBF8B33" },
            { label: "Functional", color: "#C9A84C", bg: "#1C1A12", border: "#C9A84C33" },
          ]}
          tagline="What it does" copyAngleColor="#C9A84C"
          copyAngle="Warm, editorial aesthetic but copy stays functional — names the mechanic, shows real UI, removes a specific friction (spreadsheet)."
        >
          <AdSysB
            blob1={{ color: "#6EBF8B", top: "-10%", right: "-10%" }}
            blob2={{ color: "#C9A84C", bottom: "10%", left: "-5%" }}
            headline={<>One goal.<br/><em>Any</em> size.</>}
            sub="Name it, set a target, and watch your progress in real time. No spreadsheet required."
            barLabel="Emergency fund" barSub="$3,600 / $5,000"
            barPct={72} barColor="#6EBF8B" barPctColor="#1A1A2E" ctaLabel="Try it free" />
        </AdCard>

        <AdCard
          badges={[
            { label: "Visual System B", color: "#6EBF8B", bg: "#1A2518", border: "#6EBF8B33" },
            { label: "Emotional", color: "#D46E9B", bg: "#1A1218", border: "#D46E9B33" },
          ]}
          tagline="How it feels" copyAngleColor="#D46E9B"
          copyAngle={'No feature explanation at all. Addresses the anxiety ("stop guessing"). Progress bar label is emotional, not numeric. CTA is personalised.'}
        >
          <AdSysB
            blob1={{ color: "#D46E9B", top: "-15%", left: "-10%" }}
            blob2={{ color: "#6EBF8B", bottom: "5%", right: "-5%" }}
            headline={<>Stop<br/><em>guessing.</em><br/>Start knowing.</>}
            sub="You don't need a plan. You just need to see where you stand."
            barLabel="Your goal" barSub="Closer than you think"
            barPct={58} barColor="#D46E9B" barPctColor="#D46E9B" ctaLabel="See yours" />
        </AdCard>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 680, marginTop: 40, paddingBottom: 64 }}>
        <div style={{ background: "#111827", border: "1px solid #131C2E", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontFamily: "'DM Mono'", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#6EBF8B", marginBottom: 6 }}>Held constant across all 4</div>
          <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.7 }}>Feature: Goals · Format: 1:1 static social<br/>Sprint question: functional vs. emotional</div>
        </div>
        <div style={{ background: "#111827", border: "1px solid #131C2E", borderRadius: 10, padding: "14px 16px" }}>
          <div style={{ fontFamily: "'DM Mono'", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase", color: "#D46E9B", marginBottom: 6 }}>What changes per ad</div>
          <div style={{ fontSize: 12, color: "#475569", lineHeight: 1.7 }}>Visual system (A: dark/structured · B: warm/editorial)<br/>Framing (functional: names the feature · emotional: names the feeling)</div>
        </div>
      </div>
    </div>
  );
}

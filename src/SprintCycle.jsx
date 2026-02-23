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

    </div>
  );
}


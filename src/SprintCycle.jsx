import { useState } from "react";

const weeks = [
  {
    number: 0,
    type: "audit",
    label: "Audit + Brief",
    sublabel: "WEEK 0",
    color: "#7C3AED",
    accentColor: "#7C3AED",
    days: [
      { day: "MON", content: "Designer begins product audit — all functional use cases documented in demo environment", highlight: true },
      { day: "TUE", content: "Designer follows up with product team or PMM to gut-check understanding and fill gaps", highlight: false },
      { day: "WED", content: "Designer presents 3 visual system directions (using existing work as reference). Team selects one.", highlight: true },
      { day: "THU", content: "Strategist builds JTBD hypothesis brief. Brief review + alignment with growth.", highlight: true },
      { day: "FRI", content: "Brief finalized and handed to production. Visual system locked.", highlight: true },
    ],
    description: "Two parallel tracks converge into a single brief. Track 1 (Product): Designer audits the feature in product — exploring all functional use cases in a demo environment and documenting findings in a one-sheeter. They follow up with the product team or PMM to gut-check their understanding and fill any gaps. Track 2 (Creative): Designer proposes 3 visual system directions using existing work as reference — not a production exercise, a creative direction conversation. Team selects one before build begins. Both tracks feed into the JTBD hypothesis brief. By Friday, the designer knows exactly what problem they're solving, which visual language they're working in, and which surface to show.",
    ongoing: "No ad production yet. Thinking, auditing, and aligning only.",
  },
  {
    number: 1,
    type: "build",
    label: "Build",
    sublabel: "BATCH A",
    color: "#EA580C",
    accentColor: "#EA580C",
    days: [
      { day: "MON", content: "Production starts — designer receives approved brief", highlight: true },
      { day: "TUE", content: "Creative build continues", highlight: false },
      { day: "WED", content: "Internal review + revisions", highlight: false },
      { day: "THU", content: "QA and final checks", highlight: false },
      { day: "FRI", content: "Final files handed off — ready to launch Monday", highlight: true },
    ],
    description: "Phase 1 production week. Designer builds 4 deliverables testing 4 different JTBD / problem framings against a locked surface and locked visual system. The only variable is the problem framing — which tension does this feature solve? Files handed off Friday for Monday launch.",
    ongoing: "No live data yet. Full focus on production quality.",
  },
  {
    number: 2,
    type: "live",
    label: "Live",
    sublabel: "BATCH A",
    color: "#1D4ED8",
    accentColor: "#1D4ED8",
    days: [
      { day: "MON", content: "Batch A launches — Phase 1 JTBD test live", highlight: true },
      { day: "TUE", content: "Designer has capacity for overflow work", highlight: false },
      { day: "WED", content: "Early results reviewed — signal starting to bake", highlight: false },
      { day: "THU", content: "Results review with strategist + growth. Winning problem framing identified. Phase 2 brief written.", highlight: true },
      { day: "FRI", content: "Brief finalized and handed to production", highlight: true },
    ],
    description: "Phase 1 is live. By Thursday we have a read on which problem framing unlocked intent. That winning framing gets locked and carried into Phase 2. Batch B brief is written Thursday — now the question shifts from what problem to how to show it.",
    ongoing: "Phase 2 brief written Thursday. Surface exploration begins Monday.",
  },
  {
    number: 3,
    type: "build",
    label: "Build",
    sublabel: "BATCH B",
    color: "#EA580C",
    accentColor: "#EA580C",
    days: [
      { day: "MON", content: "Production starts — problem framing locked from Batch A", highlight: true },
      { day: "TUE", content: "Creative build continues", highlight: false },
      { day: "WED", content: "Internal review + revisions", highlight: false },
      { day: "THU", content: "QA and final checks", highlight: false },
      { day: "FRI", content: "Final files handed off — ready to launch Monday", highlight: true },
    ],
    description: "Phase 2 production week. Problem framing is locked from Phase 1. Designer builds 4 deliverables each showing a different surface or expression of the feature — progress bar, category breakdown, setup screen, mobile widget, etc. The question now: which visual expression best communicates the solved problem?",
    ongoing: "Problem framing locked. Surface is the only variable.",
  },
  {
    number: 4,
    type: "live",
    label: "Live",
    sublabel: "BATCH B",
    color: "#1D4ED8",
    accentColor: "#1D4ED8",
    days: [
      { day: "MON", content: "Batch B launches — Phase 2 surface test live", highlight: true },
      { day: "TUE", content: "Designer has capacity for overflow work", highlight: false },
      { day: "WED", content: "Early results reviewed", highlight: false },
      { day: "THU", content: "Results review. Winning surface identified. Phase 3 tone brief written.", highlight: true },
      { day: "FRI", content: "Brief finalized and handed to production", highlight: true },
    ],
    description: "Phase 2 is live. By Thursday we know which surface best communicates the feature for this problem framing. That surface is now locked. Phase 3 brief is written Thursday — the final question is tone. Emotional vs. functional register. Two live windows of signal now behind the brief.",
    ongoing: "Phase 3 brief written Thursday. Tone test begins Monday.",
  },
  {
    number: 5,
    type: "build",
    label: "Build",
    sublabel: "BATCH C",
    color: "#EA580C",
    accentColor: "#EA580C",
    days: [
      { day: "MON", content: "Production starts — problem + surface locked from Batches A + B", highlight: true },
      { day: "TUE", content: "Creative build continues", highlight: false },
      { day: "WED", content: "Internal review + revisions", highlight: false },
      { day: "THU", content: "QA and final checks", highlight: false },
      { day: "FRI", content: "Final files handed off — ready to launch Monday", highlight: true },
    ],
    description: "Phase 3 production week. Problem framing and surface are both locked. Designer builds 4 deliverables testing emotional vs. functional tone across variations. This is the most refined brief of the cycle — two live windows of compounding signal behind it.",
    ongoing: "Retro happens inside next week's live window on Thursday.",
  },
  {
    number: 6,
    type: "live-retro",
    label: "Live + Retro",
    sublabel: "BATCH C",
    color: "#059669",
    accentColor: "#059669",
    days: [
      { day: "MON", content: "Batch C launches — Phase 3 tone test live", highlight: true },
      { day: "TUE", content: "Designer supports overflow work", highlight: false },
      { day: "WED", content: "Final signal baking — all 3 phases reviewable", highlight: false },
      { day: "THU", content: "Full retro: synthesize all 3 phases into a complete feature positioning verdict. Package notes for PM.", highlight: true },
      { day: "FRI", content: "Next cycle scoped — feature selected, W0 audit begins Monday", highlight: true },
    ],
    description: "The cycle closes on the same Thursday Batch C data bakes. All three phases synthesized: which problem framing, which surface, which tone. Together that's a complete positioning brief for this feature — not just ad learnings, but insight the product and marketing teams can act on. Friday scopes the next feature.",
    ongoing: "Sprint question answered. Feature positioning packaged. Cycle resets.",
  },
];

const typeConfig = {
  audit:        { label: "Audit + Brief", symbol: "◈" },
  build:        { label: "Build",         symbol: "⚙" },
  live:         { label: "Live",          symbol: "●" },
  "live-retro": { label: "Live + Retro",  symbol: "✓" },
};

const phaseLabels = {
  1: { phase: "Phase 1", name: "JTBD",    color: "#7C3AED" },
  2: { phase: "Phase 1", name: "JTBD",    color: "#7C3AED" },
  3: { phase: "Phase 2", name: "Surface", color: "#EA580C" },
  4: { phase: "Phase 2", name: "Surface", color: "#EA580C" },
  5: { phase: "Phase 3", name: "Tone",    color: "#059669" },
  6: { phase: "Phase 3", name: "Tone",    color: "#059669" },
};

export default function SprintCycle() {
  const [active, setActive] = useState(null);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
      background: "#F8F9FB",
      minHeight: "100vh",
      padding: "44px 24px 64px",
      color: "#0F172A",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .wcard { transition: transform 0.18s ease, box-shadow 0.18s ease; cursor: pointer; }
        .wcard:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .detail { animation: fadeUp 0.2s ease; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:translateY(0); } }
        .drow { transition: background 0.12s; border-radius: 6px; }
        .drow:hover { background: rgba(0,0,0,0.03) !important; }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: 1200, margin: "0 auto 48px" }}>
        <div style={{ fontFamily: "'DM Mono'", fontSize: 11, letterSpacing: 3, color: "#94A3B8", textTransform: "uppercase", marginBottom: 12 }}>
          Exploratory Workstream · Sprint Cycle
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.2, color: "#0F172A" }}>
          Exploratory Workstream
        </h1>
        <p style={{ marginTop: 10, color: "#64748B", fontSize: 15, lineHeight: 1.7, maxWidth: 660 }}>
          A focused, hypothesis-driven engine that generates granular, decision-shaping insight for the business on specific product features and how to position them effectively for marketing and product development purposes.
        </p>

        {/* Phase legend strip */}
        <div style={{ display: "flex", gap: 32, marginTop: 28, flexWrap: "wrap" }}>
          {[
            { phase: "Phase 1", name: "JTBD / Problem Framing", color: "#7C3AED", desc: "Which tension does this feature solve?" },
            { phase: "Phase 2", name: "Surface / Expression",   color: "#EA580C", desc: "Which visual expression best communicates it?" },
            { phase: "Phase 3", name: "Tone",                   color: "#059669", desc: "Emotional vs. functional register" },
          ].map(({ phase, name, color, desc }) => (
            <div key={phase} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ width: 3, height: 42, borderRadius: 2, background: color, flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: "'DM Mono'", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color }}>{phase}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#1E293B" }}>{name}</span>
                </div>
                <div style={{ fontSize: 13, color: "#64748B", marginTop: 3 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Cards row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 12, marginBottom: 10 }}>
          {weeks.map((week, i) => {
            const isActive = active === i;
            const isLive = week.type === "live" || week.type === "live-retro";
            const ph = phaseLabels[week.number];

            return (
              <div
                key={i}
                className="wcard"
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  background: isActive ? week.color : "#FFFFFF",
                  border: isActive ? `1.5px solid ${week.color}` : "1.5px solid #E2E8F0",
                  borderRadius: 16,
                  padding: "20px 18px 18px",
                  position: "relative",
                  boxShadow: isActive ? `0 4px 20px ${week.color}30` : "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                {/* Phase tag */}
                {ph && (
                  <div style={{
                    fontFamily: "'DM Mono'", fontSize: 10, letterSpacing: 1.5,
                    textTransform: "uppercase", marginBottom: 6,
                    color: isActive ? "rgba(255,255,255,0.8)" : ph.color,
                  }}>{ph.phase} · {ph.name}</div>
                )}

                <div style={{
                  fontFamily: "'DM Mono'", fontSize: 11, letterSpacing: 1.5,
                  color: isActive ? "rgba(255,255,255,0.7)" : "#64748B",
                  marginBottom: 8, textTransform: "uppercase",
                }}>W{week.number}</div>

                {isLive ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
                    <div style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: isActive ? "rgba(255,255,255,0.8)" : week.color,
                      animation: "pulse 2s infinite", flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: "'DM Mono'", fontSize: 11, letterSpacing: 1.5,
                      color: isActive ? "rgba(255,255,255,0.9)" : week.color,
                      textTransform: "uppercase",
                    }}>{week.sublabel}</span>
                  </div>
                ) : (
                  <div style={{ marginBottom: 8 }}>
                    <span style={{
                      fontFamily: "'DM Mono'", fontSize: 11, letterSpacing: 1.5,
                      color: isActive ? "rgba(255,255,255,0.9)" : week.color,
                      textTransform: "uppercase",
                    }}>{week.sublabel}</span>
                  </div>
                )}

                <div style={{
                  fontSize: 16, fontWeight: 600,
                  color: isActive ? "#fff" : "#1E293B",
                  lineHeight: 1.3, marginBottom: 16,
                }}>{week.label}</div>

                <div style={{
                  paddingTop: 8,
                  borderTop: `1px solid ${isActive ? "rgba(255,255,255,0.15)" : "#F1F5F9"}`,
                  fontSize: 11.5, color: isActive ? "rgba(255,255,255,0.6)" : "#94A3B8",
                }}>
                  {typeConfig[week.type].symbol} {typeConfig[week.type].label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Rhythm bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 12, marginBottom: 5 }}>
          {weeks.map((week, i) => (
            <div key={i} style={{
              height: 5, borderRadius: 3,
              background: `linear-gradient(90deg, ${week.color}60, ${week.color})`,
            }} />
          ))}
        </div>

        {/* Type labels */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 12, marginBottom: 36 }}>
          {weeks.map((week, i) => (
            <div key={i} style={{
              textAlign: "center", paddingTop: 5,
              fontFamily: "'DM Mono'", fontSize: 10.5,
              letterSpacing: 1, textTransform: "uppercase",
              color: `${week.color}BB`,
            }}>
              {typeConfig[week.type].label}
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {active !== null && (
          <div className="detail" style={{
            background: "#FFFFFF",
            border: `1.5px solid ${weeks[active].color}25`,
            borderRadius: 14,
            padding: "34px 40px",
            marginBottom: 28,
            boxShadow: `0 4px 24px ${weeks[active].color}10`,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52 }}>

              <div>
                <div style={{
                  fontFamily: "'DM Mono'",
                  fontSize: 12, letterSpacing: 2,
                  color: weeks[active].color,
                  textTransform: "uppercase", marginBottom: 12,
                }}>Week {weeks[active].number} — {weeks[active].label}</div>

                <p style={{ fontSize: 15.5, color: "#475569", lineHeight: 1.85 }}>
                  {weeks[active].description}
                </p>

                <div style={{
                  marginTop: 16, padding: "11px 14px",
                  background: `${weeks[active].color}08`,
                  border: `1px solid ${weeks[active].color}20`,
                  borderRadius: 8,
                  fontSize: 14.5, color: "#64748B", lineHeight: 1.65,
                }}>
                  <span style={{ color: weeks[active].color, fontWeight: 600 }}>Note: </span>
                  {weeks[active].ongoing}
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: "'DM Mono'",
                  fontSize: 12, letterSpacing: 2,
                  color: "#94A3B8", textTransform: "uppercase", marginBottom: 10,
                }}>Day-by-Day</div>

                {weeks[active].days.map(({ day, content, highlight }, di) => (
                  <div key={di} className="drow" style={{
                    display: "flex", alignItems: "flex-start", gap: 12,
                    padding: "8px 10px", marginBottom: 2,
                    background: highlight ? `${weeks[active].color}08` : "transparent",
                  }}>
                    <div style={{
                      fontFamily: "'DM Mono'", fontSize: 12, letterSpacing: 1,
                      color: highlight ? weeks[active].color : "#64748B",
                      width: 36, flexShrink: 0, paddingTop: 2,
                    }}>{day}</div>
                    <div style={{
                      width: 4, height: 4, borderRadius: "50%", flexShrink: 0,
                      background: highlight ? weeks[active].color : "#E2E8F0",
                      marginTop: 5,
                    }} />
                    <div style={{
                      fontSize: 15,
                      color: highlight ? "#0F172A" : "#475569",
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
          display: "flex", gap: 28, flexWrap: "wrap",
          alignItems: "center", paddingTop: 26,
          borderTop: "1.5px solid #E2E8F0",
        }}>
          {[
            { color: "#7C3AED", label: "Audit + Brief", desc: "Thinking before making" },
            { color: "#EA580C", label: "Build",         desc: "Production week" },
            { color: "#1D4ED8", label: "Live",          desc: "Data collection" },
            { color: "#059669", label: "Live + Retro",  desc: "Final window + synthesis" },
          ].map(({ color, label, desc }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: 3, background: color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#334155" }}>{label}</div>
                <div style={{ fontSize: 13, color: "#64748B" }}>{desc}</div>
              </div>
            </div>
          ))}
          <div style={{ marginLeft: "auto", fontFamily: "'DM Mono'", fontSize: 11, color: "#94A3B8", letterSpacing: 0.5 }}>
            W0 audit · 3× build · 3× live · retro in W6
          </div>
        </div>

      </div>
    </div>
  );
}

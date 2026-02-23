import { useState } from "react";

// ─── Ad mockup sub-components ───────────────────────────────────────────────

const adBg = "linear-gradient(160deg,#080F1E 0%,#0E1A30 100%)";

const CatRows = () => (
  <>
    <div style={{display:"flex",alignItems:"center",gap:6}}>
      <div style={{width:5,height:5,borderRadius:"50%",background:"#4C6EF5",flexShrink:0}}/>
      <div style={{fontSize:"clamp(7px,1.2vw,9.5px)",color:"#64748B",flex:1}}>Dining out</div>
      <div style={{flex:2,height:3,background:"#1A2540",borderRadius:2,overflow:"hidden"}}><div style={{width:"78%",height:"100%",background:"#4C6EF5",borderRadius:2}}/></div>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,0.9vw,8px)",color:"#334155",width:28,textAlign:"right"}}>$234</div>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:6}}>
      <div style={{width:5,height:5,borderRadius:"50%",background:"#6EBF8B",flexShrink:0}}/>
      <div style={{fontSize:"clamp(7px,1.2vw,9.5px)",color:"#64748B",flex:1}}>Groceries</div>
      <div style={{flex:2,height:3,background:"#1A2540",borderRadius:2,overflow:"hidden"}}><div style={{width:"52%",height:"100%",background:"#6EBF8B",borderRadius:2}}/></div>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,0.9vw,8px)",color:"#334155",width:28,textAlign:"right"}}>$156</div>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:6}}>
      <div style={{width:5,height:5,borderRadius:"50%",background:"#C9A84C",flexShrink:0}}/>
      <div style={{fontSize:"clamp(7px,1.2vw,9.5px)",color:"#64748B",flex:1}}>Entertainment</div>
      <div style={{flex:2,height:3,background:"#1A2540",borderRadius:2,overflow:"hidden"}}><div style={{width:"34%",height:"100%",background:"#C9A84C",borderRadius:2}}/></div>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,0.9vw,8px)",color:"#334155",width:28,textAlign:"right"}}>$89</div>
    </div>
    <div style={{display:"flex",alignItems:"center",gap:6}}>
      <div style={{width:5,height:5,borderRadius:"50%",background:"#9B8EF5",flexShrink:0}}/>
      <div style={{fontSize:"clamp(7px,1.2vw,9.5px)",color:"#64748B",flex:1}}>Shopping</div>
      <div style={{flex:2,height:3,background:"#1A2540",borderRadius:2,overflow:"hidden"}}><div style={{width:"21%",height:"100%",background:"#9B8EF5",borderRadius:2}}/></div>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,0.9vw,8px)",color:"#334155",width:28,textAlign:"right"}}>$63</div>
    </div>
  </>
);

const FlexTotal = () => (
  <div style={{position:"absolute",left:"7%",right:"7%",top:"66%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <span style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(7px,1vw,9px)",color:"#334155",letterSpacing:1,textTransform:"uppercase"}}>Flex total</span>
    <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(14px,2.5vw,18px)",color:"#F1F5F9"}}>$468 <span style={{fontSize:"0.55em",color:"#334155"}}>left</span></span>
  </div>
);

const PBar = () => (
  <div style={{position:"absolute",left:"7%",right:"7%",top:"38%"}}>
    <div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,1vw,8.5px)",letterSpacing:1,textTransform:"uppercase",color:"#334155",marginBottom:4}}>Flexible pool this month</div>
    <div style={{height:5,background:"#1A2540",borderRadius:3,overflow:"hidden"}}><div style={{width:"61%",height:"100%",background:"#3B5BDB",borderRadius:3}}/></div>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
      <span style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,1vw,8px)",color:"#334155"}}>$732 spent</span>
      <span style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,1vw,8px)",color:"#93B4F8"}}>61% of $1,200</span>
    </div>
  </div>
);

const AdCard = ({ num, variable, variableSub, noteColor, noteLabel, noteText, children }) => (
  <div style={{display:"flex",flexDirection:"column",gap:8}}>
    <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"#94A3B8"}}>{num}</div>
    <div style={{fontSize:12,fontWeight:600,color:"#0F172A",lineHeight:1.4}}>{variable}</div>
    <div style={{fontSize:11,color:"#475569",lineHeight:1.5,marginBottom:2}}>{variableSub}</div>
    <div style={{width:"100%",aspectRatio:"1/1",borderRadius:10,overflow:"hidden",position:"relative",background:adBg}}>
      <div style={{position:"absolute",top:"7%",left:"7%",fontFamily:"'DM Mono',monospace",fontSize:"clamp(7px,1.2vw,10px)",letterSpacing:2,textTransform:"uppercase",color:"#1E3A8A"}}>Clarity</div>
      {children}
    </div>
    <div style={{background:"#fff",border:"1px solid #E2E8F0",borderRadius:8,padding:"10px 12px"}}>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:8,letterSpacing:2,textTransform:"uppercase",color:noteColor,marginBottom:4}}>{noteLabel}</div>
      <div style={{fontSize:11,color:"#475569",lineHeight:1.6}}>{noteText}</div>
    </div>
  </div>
);

// ─── Batch A: JTBD (W1) ─────────────────────────────────────────────────────
const BatchA = () => (
  <div>
    <div style={{marginBottom:16}}>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"#94A3B8",marginBottom:4}}>Locked: Visual system A · Surface: budget summary progress bar · Variable: problem framing</div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>

      <AdCard num="A1" variable="Rigid budgets don't fit real life" variableSub="Life doesn't fit a fixed budget" noteColor="#7C3AED" noteLabel="Framing" noteText="Challenges the rigidity of traditional budgeting. Positions the feature as relief from an outdated system.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.2vw,16px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"30%",textAlign:"right"}}>Life doesn't fit a fixed budget.</div>
        <PBar/>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"58%",height:1,background:"#1A2540"}}/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",color:"#64748B",lineHeight:1.6,left:"7%",right:"7%",top:"62%"}}>Your flex budget adjusts to how you actually live — not how you planned to.</div>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"7%",left:"7%"}}>See how it works</div>
      </AdCard>

      <AdCard num="A2" variable="My spending fluctuates month to month" variableSub="No two months are the same" noteColor="#7C3AED" noteLabel="Framing" noteText="Acknowledges variability as normal. Positions the feature as built for real-life unpredictability.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.2vw,16px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"30%",textAlign:"right"}}>No two months are the same.</div>
        <PBar/>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"58%",height:1,background:"#1A2540"}}/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",color:"#64748B",lineHeight:1.6,left:"7%",right:"7%",top:"62%"}}>A budget that moves with your month — not against it.</div>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"7%",left:"7%"}}>See how it works</div>
      </AdCard>

      <AdCard num="A3" variable="I hate reworking my budget every month" variableSub="Stop starting over every month" noteColor="#7C3AED" noteLabel="Framing" noteText="Targets the friction of maintenance. Relief through automation — the budget doesn't need to be rebuilt.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.2vw,16px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"30%",textAlign:"right"}}>Stop starting over every month.</div>
        <PBar/>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"58%",height:1,background:"#1A2540"}}/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",color:"#64748B",lineHeight:1.6,left:"7%",right:"7%",top:"62%"}}>Set it once. Let it flex. Your budget stays useful without the reset.</div>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"7%",left:"7%"}}>See how it works</div>
      </AdCard>

      <AdCard num="A4" variable="I never know how much I actually have left" variableSub="Always know your real flex number" noteColor="#7C3AED" noteLabel="Framing" noteText="Visibility-led. The tension is uncertainty — the feature resolves it with one clear number.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.2vw,16px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"30%",textAlign:"right"}}>Always know your real number.</div>
        <PBar/>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"58%",height:1,background:"#1A2540"}}/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",color:"#64748B",lineHeight:1.6,left:"7%",right:"7%",top:"62%"}}>One number. What you have left to spend — after everything that matters.</div>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"7%",left:"7%"}}>See how it works</div>
      </AdCard>

    </div>
  </div>
);

// ─── Batch B: Surface (W3) ───────────────────────────────────────────────────
const BatchB = () => (
  <div>
    <div style={{marginBottom:16}}>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"#94A3B8",marginBottom:4}}>Locked: Visual system A · JTBD: "Life doesn't fit a fixed budget" · Variable: surface / UI expression</div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>

      <AdCard num="B1" variable="Flexible summary + progress bar" variableSub="Carried from Batch A as baseline" noteColor="#EA580C" noteLabel="Surface" noteText="Top-line flex pool with single progress bar. Simple, clear — shows the concept at a glance.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.2vw,16px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"30%",textAlign:"right"}}>Life doesn't fit a fixed budget.</div>
        <PBar/>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"58%",height:1,background:"#1A2540"}}/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",color:"#64748B",lineHeight:1.6,left:"7%",right:"7%",top:"62%"}}>Your flex budget adjusts to how you actually live.</div>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"7%",left:"7%"}}>See how it works</div>
      </AdCard>

      <AdCard num="B2" variable="Category breakdown → flex pool" variableSub="Multiple categories feeding one number" noteColor="#EA580C" noteLabel="Surface" noteText="Shows the mechanism — multiple categories pool into one flex number. Demonstrates the feature's logic.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.2vw,16px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"30%",textAlign:"right"}}>Life doesn't fit a fixed budget.</div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"37%",display:"flex",flexDirection:"column",gap:5}}><CatRows/></div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"62%",height:1,background:"#1A2540"}}/>
        <FlexTotal/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"6%",left:"7%"}}>See how it works</div>
      </AdCard>

      <AdCard num="B3" variable="Setup screen — top-line flex number" variableSub="Onboarding moment, configurability" noteColor="#EA580C" noteLabel="Surface" noteText='Shows the setup moment — communicates simplicity and control. "Set it once" is the emotional beat.'>
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.2vw,16px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"30%",textAlign:"right"}}>Life doesn't fit a fixed budget.</div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"36%",background:"#0C1730",border:"1px solid #1A2540",borderRadius:8,padding:"5% 6%"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,1vw,8px)",color:"#334155",letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:6}}>Your flexible budget</div>
          <div style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(20px,4vw,30px)",color:"#F1F5F9",lineHeight:1}}>$1,200</div>
          <div style={{fontSize:"clamp(7px,1.1vw,9px)",color:"#334155",marginTop:4}}>per month · across all flex categories</div>
          <div style={{marginTop:8,height:3,background:"#1A2540",borderRadius:2,overflow:"hidden"}}><div style={{width:"61%",height:"100%",background:"#3B5BDB",borderRadius:2}}/></div>
          <div style={{display:"flex",justifyContent:"space-between",marginTop:4}}>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(5px,0.9vw,7.5px)",color:"#1E3A8A"}}>essentials locked</span>
            <span style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(5px,0.9vw,7.5px)",color:"#3B5BDB"}}>flex pool active</span>
          </div>
        </div>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"6%",left:"7%"}}>See how it works</div>
      </AdCard>

      <AdCard num="B4" variable="Mobile widget overview" variableSub="Home screen glanceability" noteColor="#EA580C" noteLabel="Surface" noteText="Home screen widget — emphasises passive awareness. You don't have to open the app to know where you stand.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.2vw,16px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"30%",textAlign:"right"}}>Life doesn't fit a fixed budget.</div>
        <div style={{position:"absolute",left:"50%",top:"36%",transform:"translateX(-50%)",width:"52%",background:"#0C1730",border:"1.5px solid #1A2540",borderRadius:14,padding:"4% 5%"}}>
          <div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(5px,0.85vw,7.5px)",color:"#1E3A8A",letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:3}}>clarity · flex</div>
          <div style={{display:"flex",alignItems:"baseline",gap:4}}>
            <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(16px,3.2vw,24px)",color:"#F1F5F9"}}>$468</span>
            <span style={{fontSize:"clamp(6px,1vw,8px)",color:"#334155"}}>left to spend</span>
          </div>
          <div style={{marginTop:5,height:3,background:"#1A2540",borderRadius:2,overflow:"hidden"}}><div style={{width:"39%",height:"100%",background:"#3B5BDB",borderRadius:2}}/></div>
          <div style={{marginTop:3,fontFamily:"'DM Mono',monospace",fontSize:"clamp(5px,0.8vw,7px)",color:"#334155"}}>39% remaining · resets in 9d</div>
          <div style={{marginTop:6,display:"flex",gap:3}}>
            <div style={{flex:1,background:"#1A2540",borderRadius:4,padding:"3px 4px"}}><div style={{fontSize:"clamp(5px,0.8vw,7px)",color:"#334155"}}>dining</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,0.9vw,8px)",color:"#4C6EF5"}}>$234</div></div>
            <div style={{flex:1,background:"#1A2540",borderRadius:4,padding:"3px 4px"}}><div style={{fontSize:"clamp(5px,0.8vw,7px)",color:"#334155"}}>groceries</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,0.9vw,8px)",color:"#6EBF8B"}}>$156</div></div>
            <div style={{flex:1,background:"#1A2540",borderRadius:4,padding:"3px 4px"}}><div style={{fontSize:"clamp(5px,0.8vw,7px)",color:"#334155"}}>other</div><div style={{fontFamily:"'DM Mono',monospace",fontSize:"clamp(6px,0.9vw,8px)",color:"#C9A84C"}}>$342</div></div>
          </div>
        </div>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"6%",left:"7%"}}>See how it works</div>
      </AdCard>

    </div>
  </div>
);

// ─── Batch C: Tone (W5) ──────────────────────────────────────────────────────
const BatchC = () => (
  <div>
    <div style={{marginBottom:16}}>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"#94A3B8",marginBottom:4}}>Locked: Visual system A · JTBD: "Life doesn't fit a fixed budget" · Surface: category breakdown · Variable: tone</div>
    </div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>

      <AdCard num="C1" variable="Emotional — warm" variableSub="Affirming, on your side" noteColor="#059669" noteLabel="Tone" noteText="Warm and affirming. Validates the user's behaviour before introducing the solution. CTA invites ownership.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.1vw,15px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"25%",textAlign:"right"}}>Your spending is human. Your budget should be too.</div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"38%",display:"flex",flexDirection:"column",gap:5}}><CatRows/></div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"62%",height:1,background:"#1A2540"}}/>
        <FlexTotal/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"6%",left:"7%"}}>Make it yours</div>
      </AdCard>

      <AdCard num="C2" variable="Emotional — relief" variableSub="Tension released, weight lifted" noteColor="#059669" noteLabel="Tone" noteText="Relief-oriented. The budget was the antagonist — now it isn't. Emotionally resonant without being dramatic.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.1vw,15px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"25%",textAlign:"right"}}>Finally, a budget that stops fighting you.</div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"38%",display:"flex",flexDirection:"column",gap:5}}><CatRows/></div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"62%",height:1,background:"#1A2540"}}/>
        <FlexTotal/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"6%",left:"7%"}}>See how it works</div>
      </AdCard>

      <AdCard num="C3" variable="Functional — direct" variableSub="Clear, no-nonsense, benefit-led" noteColor="#059669" noteLabel="Tone" noteText="Benefit-stacking headline. Names the mechanism clearly. CTA is feature-specific and transactional.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.1vw,15px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"25%",textAlign:"right"}}>One flex pool. Every category. Total control.</div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"38%",display:"flex",flexDirection:"column",gap:5}}><CatRows/></div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"62%",height:1,background:"#1A2540"}}/>
        <FlexTotal/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"6%",left:"7%"}}>Try flexible budgeting</div>
      </AdCard>

      <AdCard num="C4" variable="Functional — feature-led" variableSub="Explains the mechanic explicitly" noteColor="#059669" noteLabel="Tone" noteText="Explains the feature mechanic in the headline. For users who want to understand exactly how it works.">
        <div style={{position:"absolute",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"clamp(11px,2.1vw,15px)",color:"#F1F5F9",lineHeight:1.2,top:"7%",right:"7%",left:"25%",textAlign:"right"}}>Set a flex pool. Spend across any category.</div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"38%",display:"flex",flexDirection:"column",gap:5}}><CatRows/></div>
        <div style={{position:"absolute",left:"7%",right:"7%",top:"62%",height:1,background:"#1A2540"}}/>
        <FlexTotal/>
        <div style={{position:"absolute",fontSize:"clamp(7px,1.2vw,9.5px)",fontWeight:600,padding:"5px 12px",borderRadius:20,background:"#3B5BDB",color:"#fff",whiteSpace:"nowrap",bottom:"6%",left:"7%"}}>Try flexible budgeting</div>
      </AdCard>

    </div>
  </div>
);

// ─── Batch header ─────────────────────────────────────────────────────────────
const BatchHeader = ({ eyebrow, eyebrowColor, title, desc }) => (
  <div style={{display:"flex",alignItems:"flex-start",gap:12,marginBottom:20,paddingBottom:16,borderBottom:"1px solid #E2E8F0"}}>
    <div style={{width:3,borderRadius:2,height:44,background:eyebrowColor,flexShrink:0,marginTop:2}}/>
    <div>
      <div style={{fontFamily:"'DM Mono',monospace",fontSize:9,letterSpacing:2,textTransform:"uppercase",color:eyebrowColor,marginBottom:4}}>{eyebrow}</div>
      <div style={{fontSize:15,fontWeight:700,color:"#0F172A",marginBottom:4}}>{title}</div>
      <div style={{fontSize:12.5,color:"#475569",lineHeight:1.65}}>{desc}</div>
    </div>
  </div>
);

// ─── Main data ────────────────────────────────────────────────────────────────

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
      { day: "WED", content: "Strategist builds JTBD hypothesis brief. Brief review + alignment with growth.", highlight: true },
      { day: "THU", content: "Designer presents 3 visual system directions (using existing work as reference). Team selects one.", highlight: true },
      { day: "FRI", content: "Brief finalized and handed to production (creative ops) by 4pm EST. Visual system locked.", highlight: true },
    ],
    description: "Signifies the kickoff of a new exploration. The designer audits the feature in product, explores key use cases in a demo environment, documents findings in a one sheet, and syncs with product or PMM to confirm understanding. In parallel, they propose three visual system directions based on existing work to align on creative direction before production. By Friday, they are clear on the problem to solve, the visual language to use, and the surface to showcase.",
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
      { day: "FRI", content: "Final files handed off by 4pm PST and launched same day. Results by Wednesday.", highlight: true },
    ],
    description: "Phase 1 production week. Designer builds 4 deliverables testing 4 different JTBD / problem framings against a locked surface and locked visual system. The only variable is the problem framing — which tension does this feature solve? Files handed off and launched Friday by 4pm PST, results by Wednesday.",
    ongoing: "No live data yet. Full focus on production quality.",
    batchComponent: "A",
  },
  {
    number: 2,
    type: "live",
    label: "Live",
    sublabel: "BATCH A",
    color: "#1D4ED8",
    accentColor: "#1D4ED8",
    days: [
      { day: "MON", content: "Batch A live since Friday — early signal starting to accumulate", highlight: true },
      { day: "TUE", content: "Designer has capacity for overflow work", highlight: false },
      { day: "WED", content: "Early results reviewed — signal starting to bake", highlight: false },
      { day: "THU", content: "Results review with strategist + growth. Winning problem framing identified. Phase 2 brief written.", highlight: true },
      { day: "FRI", content: "Brief finalized and handed to production by 4pm EST.", highlight: true },
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
      { day: "FRI", content: "Final files handed off by 4pm PST and launched same day. Results by Wednesday.", highlight: true },
    ],
    description: "Phase 2 production week. Problem framing is locked from Phase 1. Designer builds 4 deliverables each showing a different surface or expression of the feature — progress bar, category breakdown, setup screen, mobile widget. The question now: which visual expression best communicates the solved problem? Files handed off and launched Friday by 4pm PST, results by Wednesday.",
    ongoing: "Problem framing locked. Surface is the only variable.",
    batchComponent: "B",
  },
  {
    number: 4,
    type: "live",
    label: "Live",
    sublabel: "BATCH B",
    color: "#1D4ED8",
    accentColor: "#1D4ED8",
    days: [
      { day: "MON", content: "Batch B live since Friday — early signal starting to accumulate", highlight: true },
      { day: "TUE", content: "Designer has capacity for overflow work", highlight: false },
      { day: "WED", content: "Early results reviewed", highlight: false },
      { day: "THU", content: "Results review. Winning surface identified. Phase 3 tone brief written.", highlight: true },
      { day: "FRI", content: "Brief finalized and handed to production by 4pm EST.", highlight: true },
    ],
    description: "Phase 2 is live. By Thursday we know which surface best communicates the feature for this problem framing. That surface is now locked. Phase 3 brief is written Thursday — the final question is tone. Emotional vs. functional register.",
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
      { day: "FRI", content: "Final files handed off by 4pm PST and launched same day. Results by Wednesday.", highlight: true },
    ],
    description: "Phase 3 production week. Problem framing and surface are both locked. Designer builds 4 deliverables testing emotional vs. functional tone across variations. This is the most refined brief of the cycle — two live windows of compounding signal behind it. Files handed off and launched Friday by 4pm PST, results by Wednesday.",
    ongoing: "Retro happens inside next week's live window on Thursday.",
    batchComponent: "C",
  },
  {
    number: 6,
    type: "live-retro",
    label: "Live + Retro + Next Brief",
    sublabel: "BATCH C",
    color: "#059669",
    accentColor: "#059669",
    days: [
      { day: "MON", content: "Batch C live since Friday — Phase 3 tone test accumulating. Designer supports overflow work.", highlight: true },
      { day: "TUE", content: "Designer audits next feature in product, exploring all functional use cases in a demo environment and documenting findings in a one-sheeter. Follows up with product team or PMM to gut-check understanding and fill gaps.", highlight: true },
      { day: "WED", content: "Designer begins visual system direction prep for next feature.", highlight: true },
      { day: "THU", content: "Full retro: synthesize all 3 phases into complete positioning verdict. Package notes for PM. Next feature confirmed.", highlight: true },
      { day: "FRI", content: "Next cycle fully briefed and handed off to creative ops by 4pm EST — build starts Monday.", highlight: true },
    ],
    description: "W6 is both the close of this cycle and the open of the next. The cycle closes Thursday: all three phases synthesized into a complete positioning verdict for this feature — which problem framing, which surface, which tone. That's a brief the product and marketing teams can act on. Friday runs the W0 audit track in parallel: next feature selected, visual system direction chosen, JTBD hypothesis brief written. No gap. Build starts Monday.",
    ongoing: "This week does the work of two: W6 retro + W0 audit. The cycle is continuous.",
  },
];

const typeConfig = {
  audit:        { label: "Audit + Brief", symbol: "◈" },
  build:        { label: "Build",         symbol: "⚙" },
  live:         { label: "Live",          symbol: "●" },
  "live-retro": { label: "Live + Retro + Brief",  symbol: "✓" },
};

const phaseLabels = {
  1: { phase: "Phase 1", name: "JTBD",    color: "#7C3AED" },
  2: { phase: "Phase 1", name: "JTBD",    color: "#7C3AED" },
  3: { phase: "Phase 2", name: "Surface", color: "#EA580C" },
  4: { phase: "Phase 2", name: "Surface", color: "#EA580C" },
  5: { phase: "Phase 3", name: "Tone",    color: "#059669" },
  6: { phase: "Phase 3", name: "Tone",    color: "#059669" },
};

const batchMeta = {
  A: { eyebrow: "Batch A · Week 1 · Phase 1", color: "#7C3AED", title: "JTBD / Problem Framing", desc: "Which core tension does flexible budgeting solve? All 4 ads use the same visual system and same surface. Only the problem framing changes." },
  B: { eyebrow: "Batch B · Week 3 · Phase 2", color: "#EA580C", title: "Surface / Expression",   desc: 'Problem framing locked: "Life doesn\'t fit a fixed budget." Now testing which surface best communicates the solved problem.' },
  C: { eyebrow: "Batch C · Week 5 · Phase 3", color: "#059669", title: "Tone",                   desc: 'JTBD and surface locked. Testing emotional vs. functional register — which tone converts better for this feature?' },
};

// ─── Main component ───────────────────────────────────────────────────────────

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
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
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

                {week.batchComponent && (
                  <div style={{
                    marginBottom: 10,
                    display: "inline-flex", alignItems: "center", gap: 5,
                    background: isActive ? "rgba(255,255,255,0.15)" : `${week.color}10`,
                    border: `1px solid ${isActive ? "rgba(255,255,255,0.2)" : `${week.color}25`}`,
                    borderRadius: 20, padding: "3px 9px",
                  }}>
                    <span style={{ fontSize: 10, color: isActive ? "rgba(255,255,255,0.9)" : week.color, fontWeight: 600 }}>
                      4 mockups ↓
                    </span>
                  </div>
                )}

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
            {/* Top section: description + day-by-day */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, marginBottom: weeks[active].batchComponent ? 40 : 0 }}>
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

            {/* Ad mockups — only for W1, W3, W5 */}
            {weeks[active].batchComponent && (() => {
              const meta = batchMeta[weeks[active].batchComponent];
              return (
                <div style={{
                  borderTop: `1px solid #E2E8F0`,
                  paddingTop: 32,
                }}>
                  <BatchHeader
                    eyebrow={meta.eyebrow}
                    eyebrowColor={meta.color}
                    title={meta.title}
                    desc={meta.desc}
                  />
                  {weeks[active].batchComponent === "A" && <BatchA />}
                  {weeks[active].batchComponent === "B" && <BatchB />}
                  {weeks[active].batchComponent === "C" && <BatchC />}
                </div>
              );
            })()}
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
            { color: "#059669", label: "Live + Retro + Brief",  desc: "Final window, synthesis + next brief" },
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

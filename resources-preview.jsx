import { useState } from "react";

const css = `
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
  * { box-sizing: border-box; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #0b0b0f; }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
`;

const NEWS = [
  { id:"1", date:"Feb 10", cat:"Guide", color:"#34d399", title:"Wan 2.1 LoRA Training Guide Released", body:"Community published a comprehensive guide covering dataset prep through deployment." },
  { id:"2", date:"Feb 7", cat:"Art Picks", color:"#a78bfa", title:"Weekly Art Picks: Week 107 — Surrealist Landscapes", body:"Stunning work from 10 artists exploring impossible architectures and dreamscapes." },
  { id:"3", date:"Feb 3", cat:"Workflow", color:"#38bdf8", title:"New: Multi-Pass Upscaling Pipeline", body:"Alex shared a powerful workflow chaining upscaling passes with intelligent denoising." },
  { id:"4", date:"Jan 29", cat:"Milestone", color:"#fbbf24", title:"Community Reaches 5,000 Members", body:"The Banodoco Discord hit a major milestone. Thank you to everyone!" },
];

const WEEKS = [
  { id:"w1", title:"Week of Feb 10, 2025", date:"Feb 10 – Feb 16", videos:10 },
  { id:"w2", title:"Week of Feb 3, 2025", date:"Feb 3 – Feb 9", videos:10 },
  { id:"w3", title:"Week of Jan 27, 2025", date:"Jan 27 – Feb 2", videos:10 },
  { id:"w4", title:"Week of Jan 20, 2025", date:"Jan 20 – Jan 26", videos:10 },
];

const RESOURCES = [
  { id:"1", name:"Cinematic Camera Movement", type:"lora", model:"Wan 2.1", desc:"Smooth dolly & crane movements for establishing shots.", dl:342, lk:89 },
  { id:"2", name:"Watercolor Dissolve", type:"lora", model:"Wan 2.1", desc:"Organic watercolor bleeding with paper texture.", dl:567, lk:156 },
  { id:"3", name:"Portrait Enhancement", type:"workflow", model:"LTXV", desc:"Enhance AI portraits with improved skin & lighting.", dl:892, lk:234 },
  { id:"4", name:"Slow Motion Physics", type:"lora", model:"Hunyuan", desc:"Realistic slo-mo with proper motion blur.", dl:421, lk:112 },
  { id:"5", name:"Neon Cyberpunk", type:"lora", model:"Wan 2.1", desc:"Neon-drenched atmosphere with volumetric fog.", dl:1203, lk:345 },
  { id:"6", name:"Multi-Subject Comp", type:"workflow", model:"Wan 2.1", desc:"Composite multiple subjects into one scene.", dl:678, lk:189 },
  { id:"7", name:"Film Grain & Halation", type:"lora", model:"LTXV", desc:"Kodak Vision3 500T inspired grain & color.", dl:956, lk:278 },
  { id:"8", name:"Camera Orbit 360°", type:"lora", model:"Hunyuan", desc:"Clean orbiting movements around a subject.", dl:445, lk:98 },
];

const Play = ({s=20,o=0.08}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" style={{opacity:o}}><path d="M8 5v14l11-7z"/></svg>;

function ResourcesPreview() {
  const [expandedNews, setExpandedNews] = useState(null);
  const [typeFilter, setTypeFilter] = useState("all");
  const filtered = typeFilter === "all" ? RESOURCES : RESOURCES.filter(r=>r.type===typeFilter);

  return (
    <div style={{background:"#0b0b0f",minHeight:"100vh",color:"white",fontFamily:"-apple-system,BlinkMacSystemFont,Inter,sans-serif"}}>
      <style>{css}</style>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"60px 24px 80px"}}>

        {/* ═══ MASTHEAD ═══ */}
        <div style={{marginBottom:72}}>
          <div style={{height:1,background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)",marginBottom:16}}/>
          <h1 style={{fontSize:48,fontWeight:600,letterSpacing:"-0.02em",margin:0}}>Resources</h1>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.28)",marginTop:10,maxWidth:440,lineHeight:1.6}}>
            Tools, art, and knowledge from the Banodoco community — everything you need to create with AI video.
          </p>
          <div style={{height:1,background:"linear-gradient(90deg,rgba(255,255,255,0.06),transparent)",marginTop:20}}/>
        </div>

        {/* ═══ COMMUNITY NEWS ═══ */}
        <section style={{marginBottom:72}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
            <div style={{width:6,height:6,borderRadius:"50%",background:"#34d399",animation:"pulse 2s infinite"}}/>
            <span style={{fontSize:11,fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)"}}>Community News</span>
            <div style={{flex:1,height:1,background:"rgba(255,255,255,0.04)"}}/>
          </div>
          {NEWS.map(n=>(
            <div key={n.id}>
              <div onClick={()=>setExpandedNews(expandedNews===n.id?null:n.id)} style={{display:"flex",alignItems:"center",gap:12,padding:"11px 0",borderBottom:"1px solid rgba(255,255,255,0.04)",cursor:"pointer",transition:"border-color 0.2s"}}>
                <span style={{fontSize:11,color:"rgba(255,255,255,0.18)",fontFamily:"monospace",width:40,flexShrink:0}}>{n.date}</span>
                <span style={{fontSize:10,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase",padding:"2px 8px",borderRadius:20,background:`${n.color}15`,color:n.color,flexShrink:0}}>{n.cat}</span>
                <span style={{fontSize:13,color:"rgba(255,255,255,0.6)",flex:1,lineHeight:1.35}}>{n.title}</span>
                <span style={{color:"rgba(255,255,255,0.12)",fontSize:15,transform:expandedNews===n.id?"rotate(45deg)":"none",transition:"transform 0.2s"}}>+</span>
              </div>
              {expandedNews===n.id && <p style={{fontSize:13,color:"rgba(255,255,255,0.28)",lineHeight:1.6,padding:"4px 0 12px 110px",margin:0}}>{n.body}</p>}
            </div>
          ))}
        </section>

        {/* ═══ THINGS PEOPLE MADE ═══ */}
        <section style={{marginBottom:96}}>
          <span style={{display:"block",fontSize:11,fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(139,92,246,0.45)",marginBottom:6}}>Community Tools</span>
          <h2 style={{fontSize:26,fontWeight:600,margin:0,letterSpacing:"-0.01em"}}>Things People Made</h2>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.28)",marginTop:6,marginBottom:18}}>LoRAs, workflows, and tools shared by community members for AI video generation.</p>

          <div style={{display:"flex",gap:6,marginBottom:18,flexWrap:"wrap",alignItems:"center"}}>
            {[["all","All Types"],["lora","LoRAs"],["workflow","Workflows"]].map(([v,l])=>(
              <button key={v} onClick={()=>setTypeFilter(v)} style={{
                background:typeFilter===v?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.025)",
                border:`1px solid ${typeFilter===v?"rgba(255,255,255,0.12)":"rgba(255,255,255,0.05)"}`,
                borderRadius:20,padding:"4px 12px",fontSize:12,
                color:typeFilter===v?"rgba(255,255,255,0.65)":"rgba(255,255,255,0.35)",
                cursor:"pointer",transition:"all 0.2s"
              }}>{l}</button>
            ))}
            <span style={{marginLeft:"auto",fontSize:11,color:"rgba(255,255,255,0.12)",fontFamily:"monospace"}}>{filtered.length} results</span>
          </div>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(230px,1fr))",gap:12}}>
            {filtered.map(r=>{
              const isL = r.type==="lora";
              return (
                <div key={r.id} style={{borderRadius:12,border:"1px solid rgba(255,255,255,0.04)",background:"rgba(255,255,255,0.01)",overflow:"hidden",cursor:"pointer",transition:"all 0.3s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";e.currentTarget.style.background="rgba(255,255,255,0.02)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.04)";e.currentTarget.style.background="rgba(255,255,255,0.01)";}}>
                  <div style={{aspectRatio:"16/10",position:"relative",background:isL?"linear-gradient(135deg,rgba(124,58,237,0.06),transparent)":"linear-gradient(135deg,rgba(14,165,233,0.06),transparent)"}}>
                    <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}><Play s={24} o={0.05}/></div>
                    <div style={{position:"absolute",top:8,left:8}}>
                      <span style={{fontSize:9,fontWeight:600,letterSpacing:"0.05em",textTransform:"uppercase",padding:"2px 7px",borderRadius:16,background:isL?"rgba(139,92,246,0.1)":"rgba(56,189,248,0.1)",color:isL?"#a78bfa":"#38bdf8",border:`1px solid ${isL?"rgba(139,92,246,0.12)":"rgba(56,189,248,0.12)"}`}}>{isL?"LoRA":"Workflow"}</span>
                    </div>
                    <div style={{position:"absolute",top:8,right:8}}>
                      <span style={{fontSize:9,color:"rgba(255,255,255,0.22)",background:"rgba(0,0,0,0.25)",padding:"2px 7px",borderRadius:16}}>{r.model}</span>
                    </div>
                  </div>
                  <div style={{padding:12}}>
                    <h3 style={{fontSize:13,fontWeight:500,color:"rgba(255,255,255,0.7)",margin:0,lineHeight:1.3}}>{r.name}</h3>
                    <p style={{fontSize:11,color:"rgba(255,255,255,0.25)",margin:"5px 0 0",lineHeight:1.5,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{r.desc}</p>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8,paddingTop:8,borderTop:"1px solid rgba(255,255,255,0.03)"}}>
                      <div style={{display:"flex",alignItems:"center",gap:5}}>
                        <div style={{width:12,height:12,borderRadius:"50%",background:"rgba(255,255,255,0.05)"}}/>
                        <span style={{fontSize:10,color:"rgba(255,255,255,0.2)"}}>Community</span>
                      </div>
                      <div style={{display:"flex",gap:8,fontSize:10,color:"rgba(255,255,255,0.15)"}}>
                        <span>↓{r.dl}</span>
                        <span>♥{r.lk}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══ ART FROM THE COMMUNITY ═══ */}
        <section>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:24}}>
            <div>
              <span style={{display:"block",fontSize:11,fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(251,191,36,0.45)",marginBottom:6}}>Curated Weekly</span>
              <h2 style={{fontSize:30,fontWeight:600,margin:0,letterSpacing:"-0.01em"}}>Art From The Community</h2>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.28)",marginTop:6}}>104 weeks of community art picks and counting.</p>
            </div>
            <span style={{fontSize:13,color:"rgba(255,255,255,0.22)",cursor:"pointer"}}>Browse full archive →</span>
          </div>

          {/* Featured */}
          <div style={{borderRadius:16,border:"1px solid rgba(255,255,255,0.04)",background:"rgba(255,255,255,0.012)",overflow:"hidden",cursor:"pointer",transition:"all 0.4s"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.09)"}
            onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.04)"}>
            <div style={{aspectRatio:"3/1",position:"relative",overflow:"hidden",background:"linear-gradient(135deg,rgba(146,64,14,0.08),#000,rgba(88,28,135,0.08))"}}>
              <div style={{position:"absolute",inset:0,opacity:0.025,backgroundImage:"linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>
              <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:300,height:300,borderRadius:"50%",background:"rgba(251,191,36,0.025)",filter:"blur(50px)"}}/>
              <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                {[0.04,0.08,0.04].map((op,i)=>(
                  <div key={i} style={{width:i===1?50:38,height:i===1?50:38,borderRadius:8,background:`rgba(255,255,255,${op})`,display:"flex",alignItems:"center",justifyContent:"center",opacity:i===1?1:0.5}}>
                    <Play s={i===1?20:16} o={i===1?0.25:0.12}/>
                  </div>
                ))}
              </div>
              <div style={{position:"absolute",top:16,left:16}}>
                <span style={{fontSize:10,fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(251,191,36,0.4)",background:"rgba(251,191,36,0.06)",border:"1px solid rgba(251,191,36,0.08)",borderRadius:20,padding:"3px 10px"}}>Latest Issue</span>
              </div>
              <div style={{position:"absolute",top:16,right:16}}>
                <span style={{fontSize:11,color:"rgba(255,255,255,0.22)",fontFamily:"monospace"}}>10 pieces</span>
              </div>
            </div>
            <div style={{padding:"18px 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div>
                <h3 style={{fontSize:18,fontWeight:600,margin:0,color:"white"}}>{WEEKS[0].title}</h3>
                <p style={{fontSize:11,color:"rgba(255,255,255,0.25)",margin:"2px 0 0"}}>{WEEKS[0].date}</p>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.35)",margin:"6px 0 0",lineHeight:1.5}}>This week's top picks showcase incredible creativity — surrealist landscapes to impossible architectures.</p>
              </div>
              <span style={{fontSize:13,color:"rgba(255,255,255,0.3)",whiteSpace:"nowrap",marginLeft:24}}>View all picks →</span>
            </div>
          </div>

          {/* Recent 3 */}
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10,marginTop:10}}>
            {WEEKS.slice(1).map((w,i)=>{
              const grads=["rgba(124,58,237,0.06)","rgba(14,165,233,0.06)","rgba(244,63,94,0.06)"];
              return (
                <div key={w.id} style={{borderRadius:10,border:"1px solid rgba(255,255,255,0.04)",background:"rgba(255,255,255,0.01)",overflow:"hidden",cursor:"pointer",transition:"all 0.3s"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.09)";e.currentTarget.style.background="rgba(255,255,255,0.02)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.04)";e.currentTarget.style.background="rgba(255,255,255,0.01)";}}>
                  <div style={{aspectRatio:"16/9",position:"relative",background:`linear-gradient(135deg,${grads[i]},transparent)`}}>
                    <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center"}}><Play s={28} o={0.05}/></div>
                    <span style={{position:"absolute",bottom:6,right:6,fontSize:10,color:"rgba(255,255,255,0.16)",fontFamily:"monospace"}}>{w.videos} pieces</span>
                  </div>
                  <div style={{padding:12}}>
                    <h3 style={{fontSize:13,fontWeight:500,color:"rgba(255,255,255,0.6)",margin:0}}>{w.title}</h3>
                    <p style={{fontSize:11,color:"rgba(255,255,255,0.2)",margin:"2px 0 0"}}>{w.date}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Archive strip */}
          <div style={{display:"flex",alignItems:"center",gap:16,marginTop:20}}>
            <div style={{flex:1,height:1,background:"rgba(255,255,255,0.04)"}}/>
            <span style={{fontSize:11,color:"rgba(255,255,255,0.18)",display:"flex",alignItems:"center",gap:8,cursor:"pointer"}}>
              <span style={{fontFamily:"monospace"}}>104 weeks</span>
              <span style={{color:"rgba(255,255,255,0.08)"}}>·</span>
              <span>~1040+ artworks in the archive</span>
              <span>→</span>
            </span>
            <div style={{flex:1,height:1,background:"rgba(255,255,255,0.04)"}}/>
          </div>
        </section>

      </div>
    </div>
  );
}

export default ResourcesPreview;

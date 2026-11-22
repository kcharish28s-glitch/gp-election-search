(function(){
"use strict";
var CH=window.CHUNKS||[], FAQ=window.FAQ||[];
var STOP=("a an the of to in on at by for and or is are was were be been being as it its this that these those with from into any such shall may not no he she his her him they them their which who whom whose has have had do does did if than then there thereby thereof herein hereof also can will would should per etc under upon within without all each every other one two shall").split(" ");
var STOPSET={};STOP.forEach(function(w){STOPSET[w]=1});

// Telugu / Tenglish keywords -> English search terms
var GLOSS=[
[["నామినేషన్","nomination","namination","nominations","nominashan"],"nomination nominations nomination paper"],
[["ప్రతిపాదక","proposer","propser","proposar","prathipadak"],"proposer"],
[["పరిశీలన","స్క్రూటినీ","scrutiny","parisheelana","scrutini"],"scrutiny"],
[["ఉపసంహరణ","withdraw","upasamharana","vitdraw"],"withdrawal withdraw candidature"],
[["గుర్తు","గుర్తులు","సింబల్","symbol","gurthu","gurtu"],"symbol symbols allotment"],
[["డిపాజిట్","deposit"],"deposit"],
[["తిరస్కర","reject","tiraskar"],"rejection reject rejected"],
[["అప్పీలు","అప్పీల్","appeal"],"appeal revenue divisional officer"],
[["ఓటర్ లిస్ట్","ఓటర్ల జాబితా","ఓటరు జాబితా","voter list","voters list","electoral roll","votar list"],"electoral roll voters list"],
[["ఉప సర్పంచ్","ఉపసర్పంచ్","upa sarpanch","upa-sarpanch","upasarpanch","deputy sarpanch"],"upa-sarpanch"],
[["సర్పంచ్","sarpanch"],"sarpanch"],
[["వార్డు","వార్డ్","ward"],"ward member"],
[["అభ్యర్థి","candidate","abhyarthi"],"candidate"],
[["ఏజెంట్","agent"],"agent election agent polling agent counting agent"],
[["పోలింగ్","polling"],"polling station"],
[["లెక్కింపు","కౌంటింగ్","counting"],"counting of votes"],
[["పోస్టల్","postal"],"postal ballot"],
[["బ్యాలెట్","ballot"],"ballot paper"],
[["నోటా","nota"],"nota none of the above"],
[["ఖర్చు","expenditure","expenses","kharchu"],"election expenses expenditure account"],
[["అనర్హత","disqualif","anarhata","అర్హత","qualification"],"disqualification disqualified qualification"],
[["రిజర్వేషన్","reserv","reservation"],"reserved reservation"],
[["కుల ధృవీకరణ","కుల ధ్రువీకరణ","community certificate","caste certificate","కుల సర్టిఫికెట్"],"community certificate scheduled caste backward classes"],
[["ఏకగ్రీవ","unanimous","uncontested","ekagreevam"],"uncontested unanimous elected form-x"],
[["లాటరీ","లాట్స్","lots","tie","సమాన ఓట్లు","equal votes"],"equality of votes lots"],
[["రిటర్నింగ్","returning officer","ro "],"returning officer"],
[["ఫారం","ఫారమ్","form"],"form"],
[["స్వీయ ప్రకటన","డిక్లరేషన్","declaration","affidavit","అఫిడవిట్"],"declaration criminal antecedents assets liabilities educational qualifications"],
[["నోటీసు","notice"],"notice election notice"],
[["సెలవు","holiday"],"holiday"],
[["కోరం","quorum"],"quorum"],
[["చేతులు ఎత్తి","show of hands"],"show of hands"],
[["ఫలితం","ఫలితాలు","result"],"declaration of result"],
[["ధృవీకరణ పత్రం","సర్టిఫికెట్","certificate"],"certificate of election"],
[["ఎన్నికల సంఘం","sec "],"state election commission"],
[["ఖాళీ","vacancy"],"casual vacancy"],
[["చనిపోతే","మరణ","death","died"],"death of candidate"],
[["పోలింగ్ స్టేషన్","polling station"],"polling station"],
[["ఎన్నికల నియమావళి","code of conduct","ప్రవర్తనా నియమావళి","model code"],"model code of conduct"],
[["మహిళ","women"],"women reserved"],
[["ఉద్యోగి","employee","ఉద్యోగులు","servant"],"employee government servant officer"],
[["స్కూల్","school","పాఠశాల"],"school institution aided employee office-bearer"],
[["ఫిర్యాదు","petition","tribunal"],"election petition tribunal"],
[["ఓటు వేయ","voting","vote"],"vote voting"]
];

function norm(s){
  s=s.toLowerCase();
  s=s.replace(/form[\s\-]*([ivxl]+)\b/g,"form$1");
  s=s.replace(/rule\s*(\d+)/g,"rule$1").replace(/section\s*(\d+)/g,"section$1");
  s=s.replace(/up[a]?[\s\-]*sarpanch/g,"upasarpanch");
  s=s.replace(/ward\s*member/g,"wardmember");
  return s;
}
function stem(w){
  if(w.length>5){ if(/ies$/.test(w)) return w.slice(0,-3)+"y"; if(/(ing|ion)$/.test(w)) return w.slice(0,-3);
    if(/es$/.test(w)) return w.slice(0,-2); if(/ed$/.test(w)) return w.slice(0,-2);}
  if(w.length>4 && /s$/.test(w) && !/ss$/.test(w)) return w.slice(0,-1);
  return w;
}
function toks(s){
  var out=[], m=norm(s).match(/[a-z0-9]+/g)||[];
  for(var i=0;i<m.length;i++){var w=m[i]; if(w.length<2||STOPSET[w]) continue; out.push(stem(w));}
  return out;
}

// build index
var N=CH.length, df={}, avg=0;
CH.forEach(function(c){
  var tf={}, t=toks(c.t), st=toks(c.s||"");
  t.forEach(function(w){tf[w]=(tf[w]||0)+1});
  st.forEach(function(w){tf[w]=(tf[w]||0)+2});
  c._tf=tf; c._len=t.length+st.length; avg+=c._len;
  for(var w in tf) df[w]=(df[w]||0)+1;
});
avg/=N;
var K1=1.2,B=0.75;
function idf(w){var n=df[w]||0; return Math.log(1+(N-n+0.5)/(n+0.5));}

function expand(q){
  var low=q.toLowerCase()+" ", extra=[], hit=false;
  GLOSS.forEach(function(g){
    for(var i=0;i<g[0].length;i++){ if(low.indexOf(g[0][i].toLowerCase())>=0){extra.push(g[1]);hit=true;break;} }
  });
  return {extra:extra.join(" "), hit:hit};
}

function search(q, src){
  var ex=expand(q);
  var base=toks(q), more=toks(ex.extra);
  if(!base.length && !more.length) return {res:[],terms:[],ex:ex};
  var wt={};
  base.forEach(function(w){wt[w]=(wt[w]||0)+1.0});
  more.forEach(function(w){wt[w]=(wt[w]||0)+0.5});
  var qn=norm(q).trim(), res=[];
  CH.forEach(function(c){
    if(src!=="all" && c.d!==src) return;
    var s=0,mt=0;
    for(var w in wt){
      var f=c._tf[w]; if(!f) continue; mt++;
      s+=wt[w]*idf(w)*(f*(K1+1))/(f+K1*(1-B+B*c._len/avg));
    }
    if(!s) return;
    var nt=Object.keys(wt).length;
    s*=0.6+0.4*(mt/nt);
    if(qn.length>5 && norm(c.t).indexOf(qn)>=0) s*=1.6;
    if(c.x) s*=0.4;
    res.push({c:c,s:s});
  });
  res.sort(function(a,b){return b.s-a.s});
  return {res:res.slice(0,25),terms:Object.keys(wt),ex:ex,raw:base.concat(more)};
}

function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function hl(text, q, ex){
  var words={};
  (norm(q+" "+ex).match(/[a-z0-9]+/g)||[]).forEach(function(w){ if(w.length>2&&!STOPSET[w]) words[stem(w)]=1; });
  var t=esc(text), keys=Object.keys(words).sort(function(a,b){return b.length-a.length}).slice(0,24);
  if(!keys.length) return t;
  var re=new RegExp("(\\b(?:"+keys.map(function(k){return k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("|")+")[a-z]*)","gi");
  return t.replace(re,"<mark>$1</mark>");
}

var $=function(id){return document.getElementById(id)};
var srcSel="all";
var faqCat="";
function faqHtml(f){
  return '<details class="faq"><summary>'+f.q+'</summary><div class="body">'+f.a+
    '<div class="src">'+f.src.map(function(s){return "<span>"+esc(s)+"</span>"}).join("")+'</div></div></details>';
}
function renderFaq(){
  var cats=window.FAQCAT||[], h="";
  var ch='<button class="chip'+(faqCat?'':' on')+'" data-fc="">అన్నీ ('+FAQ.length+')</button>';
  cats.forEach(function(c){var n=FAQ.filter(function(f){return f.c===c}).length;
    ch+='<button class="chip'+(faqCat===c?' on':'')+'" data-fc="'+esc(c)+'">'+esc(c)+' ('+n+')</button>';});
  $("faqchips").innerHTML=ch;
  var cl=cats.length?cats:[""];
  cl.forEach(function(c){
    if(faqCat&&faqCat!==c) return;
    var items=FAQ.filter(function(f){return !cats.length||f.c===c});
    if(!items.length) return;
    if(cats.length) h+='<h3 class="faqcat">'+esc(c)+'</h3>';
    items.forEach(function(f){h+=faqHtml(f)});
  });
  $("faqlist").innerHTML=h;
}
function faqMatch(q){
  var ws=q.toLowerCase().split(/[\s,]+/).filter(function(w){return w.length>1});
  if(!ws.length) return [];
  var out=[];
  FAQ.forEach(function(f){
    var hay=(f.q+" "+(f.k||"")+" "+(f.c||"")+" "+f.a.replace(/<[^>]+>/g," ")).toLowerCase();
    var sc=0; ws.forEach(function(w){ if(hay.indexOf(w)>=0) sc++; if((f.q+" "+(f.k||"")).toLowerCase().indexOf(w)>=0) sc+=2; });
    if(sc>=Math.max(2,ws.length*2)) out.push([sc,f]);
  });
  out.sort(function(a,b){return b[0]-a[0]});
  return out.slice(0,5).map(function(x){return x[1]});
}
function run(){
  var q=$("q").value.trim();
  if(window.__showTab) window.__showTab("s");
  if(!q){ $("results").hidden=true; $("faqs").hidden=false; return; }
  var r=search(q,srcSel);
  var fm=faqMatch(q);
  $("faqs").hidden=true; $("results").hidden=false;
  $("faqhits").innerHTML=fm.length?'<h3 class="faqcat">సంబంధిత FAQ లు</h3>'+fm.map(faqHtml).join(""):"";
  if(!r.res.length){
    $("cnt").textContent="";
    $("list").innerHTML='<div class="empty">ఫలితాలు కనబడలేదు. ఇతర పదాలతో (ఉదా. proposer, scrutiny, symbol, deposit, Form-IX) ప్రయత్నించండి.</div>';
    return;
  }
  $("cnt").textContent=r.res.length+" ఫలితాలు"+(r.ex.hit?" (తెలుగు పదాలకు సంబంధిత English పదాలు కూడా వెతికాం)":"");
  var h="";
  r.res.forEach(function(x){
    var c=x.c, b=c.d==="h"?'<span class="badge">RO Handbook</span>':(c.d==="c"?'<span class="badge c">Compendium</span>':(c.d==="p"?'<span class="badge p">PO Handbook</span>':'<span class="badge m">Manual</span>'));
    h+='<div class="res"><div class="meta">'+b+'<span>PDF పేజీ '+c.p+'</span>'+(c.s?'<span>'+esc(c.s)+'</span>':'')+'</div><div class="t">'+hl(c.t,q,r.ex.extra)+'</div></div>';
  });
  $("list").innerHTML=h;
  window.scrollTo({top:$("results").offsetTop-110,behavior:"smooth"});
}
document.addEventListener("DOMContentLoaded",function(){
  renderFaq();
  $("faqchips").addEventListener("click",function(e){var b=e.target.closest("[data-fc]"); if(!b) return; faqCat=b.getAttribute("data-fc"); renderFaq();});
  try{var qp=new URLSearchParams(location.search).get("q"); if(qp){$("q").value=qp; run();}}catch(e){}
  $("f").addEventListener("submit",function(e){e.preventDefault();run();});
  var t; $("q").addEventListener("input",function(){clearTimeout(t);t=setTimeout(run,350);});
  Array.prototype.forEach.call(document.querySelectorAll("#chips .chip"),function(b){
    b.addEventListener("click",function(){
      Array.prototype.forEach.call(document.querySelectorAll("#chips .chip"),function(x){x.classList.remove("on")});
      b.classList.add("on"); srcSel=b.getAttribute("data-s"); run();
    });
  });
});
window.__search=search; window.__toks=toks;
})();

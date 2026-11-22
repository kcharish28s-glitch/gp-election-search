(function(){
"use strict";
// Book page + 5 = PDF page. g: s=Stage-I, t=Stage-II, p=సన్నాహాలు/సాధారణ, e=ఖర్చులు, w=SEC-EMS, f=ఫారం, c=సర్క్యులర్/ఉత్తర్వు
var CHAP=[
{n:"I",en:"Administrative Machinery for Conduct of Elections",te:"ఎన్నికల నిర్వహణ పరిపాలనా యంత్రాంగం",g:"p",bk:[1,2],
 d:"ఎన్నికల్లో ఎవరెవరు ఏ అధికారంతో పని చేస్తారో చెప్తుంది.",
 pts:["Election Authority (SEC), District Election Authority (కలెక్టర్), Additional / Deputy / Assistant DEA","Returning Officer (RO), Assistant RO (ARO)","Zonal Officers","Rule 3 ప్రకారం SEC ఉత్తర్వు (Annexure 1)"]},
{n:"II",en:"Election / Polling Materials",te:"ఎన్నికల సామగ్రి",g:"p",bk:[3,3],
 d:"Stage-I, Stage-II లో వాడే చట్టబద్ధ మరియు ఇతర ఫారాల జాబితా, సామగ్రి వివరాలు.",
 pts:["Statutory మరియు non-statutory forms","సామగ్రి జాబితా Annexure 4 లో ఉంటుంది"]},
{n:"III",en:"Appointment of RO / ARO",te:"RO మరియు ARO నియామకం",g:"p",bk:[4,5],
 d:"RO, ARO ఎవరు, వారి విధులు ఏమిటి.",
 pts:["RO నియామకం (చిన్న GP లకు కలిపి ఒకే RO)","ARO నియామకం, ARO ఏ పనులు చేయకూడదు","RO విధుల సంక్షిప్త రూపం (Broad outlines)"]},
{n:"IV",en:"Election Notification, Notice and Voters List",te:"ఎన్నికల నోటిఫికేషన్, నోటీసు, ఓటర్ల జాబితా ప్రదర్శన",g:"s",bk:[6,7],
 d:"ఎన్నికల ప్రక్రియ ఇక్కడ మొదలవుతుంది.",
 pts:["SEC నోటిఫికేషన్","RO Form-I లో ఎన్నికల నోటీసు ఇవ్వడం (Rule 6)","ఓటర్ల జాబితా ప్రదర్శన"]},
{n:"V",en:"Nominations",te:"నామినేషన్లు",g:"s",bk:[8,13],
 d:"నామినేషన్ల స్వీకరణకు సంబంధించిన అన్ని నియమాలు. అతి ముఖ్యమైన అధ్యాయాల్లో ఒకటి.",
 pts:["నామినేషన్ల స్వీకరణ: సమయం, ఎవరు ఇవ్వాలి, ఎంతమంది లోపలికి రావచ్చు","నామినేషన్‌తో పాటు డిక్లరేషన్లు (నేర చరిత్ర, ఆస్తులు, అప్పులు, విద్యార్హతలు)","ఎన్నికల ఖర్చు ప్రకటన","డిపాజిట్ల వాపసు, జప్తు","నామినేషన్ల జాబితా (Form-V), పత్రాల ప్రదర్శన","ఓటర్ లిస్ట్ లోపాలు, సంతకాల నియమాలు"]},
{n:"VI",en:"Scrutiny of Nominations",te:"నామినేషన్ల పరిశీలన",g:"s",bk:[14,16],
 d:"నామినేషన్ చెల్లుతుందా, తిరస్కరించాలా అని నిర్ణయించే దశ.",
 pts:["పరిశీలన విధానం (RO స్వయంగా చేయాలి)","తిరస్కరణ కారణాలు","చెల్లుబాటైన అభ్యర్థుల జాబితా (Form-VI)","తిరస్కరణపై RDO కి అప్పీలు"]},
{n:"VII",en:"Withdrawal of Candidature",te:"ఉపసంహరణ",g:"s",bk:[17,17],
 d:"అభ్యర్థి పోటీ నుంచి తప్పుకునే విధానం (Form-VII, VIII).",
 pts:["చివరి సమయం: పరిశీలన తర్వాత 3వ రోజు మధ్యాహ్నం 3 గంటలు","ఎవరు ఇవ్వవచ్చు","ఇచ్చాక రద్దు చేయలేరు"]},
{n:"VIII",en:"List of Contesting Candidates and Allotment of Symbols",te:"పోటీలో ఉన్న అభ్యర్థుల జాబితా, గుర్తుల కేటాయింపు",g:"s",bk:[18,19],
 d:"Form-IX తయారీ మరియు గుర్తుల కేటాయింపు.",
 pts:["తెలుగు అక్షర క్రమంలో జాబితా","SEC ఉచిత గుర్తుల జాబితా నుంచి వరుస క్రమంలో గుర్తులు","NOTA"]},
{n:"IX",en:"Declaration of Results of Uncontested Elections",te:"ఏకగ్రీవ ఎన్నికల ఫలితం ప్రకటన",g:"s",bk:[20,20],
 d:"ఒక్కరే మిగిలితే ఏం చేయాలి (Form-X).",
 pts:["Rule 16","Form-X, ఎన్నికల ధృవీకరణ పత్రం (Form-XXIX)","అన్నీ ఏకగ్రీవమైతే ఉప సర్పంచ్ ఎన్నిక Stage-I RO చేస్తారు"]},
{n:"X",en:"Final Action in Stage-I",te:"Stage-I ముగింపు చర్యలు",g:"s",bk:[21,21],
 d:"Stage-I పూర్తయ్యాక RO చేయవలసినవి, ఫైళ్ల అప్పగింత.",
 pts:["MPDO కి ఫైళ్లు, రికార్డుల అప్పగింత","Stage-II కి సన్నాహాలు"]},
{n:"XI",en:"Election Process (Stage-II)",te:"ఎన్నికల ప్రక్రియ (Stage-II)",g:"t",bk:[22,22],
 d:"Stage-II RO విధుల పరిచయం.",
 pts:["Stage-II RO విధులు"]},
{n:"XII",en:"Election Agent, Polling Agent, Counting Agent",te:"ఎన్నికల ఏజెంట్, పోలింగ్ ఏజెంట్, కౌంటింగ్ ఏజెంట్",g:"t",bk:[23,24],
 d:"మూడు రకాల ఏజెంట్ల నియామకం (Form-XI, XII, XIII).",
 pts:["Election Agent","Polling Agent","Counting Agent"]},
{n:"XIII",en:"Advance Printing of Ballot Papers",te:"బ్యాలెట్ పేపర్ల ముందస్తు ముద్రణ",g:"t",bk:[25,30],
 d:"బ్యాలెట్ పేపర్ల ముద్రణ, నమూనా, భద్రత.",
 pts:["సర్పంచ్, వార్డు బ్యాలెట్ పేపర్లు","నమూనా బ్యాలెట్ (Annexure 18)"]},
{n:"XIV",en:"Postal Ballot Paper",te:"పోస్టల్ బ్యాలెట్",g:"t",bk:[31,33],
 d:"పోస్టల్ బ్యాలెట్‌కు అర్హులు, పంపే విధానం, తిరిగి తీసుకోవడం.",
 pts:["ఎవరు అర్హులు","ఎన్వలప్‌లు, పంపిణీ","ఎన్నికల విధుల్లో ఉన్నవారికి","తిరిగి స్వీకరణ, భద్రత"]},
{n:"XV",en:"Polling Arrangements",te:"పోలింగ్ ఏర్పాట్లు",g:"t",bk:[34,41],
 d:"పోలింగ్‌కు ముందు, పోలింగ్ రోజున చేయాల్సినవి, సమస్యలు వస్తే ఏం చేయాలి.",
 pts:["Presiding Officers, పోలింగ్ పార్టీలు, రిహార్సల్","సామగ్రి పంపిణీ, గుర్తింపు గుర్తు","పోలింగ్ కేంద్రంలో ఏర్పాట్లు, ఓటర్ల గుర్తింపు","అభ్యర్థి మరణిస్తే, పోలింగ్ వాయిదా","బ్యాలెట్ బాక్సులు ధ్వంసమైతే లేదా booth capturing జరిగితే రీపోలింగ్"]},
{n:"XVI",en:"Counting of Votes",te:"ఓట్ల లెక్కింపు",g:"t",bk:[42,50],
 d:"లెక్కింపు ప్రక్రియ మొదలు నుంచి ఫలితం ప్రకటన వరకు.",
 pts:["తేదీ, స్థలం, సిబ్బంది, ఎవరు హాజరు కావచ్చు","లెక్కింపు విధానం","చెల్లని ఓట్లు","రీకౌంటింగ్","ఓట్లు సమానమైతే","ఫలితం ప్రకటన, Return of Election, ధృవీకరణ పత్రం"]},
{n:"XVII",en:"Election of Upa-Sarpanch",te:"ఉప సర్పంచ్ ఎన్నిక",g:"t",bk:[51,51],
 d:"ఉప సర్పంచ్ ఎన్నిక సమావేశం ఎప్పుడు, ఎవరు నిర్వహిస్తారు.",
 pts:["తేదీ, సమయం, స్థలం","అధ్యక్షత","ప్రొసీడింగ్స్ రికార్డు","ఫలితం ప్రచురణ"]},
{n:"XVIII",en:"Account of Election Expenses",te:"ఎన్నికల ఖర్చుల లెక్కలు",g:"e",bk:[52,54],
 d:"అభ్యర్థులు ఖర్చు లెక్కలు ఎలా పెట్టాలి, RO ఎలా పరిశీలించాలి.",
 pts:["చట్టబద్ధ నిబంధనలు (Section 230)","లెక్కలు (Section 230A), DEA కి సమర్పణ (230B)","సమర్పించకపోతే అనర్హత","RO పరిశీలన, ఖర్చు పరిమితులు","తుది రిటర్న్"]},
{n:"XIX",en:"Overview of SEC-EMS Software",te:"SEC-EMS సాఫ్ట్‌వేర్ పరిచయం",g:"w",bk:[55,57],
 d:"ఎన్నికల నిర్వహణ సాఫ్ట్‌వేర్ మూడు భాగాల పరిచయం.",
 pts:["SEC-EMS ప్రధాన భాగాలు"]},
{n:"XX",en:"RO's Activities under SEC-EMS",te:"SEC-EMS లో RO చేయాల్సిన పనులు",g:"w",bk:[58,61],
 d:"సాఫ్ట్‌వేర్‌లో Stage-I, Stage-II పనులు ఎలా చేయాలి (స్క్రీన్ల వారీగా).",
 pts:["Stage-I ఫారాలు సాఫ్ట్‌వేర్ నుంచి తయారవుతాయి","పరిశీలన రోజున అభ్యర్థి పేరు క్లిక్ చేసే స్క్రీన్","Confirm చేసే ముందు జాగ్రత్తలు"]},
{n:"XXI",en:"Mobile Applications",te:"మొబైల్ యాప్‌లు",g:"w",bk:[62,62],
 d:"ఎన్నికల్లో వాడే మొబైల్ యాప్‌ల పరిచయం.",
 pts:["Annexure 30 లోని సర్క్యులర్ 71 చూడండి"]}
];
var ANNX=[
{n:"1",en:"Administrative Machinery (Notification 72/SEC-B2/2026, 26.03.2026)",te:"పరిపాలనా యంత్రాంగం (SEC ఉత్తర్వు)",g:"c",bk:[63,65]},
{n:"2",en:"Circular I: SEC-EMS, generation of electoral rolls for rural local bodies",te:"సర్క్యులర్ I: ఓటర్ల జాబితా తయారీ మార్గదర్శకాలు (SEC-EMS)",g:"c",bk:[66,70]},
{n:"3",en:"Circular II: Election process management system for rural local bodies",te:"సర్క్యులర్ II: ఎన్నికల ప్రక్రియ నిర్వహణ (గుర్తుల కేటాయింపు ఇందులోనూ ఉంది)",g:"c",bk:[71,74]},
{n:"4",en:"List of Election / Polling Material",te:"ఎన్నికల, పోలింగ్ సామగ్రి జాబితా (Stage-I ఫారాలు ఎన్ని కావాలి)",g:"p",bk:[75,80]},
{n:"5",en:"Notice for Election of Member / Sarpanch (Form-I)",te:"ఎన్నికల నోటీసు (Form-I)",g:"f",bk:[81,81]},
{n:"6",en:"Nomination Paper (Form-III)",te:"నామినేషన్ పత్రం (Form-III)",g:"f",bk:[82,84]},
{n:"7",en:"Filling nomination forms through Candidates' Portal",te:"అభ్యర్థుల పోర్టల్ ద్వారా నామినేషన్ నింపడం",g:"w",bk:[85,85]},
{n:"8",en:"Preliminary Examination of Nomination Papers: Checklist (Circular 82/SEC-B2/2026)",te:"నామినేషన్ల ప్రాథమిక పరిశీలన చెక్‌లిస్ట్ (సర్క్యులర్ 82)",g:"c",bk:[86,89]},
{n:"9",en:"Maintenance and scrutiny of election expenditure accounts (Order 104/SEC-B2/2026)",te:"ఎన్నికల ఖర్చు లెక్కల నిర్వహణ, పరిశీలన (ఉత్తర్వు 104)",g:"c",bk:[90,99]},
{n:"10",en:"List of Nominations Received (Form-V)",te:"అందిన నామినేషన్ల జాబితా (Form-V)",g:"f",bk:[100,100]},
{n:"11",en:"Criminal antecedents, assets & liabilities, educational qualifications (Order 79/SEC-B2/2026)",te:"నేర చరిత్ర, ఆస్తులు, అప్పులు, విద్యార్హతల ప్రకటన (ఉత్తర్వు 79)",g:"c",bk:[101,107]},
{n:"12",en:"Declaration on accounts of election expenditure",te:"ఎన్నికల ఖర్చుపై అభ్యర్థి ప్రకటన",g:"f",bk:[108,108]},
{n:"13",en:"Extracts of statutory provisions on qualifications and disqualifications",te:"అర్హతలు, అనర్హతలపై చట్ట నిబంధనల సారాంశం (Section 17, 18 మొదలైనవి)",g:"p",bk:[109,113]},
{n:"14",en:"List of Validly Nominated Candidates (Form-VI)",te:"చెల్లుబాటైన అభ్యర్థుల జాబితా (Form-VI)",g:"f",bk:[114,114]},
{n:"15",en:"Notice of Withdrawal of Candidature (Form-VII)",te:"ఉపసంహరణ నోటీసు (Form-VII)",g:"f",bk:[115,115]},
{n:"16",en:"Publication of Notice of Withdrawal (Form-VIII)",te:"ఉపసంహరణ నోటీసు ప్రచురణ (Form-VIII)",g:"f",bk:[116,116]},
{n:"17",en:"List of Contesting Candidates (Form-IX)",te:"పోటీలో ఉన్న అభ్యర్థుల జాబితా (Form-IX)",g:"f",bk:[117,117]},
{n:"18",en:"Model Ballot Papers and Postal Ballot Papers for Sarpanch",te:"సర్పంచ్ నమూనా బ్యాలెట్ పేపర్లు",g:"f",bk:[118,121]},
{n:"19",en:"Declaration of Result of Uncontested Election (Form-X)",te:"ఏకగ్రీవ ఫలితం ప్రకటన (Form-X)",g:"f",bk:[122,122]},
{n:"20",en:"Appointment of Election Agent (Form-XI)",te:"ఎన్నికల ఏజెంట్ నియామకం (Form-XI)",g:"f",bk:[123,123]},
{n:"21",en:"Appointment of Polling Agent (Form-XII)",te:"పోలింగ్ ఏజెంట్ నియామకం (Form-XII)",g:"f",bk:[124,124]},
{n:"22",en:"Appointment of Counting Agent (Form-XIII)",te:"కౌంటింగ్ ఏజెంట్ నియామకం (Form-XIII)",g:"f",bk:[125,125]},
{n:"23A",en:"Application for Postal Ballot Paper (Form-XIV)",te:"పోస్టల్ బ్యాలెట్ దరఖాస్తు (Form-XIV)",g:"f",bk:[126,126]},
{n:"23B",en:"Application for Election Duty Certificate (Form-XV)",te:"ఎన్నికల విధి ధృవీకరణ పత్రం దరఖాస్తు (Form-XV)",g:"f",bk:[127,127]},
{n:"23C",en:"Election Duty Certificate (Form-XVI)",te:"ఎన్నికల విధి ధృవీకరణ పత్రం (Form-XVI)",g:"f",bk:[128,128]},
{n:"23D",en:"Declaration by Elector (Form-XVII)",te:"ఓటరు డిక్లరేషన్ (Form-XVII)",g:"f",bk:[129,130]},
{n:"23E",en:"Postal Ballot Paper Cover 'A' (Form-XVIII)",te:"పోస్టల్ బ్యాలెట్ కవర్ A (Form-XVIII)",g:"f",bk:[131,131]},
{n:"23F",en:"Postal Ballot Paper Cover 'B' (Form-XIX)",te:"పోస్టల్ బ్యాలెట్ కవర్ B (Form-XIX)",g:"f",bk:[132,132]},
{n:"23G",en:"Instructions for guidance of electors (Form-XX)",te:"ఓటర్లకు సూచనలు (Form-XX)",g:"f",bk:[133,134]},
{n:"23H",en:"Circular on postal ballots to officers and staff on election duty (Circular 63/SEC-B2/2026)",te:"ఎన్నికల విధుల్లో ఉన్న సిబ్బందికి పోస్టల్ బ్యాలెట్ సర్క్యులర్ (63)",g:"c",bk:[135,143]},
{n:"24",en:"Setting up of Polling Stations (Circular 73/SEC-B2/2026)",te:"పోలింగ్ కేంద్రాల ఏర్పాటు (సర్క్యులర్ 73)",g:"c",bk:[144,161]},
{n:"25",en:"Final Result Sheet (Form-XXVI)",te:"తుది ఫలిత పట్టిక (Form-XXVI)",g:"f",bk:[162,163]},
{n:"26",en:"Ballot Paper Account (Form-XXV)",te:"బ్యాలెట్ పేపర్ల లెక్క (Form-XXV)",g:"f",bk:[164,165]},
{n:"27",en:"Declaration of Result of Election (Form-XXVII)",te:"ఎన్నికల ఫలితం ప్రకటన (Form-XXVII)",g:"f",bk:[166,166]},
{n:"28",en:"Return of Election (Form-XXVIII)",te:"ఎన్నిక రిటర్న్ (Form-XXVIII)",g:"f",bk:[167,167]},
{n:"29",en:"Certificate of Election (Form-XXIX)",te:"ఎన్నికైన ధృవీకరణ పత్రం (Form-XXIX)",g:"f",bk:[168,168]},
{n:"30",en:"Circular 71/SEC-B2/2026: Poll management system under SEC-EMS, mobile applications",te:"సర్క్యులర్ 71: పోల్ మేనేజ్‌మెంట్ సిస్టమ్, మొబైల్ యాప్‌లు",g:"c",bk:[169,172]}
];
var GN={all:"అన్నీ",s:"Stage-I",t:"Stage-II",p:"సన్నాహాలు, సాధారణం",e:"ఎన్నికల ఖర్చులు",w:"SEC-EMS సాఫ్ట్‌వేర్",f:"ఫారాలు",c:"సర్క్యులర్లు, ఉత్తర్వులు"};
var cur="all";
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function pdf(bk){return [bk[0]+5,bk[1]+5]}
function rng(a){return a[0]===a[1]?String(a[0]):a[0]+" నుంచి "+a[1]}
function card(it,kind){
  var p=(kind==="m")?[it.bk[0]+20,it.bk[1]+20]:(kind==="k")?[it.bk[0]+9,it.bk[1]+9]:((kind==="p"||kind==="q")?[it.bk[0]+4,it.bk[1]+4]:pdf(it.bk)), id=kind+it.n;
  var h='<details class="ix" data-g="'+it.g+'" data-id="'+id+'" data-a="'+p[0]+'" data-b="'+p[1]+'"><summary>'
   +'<span class="ixn">'+((kind==="k"||kind==="m")?esc(it.ref):((kind==="c"||kind==="p")?"అధ్యాయం ":"అనుబంధం ")+esc(it.n))+'</span>'
   +'<span class="ixt"><b>'+esc(it.te)+'</b><small>'+esc(it.en)+'</small></span>'
   +'<span class="ixp">పుస్తక పేజీ '+rng(it.bk)+'<br>PDF పేజీ '+rng(p)+'</span></summary><div class="body">';
  if(it.d) h+='<p>'+esc(it.d)+'</p>';
  if(it.pts&&it.pts.length) h+='<ul>'+it.pts.map(function(x){return "<li>"+esc(x)+"</li>"}).join("")+'</ul>';
  if(kind==="k"&&it.dt) h+='<p class="hint">తేదీ: '+esc(it.dt)+'</p>';
  h+='<span class="tag">'+esc(kind==="m"?window.MANG[it.g]:kind==="k"?window.COMPG[it.g]:((kind==="p"||kind==="q")?window.POG[it.g]:GN[it.g]))+'</span> <button type="button" class="rd" data-id="'+id+'">పుస్తకంలోని టెక్స్ట్ చదవండి</button><div class="txt" id="t'+id+'" hidden></div></div></details>';
  return h;
}
function render(){
  var h='<p class="hint" style="margin:0 0 6px">పుస్తకంలోని ముద్రిత పేజీ నంబర్‌కు 5 కలిపితే PDF పేజీ వస్తుంది. ఈ రెండూ ప్రతి చోట ఇచ్చాము.</p>';
  h+='<div class="flow"><b>క్రమం:</b> సన్నాహాలు (అధ్యాయం I నుంచి III) &rarr; <b>Stage-I</b> (IV నుంచి X: నోటీసు, నామినేషన్, పరిశీలన, ఉపసంహరణ, గుర్తులు, ఏకగ్రీవం, అప్పగింత) &rarr; <b>Stage-II</b> (XI నుంచి XVII: ఏజెంట్లు, బ్యాలెట్, పోలింగ్, లెక్కింపు, ఉప సర్పంచ్) &rarr; ఖర్చుల లెక్కలు (XVIII) &rarr; SEC-EMS సాఫ్ట్‌వేర్ (XIX నుంచి XXI)</div>';
  h+='<div class="chips" id="gchips">'+Object.keys(GN).map(function(k){return '<button type="button" class="chip'+(k==="all"?" on":"")+'" data-g="'+k+'">'+GN[k]+'</button>'}).join("")+'</div>';
  h+='<h2>అధ్యాయాలు (Chapters I నుంచి XXI)</h2><div id="ch">'+CHAP.map(function(x){return card(x,"c")}).join("")+'</div>';
  h+='<h2>అనుబంధాలు (Annexures 1 నుంచి 30)</h2><div id="an">'+ANNX.map(function(x){return card(x,"a")}).join("")+'</div>';
  document.getElementById("idxbody").innerHTML=h;
}
function renderK(){
  var G=window.COMPG, h='<p class="hint" style="margin:0 0 6px">ఇది SEC Compendium of Instructions (Ordinary Elections to GPs, 2026) లోని 57 సర్క్యులర్లు, ఉత్తర్వులు, నోటిఫికేషన్ల సూచిక. పుస్తకంలోని ముద్రిత పేజీ నంబర్‌కు 9 కలిపితే PDF పేజీ వస్తుంది. Stage-I RO కు ముఖ్యమైనవి <b>నామినేషన్లు, గుర్తులు</b> గ్రూప్‌లో ఉన్నాయి. (సర్క్యులర్ల సారాంశాలు పత్రంలో ఉన్న విషయం ఆధారంగా; కొన్నిటికి కేవలం విషయం మాత్రమే ఇచ్చాం. వివరాలకు "టెక్స్ట్ చదవండి" నొక్కండి.)</p>';
  h+='<div class="chips" id="kchips"><button type="button" class="chip on" data-k="all">అన్నీ</button>'+Object.keys(G).map(function(k){return '<button type="button" class="chip" data-k="'+k+'">'+G[k]+'</button>'}).join("")+'</div>';
  h+='<h2>సర్క్యులర్లు, ఉత్తర్వులు (1 నుంచి 57)</h2><div id="kl">'+window.COMP.map(function(x){return card(x,"k")}).join("")+'</div>';
  document.getElementById("cmpbody").innerHTML=h;
}
function renderM(){
  var G=window.MANG, h='<p class="hint" style="margin:0 0 6px">ఇది Manual of Election Law (Panchayat Raj) 2026 సూచిక: రాజ్యాంగం, కేంద్ర చట్టాలు, AP పంచాయతీ రాజ్ చట్టం 1994 లోని ఎన్నికల సెక్షన్లు, ఎన్నికల నిర్వహణ నియమాలు 2006, ఫారాలు. పుస్తకంలోని ముద్రిత పేజీ నంబర్‌కు 20 కలిపితే PDF పేజీ వస్తుంది. (శీర్షికల ఆధారంగా చిన్న వివరణలు మాత్రమే; అసలు చట్టం పాఠం చూడటానికి "టెక్స్ట్ చదవండి" నొక్కండి.)</p>';
  h+='<div class="chips" id="mchips"><button type="button" class="chip on" data-m="all">అన్నీ</button>'+Object.keys(G).map(function(k){return '<button type="button" class="chip" data-m="'+k+'">'+G[k]+'</button>'}).join("")+'</div>';
  h+='<div id="ml">'+window.MAN.map(function(x){return card(x,"m")}).join("")+'</div>';
  document.getElementById("manbody").innerHTML=h;
}
function renderP(){
  var G=window.POG, h='<p class="hint" style="margin:0 0 6px">ఇది Handbook for Presiding Officers (Ballot Boxes), GP Elections 2026 సూచిక. ఇది <b>పోలింగ్ రోజు</b> (Stage-II) PO ల కోసం. పుస్తకంలోని ముద్రిత పేజీ నంబర్‌కు 4 కలిపితే PDF పేజీ వస్తుంది. (కొన్ని అధ్యాయాలకు పత్రంలో చదివిన విషయాలతో పాయింట్లు ఇచ్చాం; మిగతావాటికి శీర్షిక ఆధారంగా చిన్న వివరణ మాత్రమే. వివరాలకు "టెక్స్ట్ చదవండి" నొక్కండి.)</p>';
  h+='<div class="chips" id="pchips"><button type="button" class="chip on" data-p="all">అన్నీ</button>'+Object.keys(G).map(function(k){return '<button type="button" class="chip" data-p="'+k+'">'+G[k]+'</button>'}).join("")+'</div>';
  h+='<h2>అధ్యాయాలు (I నుంచి XXVI)</h2><div id="pl">'+window.PO.filter(function(x){return x.k==="p"}).map(function(x){return card(x,"p")}).join("")+'</div>';
  h+='<h2>అనుబంధాలు (1 నుంచి 24)</h2><div id="pq">'+window.PO.filter(function(x){return x.k==="q"}).map(function(x){return card(x,"q")}).join("")+'</div>';
  document.getElementById("pobody").innerHTML=h;
}
function renderF(){
  var G=window.FORMG, PDF="GP_Non_Statutory_Forms_2026.pdf";
  var h='<p class="hint" style="margin:0 0 6px">ఇవి "గ్రామ పంచాయతీ ఎన్నికలు చట్టేతర ఫారాలు 2026" PDF లోని 24 ఫారాలు. ఈ PDF లో పేజీ సంఖ్య = PDF పేజీ సంఖ్య. "ఫారం పేజీలు చూడండి" నొక్కితే ఫారం పేజీలు ఇక్కడే కనిపిస్తాయి. (ఈ PDF లోని తెలుగు అక్షరాలు పాత ఫాంట్ ఎన్కోడింగ్‌లో ఉండడం వల్ల టెక్స్ట్ శోధన ఇందులో లేదు.)</p>';
  h+='<div class="chips" id="fchips"><button type="button" class="chip on" data-f="all">అన్నీ</button>'+Object.keys(G).map(function(k){return '<button type="button" class="chip" data-f="'+k+'">'+G[k]+'</button>'}).join("")+'</div><div id="fl">';
  window.FORMS.forEach(function(x){
    var pg=x.p0===x.p1?String(x.p0):x.p0+" నుంచి "+x.p1;
    h+='<details class="ix" data-g="'+x.g+'"><summary><span class="ixn">ఫారం '+x.n+'</span><span class="ixt"><b>'+esc(x.te)+'</b></span><span class="ixp">PDF పేజీ '+pg+'</span></summary><div class="body">';
    if(x.d) h+='<p>'+esc(x.d)+'</p>';
    if(x.x) h+='<p class="hint">'+esc(x.x)+'</p>';
    h+='<span class="tag">'+esc(G[x.g])+'</span> <button type="button" class="rd vf" data-a="'+x.p0+'" data-b="'+x.p1+'">ఫారం పేజీలు చూడండి</button> <a class="rd" style="text-decoration:none" target="_blank" rel="noopener" href="'+PDF+'#page='+x.p0+'">PDF తెరవండి</a><div class="txt fpg" hidden></div></div></details>';
  });
  document.getElementById("frmbody").innerHTML=h+'</div>';
}
function filt(){
  Array.prototype.forEach.call(document.querySelectorAll("details.ix"),function(d){
    d.hidden = !(cur==="all"||d.getAttribute("data-g")===cur);
  });
}
function readText(id){
  var box=document.getElementById("t"+id); if(!box) return;
  if(!box.hidden){box.hidden=true;return;}
  if(!box.innerHTML){
    var d=document.querySelector('details.ix[data-id="'+id+'"]'), a=+d.getAttribute("data-a"), b=+d.getAttribute("data-b"), out="", dc=(id.charAt(0)==="m")?"m":(id.charAt(0)==="k")?"c":((id.charAt(0)==="p"||id.charAt(0)==="q")?"p":"h");
    (window.CHUNKS||[]).forEach(function(c){ if(c.d===dc&&c.p>=a&&c.p<=b) out+='<div class="pg">PDF పేజీ '+c.p+'</div><div class="t">'+esc(c.t)+'</div>'; });
    box.innerHTML=out||"<p>టెక్స్ట్ కనబడలేదు.</p>";
  }
  box.hidden=false;
}
function tab(t){
  var s=(t==="s");
  document.getElementById("sview").hidden=(t!=="s");
  document.getElementById("iview").hidden=(t!=="i");
  document.getElementById("kview").hidden=(t!=="k");
  document.getElementById("mview").hidden=(t!=="m");
  document.getElementById("oview").hidden=(t!=="o");
  document.getElementById("fview").hidden=(t!=="f");
  Array.prototype.forEach.call(document.querySelectorAll(".tab"),function(b){b.classList.toggle("on",b.getAttribute("data-t")===t)});
}
window.__showTab=tab;
document.addEventListener("DOMContentLoaded",function(){
  render(); renderK(); renderM(); renderP(); renderF();
  try{var sp=new URLSearchParams(location.search); if(sp.get("tab")==="i") tab("i"); if(sp.get("tab")==="k") tab("k"); if(sp.get("tab")==="o") tab("o"); if(sp.get("tab")==="m") tab("m"); if(sp.get("tab")==="f") tab("f"); var rd=sp.get("read"); if(rd){var d=document.querySelector('details.ix[data-id="'+rd+'"]'); if(d){d.open=true; readText(rd);}}}catch(e){}
  Array.prototype.forEach.call(document.querySelectorAll(".tab"),function(b){b.addEventListener("click",function(){tab(b.getAttribute("data-t"))})});
  document.addEventListener("click",function(e){
    var t=e.target;
    if(t.classList&&t.classList.contains("vf")){
      var bx=t.parentNode.querySelector(".fpg");
      if(!bx.innerHTML){var a=+t.getAttribute("data-a"),b=+t.getAttribute("data-b"),o="";for(var i=a;i<=b;i++){var n=i<10?"0"+i:""+i;o+='<div class="pg">PDF పేజీ '+i+'</div><img loading="lazy" style="width:100%;border:1px solid #ddd;margin-bottom:8px" src="formpages/f-'+n+'.jpg" alt="PDF పేజీ '+i+'">';}bx.innerHTML=o;}
      bx.hidden=!bx.hidden;
    }
    else if(t.classList&&t.classList.contains("rd")&&t.hasAttribute("data-id")){readText(t.getAttribute("data-id"));}
    else if(t.closest&&t.closest("#kchips")&&t.getAttribute("data-k")){
      var kk=t.getAttribute("data-k");
      Array.prototype.forEach.call(document.querySelectorAll("#kchips .chip"),function(c){c.classList.toggle("on",c===t)});
      Array.prototype.forEach.call(document.querySelectorAll("#kl details.ix"),function(d){d.hidden=!(kk==="all"||d.getAttribute("data-g")===kk)});
    }
    else if(t.closest&&t.closest("#mchips")&&t.getAttribute("data-m")){
      var mk=t.getAttribute("data-m");
      Array.prototype.forEach.call(document.querySelectorAll("#mchips .chip"),function(c){c.classList.toggle("on",c===t)});
      Array.prototype.forEach.call(document.querySelectorAll("#ml details.ix"),function(d){d.hidden=!(mk==="all"||d.getAttribute("data-g")===mk)});
    }
    else if(t.closest&&t.closest("#pchips")&&t.getAttribute("data-p")){
      var pk=t.getAttribute("data-p");
      Array.prototype.forEach.call(document.querySelectorAll("#pchips .chip"),function(c){c.classList.toggle("on",c===t)});
      Array.prototype.forEach.call(document.querySelectorAll("#pobody details.ix"),function(d){d.hidden=!(pk==="all"||d.getAttribute("data-g")===pk)});
    }
    else if(t.closest&&t.closest("#fchips")&&t.getAttribute("data-f")){
      var fk=t.getAttribute("data-f");
      Array.prototype.forEach.call(document.querySelectorAll("#fchips .chip"),function(c){c.classList.toggle("on",c===t)});
      Array.prototype.forEach.call(document.querySelectorAll("#fl details.ix"),function(d){d.hidden=!(fk==="all"||d.getAttribute("data-g")===fk)});
    }
    else if(t.closest&&t.closest("#gchips")&&t.getAttribute("data-g")){
      cur=t.getAttribute("data-g");
      Array.prototype.forEach.call(document.querySelectorAll("#gchips .chip"),function(c){c.classList.toggle("on",c===t)});
      filt();
    }
  });
});
})();

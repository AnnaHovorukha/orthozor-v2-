var tr1 = document.getElementsByClassName("tr1");
var tr2 = document.getElementsByClassName("tr2");
var tr3 = document.getElementsByClassName("tr3");
var tr4 = document.getElementsByClassName("tr4");
var tr5 = document.getElementsByClassName("tr5");
var tr6 = document.getElementsByClassName("tr6");
var tr7 = document.getElementsByClassName("tr7");
var tr8 = document.getElementsByClassName("tr8");
var tr9 = document.getElementsByClassName("tr9");
var tr10 = document.getElementsByClassName("tr10");
var tr11 = document.getElementsByClassName("tr11");
var tr12 = document.getElementsByClassName("tr12");
var tr13 = document.getElementsByClassName("tr13");
var tr14 = document.getElementsByClassName("tr14");
var tr15 = document.getElementsByClassName("tr15");
var tr16 = document.getElementsByClassName("tr16");
var tr17 = document.getElementsByClassName("tr17");
var grass = document.getElementsByClassName("grass");
var dyno1 = document.getElementsByClassName("dyno1");


var tltreeSwing = new TimelineMax();
var tltreeSwing2 = new TimelineMax();
var dynoBreath = new TimelineMax();
var dynoMove = new TimelineMax();

tltreeSwing.staggerFromTo([tr1,tr2,tr3,tr4,tr5,tr6,tr7,tr8,tr9,tr10,tr11,tr12,tr13,tr14,tr15,tr16,tr17], 1.5, {
  transformOrigin: "50% 100%",
  skewX:1
}, {
  skewX:-1.5,
  repeat:-1,
  /*repeatDelay:10*/
  yoyo:true,
  ease:"linear",
}, .5)

tltreeSwing2.staggerFromTo([tree5,tree6], 2, {
  transformOrigin: "10% 100%",
  skewX:-5,
  skewY:0
}, {
  skewX:-2,
  repeat:-1,
  yoyo:true,
  ease:"linear"
}, 5)

//dyno
var dynoWatchTexte = new TimelineMax();
dynoWatchTexte.fromTo(dyno1, 3, {
  opacity: 0,
  scale: 1
}, {
  scale: 1,
  opacity:1,
  repeat:-1,
  yoyo:true
}, .5);
/*
dynoBreath.staggerFrom(".dyno1", .4, {
  opacity:0
}, .1);

dynoMove.staggerTo(".dyno1", 0.2, {
  delay:5,
  opacity:1
}, .5)
*/
var tlgrass = new TimelineMax();
tlgrass.staggerFromTo(grass, 2, {
  transformOrigin:"0% 100%",
  skewX:"10deg"
}, {
  skewX:"-10deg",
  repeat: -1,
  yoyo: true
}, 0.3);

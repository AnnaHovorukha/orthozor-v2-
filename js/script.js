var treeOne = document.getElementsByClassName("treeOne");
var treeTwo = document.getElementsByClassName("treeTwo");
var tree3 = document.getElementsByClassName("tree3");
var tree4 = document.getElementsByClassName("tree4");
var tree5 = document.getElementsByClassName("tree5");
var tree6 = document.getElementsByClassName("tree6");
var dyno1 = document.getElementsByClassName("dyno1");


var tltreeSwing = new TimelineMax();
var tltreeSwing2 = new TimelineMax();
var dynoBreath = new TimelineMax();
var dynoMove = new TimelineMax();

tltreeSwing.staggerFromTo([treeOne,treeTwo,tree3,tree4], 1.5, {
  transformOrigin: "50% 100%",
  skewX:0
}, {
  skewX:1.5,
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
}, .5)

//dyno
var dynoWatchTexte = new TimelineMax();
dynoWatchTexte.fromTo(dyno1, 3, {opacity:0, scale:1}, {
  scale: 1,
  opacity:1,
  repeat:-1,
  repeatDelay: 10,
  yoyo:true
})
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

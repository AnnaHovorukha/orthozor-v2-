var treeOne = document.getElementsByClassName("treeOne");
var treeTwo = document.getElementsByClassName("treeTwo");

var tltreeSwing = new TimelineMax();
tltreeSwing.staggerFromTo([treeOne,treeTwo], 1.5, {
  transformOrigin: "50% 100%",
  skewX:0
}, {
  skewX:1.2,
  repeat:-1,
  yoyo:true,
  ease:"linear"
}, .5)

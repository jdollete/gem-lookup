function fadeListIn() {
  var tl = new TimelineLite();
  tl.staggerTo(".favorites-list ul li", 1, {opacity: 1}, 0.15);
}

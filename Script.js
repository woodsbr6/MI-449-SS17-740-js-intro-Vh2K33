var boomElement = document.getElementById('Boom')
var BoomSound = document.getElementById('BoomSound')
var playBoom = function () {
  BoomSound.play();
}
boomElement.addEventListener('mouseenter', playBoom)
boomElement.addEventListener('click', playBoom)

var clapElement = document.getElementById('Clap')
var ClapSound = document.getElementById('ClapSound')
var playClap = function () {
  ClapSound.play();
}
clapElement.addEventListener('click', playClap)
clapElement.addEventListener('mouseenter', playClap)

var hihatElement = document.getElementById('Hihat')
var HihatSound = document.getElementById('HihatSound')
var playHihat = function () {
  HihatSound.play();
}
hihatElement.addEventListener('click', playHihat)
hihatElement.addEventListener('mouseenter', playHihat)

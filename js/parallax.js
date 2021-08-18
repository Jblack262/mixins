document.body.onscroll = function scroll() {
    var scrollDistance = document.scrollingElement.scrollTop;
    document.body.style.backgroundPositionY = scrollDistance * -.4 + "px";
}
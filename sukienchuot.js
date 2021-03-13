let mouseevent = null;
mouseevent = document.getElementById("myImage");
//bên dưới là hàm gán cho ảnh
function init() {
    let mouseevent = document.getElementById("myImage");
    mouseevent.style.position = "relative";
    mouseevent.style.left = '0px';

}
//bên dưới là hàm cho onclick
function moveRight() {
    moveRight().style.left = parseInt(moveRight().style.left) + 10 + 'px';
}
window.onload = init

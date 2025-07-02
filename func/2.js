// function hd() {
//     console.log("2-hd");
// }

// function show() {
//     console.log("2-show");
// }

// 立即执行函数
// (function(window) {
//     function hd() {
//         console.log("2-hd");
//     }
//     function show() {
//         console.log("2-show");
//     }
//     window.js2 = { hd, show };
// })(window);

// 利用 let 的块级作用域
{
    let hd = function() {
        console.log("2-hd");
    }
    let show = function() {
        console.log("2-show");
    }
    window.js2 = { hd, show };
}
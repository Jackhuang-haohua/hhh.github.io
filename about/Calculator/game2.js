// 获取大盒子{
var box = document.getElementById('game2')
var text = document.getElementById('text')
var btn_way = document.getElementsByClassName("btn_click");
// 定义一个数组，用来接收值
var arr = []

game2.onclick = function (evt) {
    var e = evt.target;

    // 输入AC
    if (e.id == 'AC') {
        arr = [];
        text.value = "";
    }
    // 输入DEL
    else if (e.id == 'DEL') {
        text.value = text.value.substr(0, text.value.length - 1);
    }
    // 当屏幕显示为空时，输入点，则转换为0.
    else if (text.value == "" && e.value == ".") {
        text.value = "0.";
    }
    // 输入的是数字或者点
    else if (!isNaN(e.value) || e.value == '.') {
        if (text.value.indexOf('.') !== -1) {
            if (e.value != '.') {
                text.value += e.value
            }
        } else if (e.id != 'text') {
            text.value += e.value
        }
    }
    // 当用户输入的是符号 
    else {
        // 用户输入的是符号，但不是等号
        if (e.value != '=') {
            arr[arr.length] = text.value
            arr[arr.length] = e.value
            text.value = ''
        }
        // 用户输入的是符号，并且是等号
        else if (e.value == '=') {
            arr[arr.length] = text.value
            text.value = eval(arr.join(''))
            arr = []
            // console.log(text.value);
        }
    }
}
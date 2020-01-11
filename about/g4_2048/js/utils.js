// minNum 求任意多数中的 最小值
function minNum() {
    var minNum = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < minNum) {
            minNum = arguments[i]
        }
    }
    return minNum;
}

// maxNum函数求任意多数中的最大值
function maxNum() {
    var maxNum = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {
            maxNum = arguments[i]
        }
    }
    return maxNum;
}

// 封装任意区间的随机数
function randomNum(min, max) {
    // 如果min > max的时候
    if (min > max) {
        return parseInt(Math.random() * (min - max + 1)) + max
    }
    return parseInt(Math.random() * (max - min + 1)) + min;
}

// 封装一个从小到大冒泡排序的函数
function sortNum(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var flag = true;
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (flag) {
            break;
        }
    }
    return arr;
}
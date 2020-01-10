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

// 动画函数
function animate(element, target, num) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
        var leader = element.offsetLeft;
        // 判断此时每次走的距离，当目标距离大于当前位置 说明往正方向走 step的值就是正的
        var step = target > leader ? num : -num;
        // 获得此时的距离 与目标距离的差的绝对值
        var distance = Math.abs(target - leader);
        // 通过判断此时的差如果大于或者等于一步的距离step的时候，就应该执行动画
        if (distance >= Math.abs(step)) {
            leader = leader + step;
            element.style.left = leader + "px";
        } else {
            // 否则清除动画，并且将最后的距离设置为target的距离
            clearInterval(element.timer);
            element.style.left = target + "px";
        }
    }, 15)
}
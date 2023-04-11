/** Bài 1 
 *  */ 

var salaryPerDay = document.getElementById('salaryPerDay').value;
var click = document.getElementById('B1__btnClick');
click.onclick = function() {
    var day = document.getElementById('day').value;
    var salary = 'Kết Quả Tiền Lương : ' + (day * salaryPerDay).toLocaleString();
    document.getElementById('B1__result').innerHTML = salary;
    document.getElementById('B1__result').classList.add('result-bt1');
}


/** Bài 2 
 *  */ 
var B2__btnClick = document.getElementById('B2__btnClick');
B2__btnClick.onclick = function() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var number3 = document.getElementById('number3').value;
    var number4 = document.getElementById('number4').value;
    var number5 = document.getElementById('number5').value;
    var sumNumber = 'Trung Bình = ' + ( parseFloat(number1) + parseFloat(number2) + parseFloat(number3) + parseFloat(number4) + parseFloat(number5) )/5;
    document.getElementById('B2__result').innerHTML = sumNumber;
    document.getElementById('B2__result').classList.add('result-bt2');
}

/** Bài 3 
 *  */ 

var B3__btnClick = document.getElementById('B3__btnClick');
B3__btnClick.onclick = function () {
    var doLa = document.getElementById('doLa').value;
    result__doLa = 'Giá Trị Quy Đổi = ' + parseFloat(doLa * 23500).toLocaleString() + 'VND';
    document.getElementById('B3__result').innerHTML = result__doLa;
    document.getElementById('B3__result').classList.add('result-bt3');
};
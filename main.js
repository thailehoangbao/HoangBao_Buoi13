/** Bài 1 
 *  */

var salaryPerDay = document.getElementById('salaryPerDay').value;
var click = document.getElementById('B1__btnClick');
click.onclick = function () {
    /**
     * Input 
     * Tạo biến salaryPerDay lấy giá trị tiền/ngày = 100.000
     * Tạo biến day lấy giá trị người dùng nhập vào số ngày công
     */
    var day = document.getElementById('day').value;
    /**
     * Process 
     * Lấy Tổng lương = day * salaryPerDay
     */
    var salary = 'Kết Quả Tiền Lương : ' + (day * salaryPerDay).toLocaleString() + 'VND';
    /**
     * Output
     * In kết quả salary ra bên ngoài giao diện
     */
    document.getElementById('B1__result').innerHTML = salary;
    document.getElementById('B1__result').classList.add('result-bt1');
}


/** Bài 2 
 *  */
var B2__btnClick = document.getElementById('B2__btnClick');
B2__btnClick.onclick = function () {
    /**
     * Input
     * Lấy 5 giá trị số mà người dụng nhập vào gán cho các biến number
     */
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var number3 = document.getElementById('number3').value;
    var number4 = document.getElementById('number4').value;
    var number5 = document.getElementById('number5').value;
    /**
     * Process
     * Lấy các biến number được gán cộng tổng sau đó chia cho 5 và gán vào biến sumNumber
     */
    var sumNumber = 'Trung Bình = ' + (parseFloat(number1) + parseFloat(number2) + parseFloat(number3) + parseFloat(number4) + parseFloat(number5)) / 5;
    /**
     * OutPut
     * In kết quả sumNumber ra giao diện
     */
    document.getElementById('B2__result').innerHTML = sumNumber;
    document.getElementById('B2__result').classList.add('result-bt2');
}

/** Bài 3 
 *  */

var B3__btnClick = document.getElementById('B3__btnClick');
B3__btnClick.onclick = function () {
    /**
     * Input
     * Lấy giá trị số tiền $ mà người dùng nhập vào gán cho biến doLa
     */
    var doLa = document.getElementById('doLa').value;
    /**
     * Process
     * Lấy doLa * 23500 sau đó gán vào biến result__doLa ( giá trị VND )
     */
    result__doLa = 'Giá Trị Quy Đổi = ' + parseFloat(doLa * 23500).toLocaleString() + 'VND';
    /**
     * Output
     * In biến result__doLa ra ngoài giao diện
     */
    document.getElementById('B3__result').innerHTML = result__doLa;
    document.getElementById('B3__result').classList.add('result-bt3');
};

/** Bài 4 
 *  */

var B4__btnClick = document.getElementById('B4__btnClick');
B4__btnClick.onclick = function () {
    /**
     * Input
     * Lấy giá trị chiều dài gán cho biến lengthX
     * Lấy giá trị chiều rộng gán cho biến widthY
     */
    lengthX = document.getElementById('lengthX').value * 1;
    widthY = document.getElementById('widthY').value * 1;
    /**
     * Process
     * Xét điều kiện chiều dài > chiều rộng 
     * Nếu sai in thông báo nhập lại
     */
    if (lengthX < widthY) {
        alert('Nhập Sai Chiều Dài và Rộng!');
    };
    /**
     * Tính diện tích = lengthX*widthY gán cho biến dienTich
     * Tính Chu Vi = ( lengthX + widthY )*2 gán cho biến chuVi
     */
    var chuVi = 'Chu Vi = ' + (lengthX + widthY) * 2 + 'm';
    var dienTich = 'Diện Tích = ' + lengthX * widthY + 'm2';
    /**
     * Output
     * In kết quả dienTich, chuVi ra giao diện
     */
    document.getElementById('B4__result__CV').innerHTML = chuVi;
    document.getElementById('B4__result__DT').innerHTML = dienTich;
    document.getElementById('B4__result__CV').classList.add('result-bt4');
    document.getElementById('B4__result__DT').classList.add('result-bt4');
};

/** Bài 5 
 *  */

var B5__btnClick = document.getElementById('B5__btnClick');
B5__btnClick.onclick = function () {
    /**
     * Input 
     * Lấy giá trị số đầu tiên gán cho biến number6
     * Lấy giá trị số đầu tiên gán cho biến number7
     */
    var number6 = document.getElementById('number6').value * 1;
    var number7 = document.getElementById('number7').value * 1;
    /**
     * Process
     * dùng hàm Math.floor () để lấy giá trị số hàng chục gán vào biến kySo_HangChuc6,kySo_HangChuc7
     * dùng phép toán % để lấy giá trị số hàng đơn vị gán vào biến kySo_HangDV6,kySo_HangDV7
     */
    var kySo_HangChuc6 = Math.floor(number6 / 10);
    var kySo_HangDV6 = number6 % 10;
    var kySo_HangChuc7 = Math.floor(number7 / 10);
    var kySo_HangDV7 = number7 % 10;
    /**
     * Tính tổng 2 ký số sau đó gán cho biến sumNumber6,sumNumber7
     */
    var sumNumber6 = 'Tổng Số Thứ 1 = ' + (parseFloat(kySo_HangChuc6) + parseFloat(kySo_HangDV6));
    var sumNumber7 = 'Tổng Số Thứ 2 = ' + (parseFloat(kySo_HangChuc7) + parseFloat(kySo_HangDV7));
    /**
     * Output
     * In sumNumber6,sumNumber7 ra giao diện
     */
    document.getElementById('B5__result__1').innerHTML = sumNumber6;
    document.getElementById('B5__result__2').innerHTML = sumNumber7;
    document.getElementById('B5__result__1').classList.add('result-bt5');
    document.getElementById('B5__result__2').classList.add('result-bt5');
};

/**
 * Bài 6
 */

var clickTip = document.getElementById('clickTip');
clickTip.onclick = function () {
    var soTienTip = document.getElementById('soTienTip').value;
    var chiaSoNguoi = document.getElementById('chiaSoNguoi').value;
    var inputGroupSelect04 = document.getElementById('inputGroupSelect04').value;
    var calcTip = (soTienTip * inputGroupSelect04) / chiaSoNguoi;
    document.getElementById('resultTip').innerHTML = calcTip;
};
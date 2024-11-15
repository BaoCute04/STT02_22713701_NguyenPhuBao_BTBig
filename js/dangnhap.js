var tenDN;
var pass;

function dangky() {
    let username = document.getElementById("username").value;
    let regexUser = /^[A-Za-z0-9]{6,15}$/;
    let errUser = document.getElementById("erruser");

    if (username.trim() === "") {
        errUser.innerHTML = "* không được rỗng";
        return false;
    }
    if (!regexUser.test(username)) {
        errUser.innerHTML = "* Bắt buộc, gồm (6-15 kí tự) chữ và số";
        return false;
    }
    errUser.innerHTML = "(*)";

    let phone = document.getElementById("sdt").value;
    let regexPhone = /^[0][3-9]{1}[0-9]{8}$/;
    let errPhone = document.getElementById("errsdt");

    if (phone.trim() === "" || !regexPhone.test(phone)) {
        errPhone.innerHTML = "* Bắt đầu từ 0(3-9), gồm 10 kí tự số";
        return false;
    }
    errPhone.innerHTML = "(*)";

    let email = document.getElementById("email").value;
    let regexMail = /^[A-Za-z0-9]+@gmail\.com$/;
    let errEmail = document.getElementById("erremail");

    if (!regexMail.test(email)) {
        errEmail.innerHTML = "(không đúng định dạng)";
        return false;
    }
    errEmail.innerHTML = "(*)";

    let password = document.getElementById("password").value;
    let regexPassword = /^[A-Za-z0-9]{6,15}$/;
    let errPassword = document.getElementById("errpassword");

    if (password.trim() === "" || !regexPassword.test(password)) {
        errPassword.innerHTML = "* Gồm chữ và số (6-15 kí tự)";
        return false;
    }
    errPassword.innerHTML = "(*)";

    let confirmPassword = document.getElementById("againpassword").value;
    let errConfirmPassword = document.getElementById("erremailagain");

    if (confirmPassword !== password) {
        errConfirmPassword.innerHTML = "* Không trùng khớp";
        return false;
    }
    errConfirmPassword.innerHTML = "(*)";

    // Lưu vào Local Storage
    saveToLocalStorage(username, email, phone, password);
    alert('Đăng ký thành công và thông tin đã được lưu!');
    window.location.href = '../../html/home.html';
}

function saveToLocalStorage(username, email, phone, password) {
    var userAccount = {
        username: username,
        email: email,
        phone: phone,
        password: password // Chỉ dùng cho demo, không nên lưu mật khẩu như thế này trong thực tế!
    };

    localStorage.setItem('userAccount', JSON.stringify(userAccount));
}

function dangnhap() {
    let tenDNInput = document.getElementById("login-username").value;
    let passInput = document.getElementById("login-password").value;

    let errtenDN = document.getElementById("errtenDN");
    let errpass = document.getElementById("errpass");

    // Kiểm tra tên đăng nhập
    if (tenDNInput.trim() === "") {
        errtenDN.innerHTML = "* Tên đăng nhập không được để trống";
        return false;
    }
    errtenDN.innerHTML = "";

    // Kiểm tra mật khẩu
    if (passInput.trim() === "") {
        errpass.innerHTML = "* Mật khẩu không được để trống";
        return false;
    }
    errpass.innerHTML = "";

    // Lấy thông tin tài khoản từ Local Storage
    let userAccount = JSON.parse(localStorage.getItem('userAccount'));

    // Kiểm tra xem thông tin người dùng đã lưu có tồn tại không
    if (userAccount) {
        if (tenDNInput === userAccount.username && passInput === userAccount.password) {
            alert("Đăng nhập thành công!");
            // Chuyển hướng đến trang chủ hoặc trang khác
            window.history.back();
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
        }
    } else {
        alert("Chưa có tài khoản nào được đăng ký!");
    }
}


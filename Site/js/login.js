function formKontrol() {
    var email = document.getElementById("username").value.trim();
    var sifre = document.getElementById("password").value.trim();
    var hataKutusu = document.getElementById("error-message");

    // E-posta kontrolü için basit bir desen
    var emailKontrol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "" || sifre == "") {
        hataKutusu.innerHTML = "Kullanıcı adı (e-posta) veya şifre boş olamaz.";
        hataKutusu.classList.remove("d-none"); // hata kutusunu göster
        return false; // form gönderilmesin
    }

    if (!emailKontrol.test(email)) {
        hataKutusu.innerHTML = "Lütfen geçerli bir e-posta adresi giriniz.";
        hataKutusu.classList.remove("d-none");
        return false;
    }

    
    hataKutusu.classList.add("d-none"); // Hata yoksa kutuyu gizle
    return true; // form gönderilsin
}
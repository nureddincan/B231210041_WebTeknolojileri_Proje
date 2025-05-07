function formKontrol() {
    var email = document.getElementById("username").value.trim(); // Kullanıcı adı (e-posta) alanı
    var sifre = document.getElementById("password").value.trim(); // Şifre alanı
    var hataKutusu = document.getElementById("error-message"); // Hata mesajı kutusu

    // Geçerli bir e-posta adresi kontrolü için regex
    var emailKontrol = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (email == "" || sifre == "") {
        hataKutusu.innerHTML = "Kullanıcı adı (e-posta) veya şifre boş olamaz."; // Hata mesajı
        hataKutusu.classList.remove("d-none"); // hata kutusunu göster
        return false; // form gönderilmesin
    }

    if (!emailKontrol.test(email)) { // E-posta adresi geçerli mi kontrol et
        hataKutusu.innerHTML = "Lütfen geçerli bir e-posta adresi giriniz.";
        hataKutusu.classList.remove("d-none");
        return false;
    }

    hataKutusu.classList.add("d-none"); // Hata yoksa kutuyu gizle
    return true; // form gönderilsin
}

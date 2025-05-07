var formValid = false; // Formun geçerliliğini kontrol etmek için değişken

// Formu kontrol etme fonksiyonu
function kontrolEt() {
    let adSoyad = document.getElementById("adSoyad").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefon = document.getElementById("telefon").value.trim();
    let cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    let yas = Number(document.getElementById("yas").value);
    let sehir = document.getElementById("sehir").value;
    let konu = document.getElementById("konu").value.trim();
    let mesaj = document.getElementById("mesaj").value.trim();
    let onay = document.getElementById("onay").checked;

    let hata = "";

    // Alanların kontrolü
    if (adSoyad === "") hata += "Ad Soyad boş olamaz.\n";
    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) hata += "Geçerli bir e-posta giriniz.\n";
    if (telefon === "" || !/^\d+$/.test(telefon)) hata += "Telefon sadece rakamlardan oluşmalıdır.\n";
    if (!cinsiyet) hata += "Cinsiyet seçimi zorunludur.\n";
    if (isNaN(yas) || yas < 1) hata += "Yaş geçersiz.\n";
    if (sehir === "") hata += "Şehir seçimi yapınız.\n";
    if (konu === "") hata += "Konu boş olamaz.\n";
    if (mesaj === "") hata += "Mesaj alanı boş olamaz.\n";
    if (!onay) hata += "Veri işleme izni vermelisiniz.\n";

    if (hata) {
        alert("Lütfen aşağıdaki hataları düzeltin:\n\n" + hata);
        formValid = false; // Hata varsa form geçersiz
    } else {
        alert("Form başarıyla kontrol edildi. Gönderebilirsiniz.");
        formValid = true; // Hata yoksa form geçerli
    }
}

// Gönder butonunu kontrol etme fonksiyonu
function gonder() {
    if (!formValid) {
        alert("Form geçerli değil. Lütfen kontrol edin.");
        return false; // Gönderme işlemini iptal et
    }
    return true; // Gönderme işlemi devam etsin
}

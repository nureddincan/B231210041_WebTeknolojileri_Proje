// Formu kontrol etme fonksiyonu
function kontrolEt() {
    let adSoyad = document.getElementById("adSoyad").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefon = document.getElementById("telefon").value.trim();
    let cinsiyet = document.querySelector('input[name="cinsiyet"]:checked');
    let yas = Number(document.getElementById("yas").value);
    let sehir = document.getElementById("sehir").value;
    let konu = document.getElementById("konu").value.trim();
    let dosya = document.getElementById("dosya").value;
    let mesaj = document.getElementById("mesaj").value.trim();
    let onay = document.getElementById("onay").checked;

    let hata = "";

    // Alanların kontrolü
    if (adSoyad === "" || !/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(adSoyad)) hata += "Ad Soyad geçerli bir formatta olmalıdır.\n";
    if (email === "" || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) hata += "Geçerli bir e-posta giriniz.\n";
    if (telefon === "" || !/^05[0-9]{9}$/.test(telefon)) hata += "Geçerli bir telefon numarası giriniz.\n";
    if (!cinsiyet) hata += "Cinsiyet seçimi zorunludur.\n";
    if (isNaN(yas) || yas < 1) hata += "Yaş geçersiz.\n";
    if (sehir === "") hata += "Şehir seçimi yapınız.\n";
    if (konu === "") hata += "Konu boş olamaz.\n";
    if (dosya === "") hata += "Bir dosya yükleyiniz.\n";
    if (mesaj === "") hata += "Mesaj alanı boş olamaz.\n";
    if (!onay) hata += "Veri işleme izni vermelisiniz.\n";

    if (hata) {
        alert("Lütfen aşağıdaki hataları düzeltin(JavaScript):\n\n" + hata);
        return false; // Hata varsa false döndür
    } else {
        alert("Form başarıyla kontrol edildi. Gönderebilirsiniz.");
        return true; // Hata yoksa true döndür
    }
}

// Gönder butonunu kontrol etme fonksiyonu
function gonder() {
    return kontrolEt(); // kontrolEt fonksiyonunun sonucunu direkt döndür
}

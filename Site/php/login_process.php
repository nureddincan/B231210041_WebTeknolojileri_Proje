<?php
// Eğer POST ile 'username' verisi geldiyse $username değişkenine ata, yoksa boş string ata
$username = isset($_POST['username']) ? $_POST['username'] : ''; 
// Eğer POST ile 'password' verisi geldiyse $password değişkenine ata, yoksa boş string ata
$password = isset($_POST['password']) ? $_POST['password'] : '';

// Doğru bilgiler
$dogru_kullanici = "b231210041@sakarya.edu.tr";
$dogru_sifre = "b231210041";

// Bilgileri kontrol et
if ($username === $dogru_kullanici && $password === $dogru_sifre) {
    // Giriş başarılıysa hoş geldiniz mesajı göster
    echo "<!DOCTYPE html>
    <html lang='tr'>
    <head>
        <meta charset='UTF-8'>
        <title>Giriş Başarılı</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>
    <body class='d-flex justify-content-center align-items-center vh-100 bg-success text-white'>
        <div class='text-center'>
            <h1>Hoşgeldiniz <strong>$password</strong></h1>
            <p>Giriş başarılı!</p>
        </div>
    </body>
    </html>";
} else {
    echo "<!DOCTYPE html>
    <html lang='tr'>
    <head>
        <meta charset='UTF-8'>
        <title>Giriş Başarısız</title>
        <meta http-equiv='refresh' content='3;url=/B231210041_WebTeknolojileri_Proje/login.html'>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css' rel='stylesheet'>
    </head>
    <body class='d-flex justify-content-center align-items-center vh-100 bg-danger text-white'>
        <div class='text-center'>
            <h1>Hatalı Giriş</h1>
            <p>3 saniye içinde giriş sayfasına yönlendirileceksiniz...</p>
            <p><a href='/B231210041_WebTeknolojileri_Proje/login.html' class='text-white'>Eğer yönlendirilmezseniz buraya tıklayın</a></p>
        </div>
    </body>
    </html>";
    exit;
}
?>

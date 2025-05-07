<!DOCTYPE html>
<html lang="tr-TR">
<head>
    <meta charset="UTF-8">
    <title>İletişim Bilgileri</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="p-5 bg-light">
    <div class="container">
        <h1 class="text-center text-dark mb-4">İletişim Formu Sonuçları</h1>
        <?php
            echo "<ul class='list-group'>" .
            "<li class='list-group-item'><strong>Ad Soyad:</strong> " . htmlspecialchars(trim($_POST['adSoyad'])) . "</li>" .
            "<li class='list-group-item'><strong>E-Posta:</strong> " . htmlspecialchars(trim($_POST['email'])) . "</li>" .
            "<li class='list-group-item'><strong>Telefon:</strong> " . htmlspecialchars(trim($_POST['telefon'])) . "</li>" .
            "<li class='list-group-item'><strong>Cinsiyet:</strong> " . htmlspecialchars(trim($_POST['cinsiyet'])) . "</li>" .
            "<li class='list-group-item'><strong>Yaş:</strong> " . htmlspecialchars(trim($_POST['yas'])) . "</li>" .
            "<li class='list-group-item'><strong>Şehir:</strong> " . htmlspecialchars(trim($_POST['sehir'])) . "</li>" .
            "<li class='list-group-item'><strong>Konu:</strong> " . htmlspecialchars(trim($_POST['konu'])) . "</li>" .
            "<li class='list-group-item'><strong>Mesaj:</strong> " . htmlspecialchars(trim($_POST['mesaj'])) . "</li>" .
            "</ul>";
        ?> 
    </div>
</body>
</html>
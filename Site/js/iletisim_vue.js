const { createApp } = Vue;

createApp({
    data() {
        return {
            adSoyad: "",
            email: "",
            telefon: "",
            cinsiyet: "",
            yas: "",
            sehir: "",
            dosya: null,
            konu: "",
            mesaj: "",
            onay: false,
            hatalar: {
                adSoyad: "",
                email: "",
                telefon: "",
                cinsiyet: "",
                yas: "",
                sehir: "",
                dosya: "",
                konu: "",
                mesaj: "",
                onay: ""
            }
        };
    },
    methods: {
        kontrolEt() {
            // Hataları sıfırla
            Object.keys(this.hatalar).forEach(key => this.hatalar[key] = "");

            // Ad Soyad kontrolü
            if (!this.adSoyad.trim()) {
                this.hatalar.adSoyad = "Ad Soyad boş olamaz.";
            } else if (!/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/.test(this.adSoyad)) {
                this.hatalar.adSoyad = "Ad Soyad sadece harflerden oluşmalıdır.";
            }

            // E-posta kontrolü
            if (!this.email) {
                this.hatalar.email = "E-posta boş olamaz.";
            } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)) {
                this.hatalar.email = "Geçerli bir e-posta adresi giriniz.";
            }

            // Telefon kontrolü
            if (!this.telefon) {
                this.hatalar.telefon = "Telefon boş olamaz.";
            } else if (!/^05[0-9]{9}$/.test(this.telefon)) {
                this.hatalar.telefon = "Telefon numarası 05 ile başlamalı ve 11 haneli olmalıdır.";
            }

            // Cinsiyet kontrolü
            if (!this.cinsiyet) {
                this.hatalar.cinsiyet = "Cinsiyet seçimi zorunludur.";
            }

            // Yaş kontrolü
            if (!this.yas) {
                this.hatalar.yas = "Yaş boş olamaz.";
            } else if (isNaN(this.yas) || this.yas < 1) {
                this.hatalar.yas = "Geçerli bir yaş giriniz.";
            }

            // Şehir kontrolü
            if (!this.sehir) {
                this.hatalar.sehir = "Şehir seçimi zorunludur.";
            }

            // Konu kontrolü
            if (!this.konu.trim()) {
                this.hatalar.konu = "Konu boş olamaz.";
            }

            // Dosya kontrolü
            if (!this.dosya) {
                this.hatalar.dosya = "Bir dosya yükleyiniz.";
            }

            // Mesaj kontrolü
            if (!this.mesaj.trim()) {
                this.hatalar.mesaj = "Mesaj alanı boş olamaz.";
            }

            // Onay kontrolü
            if (!this.onay) {
                this.hatalar.onay = "Veri işleme izni vermelisiniz.";
            }

            // Form geçerli mi kontrol et
            for (let hata in this.hatalar) {
                if (this.hatalar[hata] !== "") {
                    return false; // Herhangi bir hata varsa direkt false döndür
                }
            }

            alert("Form başarıyla kontrol edildi. Gönderebilirsiniz.");
            return true;
        },

        formuGonder() {
            if (this.kontrolEt()) {
                document.getElementById('iletisimForm').submit();
            }
        },

        formuTemizle() {
            // Tüm form alanlarını sıfırla
            this.adSoyad = "";
            this.email = "";
            this.telefon = "";
            this.cinsiyet = "";
            this.yas = "";
            this.sehir = "";
            this.konu = "";
            this.dosya = null;
            this.mesaj = "";
            this.onay = false;
            
            // Hataları sıfırla
            Object.keys(this.hatalar).forEach(key => this.hatalar[key] = "");

            // Dosya input'unu sıfırla
            document.getElementById('dosya').value = '';
        },

        dosyaSecildi(event) {
            this.dosya = event.target.files[0]; // Seçilen dosyayı al
            this.hatalar.dosya = ""; // Hata mesajını temizle
        }
    }
}).mount("#app");

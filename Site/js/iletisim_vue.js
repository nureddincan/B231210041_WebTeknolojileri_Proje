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
            konu: "",
            mesaj: "",
            onay: false,
            hatalar: []
        };
    },
    methods: {
        kontrolEt() {
            this.hatalar = [];

            if (!this.adSoyad.trim()) this.hatalar.push("Ad Soyad boş olamaz.");
            if (!this.email || !this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) this.hatalar.push("Geçerli bir e-posta adresi giriniz.");
            if (!this.telefon || !this.telefon.match(/^\d+$/)) this.hatalar.push("Telefon sadece rakamlardan oluşmalıdır.");
            if (!this.cinsiyet) this.hatalar.push("Cinsiyet seçimi zorunludur.");
            if (!this.yas || this.yas < 1) this.hatalar.push("Yaş geçersiz.");
            if (!this.sehir) this.hatalar.push("Şehir seçimi yapınız.");
            if (!this.konu.trim()) this.hatalar.push("Konu boş olamaz.");
            if (!this.mesaj.trim()) this.hatalar.push("Mesaj alanı boş olamaz.");
            if (!this.onay) this.hatalar.push("Veri işleme izni vermelisiniz.");

            if (this.hatalar.length > 0) {
                alert("Lütfen aşağıdaki hataları düzeltin:\n\n" + this.hatalar.join("\n"));
            } else {
                alert("Form başarıyla kontrol edildi. Gönderebilirsiniz.");
                formValid = true;
            }
        },
        formuGonder() {
            if (!formValid) {
                alert("Form geçerli değil. Lütfen kontrol edin.");
                return false; // Gönderme işlemini iptal et
            }
            this.$refs.iletisimForm.submit(); // native form gönderimi
        },        
        formuTemizle() {
            this.adSoyad = "";
            this.email = "";
            this.telefon = "";
            this.cinsiyet = "";
            this.yas = "";
            this.sehir = "";
            this.konu = "";
            this.mesaj = "";
            this.onay = false;
            this.hatalar = [];
        }
    }
}).mount("#app");
document.addEventListener("DOMContentLoaded", function () { // DOM yüklendiğinde çalışacak fonksiyon
    const API_KEY = '68d60c07664104720184615796ef93d7';
    const filmIDListesi = [238, 240, 242, 497, 157336, 22, 857, 58, 278, 122, 120, 121, 111, 423, 27957]; // Favori film ID'leri
    const diziIDListesi = [66732, 1396, 1402, 2288, 67178, 204255, 60574, 93405, 19885, 32519]; // Favori dizi ID'leri
    const favoriFilmAlan = document.getElementById('favori-filmler'); // Favori film alanını seçme
    const favoriDiziAlan = document.getElementById('favori-diziler'); // Favori dizi alanını seçme

    // Rastgele 6 film seçme
    const rastgeleFilmler = filmIDListesi.sort(() => 0.5 - Math.random()).slice(0, 6);
    // Rastgele 6 dizi seçme
    const rastgeleDiziler = diziIDListesi.sort(() => 0.5 - Math.random()).slice(0, 6);

    // Filmleri çekme
    rastgeleFilmler.forEach(id => { // Her film için API'den veri çekme
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=tr-TR`; // API URL'si oluşturma

        fetch(url) // API'den veri çekme
            .then(res => res.json()) // JSON formatında yanıtı alma
            .then(film => { // Film verisini işleme
                const div = document.createElement('div');
                div.className = 'col';
                div.innerHTML = `
                    <a href="https://www.themoviedb.org/movie/${id}" target="_blank" style="text-decoration: none; color: inherit;">
                        <div class="card h-100 shadow-sm">
                            <img src="https://image.tmdb.org/t/p/w500${film.poster_path}" class="card-img-top" alt="${film.title}">
                            <div class="card-body">
                                <h5 class="card-title">${film.title}</h5>
                                <p class="card-text">${film.overview ? film.overview.substring(0, 100) + '...' : 'Açıklama yok.'}</p>
                            </div>
                        </div>
                    </a>
                `;
                favoriFilmAlan.appendChild(div); // Oluşturulan div'i favori film alanına ekleme
            })
            .catch(err => console.error("Film çekme hatası:", err)); // Hata durumunda konsola hata mesajı yazdırma
    });

    // Dizileri çekme
    rastgeleDiziler.forEach(id => { // Her dizi için API'den veri çekme
        const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=tr-TR`; // API URL'si oluşturma

        fetch(url) // API'den veri çekme
            .then(res => res.json()) // JSON formatında yanıtı alma
            .then(dizi => { // Dizi verisini işleme
                const div = document.createElement('div');
                div.className = 'col';
                div.innerHTML = `
                    <a href="https://www.themoviedb.org/tv/${id}" target="_blank" style="text-decoration: none; color: inherit;">
                        <div class="card h-100 shadow-sm">
                            <img src="https://image.tmdb.org/t/p/w500${dizi.poster_path}" class="card-img-top" alt="${dizi.name}">
                            <div class="card-body">
                                <h5 class="card-title">${dizi.name}</h5>
                                <p class="card-text">${dizi.overview ? dizi.overview.substring(0, 100) + '...' : 'Açıklama yok.'}</p>
                            </div>
                        </div>
                    </a>
                `;
                favoriDiziAlan.appendChild(div); // Oluşturulan div'i favori dizi alanına ekleme
            })
            .catch(err => console.error("Dizi çekme hatası:", err)); // Hata durumunda konsola hata mesajı yazdırma
    });
});
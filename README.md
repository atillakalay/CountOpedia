# CountOpedia

CountOpedia, React kullanılarak geliştirilmiş interaktif bir sayaç oyunudur. Oyuncular saldırı ve savunma hamleleri yaparak puanlarını artırabilir veya azaltabilirler. Oyun, zorluk seviyeleri ve dil seçenekleri gibi özelliklerle zenginleştirilmiştir.

## Özellikler

- Saldırı ve savunma mekanizması
- Rastgele hamle seçeneği
- Oyun sıfırlama
- Zorluk seviyesi ayarı (Kolay, Normal, Zor)
- Dil desteği (Türkçe ve İngilizce)
- Animasyonlu kullanıcı arayüzü
- Yüksek skor takibi

## Kurulum

1. Bu depoyu klonlayın:
   ```
   git clone https://github.com/kullaniciadi/countopedia.git
   ```
2. Proje dizinine gidin:
   ```
   cd countopedia
   ```
3. Gerekli bağımlılıkları yükleyin:
   ```
   npm install
   ```
4. Uygulamayı başlatın:
   ```
   npm start
   ```

## Kullanım

- Saldırı yapmak için yeşil çerçeveli butona tıklayın.
- Savunma yapmak için kırmızı çerçeveli butona tıklayın.
- Rastgele hamle yapmak için "Rastgele Hamle" butonunu kullanın.
- Oyunu sıfırlamak için "Sıfırla" butonuna basın.
- Zorluk seviyesini değiştirmek için alt kısımdaki "Kolay", "Normal" veya "Zor" butonlarını kullanın.
- Dili değiştirmek için "Türkçe" veya "English" butonlarını kullanın.

## Teknolojiler

- React
- react-spring (animasyonlar için)
- Bootstrap (stil ve düzen için)

## Proje Yapısı

- `src/Counter.jsx`: Ana oyun mantığını ve kullanıcı arayüzünü içerir.
- `src/Header.jsx`: Uygulama başlığını ve logosunu gösterir.
- `src/index.js`: React uygulamasının giriş noktası.
- `public/index.html`: Ana HTML dosyası.

## Katkıda Bulunma

1. Bu projeyi fork edin
2. Yeni bir özellik dalı oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: Açıklama'`)
4. Dalınıza push yapın (`git push origin yeni-ozellik`)
5. Bir Pull Request oluşturun

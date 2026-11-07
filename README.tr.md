# Muhammet Fatih Çetintaş — Yazılım ve Yapay Zekâ Portföyü

[English](README.md)

Astro 7, TypeScript ve Tailwind CSS 4 ile hazırlanmış statik, iki dilli portföy.
22 depoya dayalı proje ve sahibinin açıkladığı üç ek çalışma, toplam 25 eşleşen
TR/EN teknik sayfada sunulur. Açık iyileştirme PR'lerindeki bilgiler kullanılır;
PR değişiklikleri birleştirilmiş veya yayımlanmış gibi gösterilmez.

## Çalıştırma ve doğrulama

Node **22.23.4** kullanın:

```bash
npm ci
npm run dev
npm run qa
npm run preview
```

Yerel adres genellikle `http://127.0.0.1:4321/tr/` olur. Bu Astro sürümü preview
sunucusunu arka planda çalıştırabilir; `npx astro preview status` ile kontrol,
`npx astro preview stop` ile durdurma yapılır.

`qa`: Astro/TypeScript, ESLint, biçimlendirme, eksik çeviri/içerik kontrolü,
production build, yerel bağlantı ve gizlilik kalıbı taramalarını çalıştırır.

## İçerik düzenleme

Projeler `src/content/projects/tr/` ve `en/` altında ayrı Markdown dosyalarıdır.
Deneyim ve eğitim `src/data/profile.ts` içindedir. [İçerik rehberi](docs/CONTENT_GUIDE.md)
yeni proje ve çeviri eklemeyi açıklar. Doğrulanamayan proje tarihleri boş tutulur;
deponun taşındığı tarih proje tarihi sayılmaz.

Site veritabanı, ücretli API veya ziyaretçi tarayıcısından GitHub erişimi istemez.
Dil ve tema tercihi yalnızca tarayıcıda tutulur. Özel projelerde kod bağlantısı
yoktur; kurumsal çalışmalar anonimleştirilmiştir. Ürün ekranı gibi sunulan sahte
görsel yoktur; çizimler kategori illüstrasyonu olarak açıkça adlandırılır.

İndirme bağlantısı, sahibinin paylaştığı iki sayfalık orijinal 2026 CV PDF’sini
değiştirmeden sunar. İngilizce sayfada belgenin Türkçe olduğu belirtilir. Deneyim,
eğitim ve dört sertifika kaydı bu CV’ye göre güncellenmiştir. Paylaşılan MFÇ
görseli Astro ile duyarlı web görsellerine dönüştürülür; tasarımı değiştirilmez.
12 proje çifti ek uygulama ayrıntıları içerir. Kısa giriş ve kaydırma animasyonları
hareketi azaltma tercihine uyar ve sürekli tekrar etmez.

## Yayın

Kaynak depo: [M-Fatih-C/m-fatih-c.github.io](https://github.com/M-Fatih-C/m-fatih-c.github.io).
Site adresi: [m-fatih-c.github.io](https://m-fatih-c.github.io/tr/).
İncelenen sürümün yayını, sahibi tarafından 8 Kasım 2026 tarihinde onaylandı.
[Yayın rehberini](docs/DEPLOYMENT.md) izleyin. Manuel deploy workflow’u yalnızca
`main` dalında `publish` seçimiyle çalışır; sonuçları deponun Actions bölümünde izlenir.

[Tasarım sistemi](docs/DESIGN_SYSTEM.md) · [Mimari](docs/ARCHITECTURE.md) ·
[İçerik envanteri](docs/PROJECT_CONTENT_INVENTORY.md)

Yeni lisans veya paylaşım hakkı tanımlanmadı; üçüncü taraf font/ikon lisansları korunur.

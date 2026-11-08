---
{
  'slug': 'tanita-report-extractor',
  'title': 'Tanita Rapor İşleme',
  'categories': ['software', 'data', 'research'],
  'technologies': ['Python', 'pdfplumber', 'pandas', 'openpyxl', 'PyQt5'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'private',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'summary-only',
  'summary': 'Yetkili yerel PDF raporlarından tablo çıkarımını araştıran, toplu işlem ve masaüstü arayüzü içeren özel veri işleme prototipi.',
  'description': 'Tanita rapor düzenlerindeki alanları Excel tablolarına dönüştürmeyi araştıran Python prototipidir. Toplu işleme komutu ve masaüstü arayüzü, tekrar eden belge hazırlama adımlarını düzenlemeyi hedefler. Ayrıştırma kuralları belge düzenine bağlıdır; çıkarılan alanların gözden geçirilmesi gerekir. Kamuya açık anlatım gerçek rapor, kişi bilgisi veya sağlık ölçümü içermez.',
  'role': 'Python tabanlı rapor işleme geliştirme; yaklaşık 400 rapordan veri çıkarma ve temizleme, 395 hastayı kapsayan araştırma veri setinin hazırlanmasına katkı.',
  'problem': 'Benzer PDF raporlarından alanları elle tablolara geçirmek zaman alır ve yazım hatalarına açıktır. Belge düzenleri değiştiğinde otomatik çıkarım da eksik veya yanlış sonuç üretebilir. Ayrıca hata ayıklama amacıyla saklanan ham metinler gereksiz kişisel veri kopyaları oluşturabilir.',
  'solution': 'Yerel belge okuma ve düzen bağımlı ayrıştırma kuralları, alanları tabloya dönüştüren bir işlem hattında birleştirildi. Aynı genel ihtiyaca toplu komut ve masaüstü arayüzüyle erişim sağlandı. İnceleme dalındaki düzenleme, ham PDF metnini hata ayıklama amacıyla kaydetmeyi varsayılan olarak kapattı; açık izinle etkinleştirme davranışı sentetik testlerle kontrol edildi. Gerçek rapor doğruluğu ayrı bir değerlendirme olarak bırakıldı.',
  'architecture':
    [
      'Yetkili yerel PDF belgelerinin okunması',
      'Belge düzenine bağlı alan çıkarımı ve eksik alanların değerlendirilmesi',
      'Toplu işlem veya masaüstü arayüzünden sürecin yönetilmesi',
      'Excel çıktısının kullanıcı tarafından incelenmesi',
    ],
  'features':
    [
      'Birden fazla belge için toplu işleme',
      'Düzen bağımlı alan ayrıştırma',
      'Biçimlendirilmiş Excel dışa aktarımı',
      'Masaüstü işlem arayüzü',
    ],
  'technicalChallenges':
    [
      'PDF düzen değişikliklerinin çıkarım kurallarına etkisi',
      'Hata ayıklama ihtiyacı ile veri minimizasyonunu dengelemek',
    ],
  'decisions':
    [
      'Çıktıların kullanıcı incelemesini gerektirdiğini açık tutmak',
      'Ham metin saklamayı inceleme dalında varsayılan olarak kapatmak',
      'Gösterim ve testlerde yalnızca sentetik içerik kullanmak',
    ],
  'testing':
    [
      '7 Kasım 2026 inceleme dalında taklit PDF okuyucu ve sentetik metinle 3 gizlilik regresyon testi geçti.',
      'Gerçek raporlar, alan çıkarım doğruluğu ve GUI etkileşimi bu testlerle doğrulanmadı.',
    ],
  'results':
    [
      'Yaklaşık 400 Tanita raporunun işlenmesi ve 395 hastayı kapsayan analiz veri setinin hazırlanmasına veri hazırlama katkısı.',
      'Ham hata ayıklama metninin varsayılan saklanmasını kapatan değişiklik hazırlandı.',
      'Varsayılan ve açık etkinleştirme davranışları sentetik regresyonlarla doğrulandı.',
    ],
  'limitations':
    [
      'Klinik ölçüm, teşhis veya doğrulanmış sağlık sistemi değildir.',
      'Excel çıktıları, dosya adları ve günlükler hâlâ kişisel bilgi içerebilir.',
      'Ayrıştırma doğruluğu gerçek belge düzenleri için ayrıca değerlendirilmelidir.',
    ],
  'projectId': 'tanita-report-extractor',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'order': 5,
  'related': ['sleep-apnea-risk-model', 'eeg-als-research-toolkit'],
  'implementation':
    [
      {
        'title': 'Araştırma için belge verisini yapılandırmak',
        'detail': 'Uyku apnesi araştırması kapsamında yaklaşık 400 Tanita raporundan veri çıkarma ve temizleme süreçlerini yürüttüm; 395 hastayı kapsayan analiz veri setinin hazırlanmasına katkıda bulundum. Belgeyi tabloya dönüştürmek bu çalışmanın ilk adımıydı. Alanların araştırmada kullanılabilecek biçimde düzenlenmesi ve diğer değişkenlerle eşleştirmeye hazırlanması da veri hazırlama sürecinin parçasıydı. Bu sayfada yalnızca toplu çalışma kapsamı yer alır; bireysel kayıt paylaşılmaz.',
      },
      {
        'title': 'PDF düzeni ile veri alanlarını ayırmak',
        'detail': 'PDF içindeki metnin sırası, araştırma tablosundaki sütun yapısıyla aynı değildir. Yerel PDF okuma, düzen bağımlı ayrıştırma ve Excel aktarımını ayrı aşamalar olarak ele aldım. Bu yapı, düzen değiştiğinde hangi kuralın gözden geçirileceğini anlamayı kolaylaştırır. Toplu komut ve masaüstü arayüzü aynı belge hazırlama ihtiyacına farklı girişler sağlar; çıkarım çıktısının kontrol edilmesi yine gereklidir.',
      },
      {
        'title': 'Hata ayıklamada gereksiz veri kopyasını azaltmak',
        'detail': 'Bir ayrıştırma hatasını incelemek için ham PDF metnini diske yazmak, sağlık bilgilerini ek dosyalara çoğaltabilir. İnceleme dalındaki değişiklik bu davranışı varsayılan olarak kapatır ve yalnızca açık etkinleştirmeyle çalıştırır. Sentetik testler kayıt davranışını doğrular. Bu iyileştirme, Excel çıktısının saklanması, dosya adları veya geçmiş kayıtların yönetimi gibi diğer gizlilik sorumluluklarının yerine geçmez.',
      },
    ],
  'presentation': 'case-study',
}
---

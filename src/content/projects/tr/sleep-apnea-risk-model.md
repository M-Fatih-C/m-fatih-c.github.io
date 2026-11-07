---
{
  'slug': 'sleep-apnea-risk-model',
  'title': 'Uyku Apnesi Risk Araştırması',
  'categories': ['ml', 'data', 'research'],
  'technologies': ['Python', 'pandas', 'scikit-learn', 'Matplotlib'],
  'status': 'research',
  'featured': false,
  'repositoryVisibility': 'private',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'summary-only',
  'summary': 'Tablosal verilerle ikili sınıflandırma, ROC görselleştirmesi ve giriş doğrulamasını inceleyen özel lojistik regresyon araştırma deneyi.',
  'description': 'Uyku apnesi bağlamındaki tablosal araştırma verileri için lojistik regresyon deney akışıdır. Veri yükleme, eksik satırları eleme, katmanlı eğitim/test ayrımı ve değerlendirme grafikleri içerir. Proje, yazılım davranışı ile bilimsel geçerlilik arasındaki ayrımı açık tutar; klinik başarı veya gerçek hasta verisine dayalı performans iddiası sunmaz.',
  'role': 'Araştırma veri hazırlığı, antropometrik ve klinik değişkenlerin eşleştirilmesi; Python/pandas ile işleme, sınıflandırma ve model değerlendirme çalışmaları.',
  'problem': 'Küçük araştırma deneylerinde hedef etiketlerinin hatalı tanımlanması, sayısal olmayan alanlar ve hedefin girdi olarak kullanılması sonuçları geçersizleştirebilir. Bir modelin çalışması da klinik fayda kanıtı değildir. Amaç, temel bir sınıflandırma akışını açık veri sözleşmeleri ve sınırlı yazılım kontrolleriyle incelemektir.',
  'solution': 'CSV veya elektronik tablo girdileri, tanımlı sayısal özellikler ve ikili hedef koşullarıyla işlenir. Eksik satırlar ayrıldıktan sonra katmanlı bir holdout bölünmesi uygulanır ve lojistik regresyon modeli değerlendirilir. Sınıflandırma özeti, ROC grafiği ve katsayı incelemesi araştırma çıktısı olarak üretilir. İnceleme dalına eklenen kontroller, eksik sütunları, geçersiz etiketleri ve hedefin doğrudan girdi seçilmesini reddeder.',
  'architecture':
    [
      'Yetkili tablosal araştırma girdisinin yüklenmesi',
      'Sayısal özellik ve ikili hedef koşullarının kontrolü',
      'Katmanlı holdout ayrımı ve lojistik regresyon eğitimi',
      'Sınıflandırma özeti, ROC grafiği ve katsayı incelemesi',
    ],
  'features':
    [
      'CSV ve modern Excel girdileri',
      'Sayısal özellik ve ikili hedef doğrulaması',
      'Katmanlı eğitim/test ayrımı',
      'ROC/AUC grafiği ve model katsayılarını inceleme',
    ],
  'technicalChallenges':
    [
      'Hatalı etiketleri ve doğrudan hedef sızıntısını yakalamak',
      'Yazılım testlerini modelin klinik geçerliliğinden ayırmak',
    ],
  'decisions':
    [
      'Temel bir lojistik regresyon akışını açık sınırlarla korumak',
      'Hedefin özellikler arasında seçilmesini engellemek',
      'Sentetik test metriklerini sağlık performansı olarak sunmamak',
    ],
  'testing':
    [
      '7 Kasım 2026 inceleme dalında 4 sentetik komut satırı regresyon testi geçti.',
      'Testler başarılı çalıştırma ve hatalı girdilerin reddini kapsadı; hasta temelli performans değerlendirilmedi.',
    ],
  'results':
    [
      'İkili etiket ve sayısal girdi sözleşmeleri açıklaştırıldı.',
      'Başarılı çalıştırma ve üç hatalı girdi senaryosu sentetik testlerle kontrol edildi.',
    ],
  'limitations':
    [
      'Tıbbi cihaz, teşhis aracı veya klinik karar sistemi değildir.',
      'Çapraz doğrulama, dış doğrulama ve klinik kalibrasyon protokolü yoktur.',
      'Aynı kişiye ait ilişkili kayıtlar basit satır ayrımını geçersizleştirebilir.',
    ],
  'projectId': 'sleep-apnea-risk-model',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'order': 7,
  'related': ['tanita-report-extractor', 'eeg-als-research-toolkit'],
  'implementation':
    [
      {
        'title': 'Belge hazırlığından analiz tablosuna',
        'detail': 'Araştırma katkım, Tanita raporlarından çıkarılan antropometrik ölçümleri klinik değişkenler, AHI/OSAS sınıfları ve anket sonuçlarıyla birlikte ele almayı kapsıyordu. Python ve pandas ile temizleme ve eşleştirme çalışmaları yaptım. Bu proje, daha geniş veri hazırlama çalışmasına bağlı tablosal sınıflandırma deneyini anlatır; rapor çıkarım uygulamasıyla aynı yazılım bileşeni değildir.',
      },
      {
        'title': 'Modelden önce veri sözleşmesi',
        'detail': 'Sınıflandırma akışının girişinde hangi sütunların özellik, hangisinin hedef olduğu açıkça belirlenir. Sayısal olmayan girdiler, eksik sütunlar ve ikili sınıfa uymayan etiketler araştırma sonucunun yorumlanmasını zorlaştırır. Hedef sütununun yanlışlıkla özellik listesine alınmasını engellemek doğrudan hedef sızıntısına karşı temel bir kontroldür. Diğer dolaylı sızıntı türleri ve ilişkili katılımcı kayıtları için ayrıca araştırma tasarımı gerekir.',
      },
      {
        'title': 'Lojistik regresyon çıktısını yorumlamak',
        'detail': 'Katmanlı eğitim/test ayrımından sonra lojistik regresyonla sınıflandırma özeti, ROC grafiği ve katsayı incelemesi üretilir. Katsayılar, modelin değişkenleri nasıl kullandığını incelemek için bir başlangıç sağlar; tek başına nedensellik göstermez. Sentetik yazılım testleri akışın çalışmasını ve hatalı girdilerin reddini kontrol eder. Dış doğrulama, kalibrasyon ve klinik kullanım değerlendirmesi bu kapsamın dışındadır.',
      },
    ],
}
---

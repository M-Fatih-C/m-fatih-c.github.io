---
{
  'slug': 'eeg-als-research-toolkit',
  'title': 'EEG / ALS Araştırma Araçları',
  'categories': ['ml', 'data', 'research'],
  'technologies': ['Python', 'NumPy', 'SciPy', 'scikit-learn', 'PyQt5', 'Flask'],
  'status': 'research',
  'featured': false,
  'repositoryVisibility': 'private',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'summary-only',
  'summary': 'EEG, sinyal özellikleri ve klasik makine öğrenmesini masaüstü, çevrimdışı araştırma ve yerel web bileşenleriyle inceleyen özel araç koleksiyonu.',
  'description': 'EEG ve sinyal işleme araştırmalarına yönelik deneysel Python araçlarını bir araya getirir. Masaüstü akışları, çevrimdışı özellik/model deneyleri ve ses yükleyen yerel web prototipi ayrı bileşenlerdir. Bu koleksiyon araştırma kodunun yapısını gösterir; gerçek katılımcı kayıtlarını, model dosyalarını veya klinik doğruluk iddialarını kamuya sunmaz.',
  'role': 'EEG tabanlı evet/hayır niyet sınıflandırması için sinyal işleme, özellik çıkarımı ve makine öğrenmesi prototiplerinin geliştirilmesi ve değerlendirilmesi.',
  'problem': 'Sinyal alımı, özellik çıkarımı ve sınıflandırma denemeleri farklı araçlara yayıldığında her adımın gereksinimleri ve sınırları belirsizleşebilir. Araştırma kodunun çalışabilirliği, tahmin doğruluğu ve klinik geçerlilik birbirinden ayrı konulardır. Dosya yükleyen yerel prototiplerde temel dosya işleme sınırları da korunmalıdır.',
  'solution': 'Masaüstü veri akışı, çevrimdışı araştırma betikleri ve yerel ses işleme prototipi farklı sorumluluklar olarak ele alınır. Genel yaklaşım sinyallerden sayısal özellik üretimi ve klasik sınıflandırıcılarla deney yapmayı kapsar. İnceleme dalında yüklenen dosya adları güvenli bir biçime dönüştürülmüş ve kullanılamayan adlar reddedilmiştir. Sentetik testler bu dosya işleme davranışına odaklanır; bilimsel doğrulama veya gerçek kayıtlarla uçtan uca çalışma iddiası oluşturmaz.',
  'architecture':
    [
      'Masaüstü bileşeninde deneysel sinyal akışının ele alınması',
      'Çevrimdışı betiklerde özellik çıkarımı ve model deneyleri',
      'Ayrı yerel web bileşeninde ses dosyası işleme denemeleri',
      'Her bileşenin veri ve doğrulama sınırlarının ayrı değerlendirilmesi',
    ],
  'features':
    [
      'Deneysel masaüstü sinyal arayüzü',
      'Sinyal özellikleri ve klasik ML araştırma betikleri',
      'Yerel ses yükleme ve işleme prototipi',
      'Dosya adı işleme için sentetik regresyon kontrolleri',
    ],
  'technicalChallenges':
    [
      'Donanım ve veri gereksinimlerini yazılım testlerinden ayırmak',
      'Araştırma tahminlerini klinik sonuç gibi sunmamak',
      'Yüklenen dosyaların yazma hedefini sınırlamak',
    ],
  'decisions':
    [
      'Masaüstü, çevrimdışı ve web bileşenlerini ayrı değerlendirmek',
      'Testlerde gerçek katılımcı kaydı veya model kullanmamak',
      'Dosya adı düzeltmesini tüm web güvenliğinin tamamlanması gibi sunmamak',
    ],
  'testing':
    [
      '7 Kasım 2026 inceleme dalında ses işleme adımı taklit edilerek 2 sentetik yükleme testi geçti.',
      'Sinyal alımı, GUI, gerçek ses/EEG kayıtları, modeller ve uçtan uca tahmin test edilmedi.',
    ],
  'results':
    [
      'Yüklenen dosya adlarının hedef dizin sınırında kalması için düzeltme hazırlandı.',
      'Geçersiz dosya adlarının işleme başlatmadan reddi sentetik testlerle doğrulandı.',
    ],
  'limitations':
    [
      'Klinik geçerlilik veya teşhis iddiası yoktur.',
      'Donanım ve gerçek kayıtlarla uçtan uca doğrulama yapılmamıştır.',
      'Yerel web prototipinde kimlik doğrulama, kota ve eşzamanlı işlem yalıtımı ayrıca tasarlanmalıdır.',
      'Yalnızca güvenilen yerel model dosyaları kullanılmalıdır.',
    ],
  'projectId': 'eeg-als-research-toolkit',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'order': 6,
  'related': ['sleep-apnea-risk-model', 'tanita-report-extractor'],
  'implementation':
    [
      {
        'title': 'Evet/hayır iletişimi için deneysel çalışma',
        'detail': 'ALS ile yaşayan bireylerin alternatif iletişimini hedefleyen araştırma kapsamında EEG tabanlı evet/hayır niyet sınıflandırması üzerinde çalıştım. Katkım sinyal işleme, özellik çıkarımı ve makine öğrenmesi prototiplerinin geliştirilmesi ve değerlendirilmesini kapsıyordu. Araç koleksiyonu bu deneylerin yazılım tarafını temsil eder; kullanıma hazır bir iletişim cihazı veya klinik olarak doğrulanmış bir sistem sunmaz.',
      },
      {
        'title': 'Sinyal akışı ile çevrimdışı deneyi ayırmak',
        'detail': 'Masaüstü bileşeni deneysel sinyal akışını ele alırken çevrimdışı betikler sayısal özellik üretimi ve sınıflandırıcı deneylerine odaklanır. Bu iki çalışma biçiminin ayrılması, bir özellik veya model değişikliğinin veri alımıyla karıştırılmadan incelenmesini sağlar. Canlı sinyalin kalitesi, donanım bağlantısı, katılımcı protokolü ve model değerlendirmesi ayrı doğrulama gerektirir; yalnızca bir betiğin çalışması uçtan uca doğruluk kanıtı değildir.',
      },
      {
        'title': 'Ayrı ses prototipinin dosya sınırı',
        'detail': 'Koleksiyondaki yerel ses yükleme prototipi, EEG sınıflandırma hattından ayrı bir bileşendir. Dosya adını güvenli biçime dönüştürmek ve kullanılamayan adları reddetmek, yüklenen dosyanın hedef dizin dışına yazılmasını sınırlandırır. İki sentetik regresyon testi bu dosya işleme davranışını ele alır. Bu testlerin sayısı EEG tahmin kalitesi, donanım uyumu veya klinik sonuç olarak yorumlanamaz.',
      },
    ],
  'presentation': 'case-study',
}
---

---
{
  'slug': 'early-programming-archive',
  'title': 'Erken Dönem Programlama Arşivi',
  'categories': ['software', 'mobile', 'archive'],
  'technologies': ['Java', 'Kotlin', 'Android', 'Gradle', 'Java Swing', 'Python', 'Selenium'],
  'status': 'archive',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/early-programming-archive',
  'year': null,
  'sourceReferences':
    [
      {
        'label': 'Repository source',
        'url': 'https://github.com/M-Fatih-C/early-programming-archive',
      },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/early-programming-archive/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/early-programming-archive/blob/f39931f4150f806934d2f4e5009bc5035686d89d/README.md',
      },
    ],
  'summary': 'Android, Java ve Python öğrenme projelerini özgün sınırlarıyla saklayan; farklı arayüz, algoritma ve otomasyon alıştırmalarını bir arada belgeleyen tarihsel kaynak arşivi.',
  'description': 'Koleksiyon yedi bağımsız Android/Gradle projesini, Java/NetBeans/Swing çalışmalarını ve Python alıştırmalarını korur. Sayı tahmini, kitap uygulaması ve parola üretimi gibi Android örneklerinin yanında masaüstü, tarayıcı, ağ ve veri scriptleri bulunur. Ortak bir ürün veya güncel tek komutlu build yerine erken öğrenme döneminin kaynakları sunulur.',
  'role': 'Depoda korunan erken programlama ve öğrenme çalışmaları. Her alt projedeki bireysel/ekip katkısı ayrıca belgelenmiyor.',
  'problem': 'Farklı dil ve araçlarla yazılmış eğitim projeleri ortak bir modern ortamda çalışacakmış gibi görünebilir. Oysa Android JDK/Gradle/SDK eşleşmeleri, IDE düzenleri ve Python yan etkileri değişir. Tarihsel kaynakları koruyarak bu sınırları açıklamak gerekir.',
  'solution': 'Android, Java ve Python projeleri ayrı dizinlerde ve özgün proje sınırlarıyla tutulur. Kullanıcı bir alt projenin build dosyalarını ve gereksinimlerini inceleyerek o projeye özel ortam kurar. Dokümantasyon, Gradle wrapper girdilerini ve şablon testleri doğru bağlamda açıklar; ortak başarılı build veya bakımı süren ürün iddiası eklemez.',
  'architecture':
    [
      'Android altında yedi ayrı Gradle/Android Studio projesi.',
      'Java altında bağımsız NetBeans/Swing ve nesne yönelimli çalışmalar.',
      'Python altında ayrı GUI, veri, ağ ve tarayıcı alıştırmaları.',
      'Her alt projeye özgü giriş noktası ve bağımlılık düzeni.',
    ],
  'features':
    [
      'Sayı tahmini, kitap ve parola uygulaması gibi Android alıştırmaları.',
      'Java masaüstü ve nesne yönelimli programlama örnekleri.',
      'Python hesaplama, saat, veri ve Selenium çalışmaları.',
      'Özgün build dosyaları ve proje sınırlarının korunması.',
    ],
  'technicalChallenges':
    [
      'Tarihsel JDK, Android SDK ve Gradle uyumluluğu.',
      'Farklı IDE, GUI ve tarayıcı gereksinimleri.',
      'Şablon test varlığını gerçek davranış kapsamından ayırma.',
    ],
  'decisions':
    [
      'Alt projeler root altında tek uygulamaya dönüştürülmez.',
      'Gradle wrapper JARları gerekli build girdileri olarak korunur.',
      'İlgili Projelerim arşiviyle otomatik birleştirme veya silme yapılmaz.',
    ],
  'testing':
    [
      'Yapı ve kaynaklar incelendi; Python sözdizimi kontrol edildi.',
      'Yedi Android ExampleUnitTest dosyası şablon niteliğinde; uygulama davranışını kanıtlamaz.',
      'Tarihsel Android/Java buildleri ve GUI/tarayıcı/ağ scriptleri çalıştırılmadı.',
    ],
  'results':
    [
      'Birden çok teknolojiyle öğrenme sürecini gösteren korunmuş kaynak koleksiyonu.',
      'Ortak güncel build başarısı, test kapsamı veya dağıtım sonucu iddia edilmez.',
    ],
  'limitations':
    [
      'Kökten çalışan ortak dependency manifesti veya komut yok.',
      'Her alt proje için tarihsel ortam ve dış servis uyumluluğu ayrı incelenmeli.',
      'Lisans dosyası bulunmuyor; eski ağ/tarayıcı kodu kontrollü ortamlarda değerlendirilmelidir.',
    ],
  'projectId': 'early-programming-archive',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 24,
  'related': [],
}
---

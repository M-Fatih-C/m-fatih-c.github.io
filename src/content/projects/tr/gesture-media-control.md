---
{
  'slug': 'gesture-media-control',
  'title': 'Hareketle Medya Kontrolü',
  'categories': ['software', 'vision', 'archive'],
  'technologies': ['Python', 'OpenCV', 'NumPy', 'PyAutoGUI', 'Ultralytics YOLO'],
  'status': 'prototype',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/gesture-media-control',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'Repository source', 'url': 'https://github.com/M-Fatih-C/gesture-media-control' },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/gesture-media-control/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/gesture-media-control/blob/1f9610318e803b1d7735af71ae9b5c5a9601047c/README.md',
      },
    ],
  'summary': 'Webcam hareketini veya haricî YOLO el algılamasını medya klavye kısayollarına dönüştürmeyi araştıran, iki bağımsız script içeren erken bilgisayarlı görü prototipi.',
  'description': 'Koleksiyon, arka plan farkı ve kontur merkezi geçmişi kullanan bir hareket deneyi ile haricî best.pt modelinde el sınıfı arayan bir YOLO deneyini içerir. OpenCV görüntü akışını işler; PyAutoGUI aktif uygulamaya klavye komutları gönderir. Bu tarihsel çalışma, sonraki HANDORA sistemiyle aynı ürün olarak sunulmaz.',
  'role': 'Depoda korunan erken bilgisayarlı görü ve masaüstü girdi deneyleri. Katkı dağılımı veya ürünleştirme rolü ayrıca belgelenmiyor.',
  'problem': 'Basit kamera hareketlerinin masaüstü medya kontrolüne dönüştürülmesi, görüntüdeki gürültü ile kullanıcının niyetini ayırmayı gerektirir. Işık, arka plan ve aktif uygulamanın kısayolları sonucu etkiler; yanlış algılama gerçek klavye girdisi üretebilir.',
  'solution': 'İlk script büyük konturun yatay hareket geçmişinden önceki/sonraki parça ve sabit beklemeden oynat/duraklat komutları türetir. İkinci script güvenilir bir haricî YOLO modelinde hand sınıfını arar ve gecikme aralığıyla medya komutu gönderir. İki yaklaşım bağımsız tutulur; doğrulanmış algılama başarısı veya ortak ürün mimarisi iddia edilmez.',
  'architecture':
    [
      'OpenCV ile yerel webcam kareleri.',
      'Arka plan farkı/kontur geçmişi veya haricî YOLO modeli.',
      'Eşik ve zaman aralığına bağlı komut tetikleme.',
      'PyAutoGUI ile aktif uygulamaya gerçek klavye girdisi.',
    ],
  'features':
    [
      'Yatay hareketten Ctrl+Left/Right türetme deneyi.',
      'Sabit kontur konumundan Space tetikleme.',
      'Haricî YOLO hand sınıfıyla medya komutu deneyi.',
      'Görüntü penceresi, çıkış ve hareket deneyinde arka plan sıfırlama.',
    ],
  'technicalChallenges':
    [
      'Işık ve arka plan hareketine duyarlı eşikler.',
      'Haricî modelin sınıf adları ve uyumlu ağırlık gereksinimi.',
      'Kamera/erişilebilirlik izinleri ve aktif uygulama kısayolları.',
    ],
  'decisions':
    [
      'İki script ayrı deneyler ve HANDORA’dan ayrı tarihsel çalışma olarak tanımlanır.',
      'Model ağırlıkları depoya eklenmez; güvenilir model girdisi gerekir.',
      'Import sırasında kamera ve klavye yan etkileri nedeniyle import smoke testi kullanılmaz.',
    ],
  'testing':
    [
      'Kaynak sözdizimi incelendi; kamera açılmadı ve klavye komutu gönderilmedi.',
      'Haricî best.pt modeli sağlanmadı veya çalıştırılmadı.',
      'Otomatik işlev paketi ya da platformlar arası benchmark bulunmuyor.',
    ],
  'results':
    [
      'Hareket tabanlı ve model tabanlı kontrol fikirlerini gösteren iki korunmuş prototip.',
      'Algılama doğruluğu, gecikme veya gerçek medya uygulaması uyumluluğu ölçülmedi.',
    ],
  'limitations':
    [
      'Model dosyası haricîdir ve rastgele bir ağırlık dosyasıyla değiştirilemez.',
      'Scriptler modül seviyesinde kamera/girdi döngüsü başlatır.',
      'Gerçek kamera görüntüleri veya kişisel kayıtlar portföye alınmaz; lisans dosyası yok.',
    ],
  'projectId': 'gesture-media-control',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 22,
  'related': ['handora'],
  'presentation': 'brief',
}
---

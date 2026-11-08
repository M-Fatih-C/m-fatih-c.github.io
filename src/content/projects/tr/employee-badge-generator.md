---
{
  'slug': 'employee-badge-generator',
  'title': 'Yaka Kart Otomasyonu',
  'categories': ['software', 'enterprise'],
  'technologies': ['Python', 'Tkinter', 'PyMuPDF', 'python-docx', 'Pillow', 'PyInstaller'],
  'status': 'prototype',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'Repository source', 'url': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu' },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu/blob/558a525c5afb7c81041cf7859f452189843dcda9/README.md',
      },
      {
        'label': 'Windows packaging instructions',
        'url': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu/blob/558a525c5afb7c81041cf7859f452189843dcda9/docs/BUILD.md',
      },
    ],
  'summary': 'Ön ve arka PDF yaka kartlarını önizleme, sıralama ve baskı ayarlarıyla A4 Word belgelerine yerleştiren masaüstü belge hazırlama aracı.',
  'description': 'Tkinter arayüzlü araç, PDF yaka kartlarını görsellere dönüştürüp çift taraflı baskıya hazırlanan DOCX sayfalarına yerleştirir. Kart ölçüsü, DPI, kenar boşluğu, sayfa başına adet ve dosya sırası ayarlanabilir. Profil ve istatistik JSON dosyaları çalışma dizininde tutulur; ZIP/RAR içinden PDF alma desteği de kaynakta bulunur.',
  'role': 'Depoda korunan masaüstü uygulama ve belge işleme çalışması. Müşteri kapsamı veya ekip içi görev dağılımı kamuya açık kaynakta belgelenmiyor.',
  'problem': 'Çok sayıda ön/arka kart PDF’sini baskı için elle sayfalara yerleştirmek tekrar gerektirir. Kart ölçüleri, boşluklar, çıktı sırası ve yazıcıdaki ön/arka hizası birlikte değerlendirilmelidir. Süreç ayrıca çalışan adı veya fotoğrafı içerebilen belgelerin kontrollü işlenmesini gerektirir.',
  'solution': 'PDF sayfaları PyMuPDF ile görselleştirilir, Tkinter arayüzünde önizlenir ve python-docx ile A4 ızgaralara yerleştirilir. Kullanıcı kart sırasını ve baskı parametrelerini yönetir; profiller tekrar kullanılabilir. Kaynak paket kurulumu ve Windows paketleme yolu açık PR’de düzeltilmiştir. Excel’den çalışan verisi birleştirme özelliği iddia edilmez.',
  'architecture':
    [
      'Tkinter üzerinden PDF veya arşiv seçimi ve kart sıralaması.',
      'PyMuPDF/Pillow ile sayfa işleme ve önizleme.',
      'Ölçü, DPI ve ön/arka kenar boşluklarıyla DOCX ızgara üretimi.',
      'Yerel JSON yapılandırma, profil ve üretim istatistikleri.',
    ],
  'features':
    [
      'PDF ön/arka yüzleri için önizleme ve dosya sıralama.',
      'A4 DOCX çıktısı ve özelleştirilebilir kart yerleşimi.',
      'Profil kaydetme, yükleme ve yerel istatistikler.',
      'ZIP/RAR girdilerinden PDF çıkarma seçenekleri.',
    ],
  'technicalChallenges':
    [
      'Word sürümü ve yazıcı sürücüsüne göre değişen fiziksel hizalama.',
      'Src-layout paketinin doğru kurulması ve Windows launcher paketlemesi.',
      'Arşiv desteğinin haricî araçlara ve güvenilir belgelere bağımlılığı.',
    ],
  'decisions':
    [
      'Mevcut büyük GUI modülü baskı davranışını korumak için yeniden yapılandırılmadı.',
      'Kurulumda yalnız requirements yerine paket kurulumu kullanılır.',
      'Gerçek çalışan belgeleri geliştirme örneği veya portföy görseli olarak kullanılmaz.',
    ],
  'testing':
    [
      'Açık PR için editable kurulum, wheel/sdist üretimi, import ve sözdizimi kontrolleri başarılı raporlandı.',
      'CI paketleme ve kaynak kontrolleri içerir; GUI veya baskı doğrulaması değildir.',
      'Windows executable ve fiziksel çift taraflı hizalama denenmedi.',
    ],
  'results':
    [
      'PDF’den düzenlenebilir Word baskı belgesine uzanan kaynakta uygulanmış iş akışı.',
      'Paket kurulumu ve yapılandırma sınırları belgelenmiştir; ölçülmüş zaman tasarrufu iddiası yok.',
    ],
  'limitations':
    [
      'Yazıcı ve Word ortamında sentetik test baskısıyla kabul kontrolü gerekir.',
      'Excel tabanlı çalışan verisi birleştirme uygulanmış bir özellik değil.',
      'Çalışan adı, fotoğrafı ve üretilen belgeler kişisel veri içerebilir.',
    ],
  'projectId': 'employee-badge-generator',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 13,
  'related': [],
  'presentation': 'brief',
}
---

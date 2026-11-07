---
{
  'slug': 'finansim',
  'title': 'Finansım',
  'categories': ['software', 'data'],
  'technologies': ['Python', 'FastAPI', 'Jinja2', 'HTMX', 'SQLAlchemy', 'SQLite'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'private',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'summary-only',
  'summary': 'Çift taraflı muhasebe, incelenebilir belge aktarımı ve şifreli yedeklerle kişisel finansı yerel ortamda yöneten özel uygulama.',
  'description': 'Finansım, hesapları, kartları, ödeme planlarını ve belge aktarımlarını tek bir yerel uygulamada birleştirir. Çift taraflı muhasebe defteri kayıt tutarlılığını önceliklendirirken aktarım önizlemesi kullanıcıya kontrol sağlar. Kişisel finans verileri veya banka belgeleri paylaşılmadan, uygulama geliştirme ve veri bütünlüğü yaklaşımı bu özetle anlatılmaktadır.',
  'role': 'Yerel uygulama geliştirme; muhasebe kuralları, belge aktarım akışı ve test edilebilir veri yönetimi üzerine çalışma.',
  'problem': 'Hesap hareketlerini ve ödeme planlarını ayrı araçlarda izlemek, çift kayıt ve yanlış sınıflandırma riskini artırır. Belgelerden çıkarılan bilgilerin inceleme olmadan muhasebe kaydına dönüşmesi de hataları kalıcılaştırabilir. Amaç, kullanıcı denetimini koruyan ve kayıtların tutarlılığını açık kurallarla yöneten yerel bir çalışma alanı oluşturmaktır.',
  'solution': 'Web tabanlı yerel arayüz; hesap takibi, planlama ve belge aktarımını ortak bir veri katmanında birleştirir. Para değerleri tamsayı alt birimlerle tutulur; dengeli muhasebe kayıtları, ters kayıt ve dönem kilitleri veri bütünlüğünü destekler. PDF, CSV ve elektronik tablo aktarımları gözden geçirilebilir öneriler üretir. Yedekleme akışı ayrı bir geri yükleme hedefi ve bütünlük kontrolleri kullanır; yapılandırılmış yedekler şifrelenebilir.',
  'architecture':
    [
      'Yerel tarayıcı arayüzü üzerinden hesap ve planlama işlemleri',
      'Uygulama katmanında muhasebe kuralları ve incelenebilir belge aktarımı',
      'İşlem ve denetim kayıtlarını birlikte yöneten SQLite veri katmanı',
      'Ayrı hedefe geri yükleme ve bütünlük kontrolleri içeren yedekleme akışı',
    ],
  'features':
    [
      'Hesap ve kart takibi ile ödeme planlama',
      'Değişmez kayıt yaklaşımı kullanan çift taraflı muhasebe',
      'PDF, CSV ve elektronik tablo aktarımını önizleme',
      'Şifrelenebilir yedekler ve kontrollü geri yükleme',
    ],
  'technicalChallenges':
    [
      'Muhasebe dengesi ve yinelenen kayıtların birlikte yönetilmesi',
      'Belge aktarımı sırasında kullanıcı kontrolünü korumak',
      'Yedek bütünlüğünü canlı veriye dokunmadan doğrulamak',
    ],
  'decisions':
    [
      'Para tutarlarını kayan nokta yerine tamsayı alt birimlerle tutmak',
      'Belge çıkarımlarını doğrudan kesin kayıt yerine inceleme akışına almak',
      'Yerel kullanım sınırını açık tutmak ve yedek şifrelemesini canlı veri şifrelemesinden ayırmak',
    ],
  'testing':
    [
      '7 Kasım 2026 denetiminde inceleme dalında 159 test geçmiştir; geçici, sentetik veri kullanılmıştır.',
      'Gerçek banka belgesi, kullanıcı veritabanı ve operasyonel geri yükleme kabulü bu doğrulamaya dahil değildir.',
    ],
  'results':
    [
      'Muhasebe ve uygulama davranışı için mevcut 159 testlik doğrulama tamamlandı.',
      'Belge aktarımı, muhasebe ve yedekleme sınırları teknik incelemede açık biçimde ayrıştırıldı.',
    ],
  'limitations':
    [
      'Otomatik banka bağlantısı veya bağımsız finansal doğrulama hizmeti değildir.',
      'Canlı veritabanı ve içe aktarılan belgeler uygulama tarafından diskte şifrelenmez.',
      'Gerçek veriyle kurulum ve operasyonel geri yükleme ayrıca değerlendirilmelidir.',
    ],
  'projectId': 'finansim',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'order': 1,
  'related': ['tenderai', 'employee-badge-generator'],
  'implementation':
    [
      {
        'title': 'Bir belge satırından onaylanmış kayda',
        'detail': 'Belge aktarımını, dosyadan okunan her satırı doğrudan kesin muhasebe kaydına dönüştürmek yerine inceleme adımıyla ele aldım. Kullanıcı; çıkarılan hareketi, hesabı ve sınıflandırmayı kontrol ettikten sonra kayıt sürecine ilerler. Böylece PDF ayrıştırma hatası ile muhasebe işlemi arasında bir denetim noktası bulunur. Bu ayrım özellikle farklı belge düzenleri, tekrarlanan aktarımlar ve yanlış eşleşmeler üzerinde çalışırken önem kazanır.',
      },
      {
        'title': 'Tutarların ve geçmişin tutarlı kalması',
        'detail': 'Para değerlerini tamsayı alt birimlerle tutmak, kayan nokta işlemlerinden kaynaklanabilecek yuvarlama farklarını sınırlar. Çift taraflı kayıt yaklaşımında işlem satırlarının dengesi temel kuraldır. Düzeltmeleri geçmişi sessizce değiştirmek yerine ters kayıt mantığıyla ele almak, hangi işlemin hangi kaydı düzelttiğinin izlenmesini sağlar. Dönem kilitleri ve denetim kayıtları da bu veri bütünlüğü yaklaşımının parçalarıdır.',
      },
      {
        'title': 'Yerel kullanım ve yedeklerin ayrı güvenlik sınırları',
        'detail': 'Uygulamanın yerel çalışması, dosyaların otomatik olarak şifrelendiği anlamına gelmez. Şifreli yedekleme katmanını canlı SQLite veritabanından ayrı değerlendirdim: yedeğin korunması, geri yükleme hedefi ve bütünlük kontrolü farklı sorumluluklardır. Geri yüklemeyi ayrı hedefte doğrulamak mevcut kayıtları korur. Canlı veritabanı ve içe aktarılan belgeler için cihazın erişim ve disk güvenliği ayrıca önem taşır.',
      },
    ],
}
---

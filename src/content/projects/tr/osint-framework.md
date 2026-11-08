---
{
  'slug': 'osint-framework',
  'title': 'OSINT Framework',
  'categories': ['software', 'data', 'research'],
  'technologies': ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'Redis', 'WebSocket', 'Typer'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/osint_framework',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/osint_framework' },
      {
        'label': 'Source',
        'url': 'https://github.com/M-Fatih-C/osint_framework/tree/main/osint_framework',
      },
      {
        'label': 'Regression & documentation work',
        'url': 'https://github.com/M-Fatih-C/osint_framework/pull/12',
      },
    ],
  'summary': 'Yetkili açık kaynak araştırmalarını eklenti tabanlı taramalar, kalıcı işler, API, canlı ilerleme ve isteğe bağlı worker süreçleriyle düzenleyen prototip.',
  'description': 'OSINT Framework; domain, IP, e-posta, kullanıcı adı ve benzeri hedef türlerini ortak iş akışında ele alan modüler bir araştırma prototipi. FastAPI arayüzü, Typer CLI ve web dashboard aynı tarama ve sonuç katmanına bağlanıyor. SQLite işleri ve sonuçları saklıyor; ayrı Redis worker yolu uzun işlemleri API sürecinden ayırıyor. Deneysel görüntü modülleri doğrulanmış kimlik tespiti olarak sunulmuyor.',
  'role': 'Araştırma iş akışları, eklenti mimarisi ve API/worker bileşenlerinin yazılım geliştirmesi.',
  'problem': 'Açık kaynak araştırmalarında araçların her biri farklı hedef türleri, sağlayıcılar ve çıktı biçimleri kullanabiliyor. Uzun taramaları HTTP isteğinin yaşam süresine bağlamak, ilerlemeyi izlemeyi ve sonuçları yeniden incelemeyi zorlaştırıyor. Ortak bir iş modeli, sağlayıcı hatalarının yönetimi ve kalıcı sonuçlar gerekli; araştırma kapsamı da hedef yetkisi, kişisel veri ve harici hizmet sınırları içinde kalmalı.',
  'solution': 'Eklenti registry’si hedef türüne uygun modülleri seçiyor; iş yöneticisi taramaları oluşturup asenkron pipeline üzerinden çalıştırıyor. Varsayılan kalıcılık async SQLAlchemy ve SQLite ile sağlanıyor. İsteğe bağlı Redis modunda API kuyruk üreticisi, ayrı worker süreçleri tüketici oluyor; pub/sub olayları WebSocket ilerlemesine taşınıyor. Vaka notları ve korelasyon bileşenleri araştırma bağlamını bir arada tutuyor. Typer istemcisi ve dashboard bu ortak akışa iki giriş sağlıyor.',
  'architecture':
    [
      'Dashboard / Typer CLI → FastAPI',
      'Eklenti registry’si ve tarama iş yöneticisi',
      'In-process pipeline veya Redis kuyruğu → worker',
      'Async SQLAlchemy → SQLite iş/sonuç kayıtları',
      'Redis pub/sub → WebSocket ilerleme ve raporlar',
    ],
  'features':
    [
      'Domain, IP, e-posta ve kullanıcı adı eklentileri',
      'Kalıcı tarama işleri ve vaka notları',
      'Redis ile ayrı worker süreçleri',
      'WebSocket canlı ilerleme',
      'İsteğe bağlı sağlayıcılar ve Ollama özetleri',
    ],
  'technicalChallenges':
    [
      'Worker ilerlemesini API sürecindeki WebSocket istemcilerine taşımak.',
      'SQLite yaşam döngülerini ve bağımsız testlerin veritabanı izolasyonunu yönetmek.',
      'Harici sağlayıcı hataları ve fallback sonuçlarını kesin bulgularla karıştırmamak.',
    ],
  'decisions':
    [
      'SQLite varsayılan kalıcılık; Redis ayrı çalışma modu olarak seçildi.',
      'Hedefe özel mantık ortak engine yerine eklentilerde toplandı.',
      'Testlerde canlı sağlayıcılar yerine ağ erişimi kapalı sözleşmeler kullanıldı.',
    ],
  'testing':
    [
      'Açık #12 PR’sinde, dış ağ erişimi kapalı geçmiş koşuda 39 regresyon testi geçti.',
      'PR’de her test için geçici SQLite veritabanı kullanılıyor; bu sonuç canlı sağlayıcıları veya üretim yükünde dağıtık toparlanmayı doğrulamıyor.',
    ],
  'results':
    [
      'API, CLI ve dashboard ortak tarama/iş/sonuç modelini kullanıyor.',
      'Ayrı worker yürütmesi ve canlı ilerleme köprüsü kaynak kodda uygulanmış.',
    ],
  'limitations':
    [
      'Sabitlenmiş bağımlılıklardaki bilinen güvenlik advisory’leri çözülmedi; #12 bağımlılık güncellemesi içermiyor.',
      'Kimlik doğrulama isteğe bağlı; ağda yayınlamadan önce erişim kontrolü ayrıca yapılandırılmalı.',
      'Yüz benzerliği çıktıları kimlik doğrulaması değil; kişisel veri için izin ve insan incelemesi gerekiyor.',
      'Yeni test izolasyonu ve CI düzenlemeleri açık #12 PR’sinde, ana dala birleşmedi.',
    ],
  'projectId': 'osint-framework',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 4,
  'related': [],
  'implementation':
    [
      {
        'title': 'Bir taramanın tamamlanma sırasına göre ilerlemesi',
        'detail': 'CoreEngine önce kalıcı bir job oluşturuyor, hedef türüne uygun eklentileri registry’den seçiyor ve toplam modül sayısını kaydediyor. Modüller kendi timeout sınırlarıyla worker pool’a gönderiliyor. Sonuçlar asyncio.as_completed üzerinden geldikçe SQLite’a yazılıyor ve ilerleme olayı üretiliyor; tek bir yavaş modülü beklemek için bütün sonuçların tutulması gerekmiyor. Bir modül hatası, modül adına bağlı error payload olarak saklanabiliyor. Bu kısmi görünürlük, araştırma akışını izlenebilir kılıyor; başarısız sağlayıcı çıktısını doğrulanmış bulgudan ayırma sorumluluğu sürüyor.',
      },
      {
        'title': 'API sürecinden ayrı worker yaşam döngüsü',
        'detail': 'Redis modunda API, job kimliğini kuyruğa koyup queued durumuyla dönebiliyor; worker, hedef bilgisini kalıcı kayıttan tekrar yüklüyor. Worker service işi reserve ediyor, veritabanında lease sahipleniyor ve heartbeat ile sahipliğin süresini yeniliyor. Tamamlanmada lease temizlenip kuyruk öğesi acknowledge ediliyor. Startup toparlanma yolları inflight işleri ve süresi geçmiş running kayıtlarını ele alıyor. Kuyruk, durum ve canlı olayların ayrı sistemler olması operasyonel esneklik getirirken hata sınırlarını artırıyor; kaynak kodundaki toparlanma yolu üretim yükü dayanıklılığı kanıtı değil.',
      },
      {
        'title': 'Ham bulgudan korelasyon ve canlı görünüme',
        'detail': 'Her modül çıktısı tamamlandıktan sonra job’un sonuçları Correlator’a aktarılıyor; isteğe bağlı özet bileşeni bu birleştirilmiş bağlam üzerinde çalışıyor. API içi olaylar ve Redis pub/sub köprüsü, dashboard’un WebSocket ilerlemesini ortak job kimliğine bağlıyor. Veri modeli ile arayüzün ayrılması CLI ve dashboard’un aynı sonuçları kullanmasını sağlıyor. Bunun karşılığında vaka notları, sağlayıcı yanıtları ve raporlar için erişim/retention kuralları gerekiyor; mevcut bağımlılık advisory’leri ile isteğe bağlı auth sınırı bu mimari anlatımla çözülmüş sayılmıyor.',
      },
    ],
  'presentation': 'case-study',
}
---

---
{
  'slug': 'jarvis-assistant',
  'title': 'J.A.R.V.I.S',
  'categories': ['ai', 'software'],
  'technologies':
    ['Python', 'FastAPI', 'Ollama', 'MLX', 'Redis', 'ChromaDB', 'SQLite', 'React', 'Three.js'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/J.A.R.V.I.S',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/J.A.R.V.I.S' },
      {
        'label': 'Model routing',
        'url': 'https://github.com/M-Fatih-C/J.A.R.V.I.S/blob/main/jarvis/core/router.py',
      },
      { 'label': 'Components', 'url': 'https://github.com/M-Fatih-C/J.A.R.V.I.S/tree/main/jarvis' },
      {
        'label': 'Configuration & validation work',
        'url': 'https://github.com/M-Fatih-C/J.A.R.V.I.S/pull/14',
      },
    ],
  'summary': 'Ollama ve isteğe bağlı MLX modellerini, kural tabanlı yönlendirme, bellek, araç deneyleri, ses ve React/Three.js arayüzüyle birleştiren alpha asistan.',
  'description': 'J.A.R.V.I.S, farklı model ve arayüz bileşenlerini tek asistan prototipinde bir araya getiriyor. Python paketi model yönlendirme ve orkestrasyon; Redis, ChromaDB ve SQLite tabanlı bellek; araç ve ses modülleri içeriyor. FastAPI backend’e React/Three.js görsel istemci eşlik ediyor. MLX yolu desteklenen Apple donanımına bağlı. Bu depo, deterministik politika çekirdeği olan jarvis-core’dan ayrı bir çalışma.',
  'role': 'Asistan orkestrasyonu, model adaptörleri, bellek ve görsel arayüz bileşenlerinin geliştirilmesi.',
  'problem': 'Bir asistanın kısa sohbet, daha derin değerlendirme, araç kullanımı ve kullanıcı bağlamı gibi farklı ihtiyaçları aynı akışta ele alması gerekiyor. Bunların hepsini tek modele veya tek modüle bağlamak, donanım bağımlılıklarını ve servis hatalarını birbirine karıştırabiliyor. Bellek, ses ve güçlü araçlar eklendiğinde veri akışını ve çalışma sınırlarını açık tutmak da önemli hale geliyor.',
  'solution': 'Kural tabanlı router mesajın uzunluğu, anahtar kelimeleri ve karmaşıklığı üzerinden fast/deep akışı seçiyor. Ollama ve isteğe bağlı MLX adaptörleri model erişimini soyutluyor; orkestrasyon bellek ve araç modülleriyle çalışıyor. Redis, ChromaDB ve SQLite farklı bellek ihtiyaçlarına ayrılmış. FastAPI arayüzü React/Three.js istemcisine servis sağlıyor; ses ve ayrı cihaz istemcileri deneysel katmanlar olarak duruyor. Kurulum, model servisleri ve platforma özel ekstralar için ayrı gereksinimlere sahip.',
  'architecture':
    [
      'React / Three.js istemci → FastAPI',
      'Kural tabanlı router → fast / deep akışı',
      'Ollama / isteğe bağlı MLX adaptörleri',
      'Orkestrasyon → bellek / araç / ses modülleri',
      'Redis / ChromaDB / SQLite → bağlam ve yanıt',
    ],
  'features':
    [
      'Kural tabanlı fast/deep model yönlendirme',
      'Ollama ve opsiyonel Apple MLX adaptörleri',
      'Çok bileşenli bellek katmanı',
      'Web / kod / shell araç deneyleri',
      'Ses ve wake-word modülleri',
      'React / Three.js görsel istemci',
    ],
  'technicalChallenges':
    [
      'Platforma özel MLX ve ses bağımlılıklarını temel testlerden ayırmak.',
      'Sağlık kontrollerini gerçek sağlayıcı bağlantısı olmadan doğru test etmek.',
      'Profil şifrelemesi, kimlik doğrulama ve log/cache sınırlarını açık tutmak.',
    ],
  'decisions':
    [
      'Model sağlayıcıları adaptörlerle ayrıldı; router mevcutta deterministik kurallar kullanıyor.',
      'Arayüz ve Python backend ayrı build yollarına sahip.',
      'Açık #14 PR’si loopback varsayılanı ve prod secret doğrulaması öneriyor.',
    ],
  'testing':
    [
      'Açık #14 PR’si geçmiş doğrulamasında MLX extra ile dış ağ kapalı 158 test geçti, 7 platform/gated test atlandı.',
      'Ruff/Black ve 45 kaynak dosyada mypy geçti; UI build tamamlandı, büyük chunk uyarısı verdi. Gerçek model ve ses kabulü yapılmadı.',
    ],
  'results':
    [
      'Model, bellek, araç, API ve UI bileşenleri ayrı modüllerde bir araya getirildi.',
      'Fast/deep yönlendirme gerekçesi okunabilir deterministik karar olarak üretiliyor.',
    ],
  'limitations':
    [
      'Alpha prototip; tüm cihaz ve servisler için uçtan uca doğrulama yok.',
      'Profilde seçili değerlerin şifrelenmesi tüm SQLite dosyasının veya logların şifreli olduğu anlamına gelmiyor.',
      'Shell ve dosya araçları güçlü erişim içeriyor; uzaktaki servisler veri aktarabilir.',
      'Loopback/prod yapılandırma sertleştirmesi açık #14 PR’sinde; ana dalda uygulanmış kabul edilmemeli.',
    ],
  'projectId': 'jarvis-assistant',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 11,
  'related': ['jarvis-core', 'minigpt-m4'],
  'implementation':
    [
      {
        'title': 'Yönlendirme kararını açıklanabilir tutma',
        'detail': 'Router, mesajdaki Türkçe/İngilizce derin görev anahtar kelimelerini, karakter uzunluğunu ve cümle sayısını değerlendirerek fast veya deep hattını seçiyor. Karar nesnesi lane yanında insan tarafından okunabilir reason taşıyor; Orchestrator bu sonucu seçilen model istemcisine bağlıyor. Böylece hangi mesajın neden daha ağır hatta gittiği koddan izlenebiliyor. Bu yaklaşım ek bir sınıflandırıcı modeli çalıştırmadan basit bir seçim sağlıyor, ancak semantik görev doğruluğu veya ölçülmüş maliyet/gecikme kazancı kanıtı oluşturmuyor.',
      },
      {
        'title': 'Bellek arızasını yanıt akışından ayırma',
        'detail': 'Orchestrator her istek için sistem mesajını, oturum geçmişini ve yeni kullanıcı mesajını bir araya getiriyor. Kısa süreli bellek yoksa veya okuma hata verirse boş geçmişle stateless devam edebiliyor; yanıt sonrası kullanıcı/asistan turunu yeniden yazmayı deniyor. Yazma hatası loglanıyor fakat üretilmiş yanıtı iptal etmiyor. Bu, bellek servisinin erişilemezliğini açık bir davranışa dönüştürüyor. Karşılığı ise devam eden sohbette bağlamın kaybolabilmesi; stateless fallback, bütün bellek katmanlarının aynı süreklilik garantisini verdiği anlamına gelmiyor.',
      },
      {
        'title': 'Profil şifrelemesinin gerçek kapsamı',
        'detail': 'SQLite profil bileşeni key/value kayıtlarını tutuyor; encrypt seçeneği açık değerler AES-GCM ile şifrelenip okunurken çözülüyor. Şema ve anahtar adları açık kalıyor, şifrelenmemiş kayıt seçeneği de mevcut. Dolayısıyla profil şifrelemesini tüm veritabanı, log, Chroma index veya ses dosyaları için toplu gizlilik iddiasına dönüştürmek yanlış olur. Bu ayrım geliştirmede hangi verinin hangi depoda kaldığını tartışmayı mümkün kılıyor. Anahtar değişimi ayrıca erişilebilirlik ve migration konusu; mevcut içeriğin kendiliğinden yeniden şifrelendiği varsayılmıyor.',
      },
    ],
}
---

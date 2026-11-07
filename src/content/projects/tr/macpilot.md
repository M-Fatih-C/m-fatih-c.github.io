---
{
  'slug': 'macpilot',
  'title': 'MacPilot',
  'categories': ['software', 'mobile'],
  'technologies':
    ['Swift', 'SwiftUI', 'Network.framework', 'Bonjour', 'CryptoKit', 'Keychain', 'XCTest'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/MacPilot',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/MacPilot' },
      {
        'label': 'Architecture',
        'url': 'https://github.com/M-Fatih-C/MacPilot/blob/main/ARCHITECTURE_PUBLIC.md',
      },
      {
        'label': 'Agent',
        'url': 'https://github.com/M-Fatih-C/MacPilot/tree/main/Sources/MacPilotAgent',
      },
      {
        'label': 'Validation & documentation work',
        'url': 'https://github.com/M-Fatih-C/MacPilot/pull/1',
      },
    ],
  'summary': 'iPhone’u Mac için trackpad, klavye ve sistem kontrol arayüzüne dönüştüren; ortak Swift protokolü ve WSS bağlantısı kullanan yerel ağ prototipi.',
  'description': 'MacPilot, SwiftUI iOS istemcisi, macOS agent ve SharedCore protokol kütüphanesinden oluşuyor. Bonjour cihaz keşfi sağlıyor; WSS üzerinden giriş olayları, sistem metrikleri, kısayollar ve parçalı dosya aktarımı taşınıyor. Native sistem API’leriyle çalışan agent için macOS izinleri gerekiyor. Proje kontrollü yerel ağ prototipi; ilk eşleştirmedeki güven yetkilendirmesi üretim kullanımı öncesinde çözülmesi gereken açık bir sınır.',
  'role': 'Native iOS/macOS istemci-agent mimarisi ve ortak iletişim bileşenlerinin geliştirilmesi.',
  'problem': 'Bir Mac’i iPhone’dan kontrol etmek yalnızca ağ üzerinden koordinat göndermekten ibaret değil. Dokunma jestlerini giriş olaylarına çevirmek, cihazı keşfetmek, bağlantı durumunu korumak ve dosya parçalarını doğrulamak gerekiyor. Aynı kanal makinede güçlü eylemler çalıştırdığı için cihaz kimliği, kullanıcı onayı ve macOS Accessibility izinleri de temel tasarım meseleleri haline geliyor.',
  'solution': 'SwiftUI istemcisi jestleri ortak InputEvent modellerine çeviriyor; Bonjour ile bulunan macOS agent’a Network.framework tabanlı WSS üzerinden bağlanıyor. Agent router mesajları giriş, metrik, komut ve dosya yöneticilerine dağıtıyor. CGEvent tabanlı input bileşenleri macOS eylemlerini uyguluyor; dosya aktarımı chunk ve checksum modelleri kullanıyor. P256 challenge imzaları ve pinning bileşenleri var; ancak bilinmeyen ilk peer otomatik güven başlangıcı yapıyor. Bu nedenle açık kullanıcı onaylı pairing tamamlanmış sayılmıyor.',
  'architecture':
    [
      'SwiftUI ekranları / jestler → ortak InputEvent modelleri',
      'Bonjour keşfi → WSS bağlantı ve challenge akışı',
      'macOS router → input / metrik / komut handler’ları',
      'Dosya yöneticisi → chunk / checksum aktarımı',
      'Yanıtlar → bağlantı durumu ve SwiftUI ekranları',
    ],
  'features':
    [
      'Trackpad ve klavye jestleri',
      'Bonjour cihaz keşfi',
      'CPU / bellek / disk / ağ metrik ekranı',
      'Komut allowlist’i ve kısayollar',
      'Parçalı dosya aktarımı',
      'Ortak Swift mesaj ve payload modelleri',
    ],
  'technicalChallenges':
    [
      'Dokunma hareketlerini filtreleme ve smoothing ile akıcı girişe çevirmek.',
      'Native izinler, bağlantı durumları ve cihaz kimliğini birlikte yönetmek.',
      'Şifreli taşıma ile ilk cihazın yetkilendirilmesini ayrı değerlendirmek.',
    ],
  'decisions':
    [
      'İstemci ve agent ortak SharedCore modellerini paylaşıyor.',
      'Aktif taşıma WSS/TLS; ayrı AES-GCM envelope kodu zorunlu runtime yolu değil.',
      'runScript kapalı; yıkıcı güç komutları ayrıca ortam opt-in’i gerektiriyor.',
    ],
  'testing':
    [
      'Geçmiş yerel doğrulamada NetworkingTests, FileTransferTests ve InputLatencyTests içinde 38 seçili test geçti.',
      'Açık #1 PR’sindeki CI yalnızca networking ve file-transfer sınıflarını çalıştırıyor; fiziksel iPhone–Mac akışı ve Keychain kullanan tüm testler yeniden doğrulanmadı.',
    ],
  'results':
    [
      'iOS istemcisi ve macOS agent aynı protokol tipleri üzerinden haberleşecek biçimde yapılandırılmış.',
      'Giriş, metrik ve dosya kanalları ayrı agent bileşenleriyle uygulanmış.',
    ],
  'limitations':
    [
      'İlk bilinmeyen cihazın otomatik güven başlangıcı çözülmemiş bir yetkilendirme sınırı.',
      'Aktif mesajlar WSS içinde plaintext envelope kullanıyor; ek uygulama katmanı şifrelemesi zorunlu değil.',
      'Helper’ın kurulum parçaları tamamlanmamış; fiziksel cihaz kabul testi yapılmadı.',
      'Yeni CI ve dokümantasyon çalışması açık #1 PR’sinde; pairing davranışı değiştirilmedi.',
    ],
  'projectId': 'macpilot',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 3,
  'related': [],
  'implementation':
    [
      {
        'title': 'Jestten native giriş olayına',
        'detail': 'TrackpadViewModel, ham dokunma hareketini doğrudan imleç koordinatı saymıyor: normalize etme, hız temelli gain ve low-pass smoothing adımları pointer/scroll deltasını hazırlıyor. Kaydırma tamamlandığında azalan momentum ayrı olaylar üretmeye devam edebiliyor. Agent tarafında InputEventProcessor token-bucket limiti uygular ve kabul edilen olayları userInteractive kuyruğunda MouseController/KeyboardController’a dağıtır. Bu ayrım hareket hissi ile native çalıştırmayı ayrı ayarlanabilir katmanlar yapıyor; donanım üzerinde ölçülmemiş bir gecikme veya kusursuz akıcılık iddiası oluşturmuyor.',
      },
      {
        'title': 'Dosya aktarımının açık protokol modeli',
        'detail': 'Dosya aktarım modelleri transfer kimliği, chunk sırası, toplam parça sayısı, byte offset ve checksum bilgisini taşıyor. ChunkedTransfer yardımcıları 256 KB parçaları, SHA-256 bütünlük kontrolünü, aralık hesabını ve ilerleme oranını ortak tiplerle ele alıyor. Böylece UI ilerlemesi ile agent’ın veri doğrulaması aynı aktarım kavramlarına dayanabiliyor. Parçalı model ağ mesajlarını sınırlıyor; splitFile yardımcı yolu parçaları bir diziye topladığından her akışın sabit bellekli streaming olduğunu iddia etmek doğru değil. Fiziksel cihaz kabulü ayrı bir doğrulama gerektiriyor.',
      },
      {
        'title': 'Taşıma güvenliği ve ilk yetkilendirme',
        'detail': 'İstemci ile agent, Bonjour keşfinden sonra WSS/TLS bağlantısı ve P256 challenge imzaları kullanıyor; ortak modeller mesajların türünü iki tarafta da tanımlıyor. Buna rağmen ilk görülen bilinmeyen public key’in güvenilen cihaza eklenmesi açık bir operatör onayıyla aynı şey değil. Aynı şekilde SharedCore’daki AES-GCM envelope yardımcılarının bulunması aktif router’ın bunları zorunlu kullandığını göstermiyor. Projenin mühendislik sınırı bu iki ayrımı açık tutmak: bağlantının şifrelenmesi, ilk peer’in yetkili olduğuna tek başına karar vermiyor.',
      },
    ],
}
---

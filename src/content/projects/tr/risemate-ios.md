---
{
  'slug': 'risemate-ios',
  'title': 'RiseMate — iOS',
  'categories': ['software', 'mobile'],
  'technologies': ['Swift', 'SwiftUI', 'MVVM', 'Firebase', 'WebRTC'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'private',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'summary-only',
  'summary': 'Öğretilen ve öğrenilmek istenen beceriler üzerinden profil, eşleşme ve iletişim akışları sunmayı araştıran özel SwiftUI iOS prototipi.',
  'description': 'RiseMate, karşılıklı beceri paylaşımını keşfeden bir iOS sosyal uygulama prototipidir. Kullanıcıların öğretebildiği ve öğrenmek istediği beceriler, profil keşfi ve eşleşme fikrinin temelini oluşturur. SwiftUI istemcisi; profil, mesajlaşma ve topluluk ekranlarıyla bu ürün yaklaşımını somutlaştırır. Önceki Kotlin ve Flutter istemcileri ayrı bir arşiv olarak korunur.',
  'role': 'iOS uygulama geliştirme; SwiftUI ekranları, özellik tabanlı organizasyon ve istemci servis entegrasyonları üzerine çalışma.',
  'problem': 'Bir beceriyi öğrenmek isteyen kişiyle o beceriyi öğretebilen kişinin karşılıklı beklentileri her zaman örtüşmez. Ürün fikri, yalnızca beceri ilanı vermek yerine iki tarafın öğrenme ve öğretme ilgilerini birlikte görünür kılmayı ve iletişime geçebilecekleri bir deneyim oluşturmayı amaçlar.',
  'solution': 'SwiftUI istemcisinde profiller, keşif, eşleşme ve iletişim akışları özellik tabanlı ekranlarla düzenlendi. Model ve servis sorumlulukları arayüz katmanından ayrıldı; kimlik ve veri işlemleri için Firebase entegrasyonları kullanıldı. Çağrı ve yapay zekâ ile ilgili deneysel bileşenler kaynakta bulunur, ancak canlı kabulü doğrulanmış özellikler olarak sunulmaz. İnceleme dalındaki hedef yapılandırması düzeltmesiyle imzasız simülatör derlemesi tamamlandı.',
  'architecture':
    [
      'SwiftUI ekranları ve özellik bazlı görünüm modelleri',
      'Paylaşılan modeller ve istemci servisleri',
      'Firebase üzerinden kimlik ve veri entegrasyonu',
      'Ayrı değerlendirilmesi gereken çağrı ve deneysel servis akışları',
    ],
  'features':
    [
      'Öğrenme ve öğretme becerilerini içeren profiller',
      'Profil keşfi ve eşleşme akışları',
      'Mesajlaşma ve topluluk ekranları',
      'Deneysel çağrı entegrasyonu',
    ],
  'technicalChallenges':
    [
      'Birden fazla sosyal özelliği tutarlı istemci yapısında düzenlemek',
      'Kaynakta bulunan özellikleri doğrulanmış canlı işlevlerden ayırmak',
      'Xcode hedefindeki kaynak dosyası kapsamını doğrulamak',
    ],
  'decisions':
    [
      'Swift istemcisini eski Kotlin/Flutter kodlarından ayrı tutmak',
      'Arayüz, model ve servis sorumluluklarını ayırmak',
      'Simülatör derleme başarısını fiziksel cihaz ve servis kabulünden ayrı raporlamak',
    ],
  'testing':
    [
      '7 Kasım 2026 inceleme dalında kaynak dosyasının Xcode hedefine eklenmesinden sonra imzasız arm64 iOS Simulator derlemesi başarılı oldu.',
      'Fiziksel cihaz, canlı çağrı, push, Firebase kurulumu ve gerçek kullanıcı akışları test edilmedi.',
    ],
  'results':
    [
      'İnceleme dalında simülatör derlemesini engelleyen hedef yapılandırması sorunu giderildi.',
      'Swift istemcisinin kapsamı ve önceki mobil arşivden farkı belgelendi.',
    ],
  'limitations':
    [
      'Geliştirme prototipidir; aktif kullanıcı veya üretim hizmeti iddiası yoktur.',
      'Yerleşik otomatik uygulama test takımı bulunmadı.',
      'Çağrı, push ve harici servis yapılandırmaları ayrıca doğrulanmalıdır.',
      'Gerçek profil, mesaj, fotoğraf ve cihaz verileri paylaşılmaz.',
    ],
  'projectId': 'risemate-ios',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'order': 12,
  'related': ['risemate-mobile-legacy', 'macpilot'],
  'presentation': 'case-study',
}
---

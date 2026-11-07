---
{
  'slug': 'healthcare-portal-ui',
  'title': 'Sağlık Portalı Arayüz Prototipi',
  'categories': ['software'],
  'technologies': ['C#', 'ASP.NET Core MVC', 'Razor', 'HTML/CSS', '.NET 6'],
  'status': 'prototype',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/healthcare-portal-prototype',
  'year': null,
  'sourceReferences':
    [
      {
        'label': 'Repository source',
        'url': 'https://github.com/M-Fatih-C/healthcare-portal-prototype',
      },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/healthcare-portal-prototype/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/healthcare-portal-prototype/blob/56853c4907db0fe3c2ba5f0674d6aa818691c469/README.md',
      },
    ],
  'summary': 'Sağlık portalı ana sayfası, doktor paneli ve kayıt/giriş düzenlerini MVC ve Razor ile gösteren, sunucu işlevleri tamamlanmamış arayüz prototipi.',
  'description': 'ASP.NET Core MVC projesi, sağlık hizmeti temalı sayfa düzenlerini ve doktor paneli gezinmesini korur. Controller, model, Razor view ve statik varlık katmanları kaynakta bulunur. Proje net6.0 hedefler; veri/iş katmanları ve üretime uygun kimlik doğrulama uygulanmış değildir. Sunum çalışması olarak değerlendirilir, hasta yönetim sistemi olarak değil.',
  'role': 'Depoda korunan MVC arayüz prototipi çalışması. Sağlık kuruluşu, gerçek kullanıcı dağıtımı veya ekip rolü kaynaklarda doğrulanmıyor.',
  'problem': 'Sağlık portalı için ana sayfa, kayıt ekranı ve doktor çalışma alanının görsel düzenini incelemek gerekir. Bu arayüz araştırması, güvenli hesap oluşturma, yetkilendirme ve hasta kaydı işleme gibi ayrı sunucu sorumluluklarıyla karıştırılmamalıdır.',
  'solution': 'Controller aksiyonları Razor sayfalarını sunar; ortak layout ve statik kaynaklar sayfalar arası görünümü sağlar. Ana sayfadaki doktor paneli geçişi prototip gezinmesidir. Açık dokümantasyon PR’si gerçek backend sınırını ve eski çalışma ortamını açıklar; eksik kimlik doğrulama veya kalıcılık davranışını tamamlanmış göstermez.',
  'architecture':
    [
      'MVC ve statik dosya servisini yapılandıran Program.cs.',
      'Ana sayfa, doktor paneli ve kayıt için controller aksiyonları.',
      'Razor view dosyaları ve paylaşılan layoutlar.',
      'Yerel model yer tutucuları ve wwwroot statik kaynakları.',
    ],
  'features':
    [
      'Sağlık portalı ana sayfa taslağı.',
      'Doktor paneli sayfası ve ayrı panel layoutu.',
      'Kayıt/giriş arayüz düzenleri.',
      'MVC controller-view ayrımı.',
    ],
  'technicalChallenges':
    [
      'Destek dışı net6.0 hedefinden doğrulanmış bir çalışma ortamına geçiş.',
      'Authentication middleware ile eksik servis yapılandırması arasındaki boşluk.',
      'Arayüz gezinmesini gerçek yetkilendirmeden açıkça ayırma.',
    ],
  'decisions':
    [
      'Proje arayüz prototipi olarak etiketlenir.',
      'Framework yükseltmesi ve gerçek backend ayrı, test gerektiren çalışmalardır.',
      'Portföyde yalnız sentetik arayüz içeriği kullanılır.',
    ],
  'testing':
    [
      'Kaynak ve proje yapısı incelendi; audit ortamında dotnet restore/build/run çalıştırılmadı.',
      'Ortak otomatik test paketi bulunmuyor.',
      'Açık PR yalnız dokümantasyon değişikliği içerir.',
    ],
  'results':
    [
      'MVC sayfa düzenlerini gösteren korunmuş bir sunum prototipi.',
      'Çalışan sağlık backend’i veya başarılı güncel build sonucu iddia edilmiyor.',
    ],
  'limitations':
    [
      'Kayıt ekranı güvenli hesap oluşturmaz; doğrulanmış kimlik ve veri kalıcılığı yok.',
      '.NET 6 destek dışı; dağıtımdan önce ayrı bir yükseltme ve test gerekir.',
      'Gerçek hasta kayıtlarıyla veya hastane servisleriyle kullanım doğrulanmadı.',
    ],
  'projectId': 'healthcare-portal-ui',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 20,
  'related': [],
}
---

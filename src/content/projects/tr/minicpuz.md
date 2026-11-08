---
{
  'slug': 'minicpuz',
  'title': 'MiniCPUZ',
  'categories': ['software'],
  'technologies': ['Python', 'PySide6', 'Jinja2', 'psutil', 'PyInstaller'],
  'status': 'prototype',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/BBSP',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'Repository source', 'url': 'https://github.com/M-Fatih-C/BBSP' },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/BBSP/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/BBSP/blob/74cdd3f1d63c6dcfc1203983d9e25ffd4238c52c/README.md',
      },
    ],
  'summary': 'CPU, bellek, GPU, disk, ağ ve işletim sistemi bilgilerini sekmeli masaüstü arayüzde gösteren, JSON ve HTML raporu üreten sistem aracı.',
  'description': 'Tarihsel BBSP deposundaki ürünün kaynakta görünen adı MiniCPUZ’dir. PySide6 arayüzü sistem bilgilerini ayrı görünümlerde sunar; toplama ve dışa aktarma modülleri arayüzden ayrılmıştır. Donanım ayrıntıları işletim sistemine, izinlere ve isteğe bağlı yardımcı araçlara bağlıdır. Kaynakta Windows odaklı bir PyInstaller tarifi de bulunur.',
  'role': 'Depoda korunan sistem bilgisi aracı çalışması. Bağımsız katkı veya ekip rolleri kamuya açık kaynakta ayrıntılandırılmıyor.',
  'problem': 'Sistem bilgileri platforma özgü araçlara dağılır ve her donanımda aynı ayrıntılar sağlanmaz. Bir masaüstü aracı bu bilgileri okunabilir biçimde birleştirirken eksik alanları tolere etmeli; raporlardaki seri numarası ve ağ bilgileri de paylaşılmadan önce gözden geçirilmelidir.',
  'solution': 'Qt tabanlı sekmeler, sistem toplama modülünden gelen verileri gösterir. JSON dışa aktarma Unicode değerleri korur; Jinja2 HTML şablonları okunabilir rapor üretir. Açık PR’de sentetik dışa aktarma regresyonları eklenmiş ve bulunmayan build scriptlerine dayanan eski yönergeler düzeltilmiştir. Platformlar arası bilgi eşitliği veya test edilmiş paket garantisi verilmez.',
  'architecture':
    [
      'PySide6 GUI ve tek örnek çalışma denetimi.',
      'Platforma bağlı system_info veri toplama modülü.',
      'CPU, bellek, GPU, disk/ağ ve işletim sistemi görünümleri.',
      'JSON yazıcısı ve Jinja2 HTML şablonlarıyla rapor dışa aktarma.',
    ],
  'features':
    [
      'Sekmeli donanım ve işletim sistemi görünümü.',
      'Unicode uyumlu JSON rapor dışa aktarma.',
      'Kaynak şablonlarıyla HTML rapor üretimi.',
      'Windows odaklı PyInstaller spec dosyası.',
    ],
  'technicalChallenges':
    [
      'WMI ve donanım araçlarının platforma göre farklı bulunabilirliği.',
      'Eksik GPU/SPD verisi ve izin gereksinimleri.',
      'Paketli uygulamada şablon/kaynak dosyalarının doğru bulunması.',
    ],
  'decisions':
    [
      'BBSP depo adı korunurken kaynakta MiniCPUZ ürün adı açıklanır.',
      'Raporlama, gerçek makine envanterinden bağımsız sentetik verilerle sınanır.',
      'Eksik bilgiyi tamamlamak için otomatik yükseltilmiş izin talep edilmez.',
    ],
  'testing':
    [
      'Açık PR’de Unicode JSON roundtrip ve HTML escaping/no-GPU için iki sentetik regresyon testi başarılı raporlandı.',
      'Bu testler donanım toplama, GUI veya sürücü doğrulaması değildir.',
      'Windows paketlemesi ve temiz makine kabulü yapılmadı.',
    ],
  'results':
    [
      'Sistem bilgisi toplama, masaüstü sunumu ve rapor dışa aktarmayı ayıran kaynak yapısı.',
      'Dışa aktarma davranışı için sınırlı, somut regresyon kapsamı; performans ölçümü iddiası yok.',
    ],
  'limitations':
    [
      'Aynı alanların bütün platform ve donanımlarda dolması garanti değil.',
      'macOS/Linux paketleme ve Windows binary kabulü ayrıca doğrulanmalı.',
      'Gerçek raporlar tanımlayıcı sistem bilgisi içerebilir; depoda lisans dosyası yok.',
    ],
  'projectId': 'minicpuz',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 14,
  'related': [],
  'presentation': 'brief',
}
---

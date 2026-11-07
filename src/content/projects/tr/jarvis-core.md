---
{
  'slug': 'jarvis-core',
  'title': 'Jarvis Core',
  'categories': ['ai', 'software'],
  'technologies': ['Python', 'FastAPI', 'MLX', 'Swift', 'Firebase', 'TypeScript'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/jarvis-core',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/jarvis-core' },
      {
        'label': 'Policy matrix',
        'url': 'https://github.com/M-Fatih-C/jarvis-core/blob/main/core/policy/rules.py',
      },
      {
        'label': 'Architecture',
        'url': 'https://github.com/M-Fatih-C/jarvis-core/tree/main/docs/architecture',
      },
      {
        'label': 'Runtime guide & validation work',
        'url': 'https://github.com/M-Fatih-C/jarvis-core/pull/11',
      },
    ],
  'summary': 'LLM önerilerini deterministik risk politikası, durum makinesi ve onay akışından geçirerek araç çalıştıran; Apple entegrasyonları içeren yerel öncelikli agent çekirdeği.',
  'description': 'Jarvis Core, modelin araç önerisi ile aracın gerçekten çalıştırılması arasına açık bir kontrol katmanı yerleştiriyor. Python/FastAPI çekirdeği; risk sınıfları, onay bekleme, zaman aşımı ve tekrarlanan çağrı yönetimini içeriyor. Bellek, native Apple köprüsü, Gmail ve Firebase modülleri çekirdeği genişletiyor. Bu proje, farklı paketleri ve çalışma modeli olan J.A.R.V.I.S deposundan bağımsız bir sistem.',
  'role': 'Agent çalışma zamanı, risk politikası ve entegrasyon sözleşmelerinin geliştirilmesi.',
  'problem': 'Bir LLM’nin araç çağrısı önermesi, o işlemin otomatik olarak yetkili ve güvenilir olduğu anlamına gelmiyor. Yazma, harici iletişim ve yıkıcı eylemler farklı kurallar gerektiriyor. Onay bekleyen bir çalışmanın güvenli devamı, tekrar gelen çağrıların kontrolü ve sonlu yürütme sınırları da gerekli. Bu çekirdek, model muhakemesi ile uygulama yetkisini ayrı katmanlarda ele alıyor.',
  'solution': 'Bir chat isteği bağlam kurma ve LLM önerisiyle başlıyor; önerilen araç çağrısı mod ve risk sınıfına göre deterministik politika matrisinden geçiyor. Allow çağrıları executor’a gidiyor, approval kararları bekleme durumuna alınıyor, deny kararları sonuç olarak dönüyor. Onayların TTL’i, step/tool limitleri ve tekrar çağrı kimlikleri çalışma zamanı tarafından ele alınıyor. Mock adaptörler yerel geliştirmeyi mümkün kılıyor; MLX, Apple IPC, Gmail ve Firebase yolları ayrı konfigürasyon ve izin sınırlarıyla etkinleştiriliyor.',
  'architecture':
    [
      'FastAPI chat isteği → bağlam oluşturma',
      'Mock / MLX model adaptörü → yanıt veya araç önerisi',
      'Mod + risk matrisi → allow / approval / deny',
      'Onay durumu ve executor → araç sonucu',
      'Sonuç → sonraki agent adımı / tamamlanma',
    ],
  'features':
    [
      'Observe / assist / autonomous politika modları',
      'Risk düzeyine göre deterministik kararlar',
      'Süreli onay ve devam akışı',
      'Adım ve araç çağrısı sınırları',
      'Bellek ve native Apple IPC bileşenleri',
      'İsteğe bağlı Gmail / Firebase / iOS katmanları',
    ],
  'technicalChallenges':
    [
      'Onay bekleyen çalışmayı doğru durumla sürdürmek ve yinelenen çağrıları yönetmek.',
      'Araç risk etiketleri ile yürütme politikasının tutarlı kalmasını sağlamak.',
      'Mock doğrulama ile gerçek model, cihaz ve servis kabulünü ayırmak.',
    ],
  'decisions':
    [
      'Model önerisi, politika kararı ve executor ayrı katmanlara ayrıldı.',
      'Assist varsayılanında yazma/harici/yıkıcı eylemler onay gerektiriyor; hassas sınıf reddediliyor.',
      'Dış entegrasyonlar ayrı opt-in; yerel geliştirme için mock sağlayıcılar kullanılıyor.',
    ],
  'testing':
    [
      'Geçmiş doğrulamada dış ağ kapalı 237 Python testi geçti.',
      'Swift ve Firebase-emulator işleri ayrı CI yolları; canlı Gmail, gerçek model kalitesi ve fiziksel iOS kabulü bu Python sayısına dahil değil.',
    ],
  'results':
    [
      'Araç önerilerinden bağımsız okunabilir bir mod/risk karar matrisi mevcut.',
      'Onay, durum geçişi ve entegrasyonlar ayrı sözleşmelerle düzenlenmiş.',
    ],
  'limitations':
    [
      'Politika etiketleri araç tanımlarına bağlı; tüm prompt injection senaryolarına karşı garanti değil.',
      'Autonomous modu R2 yazma işlemlerine onaysız izin verebiliyor.',
      'Yerel öncelikli tasarım, Gmail/Firebase gibi isteğe bağlı yolların çevrimdışı olduğu anlamına gelmiyor.',
      'Genişletilmiş rehber ve CI runner düzenlemesi açık #11 PR’sinde; henüz birleşmedi.',
    ],
  'projectId': 'jarvis-core',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 10,
  'related': ['jarvis-assistant', 'macpilot', 'minigpt-m4'],
  'implementation':
    [
      {
        'title': 'Onayı belirli bir eyleme bağlama',
        'detail': 'ApprovalStore, onayı yalnızca bir evet/hayır bayrağı olarak saklamıyor. İstek oluşturulurken agent run kimliği, tool-call kimliği, araç adı ve argümanlardan bir action digest hesaplanıyor; kullanıcı kimliği ve bitiş zamanı da kayda bağlanıyor. Onaylama ve tüketme aşamaları bu bağın değişmediğini kontrol ediyor; tüketim tek kullanımlık işaretleniyor. Böylece kullanıcı onayladıktan sonra parametrelerin değiştirilmesi ayrı bir hata olarak ele alınabiliyor. Store bellekte olduğu için bu mekanizma tek başına süreç yeniden başlatmalarında kalıcı onay garantisi vermiyor.',
      },
      {
        'title': 'Executor içinde ikinci politika kontrolü',
        'detail': 'Agent döngüsü politika kararını verdikten sonra ToolExecutor da çağrıyı yeniden değerlendiriyor; is_approved işareti hard deny kararını geçersiz kılamıyor. Pydantic argüman doğrulamasından geçen çağrı araca iletiliyor. Aynı tool-call kimliğine ait eşzamanlı istekler çağrı bazlı asyncio lock ile seri hale getiriliyor ve sonuç process içi cache’den tekrar kullanılabiliyor. Bu katmanlama, model döngüsündeki doğru karara bağımlılığı azaltıyor. Cache’in süreç belleğinde bulunması, servisler arası veya restart sonrası küresel exactly-once yürütme anlamına gelmiyor.',
      },
      {
        'title': 'Bekleyen çalışmayı sonuçla devam ettirme',
        'detail': 'Runtime, onay gerektiğinde WAITING_APPROVAL durumuna geçiyor ve bekleyen çağrıyı run üzerinde tutuyor. Onay geldiğinde action bütünlüğü kontrol edilip onay tüketiliyor; executor sonucu TOOL mesajı olarak bağlama ekleniyor ve çok adımlı döngü yeniden başlıyor. Kullanıcı reddi de ayrı durum geçişi ve açıklama olarak işleniyor. Step ve tool-call limitleri bu devam yolunda da uygulanıyor. Bu tasarımın katkısı öneri, yetki ve yürütmenin okunabilir bir yaşam döngüsüne dönüşmesi; bütün entegrasyonların gerçek servislerde doğrulandığı iddiası değil.',
      },
    ],
}
---

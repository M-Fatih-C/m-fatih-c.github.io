---
{
  'slug': 'tenderai',
  'title': 'TenderAI',
  'categories': ['ai', 'software', 'data'],
  'technologies': ['Python', 'Streamlit', 'OpenAI', 'Gemini', 'FAISS', 'SQLAlchemy', 'Docker'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/tender-analysis-ai',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/tender-analysis-ai' },
      {
        'label': 'Application',
        'url': 'https://github.com/M-Fatih-C/tender-analysis-ai/blob/main/app.py',
      },
      {
        'label': 'AI components',
        'url': 'https://github.com/M-Fatih-C/tender-analysis-ai/tree/main/src/ai_engine',
      },
      {
        'label': 'Validation & documentation work',
        'url': 'https://github.com/M-Fatih-C/tender-analysis-ai/pull/1',
      },
    ],
  'summary': 'Türkçe ihale şartnameleri için PDF çıkarımı, yapay zekâ destekli risk analizi, kaynakla soru-cevap ve raporlama bileşenlerini birleştiren Streamlit prototipi.',
  'description': 'TenderAI, uzun ihale belgelerini yapılandırılmış biçimde incelemeyi amaçlayan bir Streamlit uygulaması. PDF metin çıkarımı, OpenAI/Gemini adaptörleri, FAISS tabanlı retrieval, firma eşleştirme ve belge karşılaştırma bileşenleri içeriyor. Analiz kayıtları SQLAlchemy ile tutuluyor; rapor modülleri farklı çıktı biçimleri üretiyor. Ortaya çıkan bulgular karar destek taslaklarıdır; kaynak metnin ve hesapların insan tarafından kontrol edilmesi gerekir.',
  'role': 'Belge analizi, retrieval ve kullanıcı arayüzü bileşenlerinin yazılım geliştirmesi.',
  'problem': 'İhale şartnameleri çok sayıda koşul, tarih, yeterlilik gereksinimi ve çapraz referans içeriyor. Birden fazla belgeyi karşılaştırmak veya belirli bir sorunun yanıtına ulaşmak için aynı metinler tekrar tekrar okunuyor. Otomatik özet ise kaynağından koparsa kritik şartları atlayabilir. Bu nedenle analiz, belge bağlamı, firma bilgisi ve inceleme çıktıları birlikte ele alınmalı.',
  'solution': 'Uygulama PDF metnini çıkarıp analiz bileşenlerine aktarıyor; seçilen akışa göre OpenAI veya Gemini adaptörleri kullanılıyor. FAISS retrieval katmanı belge parçalarını soru-cevap için geri getiriyor. Firma eşleştirme ve karşılaştırma modülleri farklı inceleme ihtiyaçlarını aynı arayüzde topluyor. SQLAlchemy kullanıcı ve analiz kayıtlarını saklıyor; PDF, Excel ve DOCX rapor bileşenleri sonuçları dışarı taşıyor. Sentetik demo modu, gerçek doküman veya servis anahtarı kullanmadan arayüzü inceleme olanağı sağlıyor.',
  'architecture':
    [
      'Streamlit arayüzü → PDF yükleme / metin çıkarımı',
      'Analiz orkestrasyonu → OpenAI / Gemini adaptörleri',
      'Belge parçaları → FAISS retrieval → soru-cevap',
      'SQLAlchemy → kullanıcı ve analiz kayıtları',
      'Karşılaştırma / firma eşleştirme → rapor çıktıları',
    ],
  'features':
    [
      'PDF şartname metni çıkarımı',
      'AI destekli risk inceleme akışı',
      'FAISS tabanlı belge soru-cevap',
      'Firma eşleştirme ve ihale karşılaştırma',
      'PDF / Excel / DOCX rapor bileşenleri',
      'Sentetik demo modu',
    ],
  'technicalChallenges':
    [
      'Farklı PDF düzenlerinden tutarlı metin çıkarmak.',
      'Üretilen değerlendirmelerin belge bağlamıyla ilişkisini korumak.',
      'İlk tokenizer indirmesini çevrimdışı test gereksinimlerinden ayırmak.',
    ],
  'decisions':
    [
      'Ayrı REST sunucusu yerine Streamlit ve Python bileşenleri kullanıldı.',
      'Retrieval ve model sağlayıcıları ayrı modüllerde tutuldu.',
      'Demo akışı ile canlı sağlayıcı gereksinimleri ayrıldı.',
    ],
  'testing':
    [
      'Açık #1 PR’si için geçmiş doğrulamada tokenizer tabloları önbellekteyken, dış ağ kapalı 234 test geçti.',
      'Önbelleksiz çevrimdışı koşu ilk tokenizer indirmesinde başarısızlıklar verdi; Docker runtime ve canlı model kalitesi test edilmedi.',
    ],
  'results':
    [
      'Metin çıkarımından retrieval ve rapora uzanan bileşenler tek uygulamada bir araya geliyor.',
      'Soru-cevap, karşılaştırma ve firma uygunluğu için ayrı Python modülleri mevcut.',
    ],
  'limitations':
    [
      'Tarama görüntüsü içeren PDF’lerde metin çıkarımı garanti değil.',
      'Model çıktısı kritik koşulları atlayabilir veya yanlış yorumlayabilir.',
      'Canlı sağlayıcı akışları belge metnini harici hizmetlere gönderebilir.',
      'CI/lint ve dokümantasyon düzeltmeleri açık #1 PR’sinde; uygulamaya alınmış sürüm olarak sunulmuyor.',
    ],
  'projectId': 'tenderai',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 2,
  'related': [],
  'implementation':
    [
      {
        'title': 'Şartname yapısına göre retrieval',
        'detail': 'IhaleAnalizAI, metni varsayılan 1.500 karakterlik parçalara ve 200 karakter örtüşmeye ayırıyor. RecursiveCharacterTextSplitter, genel boşluk ayırıcılarından önce Madde, BÖLÜM ve Ek gibi şartname başlıklarını deniyor. OpenAI embedding’leriyle bellekte FAISS index kuruluyor; her analiz sorusu kendi en yakın parçalarını çekip ilgili prompt’a ekliyor. Örtüşme sınırda bölünen maddeler için bağlam taşıyor, fakat benzerlik araması bütün şartların bulunduğunu garanti etmiyor. Bu yol, tek bir genel özet yerine belirli inceleme sorularına odaklanan bir analiz yaklaşımı.',
      },
      {
        'title': 'Altı inceleme adımı ve sonuç birleştirme',
        'detail': 'Ana analiz hattı risk, gerekli belgeler, ceza maddeleri, mali özet ve zaman çizelgesini sırayla çalıştırıyor; yönetici özeti bu önceki sonuçları da bağlam olarak alıyor. Sıralı yürütme rate-limit kaygısını görünür kılıyor, fakat bağımsız çağrıların toplam bekleme süresini ortadan kaldırmıyor. Yanıt ayrıştırıcısı düz JSON, fenced JSON ve sonda virgül temizleme yollarını deniyor; çözülemeyen yanıtta raw_response ve parse_error alanları bırakıyor. Bu yapı biçim hatasını saklamadan değerlendirmeyi sürdürmeye yarıyor; içerik doğruluğunun yerini almıyor.',
      },
      {
        'title': 'Analiz retrieval’i ile sohbet bağlamının ayrımı',
        'detail': 'Chatbot bileşeni ana FAISS analiz yolundan farklı: yüklenen metni sınırlı bir context içinde tutuyor ve Gemini isteğine metnin ilk 20.000 karakteriyle son beş sohbet mesajını ekliyor. Bu nedenle uygulamadaki her soru-cevap akışını aynı retrieval mimarisi olarak anlatmak doğru olmaz. API anahtarı yoksa demo yoluna geçiliyor; kota ve servis hatalarında uyarılı demo yanıtı dönebiliyor. Bu ayrım, arayüzü incelemeyi kolaylaştırırken uzun belgenin sonundaki bilgilerin chatbot bağlamına girmeyebileceğini de açıkça gösteriyor.',
      },
    ],
  'presentation': 'case-study',
}
---

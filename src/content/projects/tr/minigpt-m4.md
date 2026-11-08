---
{
  'slug': 'minigpt-m4',
  'title': 'MiniGPT-M4',
  'categories': ['ai', 'ml', 'research'],
  'technologies': ['Python', 'PyTorch', 'NumPy', 'Byte-level BPE', 'Apple MPS'],
  'status': 'research',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/minigpt-m4',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/minigpt-m4' },
      {
        'label': 'Transformer',
        'url': 'https://github.com/M-Fatih-C/minigpt-m4/blob/main/model/gpt.py',
      },
      {
        'label': 'Validation & experiment notes',
        'url': 'https://github.com/M-Fatih-C/minigpt-m4/pull/8',
      },
    ],
  'summary': 'Transformer bileşenlerini görünür kılan, özel BPE tokenizer ve Apple Silicon eğitim deneyleri içeren küçük ölçekli dil modeli araştırması.',
  'description': 'MiniGPT-M4, hazır bir model API’si kullanmak yerine decoder-only bir Transformer’ın temel parçalarını PyTorch ile kuran eğitim ve araştırma projesi. Tokenizer, veri hazırlama, nedensel attention, ağırlık paylaşımı ve üretim aynı kod tabanında incelenebiliyor. Apple MPS ile yerel eğitim yolu ve ayrı arşivlenmiş diyalog ince ayar deneyleri bulunuyor; eğitim verileri ve çalıştırılabilir model ağırlıkları depoya dahil değil.',
  'role': 'Model mimarisi, tokenizer ve yerel eğitim deneylerinin yazılım geliştirmesi.',
  'problem': 'Dil modeli davranışını anlamak için yalnızca bir inference uç noktasını kullanmak yeterli olmuyor. Tokenların hazırlanması, gelecek tokenların attention içinde gizlenmesi, hedeflerin bir adım kaydırılması ve sohbet kaybının maskelenmesi gibi ayrıntılar sonuca doğrudan etki ediyor. Küçük donanımda deney yapmak da model boyutları ile veri ve eğitim bütçesini birlikte ele almayı gerektiriyor.',
  'solution': 'Proje, byte-level BPE kodlamasını token/pozisyon embedding’leri, pre-LayerNorm bloklar ve GELU ileri besleme katmanlarıyla birleştiriyor. Çıkış projeksiyonu token embedding ağırlığını paylaşıyor; eğitim assistant-only hedeflerde -100 maskelemesini destekliyor. Varsayılan yapı 2.048 token sözlüğü, 256 token bağlam, 384 embedding boyutu, 8 katman ve 6 attention head kullanıyor. Eğitim ile checkpoint tabanlı üretim ayrı giriş noktalarına sahip; diyalog deneyleri ana pretraining yolundan ayrı tutuluyor.',
  'architecture':
    [
      'Metin hazırlama ve byte-level BPE tokenizer',
      'uint16 token dosyaları ve kaydırılmış hedef batch’leri',
      'Token/pozisyon embedding’leri ve nedensel Transformer blokları',
      'Paylaşılan LM head, kayıp ve optimizasyon',
      'Uyumlu checkpoint ile autoregressive üretim',
    ],
  'features':
    [
      'Özel byte-level BPE tokenizer',
      'Pre-LayerNorm, residual bağlantılar ve nedensel attention',
      'Embedding ile çıkış katmanı arasında ağırlık paylaşımı',
      'Apple MPS / CPU çalışma yolu',
      'Arşivlenmiş DailyDialog ve SmolTalk ince ayar deneyleri',
    ],
  'technicalChallenges':
    [
      'Tokenizer, veri dosyası ve checkpoint boyutlarının uyumunu korumak.',
      'Rastgele pencere örneklemesi ile sohbet bağlamı ve assistant hedeflerini doğru ilişkilendirmek.',
      'Hazırlanmış veri miktarı ile gerçekten işlenen eğitim tokenlarını ayırmak.',
    ],
  'decisions':
    [
      'Küçük varsayılan yapı ve MPS desteğiyle yerel deneylere odaklanıldı.',
      'Ana pretraining yolu ve tarihsel SFT denemeleri ayrı tutuldu.',
      'Bileşen doğruluğu, eğitim kalitesinden bağımsız sentetik sözleşmelerle değerlendirildi.',
    ],
  'testing':
    [
      'Açık #8 PR’sindeki dört CPU sözleşme testi geçmiş doğrulamada geçti: nedensellik, ağırlık/kayıp, Unicode tokenizer ve batch hizası.',
      'Veri gerektiren dört eski tanı modülü ayrı kopyada sentetik tokenlarla çalıştı; gerçek pretraining veya checkpoint kalitesi yeniden üretilmedi.',
    ],
  'results':
    [
      'Modelin attention, tokenizer, veri ve üretim bileşenleri okunabilir ayrı modüllerde mevcut.',
      'Tarihsel 115.706.628 hazırlanmış token ile tarif edilen koşunun 40.960.000 token pozisyonu birbirinden ayrıldı; ikisi de yeni eğitim sonucu değil.',
    ],
  'limitations':
    [
      'Eğitilmiş ağırlıklar ve eğitim korpusu dahil değil.',
      'Tarihsel loss 1,3553 bağımsız olarak doğrulanmış bir benchmark değil.',
      'Genel talimat takibi veya olgusal doğruluk için doğrulama yok.',
      'Yeni test ve deney açıklamaları açık #8 PR’sinde; ana dala henüz birleşmedi.',
    ],
  'projectId': 'minigpt-m4',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 0,
  'related': ['jarvis-core', 'jarvis-assistant', 'machine-learning-notebooks'],
  'implementation':
    [
      {
        'title': 'Token akışının veri sözleşmesi',
        'detail': 'TokenDataset, eğitim ve validation dosyalarını uint16 NumPy memmap olarak açıyor; her batch için rastgele başlangıçlar seçip girdiyi ve bir token ileri kaydırılmış hedefi aynı pencereden üretiyor. Böylece ham metnin yeniden işlenmesi eğitim döngüsünden ayrılıyor ve dosyanın tamamını tek bir Python nesnesine yüklemek gerekmiyor. Model girdileri PyTorch için int64’e çevriliyor. Bu tasarımın önemli şartı tokenizer sözlüğü, dosya kodlaması ve checkpoint boyutlarının uyumlu tutulması; veri dosyasının varlığı tek başına bu uyumu kanıtlamıyor.',
      },
      {
        'title': 'Eğitim döngüsünde görünür kontrol noktaları',
        'detail': 'train.py, AdamW optimizasyonunu doğrusal warmup ve cosine learning-rate decay ile birleştiriyor. Gradient clipping, periyodik train/validation loss tahmini ve örnek üretimi aynı koşunun farklı gözlem noktalarını oluşturuyor. Checkpoint dosyası model ve optimizer state’ini, adım numarasını ve validation loss bilgisini kaydediyor. Bunlar deneyin izlenmesini kolaylaştıran yazılım mekanizmaları; bir ayarın kodda bulunması o eğitimin tamamlandığını veya modelin kaliteli yanıt ürettiğini göstermiyor. Veri revizyonu, tokenizer ve koşu konfigürasyonu ayrıca kaydedilmeli.',
      },
      {
        'title': 'Üretim sırasında bağlam ve örnekleme',
        'detail': 'MiniGPT.generate her yeni token için yalnızca modelin bağlam sınırı içindeki son tokenları kullanıyor. Son pozisyondaki logits, temperature ile ölçekleniyor; top-k seçilmişse daha düşük olasılıklı seçenekler maskeleniyor ve sonraki token multinomial örneklemeyle ekleniyor. Böylece üretim davranışı model forward geçişinden ayrı incelenebiliyor. Sabit bağlam penceresi yerel deneyi basitleştirirken uzun metnin eski bölümlerini dışarıda bırakıyor. Bu uygulamada KV-cache temelli hızlandırma iddiası veya ölçülmüş üretim hızına dayanan performans sonucu sunulmuyor.',
      },
    ],
  'presentation': 'case-study',
}
---

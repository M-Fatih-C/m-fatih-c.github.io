---
{
  'slug': 'turkish-address-research',
  'title': 'Türkçe Adres Araştırmaları',
  'categories': ['ai', 'ml', 'data', 'research', 'competitions'],
  'technologies':
    ['Python', 'pandas', 'scikit-learn', 'Transformers', 'FAISS', 'GeoPandas', 'Nominatim'],
  'status': 'research',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/turkce-adres-cozumleme-algoritmalar',
  'year': null,
  'sourceReferences':
    [
      {
        'label': 'Repository source',
        'url': 'https://github.com/M-Fatih-C/turkce-adres-cozumleme-algoritmalar',
      },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/turkce-adres-cozumleme-algoritmalar/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/turkce-adres-cozumleme-algoritmalar/blob/bb8e5ec72b30e13dc3140a6f900122233c3b995e/README.md',
      },
      {
        'label': 'Research and reproducibility guide',
        'url': 'https://github.com/M-Fatih-C/turkce-adres-cozumleme-algoritmalar/blob/bb8e5ec72b30e13dc3140a6f900122233c3b995e/docs/RESEARCH_GUIDE.md',
      },
      {
        'label': 'Notebook source inventory',
        'url': 'https://github.com/M-Fatih-C/turkce-adres-cozumleme-algoritmalar/blob/bb8e5ec72b30e13dc3140a6f900122233c3b995e/docs/EXPERIMENTS.md',
      },
    ],
  'summary': 'Gürültülü Türkçe adreslerin normalizasyonunu ve görev özelindeki etiket tahminini metin, vektör arama ve coğrafi yaklaşımlarla inceleyen araştırma koleksiyonu.',
  'description': 'Teknofest/Hepsiburada adres çözümleme bağlamında hazırlanan çalışma, 25 deney klasörü ve 19 notebook içinde farklı yöntemleri korur. Kural tabanlı baselinelar, TF-IDF, transformer gömmeleri, FAISS araması ve GIS yolları bulunur. Her deneyin veri sözleşmesi ve ortamı farklıdır; koleksiyon tek bir üretim API’si veya doğrulanmış algoritma sıralaması olarak sunulmaz.',
  'role': 'Depoda korunan araştırma ve yazılım çalışmaları. Bireysel veya ekip içi sorumluluk dağılımı kaynaklarda ayrıntılandırılmıyor.',
  'problem': 'Serbest biçimli Türkçe adreslerde kısaltmalar, harf farklılıkları, eksik alanlar ve farklı illerde tekrarlanan yer adları eşleşmeyi zorlaştırır. Adres bileşeni normalizasyonu ile yarışmaya özgü etiket tahmini ayrıca farklı hedeflerdir; doğru etiket bütün bileşenlerin doğru çıkarıldığını kanıtlamaz.',
  'solution': 'Aynı problem çevresindeki bağımsız deneyler; metin temizleme, sözlükler, seyrek özellikler, gömme benzerliği ve coğrafi eşleştirmeyi araştırır. GIS yollarından biri geokodlama, aday arama ve metin puanlamasını; diğeri idari çokgenlerle mekânsal birleştirmeyi kullanır. Ayrıntılı araştırma rehberi girdi/çıktıları, yöntem ayrımlarını ve yeniden üretim boşluklarını görünür kılar.',
  'architecture':
    [
      'Deneye özel CSV girdileri ve yerel/Colab dosya yolları.',
      'Kural veya öğrenilmiş özelliklerle metin ön işleme.',
      'TF-IDF, transformer araması ya da bağımsız GIS işleme yolu.',
      'Uygulamaya göre etiket tahmini veya normalizasyon ve ayrı çıktı dosyaları.',
    ],
  'features':
    [
      '25 tarihsel deney klasörünü kapsayan yöntem indeksi.',
      '19 notebook için kaynak temelli model ve dosya envanteri.',
      'Metin benzerliği ve FAISS tabanlı aday arama deneyleri.',
      'Nominatim/KDTree hibriti ve idari sınırlarla mekânsal birleştirme.',
    ],
  'technicalChallenges':
    [
      'Türkçe harf ayrımları ve aynı adlı idari yerlerin oluşturduğu belirsizlik.',
      'Eksik eğitim verisi, değişken bağımlılıklar ve sabit dosya yolları.',
      'Coğrafi sızıntı ve benzer adreslerin değerlendirme sonuçlarını şişirme riski.',
    ],
  'decisions':
    [
      'Normalizasyon ve etiket tahmini ayrı araştırma hedefleri olarak açıklanır.',
      'Klasör adları model eğitimi veya yöntem üstünlüğünün kanıtı sayılmaz.',
      'Deneyler korunur; ortak bir üretim sistemi iddiası kurulmaz.',
    ],
  'testing':
    [
      'Kaynak ve notebook yapısı statik olarak incelendi; ortak bir benchmark yeniden çalıştırılmadı.',
      'Baseline-v2 içinde eksik import ve iki notebookta sözdizimi sorunları belgelendi.',
      'PR’de araştırma rehberi genişletildi; bu dokümantasyon henüz ana dala birleştirilmedi.',
    ],
  'results':
    [
      'Yöntem aileleri, veri sözleşmeleri ve tekrar üretim gereksinimleri belgelenmiş bir araştırma arşivi.',
      'Yeni doğrulanmış Accuracy/F1, hız veya üretim dağıtımı sonucu bulunmuyor.',
    ],
  'limitations':
    [
      'Eğitim CSV’si bulunmuyor; tüm deneyler temiz kurulumdan çalışır durumda değil.',
      'Mevcut adres verisinin paylaşım hakları ve kişisel veri durumu çözülmüş değil.',
      'Geokodlama üçüncü taraf servislere veri aktarabilir; portföyde ham adres örnekleri kullanılmıyor.',
    ],
  'projectId': 'turkish-address-research',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 9,
  'related': ['ing-datathon', 'machine-learning-notebooks'],
  'presentation': 'case-study',
}
---

---
{
  'slug': 'machine-learning-notebooks',
  'title': 'Makine Öğrenmesi Notebook Arşivi',
  'categories': ['ai', 'ml', 'data', 'vision', 'research', 'archive'],
  'technologies':
    ['Python', 'Jupyter', 'TensorFlow/Keras', 'PyTorch', 'scikit-learn', 'OpenCV', 'pandas'],
  'status': 'archive',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/AI-Projects',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'Repository source', 'url': 'https://github.com/M-Fatih-C/AI-Projects' },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/AI-Projects/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/AI-Projects/blob/7cbf83ae4d4342488f3c47c06f6d3e62815f7214/README.md',
      },
      {
        'label': 'Source-based notebook catalogue',
        'url': 'https://github.com/M-Fatih-C/AI-Projects/blob/7cbf83ae4d4342488f3c47c06f6d3e62815f7214/docs/EXPERIMENT_CATALOG.md',
      },
    ],
  'summary': 'Görüntü, metin, ses ve tablo verileri üzerinde farklı makine öğrenmesi fikirlerini araştıran, kaynaklarına göre sınıflandırılmış 33 bağımsız notebook arşivi.',
  'description': '32 numaralı deney klasörü ve kökteki ek notebook; temel sinir ağı alıştırmalarını, görüntü sınıflandırmayı, nesne algılamayı, duygu analizini ve yarışma modellemesini bir araya getirir. Kaynak tabanlı katalog, eski klasör adlarının yanıltıcı olduğu yerleri düzeltir. Notebooklar farklı veri, model ve çalışma ortamlarına bağlı bağımsız eğitim/araştırma kayıtlarıdır.',
  'role': 'Depoda korunan öğrenme ve deney çalışmaları. Her notebook için katkı veya ekip sorumluluğu ayrıntısı belgelenmiyor.',
  'problem': 'Farklı dönemlerde yazılmış notebooklarda klasör adları her zaman gerçek görevi anlatmaz. Ortam, veri ve model gereksinimleri de değişir. Bu çeşitlilik, koleksiyonun gezilmesini ve bir deneyi çalıştırmak için gereken girdilerin anlaşılmasını zorlaştırır.',
  'solution': 'Kaynak hücreleri üzerinden hazırlanan katalog; her notebookun konusunu, gözlenen kütüphaneleri ve dış dosya gereksinimlerini açıklar. Görüntü, NLP, ses ve tablo çalışmaları bağımsız deneyler olarak sunulur. Tarihsel çıktılar korunurken eğitim başarısı veya güncel karşılaştırılabilir performans iddiası kurulmaz.',
  'architecture':
    [
      'Birbirinden bağımsız 33 Jupyter notebook.',
      'Deneye özel veri yükleme ve ön işleme hücreleri.',
      'Göreve göre klasik ML, Keras/PyTorch veya bilgisayarlı görü akışı.',
      'Notebook içindeki değerlendirme, görselleştirme ve dosya çıktıları.',
    ],
  'features':
    [
      '33 notebooku kapsayan kaynak tabanlı konu kataloğu.',
      'CNN ve transfer öğrenme içeren görüntü çalışmaları.',
      'LSTM, duygu analizi ve küçük çeviri deneyleri.',
      'Ses duygusu, açıklanabilirlik ve tablo verisi alıştırmaları.',
    ],
  'technicalChallenges':
    [
      'Farklı veri/model dosyaları ve Colab yollarına bağımlılık.',
      'Birbiriyle uyumlu olduğu doğrulanmamış ortak gereksinim listesi.',
      'Eksik kod ile eski çıktıları çalışır deneylerden ayırma ihtiyacı.',
    ],
  'decisions':
    [
      'Kaynak yolları ve tarihsel klasörler yeniden adlandırılmadan korunur.',
      'Katalog, klasör adına dayalı otomatik görev/model varsayımlarının önüne geçer.',
      'Her deneye ayrı ortam ve yetkili veri gereksinimi uygulanır.',
    ],
  'testing':
    [
      'Notebook JSON ve kaynak hücreleri incelendi; eğitim veya API çağrısı yapılmadı.',
      'Notebook 31’de eksik ifade ve yanlış sınıflandırıcı importu belgelendi.',
      'Katalog PR’si açık; ortak otomatik test paketi veya yeni benchmark yok.',
    ],
  'results':
    [
      'Konuları ve dış bağımlılıkları daha anlaşılır hale getiren çok alanlı öğrenme arşivi.',
      'Kaydedilmiş grafik ve metrikler tarihsel çıktılardır; yeniden doğrulanmış sonuç sayılmaz.',
    ],
  'limitations':
    [
      'Eksik veri/model dosyaları nedeniyle temiz kopyadan tüm notebooklar çalıştırılamaz.',
      'Sağlık araştırması çıktıları ve notebook metadatası için gizlilik incelemesi tamamlanmış değil.',
      'Portföyde gerçek sağlık çıktıları, kişisel kayıtlar veya başarı oranları yayımlanmıyor.',
    ],
  'projectId': 'machine-learning-notebooks',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 19,
  'related': [],
}
---

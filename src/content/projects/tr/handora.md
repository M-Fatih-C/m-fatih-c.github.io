---
{
  'slug': 'handora',
  'title': 'HANDORA',
  'categories': ['vision', 'software'],
  'technologies':
    ['MediaPipe', 'TensorFlow Lite', 'Computer Vision', 'Hand Tracking', 'Gesture Interaction'],
  'status': 'prototype',
  'featured': false,
  'repositoryVisibility': 'none',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'self-reported',
  'summary': 'MediaPipe/TFLite tabanlı el takibiyle sol eli imleç yönetimine, sağ eli tıklama ve kaydırmaya ayıran deneysel bilgisayar kontrol prototipi.',
  'description': 'HANDORA, kamera görüntüsünden el takibi yaparak bilgisayar girdisi üretmeyi araştırdığım bağımsız prototiptir. MediaPipe/TFLite tabanlı yaklaşımda iki ele farklı görevler verilir: sol el imleci yönlendirirken sağ el tıklama ve kaydırma hareketlerini kontrol eder. El algılama ve kontrol kararlılığı geliştirme sınırları olarak devam etmektedir; çalışma eski medya kontrolü prototipinden ayrıdır.',
  'role': 'MediaPipe/TFLite tabanlı el takibini iki elli etkileşime dönüştüren prototip geliştirme; sol el ile imleç, sağ el ile tıklama/kaydırma görev ayrımı üzerine çalışma.',
  'problem': 'Kamera üzerinden temas gerektirmeyen bilgisayar kontrolünde imleç hareketini, tıklamayı ve kaydırmayı birbirine karıştırmadan yorumlamak gerekir. Elin izini kaybetmek veya istemsiz hareketleri komut saymak kullanım kararlılığını bozabilir.',
  'solution': 'El takibi için MediaPipe/TFLite tabanlı yaklaşım kullanılır. Sol elin hareketleri imleç yönetimine; sağ elin hareketleri tıklama ve scroll işlevlerine ayrılır. Bu görev ayrımı, hareket yorumlama ile bilgisayar girdisi üretimini ayrı sorumluluklar olarak ele alır. Algılama ve stabilite sorunları, prototipin henüz çözülmüş kabul edilmeyen parçalarıdır.',
  'architecture':
    [
      'Kameradan görüntü alma',
      'MediaPipe/TFLite tabanlı el takibi',
      'Sol el: imleç yönetimi / sağ el: tıklama ve kaydırma',
      'Yorumlanan hareketlerin bilgisayar kontrol komutlarına dönüştürülmesi',
    ],
  'features':
    [
      'Kamera üzerinden el takibi.',
      'Sol el ile imleç yönetimi.',
      'Sağ el ile tıklama ve kaydırma işlevleri.',
      'İki ele farklı kontrol görevleri veren prototip yaklaşımı.',
    ],
  'technicalChallenges':
    [
      'Elin algılanamaması veya izinin kaybolması sırasında kontrolün kararlı kalması.',
      'İmleç titremesi, hareket algılama kararlılığı ve istemsiz komutlar.',
      'Kamera, ışık ve el görünürlüğü değişimlerinin etkileşime etkisi.',
    ],
  'decisions':
    [
      'İmleç hareketi ile tıklama/kaydırmayı farklı ellere ayırmak.',
      'Eski gesture-media-control çalışmasıyla ayrı proje kapsamını korumak.',
      'Algılama ve stabilite sorunlarını giderilmiş bir özellik gibi sunmamak.',
    ],
  'testing':
    [
      'Bu teknik açıklama, proje sahibinin paylaştığı prototip yaklaşımına dayanır.',
      'Ölçülmüş algılama başarısı, gecikme veya cihaz uyumluluğu için ayrı bir doğrulama raporu sunulmamıştır.',
    ],
  'results':
    [
      'Sol el ile imleç, sağ el ile tıklama/kaydırma görev ayrımına dayalı deneysel kontrol prototipi.',
      'Kullanılan el takibi yaklaşımı ve devam eden kararlılık sorunları açıklığa kavuşturuldu.',
    ],
  'limitations':
    [
      'El algılama ve kontrol stabilitesi üzerinde geliştirme gerekmektedir.',
      'Platform uyumluluğu, erişilebilirlik ve performans doğrulanmış sonuçlar olarak sunulmaz.',
      'Canlı demo veya herkese açık kaynak kodu bağlantısı bulunmuyor.',
    ],
  'projectId': 'handora',
  'lang': 'tr',
  'images': [],
  'sourceState': 'self-reported',
  'order': 17,
  'related': ['gesture-media-control'],
  'presentation': 'case-study',
}
---

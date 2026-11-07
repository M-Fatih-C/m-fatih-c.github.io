---
{
  'slug': 'ing-datathon',
  'title': 'ING Türkiye Datathon',
  'categories': ['ml', 'data', 'competitions', 'archive'],
  'technologies':
    ['Python', 'pandas', 'NumPy', 'scikit-learn', 'LightGBM', 'XGBoost', 'CatBoost', 'Optuna'],
  'status': 'archive',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/ing-datathon-ml-pipeline',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/ing-datathon-ml-pipeline' },
      {
        'label': 'Temporal features',
        'url': 'https://github.com/M-Fatih-C/ing-datathon-ml-pipeline/blob/main/feature_engineering_optimized.py',
      },
      {
        'label': 'Ensemble',
        'url': 'https://github.com/M-Fatih-C/ing-datathon-ml-pipeline/blob/main/ensemble_model.py',
      },
      {
        'label': 'Data contract documentation',
        'url': 'https://github.com/M-Fatih-C/ing-datathon-ml-pipeline/pull/1',
      },
    ],
  'summary': 'Müşteri davranışı verileri üzerinde zaman pencereli özellik çıkarımı, boosting modelleri, ensemble ve Optuna deneylerini bir araya getiren yarışma arşivi.',
  'description': 'ING Türkiye Datathon deposu, müşteri davranışı modelleme için geliştirilmiş Python deneylerini içeriyor. Keşif, geçmiş veriden özellik çıkarımı, LightGBM/XGBoost/CatBoost modelleri, ensemble ve hiperparametre arama yolları bulunuyor. Erken özellik dosyası ile optimize edilmiş train/test çıktıları ayrı deney sözleşmeleri. Kod, dağıtılmış tahmin hizmeti değil; izinli yarışma verisi ve yeniden üretim düzeni gerektiren araştırma arşivi.',
  'role': 'Veri hazırlama, özellik mühendisliği ve model karşılaştırma deneylerinin geliştirilmesi.',
  'problem': 'Müşteri geçmişini model girdisine dönüştürürken referans tarihinden sonraki hareketleri kullanmak veri sızıntısına yol açabiliyor. Farklı zaman pencereleri ve model aileleri birçok deney üretirken, train/test şemalarının uyumu ve çıktıların izlenebilirliği önem kazanıyor. Yarışma metriğini optimize etmek de tek bir genel doğruluk skorundan daha ayrıntılı değerlendirme gerektiriyor.',
  'solution': 'Optimize edilmiş özellik yolu müşteri geçmişini referans tarihinden önce filtreleyip 6, 12 ve 24 aylık pencerelerde özet özellikler üretiyor. Train/test özellik dosyaları ensemble ve Optuna script’lerinin girdisi oluyor. LightGBM, XGBoost, CatBoost ve klasik modeller karşılaştırma/ensemble akışında yer alıyor; kod Gini, recall ve lift tabanlı yarışma metriği bileşenlerini hesaplıyor. Keşif ve Colab odaklı entegre deney ayrı girişler olarak korunuyor. Yeni koşular için veri şeması, bölme ve seed kaydı gerekiyor.',
  'architecture':
    [
      'İzinli müşteri / geçmiş / referans CSV’leri',
      'Referans tarihinden önceki kayıtlar → zaman pencereli özellikler',
      'train_features / test_features → model eğitim script’leri',
      'Cross-validation → ensemble veya Optuna denemeleri',
      'Olasılıklar → yarışma metriği / submission dosyaları',
    ],
  'features':
    [
      'Zaman pencereli davranış özellikleri',
      'LightGBM / XGBoost / CatBoost model yolları',
      'Klasik modeller ve ensemble deneyleri',
      'Optuna hiperparametre araması',
      'Gini / recall@10% / lift@10% metrik bileşenleri',
    ],
  'technicalChallenges':
    [
      'Referans tarihine göre özellik kesimini koruyarak veri sızıntısını değerlendirmek.',
      'Erken ve optimize edilmiş özellik dosyalarının farklı şemalarını ayırmak.',
      'Müşteri örtüşmesi ve zamanın cross-validation yorumuna etkisini kontrol etmek.',
    ],
  'decisions':
    [
      'Özellik mühendisliği ve ensemble/arama script’leri ayrı tutuldu.',
      'Optimize yol açık train/test dosya sözleşmeleri kullanıyor.',
      'Deneyler dağıtım servisi yerine araştırma script’leri olarak korunuyor.',
    ],
  'testing':
    [
      'Geçmiş incelemede Python kaynakları sözdizimi açısından kontrol edildi.',
      'Yarışma verisiyle eğitim, Optuna denemesi veya submission yeniden üretilmedi; otomatik regresyon paketi yok.',
    ],
  'results':
    [
      'Zamansal özellik üretimi, ensemble ve arama için ayrı çalıştırılabilir deney yolları mevcut.',
      'Optimize edilmiş özellik çıktıları sonraki model script’leriyle açık dosya sözleşmesi kuruyor.',
    ],
  'limitations':
    [
      'Leaderboard derecesi veya yeni performans kazanımı doğrulanmadı.',
      'Yarışma verisi ve üretilmiş submission dosyaları dahil değil.',
      'Cross-validation kodu tek başına sızıntısız değerlendirme kanıtı değil.',
      'Veri sözleşmesi açıklamaları açık #1 PR’sinde; henüz ana dala birleşmedi.',
    ],
  'projectId': 'ing-datathon',
  'lang': 'tr',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 8,
  'related': [],
  'implementation':
    [
      {
        'title': 'Referans tarihini özellik hesabına taşıma',
        'detail': 'Optimize özellik script’i her müşteri-referans satırı için geçmiş hareketleri önce ref_date öncesine kesiyor. Ardından 6, 12 ve 24 aylık pencereler üzerinde işlem toplamı, ortalama ve değişkenlik gibi özetler hesaplıyor; müşteri bilgileriyle birlikte train/test özellik dosyalarına dönüştürüyor. Bu yaklaşım ham müşteri geçmişi ile model tablosu arasındaki dönüşümü açık hale getiriyor. Kayıtsız müşterilerin atlanması ve boş pencerelerin davranışı da bu sözleşmenin parçası; yeni veride satır sayısının ham girişle otomatik aynı kalacağı varsayılmamalı.',
      },
      {
        'title': 'Zamana dayalı fold ve model karşılaştırması',
        'detail': 'ensemble_model.py, ref_date değerlerini sıralayıp validation tarih gruplarından daha eski kayıtları train olarak seçen fold’lar oluşturuyor. Her fold için model clone ediliyor, predict_proba çıktısı üzerinden AUC, Gini, recall@10 ve lift@10 hesaplanıyor; ardından model tüm eğitim verisine fit ediliyor. Bu yapı rastgele train/test ayrımından farklı bir zaman sorusunu değerlendiriyor. Yine de kategori encoding’inin train/test birleşiminden öğrenilmesi ve aynı müşterinin farklı tarihlerde görünmesi ayrıca incelenmeli; kodda temporal fold olması tek başına sızıntısız değerlendirme kanıtı değil.',
      },
      {
        'title': 'Ensemble ağırlığı ve metrik seçiminin etkisi',
        'detail': 'Weighted ensemble yolu model olasılıklarını zaman fold’larından elde edilen ING skorlarına göre normalize edilmiş ağırlıklarla topluyor; average ve median alternatifleri de bulunuyor. Skor fonksiyonu Gini, recall@10 ve lift@10 bileşenlerini tanımlanmış baseline oranlarıyla birleştiriyor. Böylece model seçimi ile yarışmanın sıralama odaklı amacı arasında açık bir bağ kuruluyor. Ağırlıkların aynı validation sonuçlarından türetilmesi bağımsız final değerlendirmesini gereksiz kılmıyor. Buradaki anlatım hesaplama yolunu açıklıyor; yeni leaderboard sonucu veya doğrulanmış üstünlük sunmuyor.',
      },
    ],
}
---

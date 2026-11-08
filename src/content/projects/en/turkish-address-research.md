---
{
  'slug': 'turkish-address-research',
  'title': 'Turkish Address Research',
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
  'summary': 'A research collection exploring noisy Turkish-address normalization and task-specific label prediction through text methods, vector retrieval and geographic approaches.',
  'description': 'Created in the Teknofest/Hepsiburada address-matching context, this collection preserves different approaches across 25 experiment directories and 19 notebooks. It contains rule baselines, TF-IDF, transformer embeddings, FAISS retrieval and GIS paths. Data contracts and environments vary between experiments; the collection is not a single production API or a validated algorithm leaderboard.',
  'role': 'Research and software work preserved in the repository. The sources do not document individual or team responsibility in detail.',
  'problem': 'Free-form Turkish addresses contain abbreviations, letter variations, missing fields and place names repeated across provinces. These ambiguities complicate matching. Address-component normalization and competition-specific label prediction are also different objectives: a correct label does not establish that every address component was extracted correctly.',
  'solution': 'Independent experiments investigate text cleaning, dictionaries, sparse features, embedding similarity and geographic matching. One GIS path combines geocoding, candidate retrieval and text scoring; another uses spatial joins with administrative polygons. A detailed research guide describes inputs and outputs, distinguishes the methods and exposes reproducibility gaps instead of implying uniform behavior.',
  'architecture':
    [
      'Experiment-specific CSV inputs and local or Colab file paths.',
      'Text preprocessing with rules or learned feature representations.',
      'TF-IDF, transformer retrieval or an independent GIS processing path.',
      'Implementation-specific label prediction or normalization and separate output files.',
    ],
  'features':
    [
      'An index covering 25 historical experiment directories.',
      'Source-based model and artifact inventory for 19 notebooks.',
      'Text-similarity and FAISS candidate-retrieval experiments.',
      'Nominatim/KDTree hybrid and administrative-boundary spatial joins.',
    ],
  'technicalChallenges':
    [
      'Ambiguity from Turkish letter distinctions and repeated administrative place names.',
      'Missing training data, variable dependencies and hard-coded file paths.',
      'Geographic leakage and near-duplicate addresses that can inflate evaluation scores.',
    ],
  'decisions':
    [
      'Normalization and label prediction are described as separate research objectives.',
      'Directory names are not treated as proof of trained models or superior methods.',
      'Experiments remain preserved without claiming a common production system.',
    ],
  'testing':
    [
      'Source and notebook structure were inspected statically; no common benchmark was rerun.',
      'A missing baseline-v2 import and syntax issues in two notebooks were documented.',
      'The PR expands the research guide; these documentation changes remain unmerged.',
    ],
  'results':
    [
      'A documented research archive with method families, data contracts and reproduction requirements.',
      'No newly verified Accuracy/F1, speed or production-deployment result is available.',
    ],
  'limitations':
    [
      'Training CSV data is absent; not every experiment runs from a clean setup.',
      'Redistribution rights and personal-data status of existing address data remain unresolved.',
      'Geocoding can transmit data to third parties; the portfolio uses no raw address examples.',
    ],
  'projectId': 'turkish-address-research',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 9,
  'related': ['ing-datathon', 'machine-learning-notebooks'],
  'presentation': 'case-study',
}
---

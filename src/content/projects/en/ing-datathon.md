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
  'summary': 'A competition archive combining time-window customer features, boosting models, ensemble blending and Optuna experiments for customer-behavior modeling.',
  'description': 'The ING Türkiye Datathon repository contains Python experiments for customer-behavior modeling. It includes exploration, historical feature engineering, LightGBM/XGBoost/CatBoost models, ensemble blending and hyperparameter search. An earlier feature file and optimized train/test outputs have separate experiment contracts. This is a research archive requiring authorized competition data and a reproducible run setup, rather than a deployed prediction service.',
  'role': 'Development of data preparation, feature engineering and model-comparison experiments.',
  'problem': 'Turning customer history into model inputs can introduce leakage if records after a reference date are included. Multiple time windows and model families generate many experiment paths, making train/test schema alignment and traceable outputs important. Optimizing a competition metric also requires more detailed evaluation than a single generic accuracy figure, while customer overlap and temporal splits can change what validation results mean.',
  'solution': 'The optimized feature path filters customer history before each reference date and creates aggregate features over six-, twelve- and twenty-four-month windows. Its train/test feature files feed ensemble and Optuna scripts. LightGBM, XGBoost, CatBoost and classical models appear in comparison and blending flows; metric code combines Gini, recall and lift components. Exploration and an integrated Colab-oriented experiment remain separate entry points. New runs require explicit input schemas, split choices and recorded seeds.',
  'architecture':
    [
      'Authorized customer / history / reference CSVs',
      'Pre-reference records → time-window features',
      'train_features / test_features → model scripts',
      'Cross-validation → ensemble or Optuna trials',
      'Probabilities → competition metrics / submission files',
    ],
  'features':
    [
      'Time-window behavioral features',
      'LightGBM / XGBoost / CatBoost paths',
      'Classical models and ensemble experiments',
      'Optuna hyperparameter search',
      'Gini / recall@10% / lift@10% metric components',
    ],
  'technicalChallenges':
    [
      'Evaluating leakage while preserving reference-date feature cutoffs.',
      'Distinguishing schemas of earlier and optimized feature files.',
      'Accounting for customer overlap and time in cross-validation interpretation.',
    ],
  'decisions':
    [
      'Feature engineering and ensemble/search remain separate scripts.',
      'The optimized path uses explicit train/test file contracts.',
      'Experiments are preserved as research scripts rather than a deployment service.',
    ],
  'testing':
    [
      'Python sources were syntax-checked during the historical review.',
      'Training, Optuna trials and competition submissions were not reproduced; there is no automated regression suite.',
    ],
  'results':
    [
      'Separate experiment paths exist for temporal features, ensemble modeling and tuning.',
      'Optimized feature outputs establish explicit file contracts for downstream model scripts.',
    ],
  'limitations':
    [
      'No leaderboard position or new performance improvement has been verified.',
      'Competition data and generated submissions are excluded.',
      'Cross-validation code alone does not establish a leakage-free evaluation.',
      'Data-contract documentation remains in unmerged PR #1.',
    ],
  'projectId': 'ing-datathon',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 8,
  'related': [],
  'implementation':
    [
      {
        'title': 'Carrying the reference date into features',
        'detail': 'For each customer/reference row, the optimized feature script first cuts transaction history to records before ref_date. It then computes summaries such as totals, means and variability over six-, twelve- and twenty-four-month windows, combining them with customer attributes into train/test feature files. This exposes the transformation from raw history to a model table. Skipped customers without usable history and empty-window behavior are part of the contract; output row counts should not automatically be assumed to match raw inputs.',
      },
      {
        'title': 'Temporal folds for model comparison',
        'detail': 'ensemble_model.py sorts ref_date values and builds folds whose training records precede each validation date group. It clones the model for each fold, computes AUC, Gini, recall@10 and lift@10 from predict_proba, then fits the final model on all training data. This evaluates a different temporal question from a random split. Category encoding fitted on combined train/test data and customers repeated across dates still require review; temporal folds alone do not establish a leakage-free evaluation.',
      },
      {
        'title': 'How ensemble weights follow the metric',
        'detail': 'The weighted ensemble combines model probabilities using normalized ING scores from temporal validation; average and median alternatives also exist. The score function combines Gini, recall@10 and lift@10 through defined baseline ratios. This explicitly connects model weighting to the competition’s ranking-oriented objective. Reusing validation scores for weights does not remove the need for independent final evaluation. The narrative describes the implemented calculation path, without asserting a new leaderboard result or a verified improvement over another model.',
      },
    ],
  'presentation': 'case-study',
}
---

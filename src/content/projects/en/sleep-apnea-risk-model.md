---
{
  'slug': 'sleep-apnea-risk-model',
  'title': 'Sleep Apnea Risk Research',
  'categories': ['ml', 'data', 'research'],
  'technologies': ['Python', 'pandas', 'scikit-learn', 'Matplotlib'],
  'status': 'research',
  'featured': false,
  'repositoryVisibility': 'private',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'summary-only',
  'summary': 'Private logistic-regression research experiment exploring binary classification, ROC visualization and explicit input validation for tabular data.',
  'description': 'A logistic-regression research workflow for tabular data in a sleep-apnea context. It includes input loading, complete-row filtering, a stratified train/test split and evaluation plots. The project distinguishes software behavior from scientific validity and makes no claim of clinical success or performance measured on real patient data.',
  'role': 'Research data preparation and linkage of anthropometric and clinical variables; Python/pandas processing, classification and model evaluation.',
  'problem': 'Incorrect target labels, nonnumeric fields and accidental use of the target as an input can invalidate small research experiments. Successful execution is also not evidence of clinical benefit. The project explores a basic classification workflow with explicit input contracts and bounded software checks.',
  'solution': 'CSV or spreadsheet inputs are processed against numeric-feature and binary-target requirements. After incomplete rows are removed, a stratified holdout split supports logistic-regression evaluation. Classification summaries, ROC plots and coefficient inspection are research outputs. Review-branch checks reject missing columns, invalid labels and direct selection of the target as an input feature.',
  'architecture':
    [
      'Load authorized tabular research inputs',
      'Check numeric features and binary-target requirements',
      'Apply a stratified holdout split and fit logistic regression',
      'Inspect classification summaries, ROC plots and coefficients',
    ],
  'features':
    [
      'CSV and modern Excel inputs',
      'Numeric-feature and binary-target validation',
      'Stratified train/test splitting',
      'ROC/AUC plots and coefficient inspection',
    ],
  'technicalChallenges':
    [
      'Detecting invalid labels and direct target leakage',
      'Distinguishing software tests from clinical validity',
    ],
  'decisions':
    [
      'Keep a basic logistic-regression workflow with explicit limitations',
      'Reject direct target-as-feature selection',
      'Avoid presenting synthetic metrics as healthcare performance',
    ],
  'testing':
    [
      'The 7 November 2026 review branch passed 4 synthetic command-line regression tests.',
      'Checks covered successful execution and rejection of invalid inputs; patient-based performance was not evaluated.',
    ],
  'results':
    [
      'Clarified binary-label and numeric-input contracts.',
      'Checked successful execution and three invalid-input scenarios with synthetic tests.',
    ],
  'limitations':
    [
      'Not a medical device, diagnostic tool or clinical decision system.',
      'No cross-validation, external validation or clinical calibration protocol.',
      'Related records from the same participant can invalidate a simple row split.',
    ],
  'projectId': 'sleep-apnea-risk-model',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'order': 7,
  'related': ['tanita-report-extractor', 'eeg-als-research-toolkit'],
  'implementation':
    [
      {
        'title': 'From report preparation to an analysis table',
        'detail': 'My research contribution included working with anthropometric measurements extracted from Tanita reports alongside clinical variables, AHI/OSAS classes and questionnaire results. I used Python and pandas for cleaning and linkage. This project describes the tabular classification experiment associated with that broader preparation work; it is a separate software component from the report-extraction application.',
      },
      {
        'title': 'A data contract before a model',
        'detail': 'The workflow explicitly identifies feature columns and the target before classification. Non-numeric inputs, missing columns and labels outside the binary classes make results harder to interpret. Rejecting the target column in the feature list provides a basic safeguard against direct target leakage. Other indirect leakage and related records from the same participant require additional research-design controls.',
      },
      {
        'title': 'Interpreting logistic-regression outputs',
        'detail': 'A stratified training/test split precedes logistic regression, a classification summary, an ROC plot and coefficient inspection. Coefficients offer a starting point for examining how the model uses variables; they do not establish causality. Synthetic software tests check execution and rejection of invalid inputs. External validation, calibration and clinical-use evaluation remain outside this scope.',
      },
    ],
  'presentation': 'case-study',
}
---

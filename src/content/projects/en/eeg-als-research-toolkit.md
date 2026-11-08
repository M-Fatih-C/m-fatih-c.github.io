---
{
  'slug': 'eeg-als-research-toolkit',
  'title': 'EEG & ALS Research Toolkit',
  'categories': ['ml', 'data', 'research'],
  'technologies': ['Python', 'NumPy', 'SciPy', 'scikit-learn', 'PyQt5', 'Flask'],
  'status': 'research',
  'featured': false,
  'repositoryVisibility': 'private',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'summary-only',
  'summary': 'Private research toolkit exploring EEG, signal features and classical machine learning through desktop, offline and local web components.',
  'description': 'A collection of experimental Python tools for EEG and signal-processing research. Desktop acquisition workflows, offline feature/model experiments and a local audio-upload prototype are separate components. The collection demonstrates research-code organization without publishing participant recordings, model files or claims of clinical accuracy.',
  'role': 'Signal processing, feature extraction and development and evaluation of machine-learning prototypes for EEG-based yes/no intent classification.',
  'problem': 'When acquisition, feature extraction and classifier experiments span different tools, their requirements and limitations can become unclear. Code execution, prediction accuracy and clinical validity are separate questions. Local prototypes accepting uploads also need basic constraints on how filenames and output locations are handled.',
  'solution': 'Desktop acquisition, offline research scripts and the local audio-processing prototype are treated as separate responsibilities. The general workflow explores numerical signal features and classical classifiers. A review-branch change normalizes uploaded filenames and rejects unusable names. Synthetic tests focus on that file-handling behavior; they do not establish scientific validity or successful end-to-end processing of real recordings.',
  'architecture':
    [
      'Handle experimental signal streams in the desktop component',
      'Explore feature extraction and models in offline scripts',
      'Keep local audio-upload experiments in a separate web component',
      'Evaluate each component against its own data and validation boundaries',
    ],
  'features':
    [
      'Experimental desktop signal interface',
      'Signal-feature and classical-ML research scripts',
      'Local audio-upload and processing prototype',
      'Synthetic checks for filename handling',
    ],
  'technicalChallenges':
    [
      'Separating hardware requirements from software validation',
      'Avoiding clinical claims from research predictions',
      'Confining uploaded-file write locations',
    ],
  'decisions':
    [
      'Evaluate desktop, offline and web components separately',
      'Use no participant recordings or real models in regression tests',
      'Avoid treating a filename fix as complete web security',
    ],
  'testing':
    [
      'The 7 November 2026 review branch passed 2 synthetic upload tests with audio processing mocked.',
      'Acquisition, GUI, real audio/EEG, model files and end-to-end prediction were not tested.',
    ],
  'results':
    [
      'Prepared a filename-handling fix confining uploads to their destination directory.',
      'Verified rejection of invalid names without starting processing.',
    ],
  'limitations':
    [
      'No claim of clinical validity or diagnostic use.',
      'No end-to-end validation with hardware or real recordings.',
      'Authentication, quotas and concurrent-job isolation require additional design for the local web prototype.',
      'Only trusted local model files should be loaded.',
    ],
  'projectId': 'eeg-als-research-toolkit',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'order': 6,
  'related': ['sleep-apnea-risk-model', 'tanita-report-extractor'],
  'implementation':
    [
      {
        'title': 'Experimental work on yes/no communication',
        'detail': 'I worked on EEG-based yes/no intent classification in research aimed at alternative communication for people living with ALS. My contribution covered signal processing, feature extraction and development and evaluation of machine-learning prototypes. The toolkit represents the software side of these experiments; it does not provide a ready-to-use communication device or a clinically validated system.',
      },
      {
        'title': 'Separating signal streams from offline experiments',
        'detail': 'The desktop component handles experimental signal streams, while offline scripts focus on numerical features and classifier experiments. Separating these modes makes it possible to examine a feature or model change independently of data acquisition. Live signal quality, hardware connections, participant protocols and model evaluation require separate validation; successful script execution is not evidence of end-to-end accuracy.',
      },
      {
        'title': 'File boundaries in the separate audio prototype',
        'detail': 'The local audio-upload prototype is separate from the EEG classification workflow. Normalizing filenames and rejecting unusable names limits writes outside the intended destination directory. Two synthetic regression tests address this file-handling behavior. Their count cannot be interpreted as EEG prediction quality, hardware compatibility or a clinical outcome.',
      },
    ],
  'presentation': 'case-study',
}
---

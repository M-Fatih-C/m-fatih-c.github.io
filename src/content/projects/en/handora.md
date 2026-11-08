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
  'summary': 'Experimental computer-control prototype using MediaPipe/TFLite hand tracking, with the left hand controlling the cursor and the right hand handling clicks and scrolling.',
  'description': 'HANDORA is my independent prototype exploring computer input through camera-based hand tracking. The MediaPipe/TFLite approach assigns different roles to each hand: the left hand controls the cursor, while the right hand handles clicking and scrolling. Hand detection and control stability remain development limitations. The work is distinct from the earlier media-control prototype.',
  'role': 'Prototype development combining MediaPipe/TFLite hand tracking with two-handed interaction: left-hand cursor control and right-hand clicking/scrolling.',
  'problem': 'Camera-based touchless computer control needs to distinguish cursor movement, clicking and scrolling. Losing a hand track or interpreting unintended motion as a command can make the interaction unstable.',
  'solution': 'The prototype uses a MediaPipe/TFLite-based hand-tracking approach. Left-hand movements map to cursor control, while right-hand movements handle clicking and scrolling. This separates gesture interpretation from computer-input generation. Detection and stability issues remain open parts of the prototype rather than solved capabilities.',
  'architecture':
    [
      'Camera image input',
      'MediaPipe/TFLite-based hand tracking',
      'Left hand: cursor control / right hand: clicking and scrolling',
      'Conversion of interpreted gestures into computer-control commands',
    ],
  'features':
    [
      'Camera-based hand tracking.',
      'Cursor control with the left hand.',
      'Clicking and scrolling with the right hand.',
      'A prototype assigning different control roles to the two hands.',
    ],
  'technicalChallenges':
    [
      'Maintaining stable control when hand detection or tracking is lost.',
      'Cursor jitter, gesture stability and unintended commands.',
      'Effects of camera conditions, lighting and hand visibility on interaction.',
    ],
  'decisions':
    [
      'Assign cursor movement and clicking/scrolling to different hands.',
      'Maintain a separate scope from the earlier gesture-media-control project.',
      'Keep detection and stability problems visible as development limitations.',
    ],
  'testing':
    [
      'This technical account follows the prototype approach described by the project owner.',
      'No separate validation report establishes measured detection accuracy, latency or device compatibility.',
    ],
  'results':
    [
      'An experimental control prototype separating left-hand cursor movement from right-hand clicking/scrolling.',
      'The hand-tracking approach and remaining stability issues are documented.',
    ],
  'limitations':
    [
      'Hand detection and control stability require further development.',
      'Platform compatibility, accessibility and performance are not presented as validated outcomes.',
      'No live demo or publicly accessible source-code link is available.',
    ],
  'projectId': 'handora',
  'lang': 'en',
  'images': [],
  'sourceState': 'self-reported',
  'order': 17,
  'related': ['gesture-media-control'],
  'presentation': 'case-study',
}
---

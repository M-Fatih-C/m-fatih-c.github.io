---
{
  'slug': 'gesture-media-control',
  'title': 'Gesture Media Control',
  'categories': ['software', 'vision', 'archive'],
  'technologies': ['Python', 'OpenCV', 'NumPy', 'PyAutoGUI', 'Ultralytics YOLO'],
  'status': 'prototype',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/gesture-media-control',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'Repository source', 'url': 'https://github.com/M-Fatih-C/gesture-media-control' },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/gesture-media-control/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/gesture-media-control/blob/1f9610318e803b1d7735af71ae9b5c5a9601047c/README.md',
      },
    ],
  'summary': 'An early computer-vision prototype with two independent scripts exploring webcam motion or external YOLO hand detection for triggering media keyboard shortcuts.',
  'description': 'The collection contains a motion experiment using background subtraction and contour-center history, plus a YOLO experiment looking for a hand class in an external best.pt model. OpenCV processes camera frames; PyAutoGUI sends keyboard commands to the active application. This historical work is separate from the later HANDORA system.',
  'role': 'Early computer-vision and desktop-input experiments preserved in the repository. Contribution distribution or productization responsibility is not separately documented.',
  'problem': 'Translating simple camera movements into desktop media controls requires distinguishing image noise from user intent. Lighting, background motion and the active application’s shortcuts affect behavior. Incorrect detection can generate real keyboard input rather than merely an incorrect visual prediction.',
  'solution': 'The first script derives previous/next-track shortcuts from horizontal contour movement and play/pause from a steady position. The second searches for a hand class in a trusted external YOLO model and sends a media shortcut with a cooldown. These remain independent approaches without a verified detection benchmark or shared product architecture.',
  'architecture':
    [
      'Local webcam frames captured through OpenCV.',
      'Background subtraction/contour history or an external YOLO model.',
      'Command triggers based on thresholds and cooldowns.',
      'Real keyboard input sent to the active application through PyAutoGUI.',
    ],
  'features':
    [
      'An experiment mapping sideways movement to Ctrl+Left/Right.',
      'Space triggering from a steady contour position.',
      'A media-command experiment using a YOLO hand class.',
      'Preview window, exit control and background reset in the motion experiment.',
    ],
  'technicalChallenges':
    [
      'Thresholds sensitive to lighting and background motion.',
      'External model class names and compatible weights.',
      'Camera/accessibility permissions and application-specific shortcuts.',
    ],
  'decisions':
    [
      'The scripts are described as separate experiments and historical work distinct from HANDORA.',
      'Model weights are external and must come from a trusted source.',
      'Import smoke tests are avoided because imports start camera and keyboard side effects.',
    ],
  'testing':
    [
      'Source syntax was inspected; no camera was opened or keyboard commands sent.',
      'No external best.pt model was supplied or executed.',
      'There is no automated functional suite or cross-platform benchmark.',
    ],
  'results':
    [
      'Two preserved prototypes illustrating motion-based and model-based control ideas.',
      'Detection accuracy, latency and real media-application compatibility were not measured.',
    ],
  'limitations':
    [
      'The external model cannot be replaced with arbitrary renamed weights.',
      'Scripts start camera/input loops at module level.',
      'The portfolio includes no real camera recordings or personal footage; no license file is included.',
    ],
  'projectId': 'gesture-media-control',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 22,
  'related': ['handora'],
}
---

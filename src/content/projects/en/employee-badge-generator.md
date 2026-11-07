---
{
  'slug': 'employee-badge-generator',
  'title': 'Employee Badge Generator',
  'categories': ['software', 'enterprise'],
  'technologies': ['Python', 'Tkinter', 'PyMuPDF', 'python-docx', 'Pillow', 'PyInstaller'],
  'status': 'prototype',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'Repository source', 'url': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu' },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu/blob/558a525c5afb7c81041cf7859f452189843dcda9/README.md',
      },
      {
        'label': 'Windows packaging instructions',
        'url': 'https://github.com/M-Fatih-C/Yaka-Kart-Otomasyonu/blob/558a525c5afb7c81041cf7859f452189843dcda9/docs/BUILD.md',
      },
    ],
  'summary': 'A desktop document-preparation tool arranging front/back badge PDFs into A4 Word documents with previews, ordering and configurable printing layout settings.',
  'description': 'This Tkinter application renders PDF badges as images and places them into DOCX pages intended for duplex printing. Card dimensions, DPI, margins, cards per page and file order are configurable. Profiles and statistics use local JSON files; the source also supports extracting PDFs from ZIP/RAR inputs.',
  'role': 'Desktop application and document-processing work preserved in the repository. Customer scope or team responsibility is not documented in public sources.',
  'problem': 'Manually arranging many front/back badge PDFs for printing creates repetitive work. Card dimensions, spacing, ordering and duplex alignment must be considered together. The workflow also needs controlled handling of documents that may contain employee names or photographs.',
  'solution': 'PyMuPDF renders PDF pages, Tkinter presents previews, and python-docx places images into A4 grids. Users manage file order and printing parameters and can reuse saved profiles. The open PR corrects source-package installation and the Windows packaging entry point. An Excel-based employee-data merge is not claimed as an implemented feature.',
  'architecture':
    [
      'PDF or archive selection and card ordering through Tkinter.',
      'Page processing and previews using PyMuPDF/Pillow.',
      'DOCX grid generation with dimensions, DPI and front/back margins.',
      'Local JSON configuration, profiles and generation statistics.',
    ],
  'features':
    [
      'Front/back PDF previews and file ordering.',
      'A4 DOCX output with configurable card placement.',
      'Saving/loading profiles and local statistics.',
      'Options to extract PDFs from ZIP/RAR inputs.',
    ],
  'technicalChallenges':
    [
      'Physical alignment varies with Word versions and printer drivers.',
      'Correct src-layout package installation and Windows launcher packaging.',
      'Archive support depends on external tools and trusted documents.',
    ],
  'decisions':
    [
      'The existing large GUI module was preserved to avoid changing printing behavior.',
      'Setup installs the package rather than only requirements.',
      'Real employee documents are excluded from development examples and portfolio imagery.',
    ],
  'testing':
    [
      'Editable installation, wheel/sdist builds, import and syntax checks were reported successful for the open PR.',
      'CI covers packaging and source checks, not GUI or print acceptance.',
      'Windows executables and physical duplex alignment were not tested.',
    ],
  'results':
    [
      'A source-implemented workflow from PDF inputs to an editable Word print document.',
      'Installation and configuration boundaries are documented; no measured time-saving claim is made.',
    ],
  'limitations':
    [
      'Printer and Word acceptance requires a synthetic test print.',
      'Excel-based employee-data merging is not an implemented feature.',
      'Employee names, photos and generated documents can contain personal data.',
    ],
  'projectId': 'employee-badge-generator',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 13,
  'related': [],
}
---

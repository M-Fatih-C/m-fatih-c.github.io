---
{
  'slug': 'minicpuz',
  'title': 'MiniCPUZ',
  'categories': ['software'],
  'technologies': ['Python', 'PySide6', 'Jinja2', 'psutil', 'PyInstaller'],
  'status': 'prototype',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/BBSP',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'Repository source', 'url': 'https://github.com/M-Fatih-C/BBSP' },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/BBSP/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/BBSP/blob/74cdd3f1d63c6dcfc1203983d9e25ffd4238c52c/README.md',
      },
    ],
  'summary': 'A desktop utility presenting CPU, memory, GPU, disk, network and operating-system information in tabs, with JSON and HTML report export.',
  'description': 'The product identified in the historical BBSP repository is MiniCPUZ. Its PySide6 interface presents system information in separate views, with collection and export modules separated from the GUI. Hardware detail depends on the operating system, permissions and optional helper tools. A Windows-oriented PyInstaller recipe is also present.',
  'role': 'System-information tool work preserved in the repository. Individual contributions or team roles are not detailed in public sources.',
  'problem': 'System information is spread across platform-specific tools, and available detail varies by hardware. A desktop utility must combine that information readably while tolerating missing fields. Reports can also contain serial numbers and network details that need review before sharing.',
  'solution': 'Qt tabs display data provided by a system-information module. JSON export preserves Unicode values; Jinja2 HTML templates produce readable reports. The open PR adds synthetic exporter regressions and replaces instructions referencing absent build scripts. It does not guarantee identical information across platforms or a tested packaged executable.',
  'architecture':
    [
      'PySide6 GUI and single-instance guard.',
      'Platform-dependent system_info collection module.',
      'CPU, memory, GPU, disk/network and operating-system views.',
      'Report export through JSON serialization and Jinja2 HTML templates.',
    ],
  'features':
    [
      'Tabbed hardware and operating-system views.',
      'Unicode-preserving JSON report export.',
      'HTML reports generated from source templates.',
      'A Windows-oriented PyInstaller spec file.',
    ],
  'technicalChallenges':
    [
      'Platform-dependent availability of WMI and hardware helper tools.',
      'Missing GPU/SPD information and permission requirements.',
      'Locating templates and resources inside packaged applications.',
    ],
  'decisions':
    [
      'The BBSP repository name remains while the MiniCPUZ product name is explained.',
      'Reporting is tested with synthetic data independently of host inventory.',
      'Elevated permissions are not automatically requested to fill missing fields.',
    ],
  'testing':
    [
      'Two synthetic Unicode JSON roundtrip and HTML escaping/no-GPU regressions were reported passing in the open PR.',
      'These tests do not validate hardware collection, GUI behavior or drivers.',
      'Windows packaging and clean-machine acceptance were not performed.',
    ],
  'results':
    [
      'A source structure separating system collection, desktop presentation and report export.',
      'Limited, concrete regression coverage for exporters; no performance measurement is claimed.',
    ],
  'limitations':
    [
      'Equivalent populated fields are not guaranteed across platforms and hardware.',
      'macOS/Linux packaging and Windows binary acceptance require separate verification.',
      'Real exports can contain identifying system information; no license file is included.',
    ],
  'projectId': 'minicpuz',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 14,
  'related': [],
}
---

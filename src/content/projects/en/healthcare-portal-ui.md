---
{
  'slug': 'healthcare-portal-ui',
  'title': 'Healthcare Portal UI Prototype',
  'categories': ['software'],
  'technologies': ['C#', 'ASP.NET Core MVC', 'Razor', 'HTML/CSS', '.NET 6'],
  'status': 'prototype',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/healthcare-portal-prototype',
  'year': null,
  'sourceReferences':
    [
      {
        'label': 'Repository source',
        'url': 'https://github.com/M-Fatih-C/healthcare-portal-prototype',
      },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/healthcare-portal-prototype/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/healthcare-portal-prototype/blob/56853c4907db0fe3c2ba5f0674d6aa818691c469/README.md',
      },
    ],
  'summary': 'An MVC and Razor interface prototype showing healthcare landing pages, doctor-dashboard navigation and registration/login layouts, with incomplete server-side functionality.',
  'description': 'This ASP.NET Core MVC project preserves healthcare-themed page layouts and doctor-dashboard navigation. Controllers, models, Razor views and static assets are present in the source. It targets net6.0; data/business layers and production authentication are not implemented. It is evaluated as a presentation prototype rather than a patient-management system.',
  'role': 'MVC interface-prototype work preserved in the repository. A healthcare organization, real-user deployment or team role is not verified by the sources.',
  'problem': 'A healthcare portal needs exploration of landing-page, registration and doctor-workspace layouts. This interface study must remain distinct from server responsibilities such as secure account creation, authorization and patient-record processing, none of which follows merely from displaying the relevant pages.',
  'solution': 'Controller actions serve Razor pages, while shared layouts and static resources provide consistent presentation. The landing page’s doctor-panel action is prototype navigation. The open documentation PR explains the backend boundary and historical runtime without presenting missing authentication or persistence behavior as implemented.',
  'architecture':
    [
      'Program.cs configures MVC and static-file serving.',
      'Controller actions for landing pages, doctor dashboard and registration.',
      'Razor views and shared layouts.',
      'Local model placeholders and wwwroot static assets.',
    ],
  'features':
    [
      'Healthcare landing-page layout.',
      'Doctor-dashboard page and separate dashboard layout.',
      'Registration/login interface layouts.',
      'MVC separation of controllers and views.',
    ],
  'technicalChallenges':
    [
      'Moving from the unsupported net6.0 target to a verified runtime.',
      'The gap between authentication middleware and missing service configuration.',
      'Clearly separating interface navigation from real authorization.',
    ],
  'decisions':
    [
      'The project is labeled as an interface prototype.',
      'Framework migration and a real backend are separate changes requiring tests.',
      'The portfolio uses only synthetic interface content.',
    ],
  'testing':
    [
      'Source and project structure were reviewed; dotnet restore/build/run were not run in the audit environment.',
      'There is no shared automated test suite.',
      'The open PR contains documentation changes only.',
    ],
  'results':
    [
      'A preserved presentation prototype demonstrating MVC page layouts.',
      'No working healthcare backend or successful current build is claimed.',
    ],
  'limitations':
    [
      'Registration does not create secure accounts; verified identity and persistence are absent.',
      '.NET 6 is unsupported; deployment requires a separate migration and tests.',
      'Use with real patient records or hospital services has not been verified.',
    ],
  'projectId': 'healthcare-portal-ui',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 20,
  'related': [],
}
---

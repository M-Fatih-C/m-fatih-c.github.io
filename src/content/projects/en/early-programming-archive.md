---
{
  'slug': 'early-programming-archive',
  'title': 'Early Programming Archive',
  'categories': ['software', 'mobile', 'archive'],
  'technologies': ['Java', 'Kotlin', 'Android', 'Gradle', 'Java Swing', 'Python', 'Selenium'],
  'status': 'archive',
  'featured': false,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/early-programming-archive',
  'year': null,
  'sourceReferences':
    [
      {
        'label': 'Repository source',
        'url': 'https://github.com/M-Fatih-C/early-programming-archive',
      },
      {
        'label': 'Open documentation and quality PR',
        'url': 'https://github.com/M-Fatih-C/early-programming-archive/pull/1',
      },
      {
        'label': 'Reviewed README at PR head',
        'url': 'https://github.com/M-Fatih-C/early-programming-archive/blob/f39931f4150f806934d2f4e5009bc5035686d89d/README.md',
      },
    ],
  'summary': 'A historical source archive preserving original Android, Java and Python project boundaries across interface, algorithm and automation exercises from early learning.',
  'description': 'The collection preserves seven independent Android/Gradle projects, Java/NetBeans/Swing work and Python exercises. Android examples include number guessing, a book app and password generation, alongside desktop, browser, network and data scripts. It presents sources from an early learning period rather than a unified product or a modern one-command build.',
  'role': 'Early programming and learning work preserved in the repository. Individual or team contributions within each subproject are not separately documented.',
  'problem': 'Educational projects written with different languages and tools can appear compatible with one modern environment. In practice, Android JDK/Gradle/SDK combinations, IDE layouts and Python side effects differ. These boundaries need to be explained while preserving the historical source projects.',
  'solution': 'Android, Java and Python work remains in separate directories with original project boundaries. Users inspect a selected subproject’s build files and requirements before constructing its environment. Documentation explains Gradle wrapper inputs and template tests without claiming a shared passing build, meaningful application coverage or a maintained product.',
  'architecture':
    [
      'Seven independent Gradle/Android Studio projects under Android.',
      'Separate NetBeans/Swing and object-oriented exercises under Java.',
      'Independent GUI, data, network and browser exercises under Python.',
      'Subproject-specific entry points and dependency layouts.',
    ],
  'features':
    [
      'Android exercises such as number guessing, book and password applications.',
      'Java desktop and object-oriented programming examples.',
      'Python calculation, clock, data and Selenium exercises.',
      'Preserved original build files and project boundaries.',
    ],
  'technicalChallenges':
    [
      'Historical JDK, Android SDK and Gradle compatibility.',
      'Different IDE, GUI and browser requirements.',
      'Distinguishing template test presence from behavioral coverage.',
    ],
  'decisions':
    [
      'Subprojects are not converted into one root application.',
      'Gradle wrapper JARs remain as required build inputs.',
      'No automatic merge or deletion is performed with the related Projelerim archive.',
    ],
  'testing':
    [
      'Structure and source were reviewed; Python syntax was checked.',
      'Seven Android ExampleUnitTest files are templates and do not establish application behavior.',
      'Historical Android/Java builds and GUI/browser/network scripts were not run.',
    ],
  'results':
    [
      'A preserved source collection illustrating learning across several technologies.',
      'No shared current build success, test-coverage level or deployment result is claimed.',
    ],
  'limitations':
    [
      'There is no common root dependency manifest or execution command.',
      'Historical environments and external-service compatibility require subproject-specific review.',
      'No license file is included; old network/browser code should be evaluated in controlled environments.',
    ],
  'projectId': 'early-programming-archive',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 24,
  'related': [],
  'presentation': 'brief',
}
---

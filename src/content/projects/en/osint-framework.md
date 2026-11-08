---
{
  'slug': 'osint-framework',
  'title': 'OSINT Framework',
  'categories': ['software', 'data', 'research'],
  'technologies': ['Python', 'FastAPI', 'SQLAlchemy', 'SQLite', 'Redis', 'WebSocket', 'Typer'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/osint_framework',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/osint_framework' },
      {
        'label': 'Source',
        'url': 'https://github.com/M-Fatih-C/osint_framework/tree/main/osint_framework',
      },
      {
        'label': 'Regression & documentation work',
        'url': 'https://github.com/M-Fatih-C/osint_framework/pull/12',
      },
    ],
  'summary': 'A modular prototype organizing authorized open-source investigations through plugin scans, persistent jobs, an API, live progress and optional worker processes.',
  'description': 'OSINT Framework brings domain, IP, email, username and related target types into a common investigation workflow. Its FastAPI interface, Typer CLI and web dashboard share scan and result components. SQLite persists jobs and findings, while an optional Redis-worker path separates long-running work from the API process. Experimental image modules are explicitly research components, not validated identity-verification tools.',
  'role': 'Software development of investigation workflows, plugin architecture and API/worker components.',
  'problem': 'Open-source investigation tools often use different target types, providers and output formats. Tying a long scan to an HTTP request makes progress tracking and later review difficult. A shared job model, provider-failure handling and durable findings help organize this work. The investigation must also remain bounded by authorization for each target, personal-data permissions and the behavior of external services.',
  'solution': 'A plugin registry selects modules for each target type, and a job manager runs scans through an asynchronous pipeline. Default persistence uses async SQLAlchemy with SQLite. In optional Redis mode, the API produces queued jobs and separate workers consume them; pub/sub events feed progress back to WebSocket clients. Case notes and correlation components retain investigation context. The Typer client and dashboard provide two interfaces to the same underlying workflow.',
  'architecture':
    [
      'Dashboard / Typer CLI → FastAPI',
      'Plugin registry and scan-job manager',
      'In-process pipeline or Redis queue → workers',
      'Async SQLAlchemy → SQLite job/result records',
      'Redis pub/sub → WebSocket progress and reports',
    ],
  'features':
    [
      'Domain, IP, email and username plugins',
      'Persistent scan jobs and case notes',
      'Separate Redis worker processes',
      'Live WebSocket progress',
      'Optional providers and Ollama summaries',
    ],
  'technicalChallenges':
    [
      'Bridging worker progress to WebSocket clients in a different API process.',
      'Managing SQLite lifecycles and isolating independent regression tests.',
      'Separating external-provider failures and fallback outputs from confirmed findings.',
    ],
  'decisions':
    [
      'SQLite is the default durable store; Redis is an optional execution mode.',
      'Target-specific logic lives in plugins behind a common engine.',
      'Network-restricted contracts replace live providers in regression validation.',
    ],
  'testing':
    [
      'A historical network-restricted run passed 39 regressions for open PR #12.',
      'The PR isolates tests in temporary SQLite databases; these results do not validate live providers or distributed recovery under production load.',
    ],
  'results':
    [
      'API, CLI and dashboard share a common scan/job/result model.',
      'Separate-worker execution and a live progress bridge are implemented in the source.',
    ],
  'limitations':
    [
      'Known advisories in the pinned dependency stack remain unresolved; PR #12 does not update dependencies.',
      'Authentication is optional and access control requires separate configuration before network deployment.',
      'Face-similarity results are not identity verification; personal-data processing needs permission and human review.',
      'New test isolation and CI work remain in unmerged PR #12.',
    ],
  'projectId': 'osint-framework',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 4,
  'related': [],
  'implementation':
    [
      {
        'title': 'Progress follows module completion',
        'detail': 'CoreEngine first persists a job, selects plugins for the target type and records the module count. Modules enter the worker pool with their own timeout boundaries. Results are persisted and progress events emitted as asyncio.as_completed yields them, rather than waiting for every module to finish. A module failure can become a named error payload. This supports partial visibility into a scan, while retaining the need to distinguish provider errors and fallback outputs from confirmed findings.',
      },
      {
        'title': 'A worker lifecycle separate from the API',
        'detail': 'In Redis mode, the API can enqueue a job ID and return a queued state; the worker reloads target metadata from persistence. The worker service reserves an item, claims a database lease and renews ownership through heartbeats. Completion clears the lease and acknowledges the queue item. Startup recovery addresses inflight items and stale running jobs. Separate queue, state and event systems increase operational flexibility and failure boundaries; the implemented recovery paths are not proof of resilience under production load.',
      },
      {
        'title': 'From module findings to correlation and live views',
        'detail': 'After module execution, the persisted job results feed Correlator and an optional summary component. In-process events and a Redis pub/sub bridge connect dashboard WebSocket updates to the same job identity. Separating the data model from presentation lets the CLI and dashboard share findings. That architecture also creates access and retention responsibilities for case notes, provider responses and reports. It does not resolve the known dependency advisories or the limitations of optional authentication.',
      },
    ],
  'presentation': 'case-study',
}
---

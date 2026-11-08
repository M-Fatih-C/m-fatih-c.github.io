---
{
  'slug': 'macpilot',
  'title': 'MacPilot',
  'categories': ['software', 'mobile'],
  'technologies':
    ['Swift', 'SwiftUI', 'Network.framework', 'Bonjour', 'CryptoKit', 'Keychain', 'XCTest'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/MacPilot',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/MacPilot' },
      {
        'label': 'Architecture',
        'url': 'https://github.com/M-Fatih-C/MacPilot/blob/main/ARCHITECTURE_PUBLIC.md',
      },
      {
        'label': 'Agent',
        'url': 'https://github.com/M-Fatih-C/MacPilot/tree/main/Sources/MacPilotAgent',
      },
      {
        'label': 'Validation & documentation work',
        'url': 'https://github.com/M-Fatih-C/MacPilot/pull/1',
      },
    ],
  'summary': 'A local-network prototype turning an iPhone into a Mac trackpad, keyboard and system-control interface through a shared Swift protocol and WSS.',
  'description': 'MacPilot comprises a SwiftUI iOS client, a macOS agent and a SharedCore protocol library. Bonjour discovers devices; WSS carries input events, system metrics, shortcuts and chunked file transfers. The agent uses native system APIs and requires macOS permissions. It remains a controlled-network prototype, with first-pairing authorization explicitly unresolved before any production use.',
  'role': 'Development of the native iOS/macOS client-agent architecture and shared communication components.',
  'problem': 'Controlling a Mac from an iPhone involves more than sending coordinates across a network. Touch gestures need translation into input events, devices need discovery, connections need state management and transferred file chunks need verification. Because the same channel enables powerful machine actions, device identity, operator approval and macOS Accessibility permissions are central design concerns alongside responsiveness and usability.',
  'solution': 'The SwiftUI client converts gestures into shared InputEvent models and connects to a Bonjour-discovered macOS agent over Network.framework WSS. An agent router dispatches messages to input, metrics, command and file handlers. CGEvent-based components apply input, while chunk and checksum models support file transfer. P256 challenge signatures and certificate pinning exist, but an unknown first peer currently bootstraps trust automatically. Explicit operator-approved pairing is therefore not established by the current handshake.',
  'architecture':
    [
      'SwiftUI screens / gestures → shared InputEvent models',
      'Bonjour discovery → WSS connection and challenge flow',
      'macOS router → input / metrics / command handlers',
      'File manager → chunk / checksum transfer',
      'Responses → connection state and SwiftUI screens',
    ],
  'features':
    [
      'Trackpad and keyboard gestures',
      'Bonjour device discovery',
      'CPU / memory / disk / network metrics',
      'Command allowlist and shortcuts',
      'Chunked file transfer',
      'Shared Swift message and payload models',
    ],
  'technicalChallenges':
    [
      'Filtering and smoothing touch gestures into usable pointer input.',
      'Managing native permissions, connection state and device identity together.',
      'Evaluating encrypted transport separately from authorization of the first device.',
    ],
  'decisions':
    [
      'Client and agent share strongly typed SharedCore models.',
      'Active transport uses WSS/TLS; separate AES-GCM envelope code is not mandatory in the current router.',
      'runScript is disabled and destructive power commands require an additional environment opt-in.',
    ],
  'testing':
    [
      'Historical local validation passed 38 selected NetworkingTests, FileTransferTests and InputLatencyTests.',
      'CI in open PR #1 covers only networking and file-transfer classes; physical iPhone–Mac flows and all Keychain-dependent tests were not revalidated.',
    ],
  'results':
    [
      'The iOS client and macOS agent are organized around a shared protocol.',
      'Input, metrics and file channels are implemented as separate agent components.',
    ],
  'limitations':
    [
      'Automatic first-contact peer trust remains an unresolved authorization boundary.',
      'Active messages use plaintext application envelopes inside WSS; additional envelope encryption is not mandatory.',
      'Helper installation components are unfinished and physical-device acceptance was not performed.',
      'New CI/documentation remain in unmerged PR #1; pairing behavior was not changed.',
    ],
  'projectId': 'macpilot',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 3,
  'related': [],
  'implementation':
    [
      {
        'title': 'From gestures to native input events',
        'detail': 'TrackpadViewModel does not treat raw touches as final pointer coordinates. Normalization, speed-dependent gain and low-pass smoothing prepare pointer and scroll deltas; decaying momentum can continue generating scroll events after a gesture ends. On the agent, InputEventProcessor applies a token-bucket limit and dispatches accepted events on a userInteractive queue to mouse or keyboard handlers. This separates interaction tuning from native execution without establishing an unmeasured latency or perfectly smooth physical-device experience.',
      },
      {
        'title': 'An explicit file-transfer protocol',
        'detail': 'File-transfer models carry transfer identity, chunk index, total chunk count, byte offset and checksum. ChunkedTransfer helpers handle 256 KB pieces, SHA-256 verification, byte ranges and progress through shared types. UI progress and agent validation can therefore refer to the same transfer concepts. Chunking bounds individual messages, but the splitFile helper collects chunks into an array, so not every path is constant-memory streaming. Physical-device acceptance remains a separate validation task.',
      },
      {
        'title': 'Transport security versus first authorization',
        'detail': 'After Bonjour discovery, client and agent use WSS/TLS and P256 challenge signatures, with shared models defining message types on both sides. However, adding an unknown first public key to the trusted-device store is different from explicit operator approval. Likewise, AES-GCM envelope helpers in SharedCore do not establish mandatory use by the active router. The engineering boundary is to keep these distinctions visible: encrypted transport alone cannot determine whether the first peer is authorized.',
      },
    ],
  'presentation': 'case-study',
}
---

---
{
  'slug': 'jarvis-assistant',
  'title': 'J.A.R.V.I.S',
  'categories': ['ai', 'software'],
  'technologies':
    ['Python', 'FastAPI', 'Ollama', 'MLX', 'Redis', 'ChromaDB', 'SQLite', 'React', 'Three.js'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/J.A.R.V.I.S',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/J.A.R.V.I.S' },
      {
        'label': 'Model routing',
        'url': 'https://github.com/M-Fatih-C/J.A.R.V.I.S/blob/main/jarvis/core/router.py',
      },
      { 'label': 'Components', 'url': 'https://github.com/M-Fatih-C/J.A.R.V.I.S/tree/main/jarvis' },
      {
        'label': 'Configuration & validation work',
        'url': 'https://github.com/M-Fatih-C/J.A.R.V.I.S/pull/14',
      },
    ],
  'summary': 'An alpha assistant combining Ollama and optional MLX models with rule-based routing, memory, tool experiments, voice and a React/Three.js interface.',
  'description': 'J.A.R.V.I.S brings several model and interface components into one assistant prototype. Its Python package includes routing and orchestration, Redis/ChromaDB/SQLite memory, and tool and voice modules. A React/Three.js visual client accompanies the FastAPI backend. The MLX path requires supported Apple hardware. This repository is separate from jarvis-core and its deterministic policy-centered runtime.',
  'role': 'Development of assistant orchestration, model adapters, memory and visual interface components.',
  'problem': 'An assistant needs to handle short conversations, deeper analysis, tool use and user context within a coherent flow. Coupling every task to one model or module can mix hardware requirements with service failures. Adding memory, voice and powerful tools also makes data boundaries and execution limits more important. A modular prototype provides a place to explore these concerns without treating every integration as production-ready.',
  'solution': 'A rule-based router selects fast/deep flows from message length, keywords and complexity. Ollama and optional MLX adapters abstract model access, while orchestration connects memory and tool modules. Redis, ChromaDB and SQLite serve distinct memory concerns. FastAPI supports a React/Three.js client; voice and separate device clients remain experimental layers. Setup has explicit requirements for model services and platform-specific extras rather than assuming every dependency runs on every device.',
  'architecture':
    [
      'React / Three.js client → FastAPI',
      'Rule-based router → fast / deep flow',
      'Ollama / optional MLX adapters',
      'Orchestration → memory / tool / voice modules',
      'Redis / ChromaDB / SQLite → context and response',
    ],
  'features':
    [
      'Rule-based fast/deep model routing',
      'Ollama and optional Apple MLX adapters',
      'Multi-component memory layer',
      'Web / code / shell tool experiments',
      'Voice and wake-word modules',
      'React / Three.js visual client',
    ],
  'technicalChallenges':
    [
      'Separating platform-specific MLX and voice dependencies from baseline tests.',
      'Testing health contracts without reaching real model providers.',
      'Keeping profile encryption, authentication and log/cache boundaries explicit.',
    ],
  'decisions':
    [
      'Provider adapters separate model implementations; current routing uses deterministic rules.',
      'The interface and Python backend have separate build paths.',
      'Open PR #14 proposes loopback defaults and production-secret validation.',
    ],
  'testing':
    [
      'Historical validation of open PR #14 passed 158 tests with the MLX extra and external sockets blocked; seven platform/gated cases were skipped.',
      'Ruff/Black and mypy across 45 source files passed; the UI built with a large-chunk warning. Real-model and voice acceptance were not performed.',
    ],
  'results':
    [
      'Model, memory, tool, API and UI components are organized as separate modules.',
      'Fast/deep routing produces an inspectable deterministic decision and reason.',
    ],
  'limitations':
    [
      'Alpha prototype without end-to-end validation for every device and service.',
      'Encrypting selected profile values does not encrypt the whole SQLite file or logs.',
      'Shell/file tools carry powerful access and remote services may transmit data.',
      'Loopback and production-configuration hardening remain in unmerged PR #14, not an applied main-branch release.',
    ],
  'projectId': 'jarvis-assistant',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 11,
  'related': ['jarvis-core', 'minigpt-m4'],
  'implementation':
    [
      {
        'title': 'Keeping routing decisions explainable',
        'detail': 'Router evaluates Turkish/English deep-task keywords, message length and sentence count to select a fast or deep lane. Its decision includes a human-readable reason, and Orchestrator maps the lane to the selected model client. The code therefore exposes why a message took a heavier path. This avoids running a separate learned classifier for the choice, but does not establish semantic routing accuracy or a measured improvement in latency or cost.',
      },
      {
        'title': 'Separating memory failure from response generation',
        'detail': 'For each request, Orchestrator assembles a system message, session history and the new user message. If short-term memory is absent or fails to read, it can continue stateless with empty history; after responding it attempts to store the user/assistant turn. Write failures are logged without canceling an already generated response. This defines behavior when memory is unavailable, while accepting possible conversational context loss. It is not a uniform continuity guarantee across every memory component.',
      },
      {
        'title': 'The actual scope of profile encryption',
        'detail': 'The SQLite profile component stores key/value records; values written with encryption enabled use AES-GCM and are decrypted on reads. Schema and key names remain visible, and unencrypted records are also supported. Profile encryption therefore cannot be generalized to the entire database, logs, Chroma indexes or voice files. This distinction makes storage boundaries explicit during development. Key changes introduce availability and migration concerns; existing content is not assumed to be automatically re-encrypted.',
      },
    ],
}
---

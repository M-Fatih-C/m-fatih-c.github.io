---
{
  'slug': 'jarvis-core',
  'title': 'Jarvis Core',
  'categories': ['ai', 'software'],
  'technologies': ['Python', 'FastAPI', 'MLX', 'Swift', 'Firebase', 'TypeScript'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/jarvis-core',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/jarvis-core' },
      {
        'label': 'Policy matrix',
        'url': 'https://github.com/M-Fatih-C/jarvis-core/blob/main/core/policy/rules.py',
      },
      {
        'label': 'Architecture',
        'url': 'https://github.com/M-Fatih-C/jarvis-core/tree/main/docs/architecture',
      },
      {
        'label': 'Runtime guide & validation work',
        'url': 'https://github.com/M-Fatih-C/jarvis-core/pull/11',
      },
    ],
  'summary': 'A local-first agent core separating LLM proposals from deterministic risk policy, approval state and tool execution, with optional Apple integrations.',
  'description': 'Jarvis Core places an explicit control layer between a model proposing a tool and the tool actually running. Its Python/FastAPI runtime handles risk classes, approval waits, expiry and repeated calls. Memory, native Apple bridges, Gmail and Firebase modules extend that core. It is independent of the J.A.R.V.I.S repository, which uses different packages, entry points and orchestration contracts.',
  'role': 'Development of the agent runtime, risk policy and integration contracts.',
  'problem': 'A language model proposing a tool call does not establish that the action is authorized or trustworthy. Writes, external communication and destructive operations need different rules. Resuming a run after approval, controlling repeated call IDs and bounding execution also require explicit runtime behavior. This project treats model reasoning and application authority as separate layers rather than assuming a generated instruction should execute immediately.',
  'solution': 'A chat request builds context and obtains a response or tool proposal from the model. A deterministic matrix evaluates proposed calls by operating mode and risk class. Allowed calls reach the executor, approval decisions enter a waiting state and denied calls return a result. Approval TTL, step/tool limits and repeated call IDs are runtime concerns. Mock adapters support local development; MLX, Apple IPC, Gmail and Firebase paths require separate configuration and permissions.',
  'architecture':
    [
      'FastAPI chat request → context assembly',
      'Mock / MLX adapter → response or tool proposal',
      'Mode + risk matrix → allow / approval / deny',
      'Approval state and executor → tool result',
      'Result → next agent step / completion',
    ],
  'features':
    [
      'Observe / assist / autonomous policy modes',
      'Deterministic decisions by risk level',
      'Expiring approvals and resumable runs',
      'Step and tool-call limits',
      'Memory and native Apple IPC components',
      'Optional Gmail / Firebase / iOS layers',
    ],
  'technicalChallenges':
    [
      'Resuming approval-paused runs with correct state and handling repeated calls.',
      'Keeping tool risk labels aligned with execution policy.',
      'Separating mock contracts from real-model, device and service acceptance.',
    ],
  'decisions':
    [
      'Model proposals, policy decisions and execution occupy separate layers.',
      'Default assist mode requires approval for writes, external and destructive operations; sensitive operations are denied.',
      'External integrations are opt-in, with mock providers for local development.',
    ],
  'testing':
    [
      'Historical validation passed 237 Python tests with external network sockets blocked.',
      'Swift and Firebase-emulator checks are separate CI paths; live Gmail, model quality and physical iOS acceptance are not covered by that Python count.',
    ],
  'results':
    [
      'An inspectable mode/risk decision matrix exists independently of model proposals.',
      'Approval, state transitions and integrations have separate contracts.',
    ],
  'limitations':
    [
      'Policy depends on tool risk definitions and is not a guarantee against all prompt injection.',
      'Autonomous mode can allow R2 writes without approval.',
      'Local-first does not mean optional Gmail/Firebase workflows are offline.',
      'Expanded documentation and CI-runner changes remain in unmerged PR #11.',
    ],
  'projectId': 'jarvis-core',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 10,
  'related': ['jarvis-assistant', 'macpilot', 'minigpt-m4'],
  'implementation':
    [
      {
        'title': 'Binding approval to a specific action',
        'detail': 'ApprovalStore treats approval as more than a yes/no flag. Creation computes an action digest from the agent-run ID, tool-call ID, tool name and arguments; the request also records user identity and expiry. Approval and consumption verify that binding, and consumption is marked as one-time use. Changed parameters can therefore become an explicit integrity error. Because the store is in memory, this mechanism alone does not provide persistent approvals across process restarts.',
      },
      {
        'title': 'A second policy check at execution',
        'detail': 'After the agent loop evaluates policy, ToolExecutor evaluates the call again; an is_approved flag cannot override a hard deny. Pydantic validates arguments before dispatch. Concurrent requests with the same tool-call ID are serialized by a per-call asyncio lock, and their result can be reused from a process-local cache. Layering checks reduces reliance on the model loop alone. An in-memory cache does not imply global exactly-once execution across services or restarts.',
      },
      {
        'title': 'Resuming a waiting run with a tool result',
        'detail': 'When approval is required, the runtime enters WAITING_APPROVAL and retains the pending call on the run. Approval verifies action integrity, consumes the authorization and executes the tool. Its result becomes a TOOL message in the context before the multi-step loop resumes. Rejection has its own transition and explanation. Step and tool-call limits still bound continuation. The contribution is an inspectable lifecycle for proposal, authority and execution, not a claim that every integration has passed live-service acceptance.',
      },
    ],
  'presentation': 'case-study',
}
---

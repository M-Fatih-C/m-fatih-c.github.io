---
{
  'slug': 'finansim',
  'title': 'Finansım',
  'categories': ['software', 'data'],
  'technologies': ['Python', 'FastAPI', 'Jinja2', 'HTMX', 'SQLAlchemy', 'SQLite'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'private',
  'year': null,
  'sourceReferences': [],
  'confidentialityLevel': 'summary-only',
  'summary': 'Private local-first finance application combining double-entry accounting, reviewable document imports, payment planning and encrypted backup support.',
  'description': 'Finansım brings accounts, cards, payment plans and document imports into a local application. Its double-entry ledger prioritizes consistency, while import previews keep users in control of suggested records. This overview describes the application and data-integrity approach without sharing personal financial information, banking documents or private source code.',
  'role': 'Local application development, focusing on accounting rules, document-import workflows and testable data management.',
  'problem': 'Tracking transactions and payment plans across separate tools makes duplicate records and inconsistent categorization harder to detect. Importing extracted document data without review can turn extraction mistakes into permanent accounting errors. The project explores a local workspace that preserves user oversight while applying explicit record-integrity rules.',
  'solution': 'A local web interface brings account tracking, planning and document imports over a shared persistence layer. Monetary amounts use integer minor units. Balanced ledger entries, reversals and period locks support consistent records. PDF, CSV and spreadsheet imports produce reviewable suggestions. Backup handling uses integrity checks and a separate restore destination, with encryption available for configured backup archives.',
  'architecture':
    [
      'Local browser interface for accounts and payment planning',
      'Application rules for accounting and reviewable document imports',
      'SQLite persistence with coordinated transaction and audit records',
      'Backup workflow with integrity checks and a separate restore target',
    ],
  'features':
    [
      'Account, card and payment-plan tracking',
      'Double-entry ledger with immutable-record safeguards',
      'Reviewable PDF, CSV and spreadsheet imports',
      'Optional encrypted backups and controlled restoration',
    ],
  'technicalChallenges':
    [
      'Maintaining accounting balance while detecting duplicate records',
      'Preserving user oversight during document extraction',
      'Checking backup integrity without touching operational data',
    ],
  'decisions':
    [
      'Represent monetary amounts as integer minor units',
      'Treat extracted entries as suggestions requiring review',
      'Separate local-use boundaries and backup encryption from live-data encryption',
    ],
  'testing':
    [
      'The 7 November 2026 audit recorded 159 passing tests on the review branch using temporary synthetic data.',
      'Real banking documents, user databases and operational restore acceptance were outside that validation.',
    ],
  'results':
    [
      'Completed the existing 159-test accounting and application validation.',
      'Documented distinct boundaries for imports, ledger behavior and backups.',
    ],
  'limitations':
    [
      'Not an automatic bank connection or independent financial verification service.',
      'The application does not encrypt the live database or imported documents at rest.',
      'Real-data installation and operational restore acceptance require separate checks.',
    ],
  'projectId': 'finansim',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'order': 1,
  'related': ['tenderai', 'employee-badge-generator'],
  'implementation':
    [
      {
        'title': 'From a document row to a reviewed entry',
        'detail': 'I treated document import as a reviewable workflow rather than immediately turning every extracted row into a final ledger entry. The user checks the transaction, account and classification before proceeding. This places a control point between PDF extraction and accounting. The separation matters when working with different document layouts, repeated imports and incorrect matches: extracting text and accepting a financial record are different operations.',
      },
      {
        'title': 'Keeping amounts and history consistent',
        'detail': 'Amounts are stored in integer minor units to limit rounding differences associated with floating-point arithmetic. Balanced transaction lines form the core rule of the double-entry approach. Reversals handle corrections without silently rewriting history, making the relationship between an original entry and its correction traceable. Period locks and audit records support the same focus on data integrity.',
      },
      {
        'title': 'Local operation and backup security',
        'detail': 'Running locally does not automatically encrypt the application files. I considered encrypted backups separately from the live SQLite database: backup protection, restore targets and integrity validation are distinct responsibilities. Checking a restore at a separate destination protects existing records. Access control and disk security on the device remain relevant for the live database and imported documents.',
      },
    ],
}
---

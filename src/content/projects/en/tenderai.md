---
{
  'slug': 'tenderai',
  'title': 'TenderAI',
  'categories': ['ai', 'software', 'data'],
  'technologies': ['Python', 'Streamlit', 'OpenAI', 'Gemini', 'FAISS', 'SQLAlchemy', 'Docker'],
  'status': 'prototype',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/tender-analysis-ai',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/tender-analysis-ai' },
      {
        'label': 'Application',
        'url': 'https://github.com/M-Fatih-C/tender-analysis-ai/blob/main/app.py',
      },
      {
        'label': 'AI components',
        'url': 'https://github.com/M-Fatih-C/tender-analysis-ai/tree/main/src/ai_engine',
      },
      {
        'label': 'Validation & documentation work',
        'url': 'https://github.com/M-Fatih-C/tender-analysis-ai/pull/1',
      },
    ],
  'summary': 'A Streamlit prototype combining Turkish tender PDF extraction, AI-assisted risk review, retrieval-based questions, comparison and reporting components.',
  'description': 'TenderAI explores structured review of lengthy tender specifications through a Streamlit application. It includes PDF text extraction, OpenAI/Gemini adapters, FAISS retrieval, company matching and document comparison. SQLAlchemy stores analysis records, and reporting modules provide multiple export formats. Findings are review drafts rather than authoritative decisions: source passages and calculations require human inspection, and the prototype is not a verified procurement or legal service.',
  'role': 'Software development of document analysis, retrieval and user-interface components.',
  'problem': 'Tender specifications contain numerous conditions, dates, eligibility requirements and cross-references. Comparing documents or answering a specific question can require repeatedly reading the same passages. An automated summary may omit an important requirement when disconnected from its source. Document context, company information and review outputs therefore need to be considered together, with a clear path back to the original material.',
  'solution': 'The application extracts PDF text and passes it into analysis components using OpenAI or Gemini adapters according to the chosen flow. A FAISS retrieval layer brings document chunks into question-answering. Company matching and comparison modules bring different review tasks into the same interface. SQLAlchemy persists users and analysis records, while PDF, Excel and DOCX report components export results. A synthetic demo mode allows interface exploration without real documents or provider credentials.',
  'architecture':
    [
      'Streamlit interface → PDF upload / text extraction',
      'Analysis orchestration → OpenAI / Gemini adapters',
      'Document chunks → FAISS retrieval → questions and answers',
      'SQLAlchemy → user and analysis records',
      'Comparison / company matching → report exports',
    ],
  'features':
    [
      'Tender PDF text extraction',
      'AI-assisted risk-review flow',
      'FAISS document question-answering',
      'Company matching and tender comparison',
      'PDF / Excel / DOCX report components',
      'Synthetic demonstration mode',
    ],
  'technicalChallenges':
    [
      'Extracting consistent text from varied PDF layouts.',
      'Keeping generated assessments connected to document context.',
      'Separating first-use tokenizer downloads from offline test requirements.',
    ],
  'decisions':
    [
      'The application uses Streamlit and Python components rather than a standalone REST server.',
      'Retrieval and model-provider integrations remain separate modules.',
      'Synthetic demonstrations are distinct from live-provider configuration.',
    ],
  'testing':
    [
      'Historical validation of open PR #1 passed 234 tests with tokenizer tables cached and external network sockets blocked.',
      'An uncached offline run failed on first-use tokenizer downloads; Docker runtime and live-model quality were not validated.',
    ],
  'results':
    [
      'Extraction, retrieval and reporting components are combined in one application.',
      'Question-answering, comparison and company matching have separate Python modules.',
    ],
  'limitations':
    [
      'Text extraction from image-only scanned PDFs is not guaranteed.',
      'Generated analysis can omit or misinterpret important conditions.',
      'Live providers can transmit document text to external services.',
      'CI/lint and documentation corrections remain in unmerged PR #1, not a released update.',
    ],
  'projectId': 'tenderai',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 2,
  'related': [],
  'implementation':
    [
      {
        'title': 'Retrieval shaped around tender documents',
        'detail': 'IhaleAnalizAI defaults to 1,500-character chunks with 200-character overlap. Its RecursiveCharacterTextSplitter tries tender headings such as Madde, BÖLÜM and Ek before generic whitespace separators. OpenAI embeddings create an in-memory FAISS index; each analysis question retrieves nearby chunks for its prompt. Overlap can carry context across a split clause, but similarity search cannot establish that every requirement was found. This is a question-focused analysis path rather than a single undifferentiated document summary.',
      },
      {
        'title': 'Six review steps and structured aggregation',
        'detail': 'The main analysis pipeline runs risk, required documents, penalties, financial summary and timeline sequentially. Its executive summary then receives those earlier results as context. Sequential execution makes rate-limit concerns explicit, while retaining accumulated request latency. The response parser tries plain JSON, fenced JSON and trailing-comma cleanup; unresolved responses retain raw_response and parse_error fields. This exposes formatting failures rather than silently discarding them, but successful parsing does not establish that a generated interpretation is correct.',
      },
      {
        'title': 'Analysis retrieval and chat use different context paths',
        'detail': 'The chatbot is separate from the main FAISS analysis path. It retains a bounded document context and sends the first 20,000 characters plus the last five conversation messages to Gemini. Consequently, not every question-answer flow should be described as the same retrieval architecture. Without a usable key it follows a demo path; quota or service failures can return a labeled demo fallback. This enables interface exploration while making clear that information near the end of a long document may be absent from chatbot context.',
      },
    ],
  'presentation': 'case-study',
}
---

---
{
  'slug': 'minigpt-m4',
  'title': 'MiniGPT-M4',
  'categories': ['ai', 'ml', 'research'],
  'technologies': ['Python', 'PyTorch', 'NumPy', 'Byte-level BPE', 'Apple MPS'],
  'status': 'research',
  'featured': true,
  'repositoryVisibility': 'public',
  'githubUrl': 'https://github.com/M-Fatih-C/minigpt-m4',
  'year': null,
  'sourceReferences':
    [
      { 'label': 'GitHub', 'url': 'https://github.com/M-Fatih-C/minigpt-m4' },
      {
        'label': 'Transformer',
        'url': 'https://github.com/M-Fatih-C/minigpt-m4/blob/main/model/gpt.py',
      },
      {
        'label': 'Validation & experiment notes',
        'url': 'https://github.com/M-Fatih-C/minigpt-m4/pull/8',
      },
    ],
  'summary': 'A compact language-model study exposing Transformer internals through a custom BPE tokenizer, PyTorch components and local Apple Silicon training experiments.',
  'description': 'MiniGPT-M4 implements the fundamental pieces of a decoder-only Transformer in PyTorch rather than wrapping a hosted model API. Tokenization, data preparation, causal attention, tied weights and generation can be inspected together. It includes a local Apple MPS training path and separately archived dialogue fine-tuning experiments. Training corpora and usable trained weights are excluded, so the repository is an experiment environment rather than a ready-made assistant.',
  'role': 'Software development of the model architecture, tokenizer and local training experiments.',
  'problem': 'Understanding a language model requires more than calling an inference endpoint. Token preparation, masking future positions, shifting next-token targets and masking conversational loss all affect behavior. Running experiments on limited local hardware also requires treating architecture size, dataset preparation and training budget as related constraints. Historical corpus figures alone cannot establish how much data a training run actually processed.',
  'solution': 'The project combines byte-level BPE with token and position embeddings, pre-LayerNorm blocks and GELU feed-forward layers. Its output projection shares the token embedding weights, while training supports -100 target masking for assistant-only loss. Defaults use a 2,048-token vocabulary, 256-token context, 384-dimensional embeddings, eight layers and six attention heads. Training and checkpoint-based generation have separate entry points; archived dialogue experiments remain distinct from the primary pretraining path.',
  'architecture':
    [
      'Text preparation and byte-level BPE tokenizer',
      'uint16 token files and shifted next-token batches',
      'Token/position embeddings and causal Transformer blocks',
      'Tied language-model head, loss and optimization',
      'Autoregressive generation from a compatible checkpoint',
    ],
  'features':
    [
      'Custom byte-level BPE tokenizer',
      'Pre-LayerNorm, residual connections and causal attention',
      'Tied embedding/output weights',
      'Apple MPS and CPU execution paths',
      'Archived DailyDialog and SmolTalk fine-tuning experiments',
    ],
  'technicalChallenges':
    [
      'Keeping tokenizer, token-file and checkpoint dimensions compatible.',
      'Preserving conversational context and assistant targets when sampling windows.',
      'Distinguishing prepared corpus size from token positions processed in training.',
    ],
  'decisions':
    [
      'A compact default architecture and MPS support make local experiments practical.',
      'Primary pretraining and historical fine-tuning paths remain separate.',
      'Synthetic contracts assess component behavior independently of model quality.',
    ],
  'testing':
    [
      'Four CPU contract tests in open PR #8 passed historical validation: causality, weight/loss behavior, Unicode tokenization and batch alignment.',
      'Four older data-dependent diagnostic modules ran with synthetic tokens in an isolated copy; pretraining and checkpoint quality were not reproduced.',
    ],
  'results':
    [
      'Attention, tokenization, data loading and generation are available as inspectable modules.',
      'Historical preparation of 115,706,628 tokens is distinguished from 40,960,000 token positions in the described run; neither is a new training result.',
    ],
  'limitations':
    [
      'Trained weights and training corpora are excluded.',
      'The historical validation loss of 1.3553 is not an independently reproduced benchmark.',
      'General instruction following and factual reliability have not been established.',
      'New contracts and experiment documentation remain in unmerged PR #8.',
    ],
  'projectId': 'minigpt-m4',
  'lang': 'en',
  'images': [],
  'sourceState': 'open-pr',
  'confidentialityLevel': 'public',
  'order': 0,
  'related': ['jarvis-core', 'jarvis-assistant', 'machine-learning-notebooks'],
  'implementation':
    [
      {
        'title': 'A concrete token-data contract',
        'detail': 'TokenDataset opens training and validation files as uint16 NumPy memory maps. Each batch selects random starting positions and creates inputs plus one-token-shifted targets from the same windows. This separates text preparation from the training loop and avoids loading the full corpus into a single Python object. Batches are converted to int64 for PyTorch. The engineering constraint is compatibility between tokenizer vocabulary, file encoding and checkpoint dimensions; the presence of a token file does not establish that compatibility.',
      },
      {
        'title': 'Visible controls inside the training loop',
        'detail': 'train.py combines AdamW with linear learning-rate warmup and cosine decay. Gradient clipping, periodic train/validation loss estimates and generated samples offer different views of a run. Checkpoints store model state, optimizer state, step number and validation loss. These are mechanisms for inspecting experiments, not evidence that a configured run completed or produced useful language. Dataset revisions, tokenizer identity and run configuration still need explicit recording for a reproducible experiment.',
      },
      {
        'title': 'Context and sampling during generation',
        'detail': 'MiniGPT.generate uses only the most recent tokens within the model context limit for each next-token prediction. It scales the final-position logits by temperature, optionally masks choices outside top-k, then appends a multinomial sample. This makes sampling behavior inspectable independently of the model forward pass. A fixed context window simplifies the local experiment but discards earlier portions of long text. The implementation is not presented as KV-cache-accelerated generation, and no measured throughput claim follows from this code.',
      },
    ],
}
---

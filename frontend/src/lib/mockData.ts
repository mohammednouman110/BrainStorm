export const retentionData = [
  { day: "D1", withRevision: 95, withoutRevision: 80 },
  { day: "D2", withRevision: 90, withoutRevision: 55 },
  { day: "D3", withRevision: 88, withoutRevision: 38 },
  { day: "D5", withRevision: 86, withoutRevision: 25 },
  { day: "D7", withRevision: 84, withoutRevision: 18 },
  { day: "D14", withRevision: 82, withoutRevision: 10 },
  { day: "D30", withRevision: 80, withoutRevision: 5 },
];

export const todayPlan = [
  { id: 1, topic: "Neural Networks", count: 12, progress: 35, color: "cyan" },
  { id: 2, topic: "Quantum Mechanics", count: 8, progress: 60, color: "purple" },
  { id: 3, topic: "Spanish Verbs", count: 20, progress: 15, color: "pink" },
  { id: 4, topic: "System Design", count: 6, progress: 80, color: "gold" },
];

export const atRiskTopics = [
  { name: "Backpropagation", risk: 78 },
  { name: "Eigenvalues", risk: 65 },
  { name: "TCP Handshake", risk: 52 },
];

export const flashcards = [
  { id: 1, q: "What is spaced repetition?", a: "A learning technique that increases intervals between reviews of previously learned material to exploit the spacing effect.", topic: "Memory", difficulty: "Easy", lastReviewed: "2 days ago" },
  { id: 2, q: "Define the Ebbinghaus Forgetting Curve.", a: "A hypothesis describing the decrease in retention of memory over time, showing exponential decay without active recall.", topic: "Memory", difficulty: "Medium", lastReviewed: "5 days ago" },
  { id: 3, q: "What is gradient descent?", a: "An optimization algorithm that iteratively adjusts parameters to minimize a loss function by following the negative gradient.", topic: "ML", difficulty: "Hard", lastReviewed: "1 day ago" },
  { id: 4, q: "Explain attention mechanism.", a: "A technique that lets a model dynamically weight different parts of input when producing each output element.", topic: "ML", difficulty: "Hard", lastReviewed: "3 days ago" },
  { id: 5, q: "What is REM sleep?", a: "Rapid Eye Movement sleep — a phase associated with vivid dreaming and memory consolidation.", topic: "Biology", difficulty: "Easy", lastReviewed: "1 week ago" },
];

export const heatmapTopics = ["Neural Networks", "Linear Algebra", "Quantum", "Spanish", "System Design"];
export const heatmapGrid: Record<string, { concept: string; strength: number }[]> = {
  "Neural Networks": [
    { concept: "Perceptron", strength: 92 }, { concept: "Backprop", strength: 45 }, { concept: "CNN", strength: 78 },
    { concept: "RNN", strength: 60 }, { concept: "Transformers", strength: 84 }, { concept: "GANs", strength: 35 },
    { concept: "Dropout", strength: 88 }, { concept: "BatchNorm", strength: 70 }, { concept: "Attention", strength: 55 },
    { concept: "Embeddings", strength: 90 }, { concept: "Loss Funcs", strength: 75 }, { concept: "Optimizers", strength: 50 },
  ],
  "Linear Algebra": [
    { concept: "Vectors", strength: 95 }, { concept: "Matrices", strength: 90 }, { concept: "Eigenvalues", strength: 32 },
    { concept: "SVD", strength: 40 }, { concept: "Determinants", strength: 78 }, { concept: "Span", strength: 65 },
    { concept: "Basis", strength: 70 }, { concept: "Rank", strength: 60 }, { concept: "Null Space", strength: 45 },
  ],
  Quantum: [
    { concept: "Superposition", strength: 70 }, { concept: "Entanglement", strength: 55 }, { concept: "Qubits", strength: 80 },
    { concept: "Wave Func", strength: 40 }, { concept: "Operators", strength: 35 }, { concept: "Measurement", strength: 60 },
  ],
  Spanish: [
    { concept: "Present", strength: 95 }, { concept: "Preterite", strength: 70 }, { concept: "Imperfect", strength: 65 },
    { concept: "Subjunctive", strength: 30 }, { concept: "Conditional", strength: 45 }, { concept: "Future", strength: 80 },
  ],
  "System Design": [
    { concept: "Load Balancing", strength: 85 }, { concept: "Caching", strength: 90 }, { concept: "Sharding", strength: 50 },
    { concept: "CAP", strength: 75 }, { concept: "Queues", strength: 70 }, { concept: "CDN", strength: 80 },
  ],
};

export const radarData = [
  { topic: "Recall", value: 82 },
  { topic: "Speed", value: 68 },
  { topic: "Accuracy", value: 90 },
  { topic: "Depth", value: 74 },
  { topic: "Breadth", value: 65 },
  { topic: "Retention", value: 88 },
];

export const achievements = [
  { id: 1, name: "First Steps", desc: "Complete first review", unlocked: true, icon: "Sparkles" },
  { id: 2, name: "Week Warrior", desc: "7-day streak", unlocked: true, icon: "Flame" },
  { id: 3, name: "Memory Master", desc: "Reach 90% retention", unlocked: true, icon: "Brain" },
  { id: 4, name: "Marathon", desc: "30-day streak", unlocked: false, icon: "Trophy" },
  { id: 5, name: "Polymath", desc: "Study 5 topics", unlocked: true, icon: "Layers" },
  { id: 6, name: "Legendary", desc: "10000 XP", unlocked: false, icon: "Crown" },
];

export const chatSuggestions = ["Quiz me on Neural Networks", "Explain backpropagation", "Summarize today's reviews", "Generate study plan"];

export const initialMessages = [
  { role: "ai" as const, text: "Hey! I'm your BrainStorm AI tutor. I track what you learn and help you remember it forever. What shall we explore today?" },
];

export const mockAIResponses = [
  "Great question! Spaced repetition leverages the spacing effect — reviewing material at increasing intervals strengthens long-term memory far more than cramming.",
  "Let's break that down step by step. The core idea is that your brain encodes information more deeply when retrieval requires effort.",
  "Based on your recent activity, I'd recommend reviewing Backpropagation — your retention there has dropped to 45%.",
  "Here's a quick concept: think of memory like a muscle — it weakens without use, but each recall makes the connection stronger.",
];

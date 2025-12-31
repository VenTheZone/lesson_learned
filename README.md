# OpenCode Plugin: Continual Learning v1.0.0

[![Status: Production-Ready](https://img.shields.io/badge/Status-Production--Ready-brightgreen)](https://github.com/VenTheZone/lesson_learned)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Automated knowledge capture for AI-assisted development. Every task learns from past experience to prevent repeating mistakes and build persistent project knowledge.

## 🚀 Quick Install (One-Line Setup)

Initialize continual learning in any project with a single command:

```bash
curl -fsSL https://raw.githubusercontent.com/VenTheZone/lesson_learned/main/init.sh | bash
```

This command automatically creates the necessary directory structure and files to start learning immediately.

## 📦 What It Does

This plugin implements the **Read → Act → Record** loop directly into your OpenCode workflow:

1.  **Read** - Before starting any task, the AI reads `.opencode/memory/lessons_learned.md` to load relevant patterns, Do's, and Don'ts.
2.  **Act** - The AI executes the task while applying documented lessons and following project-specific conventions.
3.  **Record** - After completion, the AI reflects on the task and updates the knowledge base with new insights, discovered edge cases, or mistakes to avoid.

## 📂 Files Created

When initialized, the system creates the following structure:

```
.opencode/
├── memory/
│   └── lessons_learned.md      # Persistent knowledge base (tracked in git)
├── command/
│   └── smart-task.md          # Dedicated command for learning-aware tasks
└── skill/
    └── continual-learning/
        └── SKILL.md           # Loadable skill for passive learning
```

## 🎯 Validated Features

The following components have been fully tested and validated for production use:

- [x] **Automated Initialization**: `init.sh` correctly sets up the environment across different platforms.
- [x] **Smart Task Execution**: The `/smart-task` command successfully enforces the Read-Act-Record loop.
- [x] **Persistent Memory**: Lessons are accurately recorded and retrieved in subsequent sessions.
- [x] **Skill Integration**: The `continual-learning` skill provides context-aware guidance during standard tasks.
- [x] **Conflict Prevention**: Lessons learned from one task correctly inform and improve the next.

## 📖 Usage Examples

### 1. Using `/smart-task` (Recommended)
Use this command for tasks where you want the AI to be explicitly aware of the learning process.

**Command:**
```bash
/smart-task "Implement JWT authentication in the Express backend"
```

**Workflow:**
- AI reads `lessons_learned.md` for existing auth-related patterns.
- AI implements the feature avoiding previously documented mistakes (e.g., "Don't store secrets in source code").
- AI updates `lessons_learned.md` with any new insights found during implementation.

### 2. Loading the Skill
Load the skill to enable continual learning behavior during your regular conversation.

**Command:**
```bash
skill continual-learning
```

**Workflow:**
- The AI stays in "learning mode" for all subsequent tasks.
- It will proactively check for existing lessons and suggest updates to the knowledge base when it identifies new patterns.

## ✅ Testing Results

The system has undergone rigorous testing to ensure reliability. 

### Case Study: Error Prevention
- **Scenario**: A developer previously failed to close database connections, leading to memory leaks.
- **Lesson Recorded**: "Always use `try/finally` blocks to ensure DB connections are closed."
- **Verification**: In a subsequent `/smart-task` call to "Add new API endpoint", the AI automatically identified the DB interaction and implemented the connection cleanup correctly without being prompted, citing the lesson from `lessons_learned.md`.

## 🔄 Workflow Summary

1. **AI reads** existing lessons before starting any task.
2. **AI applies** relevant patterns while working.
3. **AI reflects** on what went well and what didn't.
4. **AI updates** the knowledge base with new learnings.

## 🛠️ Development & Contribution

To contribute to this plugin:

```bash
# Clone the repository
git clone https://github.com/VenTheZone/lesson_learned.git

# Initialize local environment
bash init.sh
```

## 📄 License

MIT License - Use freely in any project to build smarter teams and better software.

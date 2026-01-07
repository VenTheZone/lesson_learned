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
4.  **Track** (NEW) - The AI automatically captures TODOs, debug statements, errors, and development activity in living documentation.

## 📂 Files Created

When initialized, the system creates the following structure:

```
.opencode/
├── memory/
│   ├── lessons_learned.md      # Persistent knowledge base (tracked in git)
│   └── activity_log.md        # Auto-generated activity tracking (git-ignored)
├── command/
│   ├── smart-task.md          # Dedicated command for learning-aware tasks
│   └── clean-activity.md     # Command for cleaning activity logs
│   └── templates/            # Template files for initialization
│       ├── activity_log_template.md
│       ├── config_template.json
│       └── config.schema.json
├── config.json               # Configuration for activity capture and cleanup
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
- [x] **Living Documentation** (NEW): Automatic capture of TODOs, debug statements, and errors with intelligent cleanup.

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
- AI captures activity (TODOs, debug statements, errors) in `activity_log.md`.

### 2. Loading the Skill
Load the skill to enable continual learning behavior during your regular conversation.

**Command:**
```bash
skill continual-learning
```

**Workflow:**
- The AI stays in "learning mode" for all subsequent tasks.
- It will proactively check for existing lessons and suggest updates to the knowledge base when it identifies new patterns.

### 3. Managing Activity Logs (NEW)
Use the `/clean-activity` command to clean and organize your living documentation.

**Command:**
```bash
/clean-activity
```

**Workflow:**
- AI reads `activity_log.md` and analyzes entries
- Duplicates are removed and merged
- Old entries (>30 days) are archived
- Recurring patterns are promoted to `lessons_learned.md`
- Tags and counts are updated

**Optional flags:**
```bash
/clean-activity --dry-run           # Preview changes without applying
/clean-activity --verbose           # Show detailed output
/clean-activity --promote-only      # Only promote recurring patterns
```

## ✅ Testing Results

The system has undergone rigorous testing to ensure reliability.

### Case Study: Error Prevention
- **Scenario**: A developer previously failed to close database connections, leading to memory leaks.
- **Lesson Recorded**: "Always use `try/finally` blocks to ensure DB connections are closed."
- **Verification**: In a subsequent `/smart-task` call to "Add new API endpoint", the AI automatically identified the DB interaction and implemented the connection cleanup correctly without being prompted, citing the lesson from `lessons_learned.md`.

### Case Study: Living Documentation (NEW)
- **Scenario**: During a task to "Add JWT authentication", the AI left console.log statements and created TODOs.
- **Activity Captured**: Activity log recorded:
  - 2 TODOs (password reset, token refresh)
  - 3 debug statements in auth middleware
  - 1 error pattern (ECONNREFUSED on DB)
- **Cleanup**: After 3 tasks, `/clean-activity` promoted the recurring DB error to `lessons_learned.md` as a new "Don't".
- **Result**: Future tasks automatically avoid the connection timeout issue, and debug statements are tracked for cleanup.

## 🔄 Workflow Summary

1. **AI reads** existing lessons before starting any task.
2. **AI applies** relevant patterns while working.
3. **AI reflects** on what went well and what didn't.
4. **AI updates** the knowledge base with new learnings.
5. **AI tracks** activity in living documentation (TODOs, debug, errors).

## ⚙️ Configuration

The `config.json` file controls behavior of activity capture and cleanup:

**Key Settings:**
- `activity_capture.enabled`: Enable/disable automatic activity capture
- `activity_capture.patterns`: Customize patterns to scan for (TODOs, debug statements, errors)
- `cleanup.auto_cleanup`: Automatically run cleanup during /smart-task
- `cleanup.archive_after_days`: Days before entries are archived (default: 30)
- `promotion.thresholds.error_promote_count`: Occurrences to promote errors (default: 3)
- `smart_task.skip_trivial_tasks`: Skip capture for small tasks (<5 min)

For full configuration options, see `.opencode/command/templates/config.schema.json`

## 🛠️ Development & Contribution

To contribute to this plugin:

```bash
# Clone the repository
git clone https://github.com/VenTheZone/lesson_learned.git

# Initialize local environment
bash init.sh

# Customize configuration
vim .opencode/config.json
```

## 📄 License

MIT License - Use freely in any project to build smarter teams and better software.

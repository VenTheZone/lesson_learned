# OpenCode Plugin: Continual Learning

Automated setup for continual learning workflow in any project.

## 🚀 Quick Install

```bash
# Via npm (recommended - makes it available globally in OpenCode)
npm install https://github.com/VenTheZone/lesson_learned.git
```

After installation, the plugin is automatically loaded in OpenCode and provides:

- `/smart-task` command - Execute tasks with continual learning workflow
- `skill continual-learning` - Load continual learning capabilities

## 📦 What It Does

This plugin sets up the **Read → Act → Record** loop:

1. **Read** - Before any task, AI reads `.opencode/memory/lessons_learned.md` for relevant patterns
2. **Act** - Execute task applying documented lessons (Do's, avoiding Don'ts, considering edge cases)
3. **Record** - After task completion, update knowledge base with new insights

## 📂 Files Created

When installed, this plugin creates:

```
.opencode/
├── memory/
│   └── lessons_learned.md      # Knowledge base with lessons learned
├── command/
│   └── smart-task.md          # Command with continual learning workflow
└── skill/
    └── continual-learning/
        └── SKILL.md           # Loadable skill
```

## 🎯 Benefits

- ✅ **No repeat mistakes** - Learn from past errors once
- ✅ **Faster onboarding** - New team members see documented patterns
- ✅ **Better consistency** - Everyone follows established best practices
- ✅ **Continuous improvement** - Each task adds to your knowledge base

## 📖 Usage

### For Explicit Tasks
```bash
/smart-task "implement user authentication"
```

### For Automatic Behavior
```bash
# The skill is automatically loaded, providing continual learning guidance
skill continual-learning
```

## 🔄 Workflow

1. AI reads existing lessons before starting any task
2. Applies relevant patterns while working
3. Reflects on what went well and what didn't
4. Updates knowledge base with new learnings

## 📝 Knowledge Base Structure

The `lessons_learned.md` file is organized into:

- **📚 Do's** - Best practices and patterns
- **❌ Don'ts** - Common mistakes to avoid
- **⚠️ Edge Cases** - Platform-specific issues and gotchas
- **🔧 Project Patterns** - Project-specific conventions

## 🛠️ Development

To modify this plugin:

```bash
# Clone the repository
git clone https://github.com/VenTheZone/lesson_learned.git

# Install dependencies
npm install

# Build
npm run build

# Test locally
npm link .  # Link to local OpenCode for testing
```

## 📄 License

MIT License - Use freely in any project

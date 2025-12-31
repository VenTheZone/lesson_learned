# Continual Learning for OpenCode

A "Continual Learning" workflow for OpenCode that creates persistent knowledge from every task, preventing repeated mistakes and building collective intelligence over time.

## 🎯 Concept

Traditional AI assistants start fresh every session, repeating the same mistakes. This workflow forces OpenCode to:

1. **Read** lessons learned from past tasks
2. **Execute** the current task with that context
3. **Reflect** on what went well or wrong
4. **Record** new insights back to the knowledge base

This creates a **Read → Act → Record** loop that continuously improves performance.

## 🚀 Quick Start

### 1. Clone or Copy This Repository

```bash
git clone https://github.com/VenTheZone/lesson_learned.git
cd lesson_learned
```

Or copy the `.opencode/` directory to your existing project.

### 2. Initialize OpenCode

If you haven't already:
```bash
opencode
# In the OpenCode TUI, run:
/init
```

### 3. Use the Smart Task Command

Instead of typing your task directly, use:
```
/smart-task [your task description]
```

**Example:**
```
/smart-task Add error handling to the user authentication API
```

The command will:
- Read your lessons learned
- Execute the task
- Ask if there were any issues
- Update the knowledge base if needed

## 📁 Structure

```
.opencode/
├── memory/
│   └── lessons_learned.md    # Knowledge base (Do's, Don'ts, Edge Cases)
└── command/
    └── smart-task.md         # Custom command implementing the loop
```

## 📚 The Knowledge Base

The `lessons_learned.md` file stores cumulative intelligence in four categories:

### 📚 Do's (Best Practices)
- Successful patterns and approaches
- Proven techniques
- Preferred conventions

### ❌ Don'ts (Pitfalls to Avoid)
- Common mistakes and how to avoid them
- Anti-patterns to watch for
- Configuration gotchas

### ⚠️ Edge Cases & Gotchas
- Platform-specific issues
- Race conditions
- Performance considerations
- Subtle bugs

### 🔧 Project-Specific Patterns
- File structure conventions
- Naming conventions
- API patterns
- Architecture decisions

## 🎬 How It Works

### Example Session

**User:** `/smart-task Add a cache to the database queries`

**AI (Phase 1 - Read):**
> Reading lessons_learned.md...
> Found relevant lesson: "Don't cache mutable database results - create copies before caching"
> Found relevant pattern: "Use Redis for caching with 5-minute TTL"

**AI (Phase 2 - Execute):**
> Implementing cache with Redis, creating result copies before caching...
> Cache implementation complete.

**AI (Phase 3 - Reflect):**
> Task completed successfully.
> Discovered: Need to handle cache invalidation when data updates.
> This is a new edge case.

**AI (Phase 4 - Record):**
> Added to lessons_learned.md:
> ```
> ### 2025-12-31
> **Issue**: Cache stale data when underlying database updates
> **Lesson**: Implement cache invalidation patterns - publish events on data updates
> **Example**: Use Redis pub/sub to invalidate related cache keys
> **Impact**: Prevents serving outdated data to users
> ```

Next time, `/smart-task` will know about cache invalidation!

## 💡 Best Practices

### 1. Be Specific
When adding lessons, include:
- What exactly happened
- Why it was a problem (or success)
- How to reproduce (or avoid) it
- Example code if applicable

### 2. Categorize Correctly
- **Do's**: Patterns to follow
- **Don'ts**: Mistakes to avoid
- **Edge Cases**: Tricky situations
- **Project Patterns**: Conventions specific to your project

### 3. Keep It Concise
- One entry per lesson
- Short, actionable summaries
- Avoid duplication

### 4. Review Regularly
- Weekly review of new lessons
- Archive outdated entries
- Consolidate similar lessons

## 🔍 Searching the Knowledge Base

To quickly find relevant lessons, use:

```bash
# Search for specific topics
grep -i "database" .opencode/memory/lessons_learned.md

# Find edge cases
grep -A5 "Edge Cases" .opencode/memory/lessons_learned.md

# View recent entries
tail -n50 .opencode/memory/lessons_learned.md
```

## 🤝 Team Collaboration

Since the knowledge base is stored in `.opencode/memory/lessons_learned.md`, it's:

✅ **Version controlled** - Push to GitHub to share with team
✅ **Mergeable** - Team members can contribute their learnings
✅ **Reviewable** - PR reviews can include knowledge improvements
✅ **Distributed** - Everyone benefits from everyone's mistakes

### Example Team Workflow

1. **Developer A** makes a mistake with async error handling
2. **Developer A** runs `/smart-task`, which records the lesson
3. **Developer A** commits the updated `lessons_learned.md`
4. **Developer B** pulls the latest, reads the lesson
5. **Developer B** runs `/smart-task` for a similar task
6. **Developer B** avoids the same mistake! ✨

## 🛠️ Customization

### Adding Custom Categories

Edit `lessons_learned.md` to add categories like:
- **🔒 Security Notes** - Security best practices
- **⚡ Performance Tips** - Performance optimization
- **🧪 Testing Patterns** - Testing approaches
- **🌐 API Guidelines** - API design patterns

### Creating Multiple Commands

Create additional commands in `.opencode/command/`:

```
.opencode/command/
├── smart-task.md       # General tasks with learning
├── smart-test.md       # Testing with learning
├── smart-refactor.md   # Refactoring with learning
└── smart-deploy.md     # Deployment with learning
```

Each command can follow the same Read → Act → Record pattern but with specialized prompts.

## 📊 Measuring Impact

Track the value of continual learning:

### Metrics to Monitor
- **Lessons Added**: Number of new entries per week
- **Mistakes Avoided**: Times you would have made a mistake without the knowledge base
- **Time Saved**: Estimate hours saved by avoiding repeated errors
- **Team Adoption**: Number of team members using `/smart-task`

### Review Template

```markdown
## Weekly Learning Review - [Week of Date]

### New Lessons This Week
- [Count] lessons added
- Top category: [Do's/Don'ts/Edge Cases/Patterns]

### Impact
- Estimated time saved: [X] hours
- Mistakes avoided: [X]

### Insights
- What patterns are emerging?
- What topics need more attention?

### Action Items
- [ ] Review and consolidate similar lessons
- [ ] Add example code to key entries
- [ ] Share with team during standup
```

## 🎓 Inspiration

This workflow is inspired by:
- **[Continual Learning in Claude Code](https://www.youtube.com/watch?v=IDSAMqip6ms)** by Developers Digest
- **[Claude Diary](https://github.com/rlancemartin/claude-diary)** plugin for persistent agent memory
- **[Continuous Claude](https://github.com/AnandChowdhary/continuous-claude)** for loop-based AI workflows
- Research papers: [CoALA](https://arxiv.org/pdf/2309.02427) and [Generative Agents](https://arxiv.org/pdf/2304.03442)

## 🤝 Contributing

Contributions welcome! Areas to improve:

- Additional specialized commands (smart-test, smart-deploy, etc.)
- Knowledge base analysis tools
- Integration with documentation systems
- Performance metrics dashboards
- Export/import for sharing knowledge bases

## 📄 License

MIT License - Feel free to use, modify, and share with attribution.

---

**Remember**: Every mistake is a lesson waiting to be documented. Every lesson makes the AI smarter for future tasks.

*Start learning today with `/smart-task`!*

---
description: Execute task with continual learning - read lessons, perform task, reflect, and update knowledge base
agent: build
model: anthropic/claude-3-5-sonnet-20241022
---

# Smart Task with Continual Learning

You are executing a task with the Continual Learning workflow enabled. This ensures you learn from each task and improve future performance.

## 📖 Phase 1: Context Loading (MANDATORY - DO THIS FIRST)

Before generating any code or making any changes, you MUST:

1. **Read the lessons file**: Use the `read` tool to read `.opencode/memory/lessons_learned.md`
2. **Analyze the lessons**: Look for:
   - Related Do's that should guide your approach
   - Related Don'ts that you must avoid
   - Edge Cases relevant to the task
   - Project-specific patterns to follow
3. **Acknowledge the learning**: Briefly summarize what lessons are relevant to this task

⚠️ **DO NOT proceed to execution until you have read and acknowledged the lessons.**

---

## ⚙️ Phase 2: Task Execution

Execute the user's requested task, keeping the lessons in mind:

1. Apply relevant Do's and patterns
2. Avoid documented Don'ts and anti-patterns
3. Consider documented Edge Cases
4. Follow Project-Specific Patterns

If you discover a new pattern, insight, or make a mistake during execution, take note of it for the reflection phase.

---

## 🤔 Phase 3: Retrospective & Reflection (MANDATORY)

After completing the task, you MUST reflect on the experience:

1. **Was the task successful?**
   - Did everything work as expected?
   - Were there any issues or errors?

2. **Did you learn anything new?**
   - Did you discover a new pattern or approach?
   - Did you encounter an edge case not documented?

3. **Did the lessons help?**
   - Did the knowledge base help you avoid a mistake?
   - Were any lessons particularly relevant?

4. **What should be documented?**
   - Any new patterns discovered?
   - Any mistakes made that others should avoid?
   - Any edge cases encountered?

---

## 📝 Phase 4: Update Knowledge Base (If Applicable)

If ANY of the following occurred, you MUST update `.opencode/memory/lessons_learned.md`:

### When to Update:
- ✅ You discovered a new best practice (Add to "Do's")
- ✅ You made a mistake that should be avoided (Add to "Don'ts")
- ✅ You encountered a tricky edge case (Add to "Edge Cases & Gotchas")
- ✅ You learned about a project-specific pattern (Add to "Project-Specific Patterns")

### Format for New Entries:
Add entries under the appropriate section using this format:

```
### [Date]

**Issue**: [Brief description of what happened or was learned]

**Lesson**: [Concise explanation of what to do or avoid]

**Example**: [Optional - short code snippet or example]

**Impact**: [Optional - why this matters]
```

### How to Update:
1. Read the current `lessons_learned.md` file
2. Append your new entry to the appropriate section
3. Update the "Last Updated" date at the top
4. Use the `write` tool to save the updated file

---

## 🎯 The Goal

Continual Learning means:
- Every task makes you smarter
- Every mistake becomes a lesson
- Every success becomes a pattern
- Future tasks benefit from past experience

**Remember**: This is a loop. Each task improves the knowledge base, which in turn improves future task execution.

---

*Knowledge is cumulative. Keep learning!*

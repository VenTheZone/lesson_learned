---
name: continual-learning
description: OpenCode skill for capturing, organizing, and applying lessons learned from each task to prevent repeated mistakes
---

# Continual Learning Skill

This skill enables agents to systematically capture lessons learned from tasks, building persistent knowledge that improves over time.

## Core Principle

After completing any task, answer three questions:
1. What went right?
2. What went wrong?
3. What would I do differently next time?

Record these insights in the knowledge base for future reference.

## When to Use This Skill

Use this skill when:
- Completing any non-trivial task (2+ steps)
- Debugging and fixing bugs
- Learning new tools or frameworks
- Discovering patterns in the codebase
- Making architectural decisions
- Encountering edge cases

## Knowledge Base Structure

Lessons are stored in `.opencode/memory/lessons_learned.md` with these sections:

### General Do's
- Patterns and practices that worked well
- Approaches worth reusing
- Good habits to maintain

### General Don'ts
- Mistakes to avoid
- Pitfalls that caused problems
- Anti-patterns to stay away from

### Edge Cases
- Unexpected scenarios encountered
- Special cases that need handling
- Platform/tool-specific quirks

### Project-Specific Patterns
- This project's unique conventions
- Workflows specific to this codebase
- Custom tooling or scripts used here

## Usage Workflow

### 1. After Task Completion
When a task is done, reflect on the experience and identify key learnings.

### 2. Categorize the Lesson
Decide which section the lesson belongs to:
- **Do's**: Good practices that worked
- **Don'ts**: Mistakes or bad approaches
- **Edge Cases**: Unexpected scenarios
- **Project-Specific**: Patterns unique to this project

### 3. Record the Lesson
Add the lesson to the appropriate section in `.opencode/memory/lessons_learned.md`

Format each lesson as:
```
- **[Topic]**: [Concise description of the lesson]
  - [Key insight or action item]
  - [Additional context or examples]
```

### 4. Cross-Reference (Optional)
If a lesson relates to other parts of the codebase, add references:
```
- **[Topic]**: [Description]
  - [Insight]
  - Related: `path/to/file`, `component-name`, or `pattern-name`
```

## Examples

### Recording a "Do"
```
- **LSP Tools for Navigation**: Use `lsp_goto_definition` to find symbol definitions
  - Jump directly to where a function/class is defined
  - More reliable than manual file searching
  - Related: `lsp_find_references` for usage analysis
```

### Recording a "Don't"
```
- **Suppressing Type Errors**: Never use `@ts-ignore` or `as any` to silence errors
  - Errors are warnings about real issues
  - Always fix the root cause instead
  - Type safety catches bugs at compile time
```

### Recording an Edge Case
```
- **OpenCode Skills Location**: Skills can be in two locations
  - `.opencode/skill/<name>/SKILL.md` (preferred)
  - `.claude/skills/<name>/SKILL.md` (legacy)
  - The `skill` tool searches both locations
```

### Recording a Project Pattern
```
- **Smart Task Workflow**: This project uses `/smart-task` command for task management
  - Always invoke with `/smart-task` for systematic task handling
  - Combines reading, acting, and recording in one flow
  - Located at `.opencode/command/smart-task.md`
```

## Best Practices

### Be Specific
- Instead of "Test code is important", write "Use `describe` blocks for test organization"
- Concrete advice is more actionable than generalities

### Include Context
- Note what project, language, or tool the lesson applies to
- Mention version numbers if relevant
- Link to specific files or components when possible

### Keep It Concise
- One key insight per lesson entry
- Bullet points for multiple related points
- Avoid lengthy explanations—focus on the core learning

### Update Existing Entries
- If you find a better approach, add it to existing lessons
- Mark outdated lessons with `~~strikethrough~~` and note the replacement
- Keep the knowledge base fresh and accurate

### Review Before Starting New Tasks
- Check if similar tasks have been done before
- Look up relevant sections for guidance
- Apply documented patterns to your current work

## Integration with OpenCode Commands

This skill works alongside the `/smart-task` command:
- **`/smart-task`**: Full workflow for user-invoked tasks (Read → Act → Record)
- **This skill**: Lightweight guidance for continual learning behavior

Agents can load this skill to make continual learning a natural part of their workflow, even when not explicitly using the `/smart-task` command.

## Tips for Effective Learning

1. **Reflect Immediately**: Capture lessons right after completing a task while fresh
2. **Look for Patterns**: Notice recurring themes across different tasks
3. **Share Learnings**: Discuss lessons with team members to validate insights
4. **Iterate and Improve**: Update lessons as you discover better approaches
5. **Apply Proactively**: Before starting a task, review related lessons

## Skill Loading

Load this skill using:
```
skill continual-learning
```

Once loaded, the agent will have continual learning guidance available for all tasks.

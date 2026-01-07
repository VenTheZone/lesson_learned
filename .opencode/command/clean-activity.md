---
description: Clean and organize activity logs - deduplicate, archive old entries, and promote recurring patterns to lessons
agent: build
model: anthropic/claude-3-5-sonnet-20241022
---

# Clean Activity Logs

This command maintains the living documentation by cleaning, organizing, and polishing `.opencode/memory/activity_log.md`.

## 📖 Phase 1: Load Activity Log

**MANDATORY - Do this first:**

1. **Read activity log**: Use `read` tool to read `.opencode/memory/activity_log.md`
2. **Analyze current state**: Check for:
   - Duplicate entries
   - Old entries (>30 days)
   - Resolved items
   - Recurring error patterns (3+ occurrences)
   - TODOs that have been addressed

---

## 🧹 Phase 2: Deduplicate Entries

Identify and merge duplicate entries:

### For TODOs:
- **Merge criteria**: Same description, same file path
- **Action**: Keep newest entry, record merge count
- **Output**: "Merged N duplicate TODOs: [description]"

### For Debug Notes:
- **Merge criteria**: Same file path and line number
- **Action**: Keep oldest entry, record occurrence count
- **Output**: "Consolidated N occurrences: `file/path.ext:line`"

### For Errors:
- **Merge criteria**: Same error pattern, same root cause
- **Action**: Consolidate into single entry with frequency count
- **Output**: "Consolidated N occurrences: [error pattern]"

---

## 📦 Phase 3: Archive Old Entries

Move entries older than 30 days to archive:

### When to Archive:
- Entries dated >30 days ago
- Resolved/completed TODOs
- Debug statements no longer in code
- Errors that were fixed

### Archive Format:
Create or append to `.opencode/memory/activity_archive.md`:
```markdown
# Archived Activity

*Archived on: $(date +%Y-%m-%d %H:%M:%S)*

## Archived TODOs (Completed/Obsolete)
### YYYY-MM-DD
- **[TAG]** Description → `file/path.ext:line` (Archived: resolved)
...

## Archived Debug Notes (Removed from Code)
### YYYY-MM-DD
- `file/path.ext:line` → pattern (Archived: removed)
...

## Archived Errors (Resolved)
### YYYY-MM-DD
- **[TAG]** Error description → `file/path.ext:line` (Archived: fixed)
...
```

### Update Activity Log:
- Remove archived entries from main activity_log.md
- Update "Cleanup Status" section with archive counts

---

## 🚀 Phase 4: Promote Recurring Patterns

Identify high-value items for promotion to `lessons_learned.md`:

### Promotion Criteria:

**Error Patterns (Promote to "Don'ts"):**
- Occurred 3+ times in last 30 days
- Has a clear cause and solution
- Not already documented

**TODO Solutions (Promote to "Do's"):**
- Was a TODO that got successfully resolved
- Solution is reusable and valuable
- Not already documented

**Edge Cases (Promote to "Edge Cases"):**
- Recurred 3+ times
- Platform/tool-specific
- Tricky to debug

### Promotion Process:

1. **Identify candidates** from activity log
2. **Read lessons_learned.md** to check for duplicates
3. **Format entry** for lessons_learned.md:
   ```markdown
   ### YYYY-MM-DD

   **Issue**: [What the pattern/error was]

   **Lesson**: [What to do or avoid]

   **Example**: [Optional code snippet]

   **Impact**: [Why this matters]

   **Activity ref**: [YYYY-MM-DD #tag]
   ```
4. **Add to appropriate section** in lessons_learned.md
5. **Update activity log's "Auto-Promotions" section**
6. **Update "Cleanup Status"** with promotion counts

---

## 🏷️ Phase 5: Reorganize Tags

Update the Tags Index to reflect changes:

1. **Recalculate counts** for each tag
2. **Update totals**:
   ```markdown
   ### #tag
   - Active TODOs: [count]
   - Debug notes: [count]
   - Errors: [count]
   ```
3. **Remove empty tags** (if count = 0)

---

## 📊 Phase 6: Update Metadata

Update the cleanup tracking:

```markdown
### Last Cleanup
- Date: $(date +%Y-%m-%d)
- Entries processed: [total entries before cleanup]
- Duplicates removed: [count]
- Entries archived: [count]
- Entries promoted: [count]

### Pending Actions
- [ ] Review TODOs older than 30 days (if any remain)
- [ ] Promote remaining recurring error patterns (if any)
- [ ] Archive remaining old entries (if any)
```

---

## 💾 Phase 7: Save Changes

1. **Save activity_log.md** with all changes
2. **Save activity_archive.md** if new archive entries added
3. **Save lessons_learned.md** if promotions made
4. **Verify** all files were saved correctly

---

## 🔍 Phase 8: Report Summary

Provide a concise summary of cleanup actions:

```
✅ Activity Log Cleanup Complete

📊 Statistics:
- Entries processed: X
- Duplicates removed: X
- Entries archived: X
- Recurring patterns promoted: X

📝 Files modified:
- .opencode/memory/activity_log.md (updated)
- .opencode/memory/activity_archive.md (appended to)
- .opencode/memory/lessons_learned.md (promoted X entries)

🏷️ Tag updates:
- Updated X tags
- Removed X empty tags

💡 Recommendations:
- [Optional: suggestions for next actions]
```

---

## 🎛️ Options and Flags

This command can be invoked with options:

### `--dry-run`
- Simulate cleanup without making changes
- Show what would be done
- Useful for previewing before actual cleanup

### `--archive-only`
- Only archive old entries
- Skip deduplication and promotion

### `--promote-only`
- Only promote recurring patterns
- Skip archiving and deduplication

### `--verbose`
- Show detailed output for each operation
- List every entry processed

---

## ⚠️ When to Use

Run this command:
- **Weekly**: As part of regular maintenance
- **Before commits**: To keep logs clean
- **When logs are cluttered**: When activity_log.md grows too large
- **After large tasks**: That generated many TODOs or errors

---

## 🎯 The Goal

Clean activity logs mean:
- Faster search and navigation
- Easier identification of real issues
- Automatic promotion of valuable patterns
- Minimal clutter and noise
- Living documentation that stays useful

**Remember**: Regular cleanup prevents the activity log from becoming a dumping ground. Promote value, archive history.

---

*Keep it clean. Keep it useful.*
# Development Personas for Ralph Loop

## Overview

This folder contains 5 specialized development personas designed to work with the **ralph-loop** plugin. Each persona acts as a specialized team member with deep expertise in their domain, ensuring comprehensive quality control across all aspects of development.

## Available Personas

| Persona | File | Specialization |
|---------|------|----------------|
| **Alex Chen** | `frontend-architect.md` | HTML, CSS, JavaScript, Performance |
| **Sarah Martinez** | `qa-engineer.md` | Testing, Cross-browser, Edge Cases |
| **Raj Patel** | `seo-specialist.md` | SEO, Core Web Vitals, Performance |
| **Maya Thompson** | `ux-accessibility.md` | User Experience, WCAG Compliance |
| **David Kim** | `security-auditor.md` | Security, Code Quality, Best Practices |

## How to Use with Ralph Loop

### Method 1: Direct Persona Activation

Start a ralph loop and reference the persona directly:

```bash
# Start Claude Code
claude

# Start ralph loop with a persona
/ralph-loop

# Then prompt with the persona context:
"Act as Alex Chen (Frontend Architect) from .claude/personas/frontend-architect.md and review the homepage HTML structure"
```

### Method 2: Full Team Review Loop

Run all personas in sequence for comprehensive review:

```bash
/ralph-loop

# Prompt:
"Run a full team review cycle:
1. First, act as Alex Chen (Frontend Architect) - review HTML/CSS/JS structure
2. Then as Sarah Martinez (QA Engineer) - test all functionality
3. Then as Raj Patel (SEO Specialist) - audit SEO and performance
4. Then as Maya Thompson (UX/Accessibility) - check UX and WCAG compliance
5. Finally as David Kim (Security Auditor) - review code security

For each persona, read their profile from .claude/personas/ and provide a detailed report following their format."
```

### Method 3: Specific Task with Persona

Assign a specific task to a specific persona:

```bash
/ralph-loop

"As Sarah Martinez (QA Engineer), test the contact form:
1. Read the persona from .claude/personas/qa-engineer.md
2. Follow the form testing checklist
3. Report any issues found in the bug report format"
```

## Recommended Review Workflow

### For New Features

```
1. Frontend Architect → Implements feature
2. QA Engineer → Tests functionality
3. UX/Accessibility → Reviews user experience
4. Security Auditor → Reviews code quality
5. SEO Specialist → Optimizes for search
```

### For Bug Fixes

```
1. QA Engineer → Reproduces and documents
2. Frontend Architect → Implements fix
3. QA Engineer → Verifies fix
4. Security Auditor → Reviews fix safety
```

### For Content Updates

```
1. SEO Specialist → Reviews content optimization
2. UX/Accessibility → Reviews readability
3. Frontend Architect → Implements changes
4. QA Engineer → Tests display
```

## Persona Communication Protocol

Each persona follows a structured reporting format:

### Issue Reporting

```markdown
## [Persona] Report: [Page/Feature]

### Summary
Brief overview of findings

### Issues Found
| Severity | Issue | Location | Recommendation |
|----------|-------|----------|----------------|
| Critical | desc  | file:line | fix suggestion |
| High     | desc  | file:line | fix suggestion |

### Positive Observations
- What's working well

### Action Items
1. [ ] First priority fix
2. [ ] Second priority fix
```

### Severity Levels (Shared Across Personas)

| Level | Definition | Response Time |
|-------|------------|---------------|
| **Critical** | Breaks functionality or security risk | Immediate |
| **High** | Significant issue affecting users | Same day |
| **Medium** | Noticeable issue with workaround | This week |
| **Low** | Minor issue or enhancement | Backlog |

## Best Practices

### 1. Start with Frontend Architect
Always have structural changes reviewed first to catch issues early.

### 2. QA After Every Change
Run QA tests after any code change, not just at the end.

### 3. Security Review Before Deploy
Never deploy without a security review, especially after adding new features.

### 4. SEO for Content Changes
Any content or structure change should include SEO review.

### 5. Accessibility is Continuous
Accessibility should be checked with every change, not as an afterthought.

## Example Ralph Loop Session

```
You: /ralph-loop

You: I just added a new "See It In Action" section to the homepage.
     Run a full persona review cycle on index.html.

Claude: [Activates Frontend Architect persona]
        Reviewing HTML structure...
        [Provides detailed report]

Claude: [Activates QA Engineer persona]
        Testing functionality...
        [Provides test results]

Claude: [Activates SEO Specialist persona]
        Auditing SEO elements...
        [Provides SEO report]

Claude: [Activates UX/Accessibility persona]
        Reviewing accessibility...
        [Provides accessibility audit]

Claude: [Activates Security Auditor persona]
        Reviewing code security...
        [Provides security report]

Claude: === FULL TEAM REVIEW COMPLETE ===
        Summary of all findings and priority action items...
```

## Customizing Personas

You can customize each persona by editing their markdown file:

- Add project-specific standards
- Modify checklists for your needs
- Add new review criteria
- Update tool recommendations

## File Structure

```
.claude/
└── personas/
    ├── README.md (this file)
    ├── frontend-architect.md
    ├── qa-engineer.md
    ├── seo-specialist.md
    ├── ux-accessibility.md
    └── security-auditor.md
```

## Tips for Effective Reviews

1. **Be Specific:** Tell the persona exactly what file or feature to review
2. **Read First:** Ask the persona to read the relevant files before reviewing
3. **Follow Format:** Request reports in the persona's standard format
4. **Prioritize:** Focus on critical and high issues first
5. **Iterate:** Run the loop again after fixes to verify

## Integration with Git Workflow

```bash
# Before committing
/ralph-loop "Quick security and QA check on staged changes"

# Before pull request
/ralph-loop "Full team review on all changed files"

# After merge
/ralph-loop "Verify no regressions on production pages"
```

---

**Created for:** MyDigitalInvoice Website Project
**Version:** 1.0
**Last Updated:** February 2026

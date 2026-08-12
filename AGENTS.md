# The Coherence Project — AI Agent Instructions

## Project Context

The Coherence Project is a documentation-first research and publishing platform.

Knowledge is the product. Technology exists to support its publication, accessibility and long-term evolution.

The project architecture is defined in the `/architecture` directory.

Do not infer project requirements from implementation alone when authoritative documentation exists.

---

## Documentation Authority

The `/architecture` directory is the project's source of truth.

Documentation governance is defined in:

- `architecture/00_1_Documentation_Governance.md`
    

AI collaboration principles are defined in:

- `architecture/99_AI_CONTEXT.md`
    

Before proposing or implementing a meaningful change, identify and read the authoritative document relevant to the task.

Follow the documentation hierarchy and Single Source of Truth rules defined by Documentation Governance.

Do not duplicate authoritative definitions across documents.

When implementation and documentation conflict, documentation takes precedence unless the documentation is intentionally revised.

Do not silently change documented architecture through implementation.

---

## Context Efficiency

Use project context deliberately.

- Do not read the entire `/architecture` directory for every task.
    
- Read `architecture/00_1_Documentation_Governance.md` and `architecture/99_AI_CONTEXT.md` when project governance or authority needs to be established.
    
- Then read only the authoritative documents relevant to the current task.
    
- Follow cross-references only when necessary to complete the task correctly.
    
- Prefer targeted file inspection and repository search over broad repository-wide reading.
    
- Do not repeatedly summarize documents already available in the repository.
    
- Do not restate project principles unless they materially affect the current decision.
    
- For small implementation tasks, inspect only the relevant files and their direct dependencies.
    
- Expand context when uncertainty, conflict or architectural impact requires it.
    

Optimize for relevant context, not minimum context.

---

## Implementation Rules

Prefer simple, maintainable and portable solutions.

Implement the documented architecture rather than inventing parallel structures.

Do not introduce:

- New frameworks.
    
- New dependencies.
    
- New architectural patterns.
    
- New content structures.
    
- New design conventions.
    

unless they are required by the task or justified by the documented architecture.

Before changing architecture, design, content structure or technical decisions, review the authoritative document first.

If a requested implementation requires contradicting a documented decision, identify the conflict before proceeding.

Avoid speculative infrastructure and premature abstraction.

Build for current documented requirements while preserving reasonable future flexibility.

---

## Scope Discipline

Implement only what the current task requires.

Do not anticipate future roadmap items unless they are necessary for the current implementation.

Do not add features simply because they are easy to implement.

Do not convert possible future capabilities into current requirements.

When adjacent improvements are discovered, mention them separately rather than silently expanding the scope.

---

## Change Discipline

Before modifying existing code:

1. Inspect the relevant implementation.
    
2. Identify the authoritative documentation.
    
3. Understand direct dependencies.
    
4. Make the smallest coherent change that satisfies the requirement.
    

Preserve existing working behavior unless the task explicitly requires changing it.

Avoid unrelated refactoring during focused tasks.

---

## Documentation Updates

Implementation should remain aligned with documentation.

When a task intentionally changes a documented decision:

1. Identify the authoritative document.
    
2. Update that document.
    
3. Update implementation accordingly.
    
4. Avoid duplicating the new definition elsewhere.
    

Do not update documentation merely to describe implementation details that do not represent architectural decisions.

---

## Communication

Keep responses concise and operational.

When reporting completed work, prioritize:

- What changed.
    
- Important decisions made.
    
- Validation performed.
    
- Relevant risks or unresolved issues.
    

Do not provide long summaries of project documentation unless explicitly requested.

When multiple valid approaches exist and the choice has architectural consequences, explain the trade-offs before implementing.

When uncertainty can materially affect the project architecture, ask before proceeding.

---

## Final Rule

Preserve the coherence of the project as a whole.

Prefer the smallest solution that satisfies the documented requirement without creating unnecessary future constraints.

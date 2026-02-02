# UI / UX Improvements (future - local notes)

This is a short list of practical, low-effort ideas to improve the UI/UX for Super Tic-Tac-Toe. Keep things simple — these are suggestions for a hobby project.

- Layout
  - Use a centered content width (max 980px) for non-board pages (menus, rooms, settings).
  - Use a 2-column card layout for related forms (Create / Join) on desktop; stack on mobile.
  - Keep spacing modest (8–16px) between related controls; use larger gaps between sections.

- Visual Language
  - Keep `X` and `O` primary colors: gold (`#FFC47F`) for X and green (`#318E67`) for O. Use pink (`#FF929F`) for accents/secondary CTAs.
  - Use consistent rounded corners (8–12px) and medium elevation (subtle shadows) for panels.

- Controls & Forms
  - Use labeled inputs with placeholders and short helper text under inputs for clarity (already used in components).
  - Make primary actions (Create / Join) prominent using color and a slightly larger size.
  - Provide inline validation messages (e.g., invalid room id, missing name).

- Feedback & States
  - Add loading state indicators for async actions (connecting / creating room / joining room).
  - Show success/failure notifications (toasts) instead of blocking `alert()` dialogs.
  - For networked play, display connection status and player presence in the room.

- Navigation & Flow
  - Use a single top-left Back button on sub-views to keep UI consistent.
  - Preserve the last-used player name and settings in `localStorage` so users don't re-enter them.

- Accessibility
  - Ensure all buttons and inputs are keyboard focusable and show a visible focus style.
  - Use semantic HTML (buttons, labels) and `aria-*` attributes for dynamic elements.
  - Ensure sufficient contrast for text on colored buttons (use dark text on light gradients).

- Small polish ideas
  - Animate panel transitions lightly (200ms) when switching between views.
  - Add small hover/press micro-interactions on buttons and icons.
  - Provide a compact mode or scale for small screens so the board remains legible.

- Future (nice-to-have)
  - Room listing with search and filters (public / private / capacity)
  - Persistent profiles with avatars and win/loss stats
  - Replays and shareable room links

These notes are intentionally lightweight — implement the ones that give the best return for time invested. Prioritize clarity and responsiveness over visual complexity.

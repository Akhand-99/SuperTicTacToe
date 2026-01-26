# Copilot Instructions for SuperTicTacToe (React + Vite)

## Project Overview

- **SuperTicTacToe** is a React-based implementation of "Ultimate Tic-Tac-Toe" with plans for online multiplayer and chaos/variant modes.
- The app is structured as a Vite project with React 18, using functional components and hooks for state management.
- Game state is centralized in `App.jsx` and passed down via props to all board and cell components.

## Key Architecture & Data Flow

- **Game State**: The main state object (`gameData`) in `App.jsx` contains:
  - `mainBoardCellList`: 9 cells for the main board (tracks which small board is won and by whom)
  - `smallBoards`: Array of 9 small boards, each with its own 9-cell list and `wonBy` status
  - `currentMarkerToPlace`: Whose turn it is ('X' or 'O')
  - `wonBy`: Winner of the main board (or 'None' for draw)
  - `activeBoardNumber`: Which small board is active (0 = any, -1 = game over)
- **Component Hierarchy**:
  - `App.jsx` → `AvatarHamburgerContainer` (avatars/menu)
  - `App.jsx` → `MainBoard` → 9×`SmallBoard` → 9×`SmallBoardCell`
- **State Updates**: All moves and resets are handled by updating `gameData` in `App.jsx` and propagating changes via props.
- **Win Logic**: Win/draw checks are performed using `checkWinAndReturnMarker.js` utility.

## Developer Workflows

- **Start Dev Server**: `npm run dev` (from `super-tic-tac-toe/`)
- **Build**: `npm run build`
- **Lint**: `npm run lint` (uses ESLint with React and hooks plugins)
- **Preview**: `npm run preview`
- **No built-in tests**: Add tests if needed; none present by default.

## Project Conventions & Patterns

- **Props-Down, Events-Up**: All state flows down via props; user actions bubble up via handler props.
- **No Context/Redux**: State is not managed with React Context or Redux (yet); see `tasklist.md` for multiplayer plans.
- **Component Files**: Each board/cell is a separate component; utility functions live in `src/components/utils/`.
- **CSS**: Custom styles in `src/css/styles1.css` and `src/index.css`.
- **Reset/Alerts**: Game reset and win/draw alerts are handled in `App.jsx` and `HamburgerMenu.jsx`.
- **Chaos Mode**: See `chaos.md` for experimental/variant rules (not implemented in main flow).

## Multiplayer & Server Integration (Planned)

- See `tasklist.md` for stepwise multiplayer/WebSocket integration plan.
- Future: Game state will be server-driven; UI will update from server messages.
- Planned: `sendGameAction` function to send moves to server, replacing local state updates.

## External Dependencies

- React 18, Vite, ESLint (see `package.json`)
- No backend/server code in this repo (yet)

## File/Directory Guide

- `src/App.jsx`: Central state, main logic
- `src/components/`: All UI components
- `src/components/utils/`: Game logic utilities
- `src/css/`: Custom styles
- `tasklist.md`: Roadmap for multiplayer
- `chaos.md`: Variant/chaos mode ideas

## Example: Adding a New Game Mechanic

- Add new state fields to `gameData` in `App.jsx`
- Pass new props down to affected components
- Update UI and logic in relevant components
- Document new mechanic in `chaos.md` or `tasklist.md` as appropriate

---

For questions about architecture or patterns, see `tasklist.md` and `chaos.md` for current and planned directions.

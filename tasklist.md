# Online Multiplayer Implementation Tasks (WebSockets)

This document outlines the incremental steps to integrate WebSocket-based online multiplayer into the Super Tic-Tac-Toe game, using `useState` and `useContext` for state management.

## Phase 1: Prepare for Server-Driven Game State

### Task 1.1: Centralize Game State in `App.jsx`

- [ ] **1.1.1:** In `super-tic-tac-toe/src/App.jsx`, add a new `useState` hook named `gameData`. Initialize it with a structure that can hold the entire game state, including `mainBoardState` (which will contain `boardCellList`, `wonBy`, `isFinished`, `activeBoardNumber`), `currentMarkerToPlace`, and potentially `playerXId`, `playerOId`, `localPlayerMarker`, and `gameStatus`.
- [ ] **1.1.2:** Pass the `gameData` state as a prop to the `MainBoard` component in `super-tic-tac-toe/src/App.jsx`.

### Task 1.2: Make `MainBoard.jsx` a Display Component

- [ ] **1.2.1:** In `super-tic-tac-toe/src/components/MainBoard.jsx`, remove the `useState` hook for `mainBoardState`.
- [ ] **1.2.2:** Update the `MainBoard` component to receive `mainBoardState` and `currentMarkerToPlace` as props from `App.jsx`.
- [ ] **1.2.3:** Adjust the `isActive` prop calculation for each `SmallBoard` component within `MainBoard.jsx` to use the `mainBoardState` received via props.
- [ ] **1.2.4:** Modify the `handleSmallBoardVictory` function in `super-tic-tac-toe/src/components/MainBoard.jsx` so it no longer directly updates `mainBoardState`. For now, you can leave the `alert` but understand its trigger will change later.

### Task 1.3: Make `SmallBoard.jsx` a Display Component

- [ ] **1.3.1:** In `super-tic-tac-toe/src/components/SmallBoard.jsx`, remove the `useState` hook for `boardState`.
- [ ] **1.3.2:** Update the `SmallBoard` component to receive `boardCellList` and `wonBy` as props (these will come from the `mainBoardState` prop passed down from `MainBoard`).
- [ ] **1.3.3:** Modify the `handleOnMarkerPlace` function in `super-tic-tac-toe/src/components/SmallBoard.jsx` so it no longer updates `boardState` or `setCurrentMarkerToPlace` locally. It will eventually send data to the server.

### Task 1.4: Adjust `SmallBoardCell.jsx` for Server Interaction Preparation

- [ ] **1.4.1:** In `super-tic-tac-toe/src/components/SmallBoardCell.jsx`, ensure the `placeMarker` function does not directly modify any local state. It should prepare to call a function passed via props that will send the move to the server.
- [ ] **1.4.2:** Verify that `onMarkerAboutToPlace` and `onMarkerAboutToPlaceReject` functions still work correctly based on `isActive` and `cellValue` props, as the actual `cellValue` will eventually be server-driven.

## Phase 2: WebSocket Connection and Basic Communication

### Task 2.1: Implement WebSocket Connection in `App.jsx`

- [ ] **2.1.1:** In `super-tic-tac-toe/src/App.jsx`, add a `useRef` hook to store the WebSocket instance (e.g., `ws.current = new WebSocket(...)`).
- [ ] **2.1.2:** Add a `useEffect` hook in `super-tic-tac-toe/src/App.jsx` to establish a WebSocket connection when the component mounts. Include a cleanup function to close the connection when the component unmounts.
- [ ] **2.1.3:** Inside the `useEffect`, set up event listeners for `ws.onopen`, `ws.onmessage`, `ws.onclose`, and `ws.onerror`.
- [ ] **2.1.4:** In the `ws.onmessage` handler, parse the incoming JSON message. If it contains a game state update, use `setGameData` to update the `gameData` state.

### Task 2.2: Create a Server-Side WebSocket Endpoint (Conceptual)

- [ ] **2.2.1:** (Conceptual) Set up a basic WebSocket server (e.g., using Node.js and `ws` library) that can accept client connections.
- [ ] **2.2.2:** (Conceptual) Configure the server to send an initial game state to newly connected clients.
- [ ] **2.2.3:** (Conceptual) Configure the server to receive messages from clients (e.g., "make move" messages).
- [ ] **2.2.4:** (Conceptual) Configure the server to broadcast updated game states to all connected clients in a game.

## Phase 3: Sending Player Actions to Server

### Task 3.1: Pass WebSocket Send Function Down

- [ ] **3.1.1:** In `super-tic-tac-toe/src/App.jsx`, create a function (e.g., `sendGameAction`) that takes an action object (e.g., `{ type: 'makeMove', payload: { smallBoardNum, cellNum, marker } }`) and sends it via the WebSocket instance.
- [ ] **3.1.2:** Pass this `sendGameAction` function down to `MainBoard` as a prop.
- [ ] **3.1.3:** In `super-tic-tac-toe/src/components/MainBoard.jsx`, pass the `sendGameAction` prop further down to each `SmallBoard`.
- [ ] **3.1.4:** In `super-tic-tac-toe/src/components/SmallBoard.jsx`, pass the `sendGameAction` prop down to each `SmallBoardCell`.

### Task 3.2: Trigger Server Move from `SmallBoardCell.jsx`

- [ ] **3.2.1:** In `super-tic-tac-toe/src/components/SmallBoardCell.jsx`, modify the `placeMarker` function. Instead of local state updates, call the `sendGameAction` prop, passing an object with the `type: 'makeMove'`, the `number` of the cell, the `number` of the small board (received as a prop from `SmallBoard`), and the `currentMarkerToPlace`.
- [ ] **3.2.2:** In `super-tic-tac-toe/src/components/SmallBoard.jsx`, update `handleOnMarkerPlace` to call the `sendGameAction` function it receives as a prop, passing along the necessary data for the move. Remove any remaining local state updates for `boardState` or `currentMarkerToPlace`.

## Phase 4: Refining UI and Game Flow with Server Data

### Task 4.1: Update `App.jsx` Turn Indicators

- [ ] **4.1.1:** In `super-tic-tac-toe/src/App.jsx`, ensure the `currentMarkerToPlace` used for turn indicators is derived directly from the `gameData` state received from the server. Remove any redundant local `useState` for `currentMarkerToPlace` or `isInitialRender` if they are now fully managed by the server's `gameData`.

### Task 4.2: Server-Driven Game Reset

- [ ] **4.2.1:** In `super-tic-tac-toe/src/components/HamburgerMenu.jsx`, modify the `handleReset` function to call `sendGameAction` with a `type: 'resetGame'` action.
- [ ] **4.2.2:** Remove local state updates for `setResetCount`, `setIsInitialRender`, and `setCurrentMarkerToPlace` from `handleReset` in `super-tic-tac-toe/src/components/HamburgerMenu.jsx`. The server will broadcast the new initial game state.

### Task 4.3: Server-Driven Win/Draw Alerts

- [ ] **4.3.1:** In `super-tic-tac-toe/src/components/MainBoard.jsx` and `super-tic-tac-toe/src/components/SmallBoard.jsx`, remove the `alert` calls that announce wins or draws.
- [ ] **4.3.2:** (Conceptual) Implement logic in `super-tic-tac-toe/src/App.jsx` (or a dedicated notification component) to listen for specific "game over" or "draw" messages from the server via the WebSocket and display a more user-friendly notification (e.g., a modal).
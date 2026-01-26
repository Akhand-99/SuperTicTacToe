import { useState } from "react";
import "./css/styles1.css";
import HomeScreen from "./components/HomeScreen";
import LocalMultiplayer from "./components/LocalMultiplayer";

function App() {
  const [mode, setMode] = useState("home"); // 'home' | 'local' | 'online' | 'computer'
  const [isLoadingMode, setIsLoadingMode] = useState(false);

  function handleSelectMode(selectedMode) {
    if (selectedMode === "local") {
      setIsLoadingMode(true);
      // simulate a small loading delay for UX
      setTimeout(() => {
        setIsLoadingMode(false);
        setMode("local");
      }, 250);
    } else {
      // for now route to mode; local game logic remains the same for quick prototyping
      setMode(selectedMode);
    }
  }

  // show loading when switching into a mode for UX
  if (isLoadingMode) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  // Home screen
  if (mode === "home") {
    return <HomeScreen onSelect={handleSelectMode} />;
  }

  // For 'local' (and prototype 'online'/'computer') render existing game UI
  return (
    <>
      <LocalMultiplayer></LocalMultiplayer>
    </>
  );
}

export default App;

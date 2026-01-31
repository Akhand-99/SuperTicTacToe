import { useState } from "react";
import "./css/styles1.css";
import HomeScreen from "./components/HomeScreen";
// import LocalMultiplayer from "./components/LocalMultiplayer";
import MainGame from "./components/MainGame";
import SettingsPage from "./components/SettingsPage";

function App() {
  const [mode, setMode] = useState("home"); // 'home' | 'local' | 'online' | 'computer' | 'settings'
  const [isLoadingMode, setIsLoadingMode] = useState(false);
  const [settingsInfo, setSettingsInfo] = useState({}); // playerName and playerID js obj

  function handleSelectMode(selectedMode) {
    setIsLoadingMode(true);
    // simulate a small loading delay for UX
    setTimeout(() => {
      setIsLoadingMode(false);
      setMode(selectedMode);
    }, 250);
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

  if (mode === "settings") {
    return (
      <SettingsPage
        onBack={() => handleSelectMode("home")}
        settingsInfo={settingsInfo}
        setSettingsInfo={setSettingsInfo}
      ></SettingsPage>
    );
  }
  // For 'local' (and prototype 'online'/'computer') render existing game UI
  return (
    <>
      <MainGame gameMode={mode}></MainGame>
    </>
  );
}

export default App;

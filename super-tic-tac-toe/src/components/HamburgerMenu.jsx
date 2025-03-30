import FloatingPopover from "./FloatingPopover";

export default function HamburgerMenu({
  setResetCount,
  setIsHamburgerMenuVisible,
}) {
  function handleReset() {
    setResetCount((prev) => (prev = prev + 1));
    setIsHamburgerMenuVisible(false);
  }

  return (
    <>
      <FloatingPopover>
        <button>Home</button>
        <button onClick={handleReset}>Reset Game</button>
        <button>Settings</button>
      </FloatingPopover>
    </>
  );
}

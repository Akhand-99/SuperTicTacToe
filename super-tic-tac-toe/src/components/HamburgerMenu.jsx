import FloatingPopover from "./FloatingPopover";

export default function HamburgerMenu() {
  return (
    <>
      <FloatingPopover>
        <button>Home</button>
        <button>Reset Game</button>
        <button>Settings</button>
      </FloatingPopover>
    </>
  );
}

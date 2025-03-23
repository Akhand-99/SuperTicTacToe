// Try to make this a component with a hole. Children JSX will fill that hole.
export default function FloatingPopover({ children }) {
  return (
    <>
      <div className="popover">{children}</div>
    </>
  );
}

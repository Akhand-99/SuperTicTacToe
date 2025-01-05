import SmallBoard from "./SmallBoard";

export default function MainBoard() {
  return (
    <>
      <div className="main-grid-container">
        <SmallBoard number={1}></SmallBoard>
        <SmallBoard number={2}></SmallBoard>
        <SmallBoard number={3}></SmallBoard>
        <SmallBoard number={4}></SmallBoard>
        <SmallBoard number={5}></SmallBoard>
        <SmallBoard number={6}></SmallBoard>
        <SmallBoard number={7}></SmallBoard>
        <SmallBoard number={8}></SmallBoard>
        <SmallBoard number={9}></SmallBoard>
      </div>
    </>
  );
}

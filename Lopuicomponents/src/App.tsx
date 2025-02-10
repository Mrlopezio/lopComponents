import "./App.scss";
import Counter from "./components/counter/Counter";
import HoverVideo from "./components/hoverVideo/HoverVideo";

function App() {
  return (
    <>
      <h2> Counter exampler →</h2>
      <h1>
        <Counter number={15846} />
      </h1>
      Video hover example →
      <HoverVideo
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        seekTo={23}
        width={400}
        height={200}
        borderRadius={20}
      />
    </>
  );
}

export default App;

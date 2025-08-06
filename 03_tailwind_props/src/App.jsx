import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 font-bold text-white-800 rounded-xl p-5 underline mb-5">
        Tailwind test
      </h1>
      <Card username="Delba" btnText="Profile" />
      <Card username="Janine" btnText="See more" />
      <Card username="Lisa" />
      <Card />
    </>
  );
}

export default App;

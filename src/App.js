import Betlist from "./components/betlist/Betlist";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
        <div className="flex-grow flex">
        <Sidebar />
        <Betlist />
        {/* <h1 className="text-3xl font-bold underline text-red-600 ">
          Hello World
        </h1> */}
        </div>
    </div>
  );
}

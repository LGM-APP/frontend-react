import Betlist from "./components/betlist/Betlist";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="App bg-gray-200">
      <Navbar />
        <div className="grid grid-cols-[1fr_3fr_1fr]">
        <Sidebar />
        <Betlist />
        <Cart />
        </div>
    </div>
  );
}

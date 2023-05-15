import Betlist from "./components/betlist/Betlist";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar />
        <div className="flex-grow flex">
        <Sidebar />
        <Betlist />
        <Cart />
        </div>
    </div>
  );
}

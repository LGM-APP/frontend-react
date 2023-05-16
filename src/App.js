import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Betlist from "./components/betlist/Betlist";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from './components/login/Login';
import Signin from "./components/signin/Signin";

export default function App() {
    return (
        <div className="App bg-gray-200">
            <Router>
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={
                        <>
                            <Navbar />
                            <Routes>
                                <Route index element={
                                    <div className="grid grid-cols-[1fr_3fr_1fr]">
                                        <Sidebar />
                                        <Betlist />
                                        <Cart />
                                    </div>
                                } />
                                {/*Ajoutez ici d'autres routes qui doivent inclure la Navbar*/}
                            </Routes>
                        </>
                    } />
                </Routes>
            </Router>
        </div>
    );
}

import UseReducer from "./components/UseReducer";
import UseReduRegister from "./components/UseReduRegister";
import { useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import HomeSearch from "./components/HomeSearch";
import UseReducerCard from "./components/Home/UseReducerCard";
import Navbar from "./components/Navbar";
import Cart from "./components/carrito/Cart";
import BasketUser from "./components/carrito2/Basket";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get("/api/auth/me")
            .then((res) => res.data[0])
            .then((user) => {
                dispatch(setUser(user));
            });
    }, []);

    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <HomeSearch />
                </Route>
                <Route path="/category">
                    <UseReducerCard />
                </Route>
                <Route path="/log">
                    <UseReducer />
                </Route>
                <Route path="/register">
                    <UseReduRegister />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/basket">
                    <BasketUser />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

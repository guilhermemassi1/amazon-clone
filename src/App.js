import "./styles.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Footer from "./Footer";
import Payment from "./Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51L8lWDAQu9ViF1tCyM5Yse0o1CxB3vCqjU0AntDjlEbNi8uYI0YDTlVVoLT8yzhpTrmTlXsFfm8ZOmXewx0VhQ8c00nCqgakv7"
);

export default function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={[<Header />, <Home />, <Footer />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

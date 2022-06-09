import "./Home.css";
import React from "react";
import Product from "./Product";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          alt="banner prime"
          className="home__banner"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <ToastContainer></ToastContainer>
          <Product
            id="1"
            title="SMART TV 55 SAMSUNG UN55AU7700 CRYSTAL UHD 4K 3HDMI 1USB CINZA"
            price={2000.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81IdScEcX2S._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="2"
            title="Echo Dot Smart Speaker com Alexa "
            price={200.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SY200_.jpg"
          />
          <Product
            id="3"
            title="Novos Echo Buds (2ª Geração)"
            price={692.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41xQKlqYxNL._AC_SX679_.jpg"
          />
          <Product
            id="4"
            title="Kindle - Cor Preta"
            price={426.55}
            rating={4}
            image="https://m.media-amazon.com/images/I/61X0ISBpD-L._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="Fire TV Stick Lite"
            price={236.55}
            rating={2}
            image="https://m.media-amazon.com/images/I/41yI07Cs9UL._AC_SY200_.jpg"
          />
          <Product
            id="6"
            title="Multilaser MO251 - Mouse Sem Fio 2.4 Ghz 1200 DPI Usb, Preto, normal"
            price={24.0}
            rating={1}
            image="https://m.media-amazon.com/images/I/61cvFkNWMhL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

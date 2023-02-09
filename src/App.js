import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Details from "./pages/Details";
import MyCart from "./pages/MyCart";
import MyOrder from "./pages/MyOrder";
import Products from "./pages/Products";

const products = [
  {
    id: 1,
    imgUrl:
      "https://fdn.gsmarena.com/imgroot/news/22/09/apple-iphone-14-pro-iphone-14-pro-max-official/popup/-1200x900m/gsmarena_014.jpg",
    title: "Iphone 14 pro",
    price: "1320",
    description:
      "Dynamic Island, новый волшебный способ взаимодействия с iPhone. Чип A16 Bionic — сверхбыстрый и сверхэффективный, обеспечивающий удивительное время автономной работы в течение всего дня. Основная камера 48 МП с усовершенствованным четырехпиксельным сенсором для увеличения разрешения до 4 раз. Аварийный сигнал SOS через спутник и обнаружение столкновений — революционные функции, разработанные для спасения жизней.",
  },
  {
    id: 2,
    imgUrl:
      "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg",
    title: "Iphone 13 pro",
    price: "1120",
    description:
      "Самая большая модернизация системы камер Pro. A15 Bionic с 5-ядерным GPU - самый быстрый чип в смартфоне. 6,1-дюймовый дисплей Super Retina XDR с функцией ProMotion 120Гц. Дисплей Ceramic Shield прочнее, чем любое стекло смартфона",
  },
  {
    id: 3,
    imgUrl:
      "https://media1.popsugar-assets.com/files/thumbor/tt8rICQYLd_R6B8YWVQPrVWSd3Y/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/20/719/n/46843612/c2f332635f8f0d413eba39.70679882_/i/iphone-12-pacific-blue-color.png",
    title: "Iphone 12 pro",
    price: "650",
    description:
      "Сверхмощный чип A14 Bionic с 4-ядерным GPU. Усовершенствованная система с тремя камерами и записью Dolby Vision HDR. 6,1-дюймовый дисплей Super Retina XDR с True Tone. Дисплей Ceramic Shield прочнее, чем любое стекло смартфона",
  },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="products" element={<Products products={products} />} />
          <Route
            path="products/:id/details"
            element={<Details products={products} />}
          />
          <Route path="myCart" element={<MyCart />} />
          <Route path="myOrder" element={<MyOrder />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

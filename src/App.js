import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import { IMG_CDN_URL } from "./constants";




// const Body = () => {
//   return (
//     <div className="restraunt-list">
//       {restrauntList.map((restaurant) => {
//         return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
//       })}
//     </div>
//   );
// };

// const Footer = () => {
//   return <h4>Footer</h4>;
// };

const AppLayout = () => {
  return (
    <>
      <>
        <Header />
        <Body />
        <Footer />
      </>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

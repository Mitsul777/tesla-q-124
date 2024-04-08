import React, { useEffect } from "react";
import classes from "./MainPage.module.scss";
import Header from "../../components/GlobalComponents/Header/Header";
import First from "../../components/MainPage/First/First";
import Second from "../../components/MainPage/Second/Second";
import Three from "../../components/MainPage/Three/Three";

import desk1 from "../../assets/img/4/1.png";
import Four from "../../components/MainPage/Four/Four";
const MainPage = () => {
  const deskTables = [
    {
      id: 1,
      img: desk1,
      item1: "Buy",
      item2: "2 Lot",
      item3: "4 700",
      item4: "219",
      item5: "270",
      item6: "7 200$",
    },
  ];

  const mobTables = [
    {
      id: 1,
      title: "Direct",
      text: "Buy",
    },
    {
      id: 2,
      title: "Volume",
      text: deskTables[0].item2,
    },
    {
      id: 3,
      title: "Margin",
      text: deskTables[0].item3,
    },
    {
      id: 4,
      title: "S/L",
      text: deskTables[0].item4,
    },
    {
      id: 5,
      title: "T/P",
      text: deskTables[0].item5,
    },
    {
      id: 6,
      title: "Profit",
      text: deskTables[0].item6,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={[classes.main, "bg"].join(" ")}>
      <div className={[classes.wrap, ""].join(" ")}>
        <Header />
        <First ammount={"10 000 $"} profit={"72%"} term={"10"} />
        <Second />
        <Three deskTables={deskTables} mobTables={mobTables} />
        <Four title="Tesla Inc." />
      </div>


    </div>
  );
};

export default MainPage;

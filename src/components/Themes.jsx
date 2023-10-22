import React, { useEffect, useState } from "react";
import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";

const getStorageColor = () => {
  let color = "hsl(252, 35% , 51%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }

  return color;
};

const Themes = () => {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState("dark-theme");

 

  const chanceColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };


 

  
  useEffect(() => {
    document.documentElement.style.setProperty
    ('--first-color', color)
    localStorage.setItem("color", color);
  }, [color]);



  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);


  return (
    <div>
      <div className={`${show ? "show-switcher" : ""} style__switcher`}>
        <div className="style__switcher-toggler" onClick={() => setShow(!show)}>
          <FaCog />
        </div>
        <div className="theme__toggler" onClick={toggleTheme}>
          {
            theme === "light-theme" ? <BsMoon/> : <BsSun/>
          }
        </div>

        <h3 className="style__switcher-title"> Escolha sua cor </h3>
        <div className="style__switcher-items">
          {themes.map((themes, index) => {
            return (
              <ThemeItem key={index} {...themes} changeColor={chanceColor} />
            );
          })}
        </div>

        <div className="style__switcher-close" onClick={() => setShow(!show)}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;

import React from "react";
import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./portifolio.css";

function Portifolio() {

  return (
    <section className="portfolio section">
      <h2 className="section__title">
        Meu <span> Portfólio</span>
      </h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Portifolio;

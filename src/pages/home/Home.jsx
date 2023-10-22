import Profile from "../../assets/allansemfundo.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
import ButtonZap from "../../components/ButtonZap";

function Home() {
  return (
    <div>
      <section className="home section grid">
        <img src={Profile} alt="" className="home__img" />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span> Allan Tavares</span>Web developer
            </h1>
            <p className="home__description">
              Acadêmico de Sistemas de Informação pela UFLA, com foco em
              Front-end. Tenho experiência na criação de interfaces com React e
              Vue, entre outras tecnologias. Atualmente, estou aprimorando meu
              conhecimento em Java Spring para o Back-end. Estou comprometido
              sempre com meu aprendizado e evolução.
            </p>
            <Link to="/Site-portifolio/about" className="button">
              Saiba Mais
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="color__block"></div>
        <div>
         
        </div>
      </section>
    </div>
  );
}

export default Home;

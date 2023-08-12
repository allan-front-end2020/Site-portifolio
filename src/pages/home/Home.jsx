import Profile from "../../assets/allansemfundo.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

function Home() {
  return (
    <div>
      <section className="home section grid">
        <img src={Profile} alt="" className="home__img"  />

        <div className="home__content">
          <div className="home__data" >
            <h1 className="home__title">
              <span> Allan Tavares</span> FullStack
            </h1>
            <p className="home__description">
              Olá, me chamo Allan Tavares, estudante de Sistemas de Informação pela UFLA. Minhas
              paixões se dividem entre Front-end e Back-end. No Front-end, crio
              interfaces atraentes com HTML, CSS e JavaScript, usando
              tecnologias como React. No Back-end, projeto servidores, bancos de
              dados e APIs usando  Node.js e Java. Recentemente,
              desenvolvi uma plataforma de gerenciamento de tarefas que integra
              essas habilidades. Estou constantemente buscando desafios para
              aprimorar minhas habilidades e contribuir para soluções
              inovadoras. xxxxxxxxxxxxxxxx
            </p>
            <Link to="/about" className="button">
              More About me{" "}
              <span className="button__icon">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="color__block">
          
        </div>
      </section>
    </div>
  );
}

export default Home;

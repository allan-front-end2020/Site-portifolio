import React from "react";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import CV from "../../assets/Curriculo-Recode.pdf";
import Skills from "../../components/Skills";
import ResumeIten from "../../components/ResumeIten";
import { FaArrowRight } from "react-icons/fa";

import "./about.css";

import { resume } from "../../data";

function About() {
  return (
    <div>
      <main className="section container">
        <section className="about">
          <h2 className="section__title">
            Sobre <span>Min</span>
          </h2>

          <div className="about__container grid">
            <div className="about__info">
              <h3 className="section__subtitle">Informações Pessoais</h3>
              <ul className="info__list grid">
                <Info />
              </ul>
              <a href={CV} download="Curriculo-Recode.pdf" className="button" >
                Download CV
                <span className="button__icon">
                <FaArrowRight/>
                </span>
              </a>
            </div>
            <div className="stats grid">
              <Stats />
            </div>
          </div>
        </section>

        <div className="separator"></div>
        <section className="skills">
          <h3 className="section__subtitle subtitle__center">Minhas skills</h3>
          <div className="skills__container grid " data-aos="fade-up-left">
            <Skills />
          </div>
        </section>

        <div className="separator"></div>
        <section className="resume">
          <h3 className="section__subtitle subtitle__center">
            Educação & Experiências
          </h3>
          <div
            className="resume__container grid
           "
          >
            <div className="resume__data">
              {resume.map((val) => {
                if (val.category === "experience") {
                  return <ResumeIten key={val.id} {...val} />;
                }
              })}
            </div>
            <div className="resume__data">
              {resume.map((val) => {
                if (val.category === "education") {
                  return <ResumeIten key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;

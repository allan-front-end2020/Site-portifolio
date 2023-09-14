import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div>
      <section className="contact section">
        <h2 className="section__title">
          Meus<span> contatos</span>
        </h2>

        <div className="contact__container container grid">
          <div className="contact__data">
            <h3 className="contact__title">pRINCIPAIS CONTATOS</h3>

            <p className="contacts__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, nulla alias, reprehenderit distinctio sed corrupti,
            </p>

            <div className="contact__info">
              <div className="info__item">
                <FaArrowRight className="info__icon" />

                <div>
                  <span className="info__title">Meu email</span>
                  <h4 className="info__desc">
                    allan.tavares@estudante.ufla.br
                  </h4>
                </div>
              </div>
              <div className="info__item">
                <FaArrowRight className="info__icon" />

                <div>
                  <span className="info__title">Celular</span>
                  <h4 className="info__desc">11 9801858880</h4>
                </div>
              </div>
            </div>
            <div className="contact__socials">
              <a href="" className="contact__social-link">
                <FaArrowRight />
              </a>
              <a href="" className="contact__social-link">
                <FaArrowRight />
              </a>
              <a href="" className="contact__social-link">
                <FaArrowRight />
              </a>
              <a href="" className="contact__social-link">
                <FaArrowRight />
              </a>
            </div>
          </div>

          <form action="" className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="xxx"
                  className="form__control"
                />
              </div>
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="xxx"
                  className="form__control"
                />
              </div>
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="xxx"
                  className="form__control"
                />
              </div>
            </div>
            <div className="form__input-div">
              <textarea
                placeholder="ola"
                className="form__control textarea"
              ></textarea>
            </div>
            <button className="button">
              enviar menssagem
              <span className="button__icon contact">
                <FaArrowRight />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

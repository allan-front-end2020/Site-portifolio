import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaPhoneSquare,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaDribbble,
  FaPhoneSquareAlt,
  FaFacebookF,
} from "react-icons/fa";
import "./contact.css";
import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <div>
      <section className="contact section">
        <h2 className="section__title">
          Meus<span> Contatos</span>
        </h2>

        <div className="contact__container container grid">
          <div className="contact__data">
            <h3 className="contact__title">Principais Contatos</h3>

            <p className="contacts__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, nulla alias, reprehenderit distinctio sed corrupti,
            </p>

            <div className="contact__info">
              <div className="info__item">
                <FaEnvelope className="info__icon" />

                <div>
                  <span className="info__title">E-mail</span>
                  <h4 className="info__desc">
                    allan.tavares@estudante.ufla.br
                  </h4>
                </div>
              </div>
              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />

                <div>
                  <span className="info__title">Celular</span>
                  <h4 className="info__desc">+5511 95885-2592</h4>
                </div>
              </div>
            </div>
            <div className="contact__socials">
              <a href="" className="contact__social-link">
                <FaFacebookF className="contact__social-link-svg" />
              </a>
              <a href="" className="contact__social-link">
                <FaTwitter className="contact__social-link-svg" />
              </a>
              <a href="" className="contact__social-link">
                <FaYoutube className="contact__social-link-svg" />
              </a>
            </div>
          </div>

          <form action="" className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="form__control"
                />
              </div>
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="Digite seu email"
                  className="form__control"
                />
              </div>
              <div className="form__input-div">
                <input
                  type="text"
                  placeholder="Digite seu celular"
                  className="form__control"
                />
              </div>

              <div className="form__input-div">
                <textarea
                  placeholder="Digite seu Texto"
                  className="form__control textarea"
                ></textarea>
              </div>
            </div>

            <button className="button">
              enviar menssagem
              <span className="button__icon contact">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

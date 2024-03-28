import "./header.css";
import logo from '../../img/logo_new.png';

export default function Header() {
  return (
    <section className="header">
        <div className="header__image-container">
      <img className="header__image" src={logo} alt="логотип Qiyal Alem." width="70" height="70" />
      <span className="header__logo-text">Qiyal Alem</span>
      </div>
      <ul className="header__list">
        <li className="header__item">
          <a className="header__link" href="#hero">
            Главная
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="#about">
            Обо мне
          </a>
        </li>
        <li className="header__item">
          <a className="header__link" href="#tales">
            {" "}
            Сказки и Романы
          </a>
        </li>
        
      </ul>
      <button className="header__button">
        <a className="header__button-link" href="#contacts">
          {" "}
          Свяжитесь со мной
        </a>
      </button>
    </section>
  );
}

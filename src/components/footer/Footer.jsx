import linkedIn from "../../img/linkedin.svg";
import github from "../../img/github.svg";
import './footer.css';

export default function Footer () {
    return (
        <footer>
        <div className="footer__container">
          <span className="footer__copyright">&copy;  Created with react. By Eldar Moldazhanov</span>
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="#hero">
               Главная
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#about">
                Обо мне
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#tales">
                Сказки и Романы
              </a>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              className="footer__logo-link"
              href="https://www.linkedin.com/in/eldar-moldazhanov-2a142928a/"
              target="_blank" rel="noreferrer"
            >
              <img
                src={linkedIn}
                alt={"linked in logo."}
                width="40"
                height="40"
              />
            </a>
            <a
              className="footer__logo-link"
              href="https://github.com/tayga2410"
              target="_blank" rel="noreferrer"
            >
              <img src={github} alt={"linked in logo."} width="40" height="40" />
            </a>
          </div>
        </div>
      </footer>
    )
}
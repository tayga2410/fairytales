import "./contacts.css";
import gmail from '../../img/gmail-icon.png';
import whatsapp from '../../img/whatsapp-icon.png';
import Form from "../form/Form";

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <div className="contacts__wrapper">
      <div className="contacts__group">
        <h3 className="contacts__sub-title">Используйте контакты или форму для связи!</h3>
        <a className="contacts__link" href="mailto:Kurbanov-emil@mail.ru">
          <span className="contacts__text-link"><img className="contacts__icon" src={gmail} alt="значок gmail." /> Kurbanov-emil@mail.ru</span>
        </a>
        <a className="contacts__link" href="tel:877477387357">
          <span className="contacts__text-link"><img className="contacts__icon" src={whatsapp} alt="значок whatsapp." /> +7 747 738 7357</span>
        </a>
      </div>
      <Form />
      </div>
    </section>
  );
}

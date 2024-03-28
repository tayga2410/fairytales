import "./hero.css";
import hero from "../../img/hero.png";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1 className="visually-hidden">Сказки для детей и взрослых</h1>
      <img className="hero__image" src={hero} alt="изумрудная птица из сказки, расправившая крылья." />
    </section>
  );
}

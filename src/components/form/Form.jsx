import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";

export default function Form() {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFormError, setIsFormError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const attachment = form.current.message.value.trim();

    if (!userName || !attachment || !email) {
      setIsFormError(true);
      setIsFormSubmitted(false);
      return;
    }

    emailjs
      .sendForm("service_8txocxp", "template_4yj2qln", form.current, {
        publicKey: "jesmQo5ywHLoWiJ15",
      })
      .then(
        () => {
          setIsFormSubmitted(true);
          setIsFormError(false);
          form.current.reset();
        },
        (error) => {
          setIsFormSubmitted(false);
          setIsFormError(true);
          form.current.reset();
        }
      );
  };
  return (
    <div>
      <form
        className="form"
        ref={form}
        onSubmit={sendEmail}
        autoComplete="off"
        id="#form"
      >
        <label className="form__label">
          Ваше Имя
          <input className="form__input" type="text" name="user_name" />
        </label>
        <label className="form__label">
          Ваш e-mail
          <input className="form__input" type="email" name="user_email" />
        </label>
        <label className="form__label">
          Ваш рассказ
          <textarea className="form__textarea" name="message" />
        </label>
        <button className="form__button" type="submit" value="Send">
          Отправить
        </button>
      </form>
      {isFormSubmitted && (
        <p className="form__message">Спасибо за Ваше сообщение!</p>
      )}
      {isFormError && (
        <p className="form__message">Пожалуйста, заполните все поля</p>
      )}
    </div>
  );
}

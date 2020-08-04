import React from "react";

import "./styles.css";
import whatsApp from "../../assets/images/icons/whatsapp.svg";

interface ArticleProps {
  image: string;
  text: string;
  name: string;
  subject: string;
  price: string;
}

const TeacherItem: React.FC<ArticleProps> = ({
  image,
  text,
  name,
  subject,
  price,
}) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={image} alt="Avatar" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{text}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R${price}</strong>
        </p>
        <button type="button">
          <img src={whatsApp} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;

"use client"

import Image from "next/image";
import React from "react";

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <article className="card__wrapper" onClick={onClick}>
      <Image src={img} alt={name} width={215} height={150} className="card__image" />
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <ul className="card__list">
          {info.map((el) => {
           return <li key={el.title} className="card__list_item">
             <b> {el.title}</b> : {el.description}
            </li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default Card;

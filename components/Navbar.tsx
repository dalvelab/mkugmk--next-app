import React from "react";
import Link from "next/link";

// TYPES
import { FC } from "react";

// COMPONENTS
import Container from "@components/Container";
import Button from "@components/Button";

const Navbar: FC = () => {
  return (
    <div className="navigation__top">
      <Container type="container--flex" styles={{ height: "80px" }}>
        <div className="navigation__wrapper">
          <div className="links__wrapper">
            <div className="link">
              <span>О комплексе</span>
            </div>
            <div className="link">
              <span>Мероприятия</span>
            </div>
            <div className="link">
              <span>Новости</span>
            </div>
            <div className="link">
              <span>Галерея</span>
            </div>
            <div className="link">
              <span>Контакты</span>
            </div>
          </div>
          <div className="actions__wrapper">
            <Button
              type="btn--x1 btn--green font--medium"
              text="Купить билет"
            />
            <div className="language__selector">
              <span>Ru</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

import { Button } from "@mui/material";
import classNames from "classnames";
import { HeadMeta } from "components";
import { COLOR } from "constants/colors";
import { NextPage } from "next";
import Image from "next/image";
import Buzzer from "../../public/images/buzzer.png";
import EuroCatalyst from "../../public/images/euro-5-catalyst.png";
import Magnaflow from "../../public/images/magnaflow.png";
import Thor from "../../public/images/thor-exhaust.png";
import classes from "./HomePage.module.scss";

const HomePage: NextPage = () => {
  const buttonStyles = {
    width: "50%",
    margin: "auto",
    background: COLOR.PRIMARY_RED,
    padding: "15px",
    "&:hover": {
      background: COLOR.PRIMARY_RED_HOVERED,
      border: "none",
    },
  };
  return (
    <>
      <HeadMeta
        title="Home Page"
        description="App starts from this page"
        keywords="home, homepage"
        url=""
      />
      <section className={classes.wrapper}>
        <div className={classes.block}>
          <div className={classes.heading}>
            <h1>Лучшие выхлопные системы</h1>
            <h2>Глушители MAGNAFLOW</h2>
          </div>
          <div className={classes.content}>
            <ul>
              <li>Большой каталог глушителей Magnaflow</li>
              <li>Подбор глушителей любого размера</li>
              <li>Установка глушителей Magnaflow</li>
              <li>Гарантия на монтаж системы выхлопа</li>
            </ul>
            <Button
              variant="contained"
              href="/service/magnaflow"
              title="Глушители Magnaflow"
              sx={buttonStyles}
            >
              Открыть каталог
            </Button>
          </div>
          <div className={classes.image}>
            <Image
              src={Magnaflow}
              placeholder="blur"
              width={800}
              height={420}
              alt="Глушители Magnaflow"
              layout="responsive"
            />
          </div>
        </div>

        <div className={classNames(classes.block, classes.reverse)}>
          <div className={classes.heading}>
            <span>Универсальные катализаторы</span>
            <h2>EURO-5</h2>
          </div>
          <div className={classes.content}>
            <ul>
              <li>Избавляет от необходимости удаления катализатора</li>
              <li>Сохраняет EURO класс автомобиля</li>
              <li>Подходит для всех автомобилей</li>
              <li>Доступная стоимость с установкой</li>
            </ul>
            <Button
              variant="contained"
              href="/service/euro-4-5"
              title="Катализаторы EURO-5"
              sx={buttonStyles}
            >
              Подробнее
            </Button>
          </div>
          <div className={classes.image}>
            <Image
              src={EuroCatalyst}
              placeholder="blur"
              width={790}
              height={656}
              alt="Катализаторы EURO-5"
              layout="responsive"
            />
          </div>
        </div>

        <div className={classes.block}>
          <div className={classes.heading}>
            <span>Насадки для глушитель</span>
            <h2>BUZZER</h2>
          </div>
          <div className={classes.content}>
            <ul>
              <li>Большой каталог насадок Buzzer в наличии</li>
              <li>Официальный дилер насадок Buzzer</li>
              <li>Подходит для любого автомобиля</li>
              <li>Установка насадок Buzzer на месте</li>
            </ul>
            <Button
              variant="contained"
              href="/service/exhaust-buzzer/"
              title="Насадки на глушитель Buzzer"
              sx={buttonStyles}
            >
              Открыть каталог
            </Button>
          </div>
          <div className={classes.image}>
            <Image
              src={Buzzer}
              placeholder="blur"
              width={800}
              height={533}
              alt="Насадки на глушитель Buzzer"
              layout="responsive"
            />
          </div>
        </div>

        <div className={classNames(classes.block, classes.reverse)}>
          <div className={classes.heading}>
            <span>Электронная выхлопная</span>
            <h2>СИСТЕМА THOR</h2>
          </div>
          <div className={classes.content}>
            <ul>
              <li>Ваш дизельный или бензиновый двигатель не звучит как настоящий спорткар?</li>
              <li>Хотелось бы слышать рёв 8-цилиндрового мотора?</li>
              <li>Мобильное приложение превращает ваш автомобиль в легендарный спорткар</li>
              <li>Каждый день - вы владелец нового автомобиля!</li>
            </ul>
            <Button
              variant="contained"
              href="/service/thor-exhaust/"
              title="Электронный выхлоп Thor"
              sx={buttonStyles}
            >
              Подробнее
            </Button>
          </div>
          <div className={classes.image}>
            <Image
              src={Thor}
              placeholder="blur"
              width={800}
              height={570}
              alt="Электронный выхлоп Thor"
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

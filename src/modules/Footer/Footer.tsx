import {
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import Facebook from "assets/icons-colored/facebook.svg";
import Instagram from "assets/icons-colored/instagram.svg";
import Youtube from "assets/icons-colored/youtube.svg";
import Clock from "assets/icons/clock.svg";
import Email from "assets/icons/email.svg";
import Place from "assets/icons/place.svg";
import Phone from "assets/icons/smartphone-call.svg";
import Vcard from "assets/icons/vcard.svg";
import { COLOR } from "constants/colors";
import SliderReviews from "modules/SliderReviews";
import Image from "next/image";
import Link from "next/link";
import packageInfo from "../../../package.json";
import starlinkLogo from "../../../public/starlink-webstudio-graylogo.png";
import classes from "./Footer.module.scss";
import { reviews } from "./reviews";
import { listItemButtonStyles, listItemIconStyles, listItemStyles } from "./styles";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.item}>
          <span className={classes.heading}>Режим работы & Адрес</span>
          <List>
            <ListItem>
              <ListItemButton
                sx={listItemButtonStyles}
                href="https://g.page/autonewart?share"
                target="_blank"
              >
                <ListItemIcon sx={listItemIconStyles}>
                  <Place fill={COLOR.PRIMARY_RED} width={25} height={25} />
                </ListItemIcon>
                Минск, ул. Куприянова 2
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={listItemButtonStyles} href="tel:+375291233923">
                <ListItemIcon sx={listItemIconStyles}>
                  <Phone fill={COLOR.PRIMARY_RED} width={25} height={25} />
                </ListItemIcon>
                +375 29 123 39 23
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={listItemButtonStyles} href="tel:+375295233922">
                <ListItemIcon sx={listItemIconStyles}>
                  <Phone fill={COLOR.PRIMARY_RED} width={25} height={25} />
                </ListItemIcon>
                +375 29 523 39 22
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={listItemButtonStyles} href="mailto:autonewart@gmail.com">
                <ListItemIcon sx={listItemIconStyles}>
                  <Email fill={COLOR.PRIMARY_RED} width={25} height={25} />
                </ListItemIcon>
                autonewart@gmail.com
              </ListItemButton>
            </ListItem>
            <ListItem sx={listItemStyles}>
              <ListItemIcon sx={listItemIconStyles}>
                <Vcard fill={COLOR.PRIMARY_RED} width={25} height={25} />
              </ListItemIcon>
              УНП 691607798
            </ListItem>
            <ListItem sx={listItemStyles}>
              <ListItemIcon sx={listItemIconStyles}>
                <Clock fill={COLOR.PRIMARY_RED} width={25} height={25} />
              </ListItemIcon>
              Пн-Сб - 09:00-19:00
              <br />
              Вс - Выходной
            </ListItem>
          </List>
        </div>
        <div className={classes.item}>
          <span className={classes.heading}>Подписывайтесь на нас</span>
          <ButtonGroup variant="text">
            <IconButton
              href="https://www.instagram.com/autonewart_"
              target="_blank"
              title="AutoNewArt Instagram"
            >
              <Instagram width={35} height={35} />
            </IconButton>
            <IconButton
              href="https://www.facebook.com/autonewartcom"
              target="_blank"
              title="AutoNewArt Facebook"
            >
              <Facebook width={35} height={35} />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/channel/UC3PqSXHKJd_HCPvGZUzw0ig"
              target="_blank"
              title="AutoNewArt YouTube"
            >
              <Youtube width={35} height={35} />
            </IconButton>
          </ButtonGroup>
        </div>
        <div className={classes.item}>
          <span className={classes.heading}>О нас говорят</span>
          <SliderReviews slides={reviews} />
        </div>
      </div>
      <div className={classes.copyrights}>
        <p className={classes.copyright}>©2022 AutoNewArt</p>
        <p className={classes.version}>v. {packageInfo.version}</p>
        <p className={classes.str}>
          <Link href={"https://starlink.by/"} target="_blank" rel="noopener noreferrer">
            <a>
              <Image
                src={starlinkLogo}
                layout="fixed"
                width={100}
                height={38}
                priority
                placeholder="blur"
                alt="StarLink Web-Studio разработка сайта на NextJS"
                title="StarLink Web-Studio"
              />
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

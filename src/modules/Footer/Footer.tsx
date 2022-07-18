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
import { version } from "../../../package.json";
import classes from "./Footer.module.scss";
import { listItemButtonStyles, listItemIconStyles, listItemStyles } from "./styles";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.item}>
          <h4>Режим работы & Адрес</h4>
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
          <h4>Подписывайтесь на нас</h4>
          <ButtonGroup variant="text">
            <IconButton href="https://www.instagram.com/autonewart_" target="_blank">
              <Instagram width={35} height={35} />
            </IconButton>
            <IconButton href="https://www.facebook.com/autonewartcom" target="_blank">
              <Facebook width={35} height={35} />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/channel/UC3PqSXHKJd_HCPvGZUzw0ig"
              target="_blank"
            >
              <Youtube width={35} height={35} />
            </IconButton>
          </ButtonGroup>
        </div>
        <div className={classes.item}>
          <h4>О нас говорят</h4>
        </div>
      </div>
      <div className={classes.copyrights}>
        <p className={classes.copyright}>©2022 AutoNewArt</p>
        <p className={classes.version}>v. {version}</p>
        <p className={classes.str}>
          <a href="https://starlink.by/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://starlink.by/starlink-webstudio-graylogo.png"
              width="100"
              height="38"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

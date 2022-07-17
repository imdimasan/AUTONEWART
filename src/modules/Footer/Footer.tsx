import { Button, ButtonGroup, IconButton } from "@mui/material";
import Facebook from "assets/icons-colored/facebook.svg";
import Instagram from "assets/icons-colored/instagram.svg";
import Youtube from "assets/icons-colored/youtube.svg";
import Chat from "assets/icons/smartphone-chat.svg";
import { COLOR } from "constants/colors";
import { version } from "../../../package.json";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.item}>
          <h4>Режим работы & Адрес</h4>
          <ButtonGroup orientation="vertical" variant="text">
            <Button variant="text" startIcon={<Chat width={35} height={35} fill={COLOR.WHITE} />}>
              Delete
            </Button>
            <Button variant="text" startIcon={<Chat width={35} height={35} fill={COLOR.WHITE} />}>
              Delete
            </Button>
            <Button variant="text" startIcon={<Chat width={35} height={35} fill={COLOR.WHITE} />}>
              Delete
            </Button>
            <Button variant="text" startIcon={<Chat width={35} height={35} fill={COLOR.WHITE} />}>
              Delete
            </Button>
          </ButtonGroup>
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

      <p className={classes.version}>v. {version}</p>
    </footer>
  );
};

export default Footer;

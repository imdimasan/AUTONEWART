import { Button } from "@mui/material";
import Call from "assets/icons/smartphone-call.svg";
import Chat from "assets/icons/smartphone-chat.svg";
import Logo from "components/Logo";
import classes from "./HeaderContacts.module.scss";
import { IHeaderContacts } from "./interfaces";
import { contactButtonStyles, mobileButtonStyles } from "./styles";

const HeaderContacts = ({ openMenu }: IHeaderContacts) => {
  return (
    <div className={classes.headerContacts}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.contacts}>
        <Button
          href="tel:+375 (29) 123-39-23"
          sx={contactButtonStyles}
          startIcon={<Call height={35} width={35} />}
        >
          <div className={classes.contact}>
            <span>Позвоните нам:</span>
            <span>+375 (29) 123-39-23</span>
          </div>
        </Button>
        <Button
          href="viber://chat?number=%2B375295233922"
          sx={contactButtonStyles}
          startIcon={<Call height={35} width={35} />}
        >
          <div className={classes.contact}>
            <span>Напишите на Viber:</span>
            <span>+375 (29) 523-39-22</span>
          </div>
        </Button>
        <Button
          href="https://g.page/autonewart?share"
          target="_blank"
          sx={contactButtonStyles}
          startIcon={<Call height={35} width={35} />}
        >
          <div className={classes.contact}>
            <span>Приезжайте к нам:</span>
            <span>ул. Куприянова, 2</span>
          </div>
        </Button>
        <Button
          sx={mobileButtonStyles}
          startIcon={<Call height={35} width={35} />}
          onClick={() => openMenu("contacts")}
          aria-label="Contacts"
        ></Button>
        <Button
          sx={mobileButtonStyles}
          startIcon={<Chat height={35} width={35} />}
          onClick={() => openMenu("callback")}
          aria-label="Call Back"
        ></Button>
      </div>
    </div>
  );
};

export default HeaderContacts;

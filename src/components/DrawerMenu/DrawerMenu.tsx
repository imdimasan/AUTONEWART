import { Button, IconButton, SwipeableDrawer, TextField } from "@mui/material";
import GoogleMaps from "assets/icons-colored/google-maps.svg";
import Viber from "assets/icons-colored/viber.svg";
import YandexMaps from "assets/icons-colored/yandex-maps.svg";
import Close from "assets/icons/close.svg";
import Calling from "assets/icons/smartphone-calling-icon.svg";
import Chat from "assets/icons/smartphone-chat.svg";
import { BRAKEPOINTS } from "constants/brakepoints";
import { COLOR } from "constants/colors";
import { MENUS } from "constants/menus";
import Link from "next/link";
import { useState } from "react";
import { telegramNotification } from "utils/telegram";
import classes from "./DrawerMenu.module.scss";
import { IDrawerMenu } from "./interfaces";
import {
  drawerContactsButtonStyles,
  drawerFormButtonStyles,
  drawerMenuButtonStyles,
  drawerPaperProps,
  inputLabelStyles,
  inputStyles,
} from "./styles";

const DrawerMenu = ({ openMenu, setOpenMenu, menuBody }: IDrawerMenu) => {
  const deviceWidth = typeof window !== "undefined" ? window.innerWidth : BRAKEPOINTS.MOBILE_MIN_PX;
  const deviceMobile = deviceWidth < BRAKEPOINTS.TABLET_MIN_PX;
  const menuType = menuBody === "contacts" || menuBody === "callback";

  const inputInitialValues = {
    name: "",
    phone: "",
    message: "",
  };

  const [inputValues, setInputValues] = useState(inputInitialValues);

  const changeValues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await telegramNotification(inputValues);

    if (response.ok) {
      await setInputValues(inputInitialValues);
      setOpenMenu(false);
    } else {
      console.log("Error");
    }
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={openMenu}
      hideBackdrop
      onClose={() => setOpenMenu(false)}
      onOpen={() => setOpenMenu(true)}
      disableSwipeToOpen
      PaperProps={{
        sx: drawerPaperProps,
      }}
    >
      {deviceMobile ? (
        <div className={classes.swipeButton}></div>
      ) : (
        <div className={classes.closeButton}>
          <IconButton onClick={() => setOpenMenu(false)}>
            <Close fill={COLOR.WHITE} width={20} height={20} />
          </IconButton>
        </div>
      )}

      <div className={menuType ? classes.contactsMenu : classes.drawerMenu}>
        {menuBody === "tuning" && (
          <>
            {MENUS.EXHAUST_TUNING.map((menu, index) => (
              <Link key={index} href={menu.url} title={menu.title}>
                <Button
                  href={menu.url}
                  onClick={() => setOpenMenu(false)}
                  sx={drawerMenuButtonStyles}
                >
                  <menu.icon width={60} height={60} />
                  {menu.title}
                </Button>
              </Link>
            ))}
          </>
        )}
        {menuBody === "repair" && (
          <>
            {MENUS.EXHAUST_REPAIR.map((menu, index) => (
              <Link key={index} href={menu.url} title={menu.title}>
                <Button
                  href={menu.url}
                  onClick={() => setOpenMenu(false)}
                  sx={drawerMenuButtonStyles}
                >
                  <menu.icon width={60} height={60} />
                  {menu.title}
                </Button>
              </Link>
            ))}
          </>
        )}
        {menuBody === "catalytic" && (
          <>
            {MENUS.EXHAUST_CATALYST.map((menu, index) => (
              <Link key={index} href={menu.url} title={menu.title}>
                <Button
                  href={menu.url}
                  onClick={() => setOpenMenu(false)}
                  sx={drawerMenuButtonStyles}
                >
                  <menu.icon width={60} height={60} />
                  {menu.title}
                </Button>
              </Link>
            ))}
          </>
        )}
        {menuBody === "dpf" && (
          <>
            {MENUS.EXHAUST_DPF.map((menu, index) => (
              <Link key={index} href={menu.url} title={menu.title}>
                <Button
                  href={menu.url}
                  onClick={() => setOpenMenu(false)}
                  sx={drawerMenuButtonStyles}
                >
                  <menu.icon width={60} height={60} />
                  {menu.title}
                </Button>
              </Link>
            ))}
          </>
        )}
        {menuBody === "service" && (
          <>
            {MENUS.SERVICE.map((menu, index) => (
              <Link key={index} href={menu.url} title={menu.title}>
                <Button
                  href={menu.url}
                  onClick={() => setOpenMenu(false)}
                  sx={drawerMenuButtonStyles}
                >
                  <menu.icon width={60} height={60} />
                  {menu.title}
                </Button>
              </Link>
            ))}
          </>
        )}
        {menuBody === "repairing" && (
          <>
            {MENUS.REPAIR.map((menu, index) => (
              <Link key={index} href={menu.url} title={menu.title}>
                <Button
                  href={menu.url}
                  onClick={() => setOpenMenu(false)}
                  sx={drawerMenuButtonStyles}
                >
                  <menu.icon width={60} height={60} />
                  {menu.title}
                </Button>
              </Link>
            ))}
          </>
        )}
        {menuBody === "contacts" && (
          <>
            <Calling
              fill={COLOR.PRIMARY_RED}
              width={80}
              height={80}
              style={{ marginBottom: "80px" }}
            />
            <Button
              href="tel:+375291233923"
              fullWidth
              onClick={() => setOpenMenu(false)}
              sx={drawerContactsButtonStyles}
            >
              <Calling width={30} height={30} />
              +375 (29) 123-39-23
            </Button>
            <Button
              href="viber://chat?number=%2B375291233923"
              fullWidth
              onClick={() => setOpenMenu(false)}
              sx={drawerContactsButtonStyles}
            >
              <Viber width={30} height={30} />
              +375 (29) 523-39-22
            </Button>
            <Button
              href="https://g.page/autonewart?share"
              fullWidth
              onClick={() => setOpenMenu(false)}
              sx={drawerContactsButtonStyles}
            >
              <GoogleMaps width={30} height={30} />
              Запустить Google Maps
            </Button>
            <Button
              href="yandexnavi://build_route_on_map?lat_to=53.900358&lon_to=27.522665/"
              fullWidth
              onClick={() => setOpenMenu(false)}
              sx={drawerContactsButtonStyles}
            >
              <YandexMaps width={30} height={30} />
              Запустить Яндекс Навигатор
            </Button>
          </>
        )}
        {menuBody === "callback" && (
          <>
            <Chat
              fill={COLOR.PRIMARY_RED}
              width={80}
              height={80}
              style={{ marginBottom: "80px" }}
            />
            <TextField
              fullWidth
              label="Ваше имя"
              name="name"
              value={inputValues.name}
              onChange={changeValues}
              sx={{
                marginBottom: "5px",
              }}
              InputLabelProps={{
                sx: inputLabelStyles,
              }}
              InputProps={{
                sx: inputStyles,
              }}
            />
            <TextField
              fullWidth
              label="Номер телефона"
              name="phone"
              value={inputValues.phone}
              onChange={changeValues}
              sx={{
                marginBottom: "5px",
              }}
              InputLabelProps={{
                sx: inputLabelStyles,
              }}
              InputProps={{
                sx: inputStyles,
              }}
            />
            <TextField
              fullWidth
              label="Сообщение"
              multiline
              name="message"
              minRows={4}
              maxRows={4}
              value={inputValues.message}
              onChange={changeValues}
              sx={{
                marginBottom: "5px",
              }}
              InputLabelProps={{
                sx: inputLabelStyles,
              }}
              InputProps={{
                sx: inputStyles,
              }}
            />
            <Button fullWidth onClick={handleSubmit} sx={drawerFormButtonStyles}>
              Отправить сообщение
            </Button>
          </>
        )}
      </div>
    </SwipeableDrawer>
  );
};

export default DrawerMenu;

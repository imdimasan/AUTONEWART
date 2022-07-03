import logo from "../../../public/logo.png";
import { Button, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import classes from "./Header.module.scss";
import Tuning from "assets/icons/exhaust-tuning.svg";
import Repair from "assets/icons/exhaust-repair.svg";
import Catalytic from "assets/icons/exhaust-catalytic.svg";
import Dpf from "assets/icons/exhaust-dpf.svg";
import Repairing from "assets/icons/car-repair.svg";
import Service from "assets/icons/car-service.svg";
import Phone from "assets/icons/smartphone-icon.svg";
import Close from "assets/icons/close.svg";
import Link from "next/link";
import Image from "next/image";
import { contactButtonStyles, drawerButtonStyles, menuButtonStyles } from "./styles";
import { MENU_TUNING } from "constants/menus";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [menuBody, setMenuBody] = useState<null | string>(null);

  const toggleDrawer = (value: string) => {
    if (openMenu) {
      setOpenMenu(false);
      setMenuBody(null);
    } else {
      setOpenMenu(true);
      setMenuBody(value);
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.topMenu}>
          <div className={classes.logo}>
            <Link href={"/"}>
              <a>
                <Image
                  src={logo}
                  layout="responsive"
                  width={170}
                  height={65}
                  priority
                  placeholder="blur"
                />
              </a>
            </Link>
          </div>
          <div className={classes.contacts}>
            <Button
              href="tel:+375 (29) 123-39-23"
              sx={contactButtonStyles}
              startIcon={<Phone height={35} width={35} />}
            >
              <div className={classes.contact}>
                <span>Позвоните нам:</span>
                <span>+375 (29) 123-39-23</span>
              </div>
            </Button>
            <Button
              href="viber://chat?number=%2B375291233923"
              sx={contactButtonStyles}
              startIcon={<Phone height={35} width={35} />}
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
              startIcon={<Phone height={35} width={35} />}
            >
              <div className={classes.contact}>
                <span>Приезжайте к нам:</span>
                <span>ул. Куприянова, 2</span>
              </div>
            </Button>
          </div>
        </div>
        <menu className={classes.bottomMenu}>
          <li>
            <Button
              onClick={() => toggleDrawer("tuning")}
              variant="contained"
              startIcon={<Tuning height={50} width={50} />}
              sx={menuButtonStyles}
            >
              Тюнинг выхлопа
            </Button>
          </li>
          <li>
            <Button
              onClick={() => toggleDrawer("repair")}
              variant="contained"
              startIcon={<Repair height={50} width={50} />}
              sx={menuButtonStyles}
            >
              Ремонт выхлопа
            </Button>
          </li>
          <li>
            <Button
              onClick={() => toggleDrawer("catalytic")}
              variant="contained"
              startIcon={<Catalytic height={50} width={50} />}
              sx={menuButtonStyles}
            >
              Катализаторы
            </Button>
          </li>
          <li>
            <Button
              onClick={() => toggleDrawer("dpf")}
              variant="contained"
              startIcon={<Dpf height={50} width={50} />}
              sx={menuButtonStyles}
            >
              Сажевые фильтры
            </Button>
          </li>
          <li>
            <Button
              onClick={() => toggleDrawer("service")}
              variant="contained"
              startIcon={<Service height={50} width={50} />}
              sx={menuButtonStyles}
            >
              Обслуживание
            </Button>
          </li>
          <li>
            <Button
              onClick={() => toggleDrawer("repairing")}
              variant="contained"
              startIcon={<Repairing height={50} width={50} />}
              sx={menuButtonStyles}
            >
              Ремонт
            </Button>
          </li>
        </menu>
      </div>

      <Drawer
        anchor="bottom"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          sx: {
            padding: "20px",
            background: "#000",
            color: "#fff",
            gap: "10px",
          },
        }}
      >
        <div className={classes.closeButton}>
          <IconButton onClick={() => setOpenMenu(false)}>
            <Close fill="#fff" width={20} height={20} />
          </IconButton>
        </div>
        <div className={classes.drawerMenu}>
          {menuBody === "tuning" && (
            <>
              {MENU_TUNING.map((el, index) => (
                <Link key={index} href={el.url}>
                  <Button
                    href={el.url}
                    onClick={() => setOpenMenu(false)}
                    variant="contained"
                    sx={drawerButtonStyles}
                  >
                    <el.icon width={60} height={60} />
                    {el.title}
                  </Button>
                </Link>
              ))}
            </>
          )}
          {menuBody === "repair" && (
            <>
              <h1>Repair</h1>
            </>
          )}
          {menuBody === "catalytic" && (
            <>
              <h1>Catalytic</h1>
            </>
          )}
          {menuBody === "dpf" && (
            <>
              <h1>DPF</h1>
            </>
          )}
          {menuBody === "service" && (
            <>
              <h1>Service</h1>
            </>
          )}
          {menuBody === "repairing" && (
            <>
              <h1>Repairing</h1>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Header;

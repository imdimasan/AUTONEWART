import { Button, IconButton, SwipeableDrawer } from "@mui/material";
import Close from "assets/icons/close.svg";
import { BRAKEPOINTS } from "constants/brakepoints";
import { COLOR } from "constants/colors";
import { MENUS } from "constants/menus";
import Link from "next/link";
import classes from "./HeaderMenu.module.scss";
import { IHeaderMenu } from "./interfaces";
import { drawerButtonStyles } from "./styles";

const HeaderMenu = ({ openMenu, setOpenMenu, menuBody }: IHeaderMenu) => {
  const deviceWidth = typeof window !== "undefined" ? window.innerWidth : BRAKEPOINTS.MOBILE_MIN_PX;
  const deviceMobile = deviceWidth < BRAKEPOINTS.TABLET_MIN_PX;

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={openMenu}
      onClose={() => setOpenMenu(false)}
      onOpen={() => setOpenMenu(true)}
      disableSwipeToOpen
      PaperProps={{
        sx: {
          minHeight: "calc(100% - 105px)",
          maxHeight: "calc(100% - 105px)",
          padding: "5px 0 20px",
          background: COLOR.BLACK,
          color: COLOR.WHITE,
          gap: "10px",
          borderRadius: deviceMobile ? "10px" : "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
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

      <div className={classes.drawerMenu}>
        {menuBody === "tuning" && (
          <>
            {MENUS.EXHAUST_TUNING.map((menu, index) => (
              <Link key={index} href={menu.url} title={menu.title}>
                <Button
                  href={menu.url}
                  onClick={() => setOpenMenu(false)}
                  variant="contained"
                  sx={drawerButtonStyles}
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
                  variant="contained"
                  sx={drawerButtonStyles}
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
                  variant="contained"
                  sx={drawerButtonStyles}
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
                  variant="contained"
                  sx={drawerButtonStyles}
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
                  variant="contained"
                  sx={drawerButtonStyles}
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
                  variant="contained"
                  sx={drawerButtonStyles}
                >
                  <menu.icon width={60} height={60} />
                  {menu.title}
                </Button>
              </Link>
            ))}
          </>
        )}
      </div>
    </SwipeableDrawer>
  );
};

export default HeaderMenu;

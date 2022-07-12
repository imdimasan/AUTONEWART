import { DrawerMenu, HeaderContacts, HeaderMenu } from "components";
import { useState } from "react";
import classes from "./Header.module.scss";

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
        <HeaderContacts openMenu={toggleDrawer} />
        <HeaderMenu openMenu={toggleDrawer} />
      </div>
      <DrawerMenu openMenu={openMenu} setOpenMenu={setOpenMenu} menuBody={menuBody} />
    </>
  );
};

export default Header;

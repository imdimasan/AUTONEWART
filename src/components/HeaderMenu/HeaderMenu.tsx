import { Button } from "@mui/material";
import Repairing from "assets/icons/car-repair.svg";
import Service from "assets/icons/car-service.svg";
import Catalytic from "assets/icons/exhaust-catalytic.svg";
import Dpf from "assets/icons/exhaust-dpf.svg";
import Repair from "assets/icons/exhaust-repair.svg";
import Tuning from "assets/icons/exhaust-tuning.svg";
import classes from "./HeaderMenu.module.scss";
import { IHeaderMenu } from "./interfaces";
import { menuButtonStyles } from "./styles";

const HeaderMenu = ({ openMenu }: IHeaderMenu) => {
  return (
    <menu className={classes.headerMenu}>
      <li>
        <Button
          onClick={() => openMenu("tuning")}
          variant="contained"
          startIcon={<Tuning height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Тюнинг выхлопа
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("repair")}
          variant="contained"
          startIcon={<Repair height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Ремонт выхлопа
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("catalytic")}
          variant="contained"
          startIcon={<Catalytic height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Катализаторы
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("dpf")}
          variant="contained"
          startIcon={<Dpf height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Сажевые фильтры
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("service")}
          variant="contained"
          startIcon={<Service height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Обслуживание
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("repairing")}
          variant="contained"
          startIcon={<Repairing height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Ремонт
        </Button>
      </li>
    </menu>
  );
};

export default HeaderMenu;

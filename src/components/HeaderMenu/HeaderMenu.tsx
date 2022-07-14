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
          startIcon={<Tuning height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Тюнинг выхлопа
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("repair")}
          startIcon={<Repair height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Ремонт выхлопа
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("catalytic")}
          startIcon={<Catalytic height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Катализаторы
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("dpf")}
          startIcon={<Dpf height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Сажевые фильтры
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("service")}
          startIcon={<Service height={50} width={50} />}
          sx={menuButtonStyles}
        >
          Обслуживание
        </Button>
      </li>
      <li>
        <Button
          onClick={() => openMenu("repairing")}
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

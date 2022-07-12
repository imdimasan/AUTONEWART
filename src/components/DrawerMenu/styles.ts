import { BRAKEPOINTS } from "constants/brakepoints";
import { COLOR } from "constants/colors";
const deviceWidth = typeof window !== "undefined" ? window.innerWidth : BRAKEPOINTS.MOBILE_MIN_PX;
const deviceMobile = deviceWidth < BRAKEPOINTS.TABLET_MIN_PX;

export const drawerMenuButtonStyles = {
  flexDirection: "column",
  background: COLOR.BLACK,
  border: "none",
  color: COLOR.WHITE,
  textTransform: "none",
  textAlign: "center",
  padding: "10px",
  fontWeight: "400",
  lineHeight: "1",
  width: "150px",
  minHeight: "150px",
  height: "-webkit-fill-available",
  gap: "10px",
  svg: {
    fill: COLOR.TRETIARY,
    transition: "250ms",
  },
  "& .MuiButton-startIcon": {
    margin: "0",
  },
  "&:hover": {
    color: COLOR.WHITE,
    background: COLOR.TRETIARY,
    border: "none",
    svg: {
      fill: COLOR.PRIMARY,
    },
  },
};

export const drawerContactsButtonStyles = {
  background: COLOR.BLACK,
  border: "none",
  color: COLOR.WHITE,
  textTransform: "none",
  textAlign: "center",
  padding: "10px",
  fontWeight: "400",
  lineHeight: "1",
  gap: "10px",
  svg: {
    fill: COLOR.TRETIARY,
    transition: "250ms",
  },
  "& .MuiButton-startIcon": {
    margin: "0",
  },
  "&:hover": {
    color: COLOR.WHITE,
    background: COLOR.TRETIARY,
    border: "none",
    svg: {
      fill: COLOR.PRIMARY,
    },
  },
};

export const drawerPaperProps = {
  minHeight: deviceMobile ? "calc(100% - 70px)" : "calc(100% - 105px)",
  maxHeight: deviceMobile ? "calc(100% - 70px)" : "calc(100% - 105px)",
  padding: "5px 0 20px",
  background: COLOR.DARK_GRAY,
  color: COLOR.WHITE,
  gap: "10px",
  borderTopLeftRadius: deviceMobile ? "18px" : "none",
  borderTopRightRadius: deviceMobile ? "18px" : "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

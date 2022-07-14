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
  width: "100%",
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
  minHeight: "50px",
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
export const drawerFormButtonStyles = {
  background: COLOR.PRIMARY_RED,
  border: "none",
  color: COLOR.WHITE,
  textTransform: "none",
  textAlign: "center",
  padding: "10px",
  fontWeight: "400",
  lineHeight: "1",
  minHeight: "40px",
  gap: "10px",
  "&:hover": {
    color: COLOR.WHITE,
    background: COLOR.TRETIARY,
    border: "none",
  },
};

export const drawerPaperProps = {
  minHeight: deviceMobile ? "calc(100% - 70px)" : "calc(100% - 105px)",
  maxHeight: deviceMobile ? "calc(100% - 70px)" : "calc(100% - 105px)",
  padding: "5px 0 20px",
  background: COLOR.DARK_GRAY,
  color: COLOR.WHITE,
  gap: "10px",
  "&::-webkit-scrollbar": {
    display: "none",
  },
};

export const inputLabelStyles = {
  top: "-8px",
  color: COLOR.WHITE_GRAY,
  fontSize: "15px",
  "&.Mui-focused": {
    color: COLOR.WHITE,
    transform: "translate(10px, 0) scale(0.75)",
  },
  "&.MuiInputLabel-shrink": {
    color: COLOR.WHITE,
    background: COLOR.BLACK,
    borderRadius: "10px",
    lineHeight: "1",
    padding: "4px 12px",
    transform: "translate(10px, 0) scale(0.75)",
  },
};

export const inputStyles = {
  background: COLOR.LIGHT_GRAY,
  color: COLOR.WHITE,
  input: {
    lineHeight: "1",
    padding: "9px 14px",
    borderColor: COLOR.WHITE_GRAY,
    "-webkit-box-shadow": `inset 0 0 0 50px ${COLOR.LIGHT_GRAY}`,
    "-webkit-text-fill-color": COLOR.WHITE,
  },
  "&.MuiOutlinedInput-root": {
    fieldset: {
      top: "-6px",
    },
    "&.Mui-focused": {
      fieldset: {
        borderColor: COLOR.WHITE_GRAY,
        top: "-6px",
      },
    },
  },
};

import { COLOR } from "constants/colors";

export const contactButtonStyles = {
  color: COLOR.WHITE,
  fontWeight: "400",
  svg: {
    fill: COLOR.PRIMARY_RED,
  },
  display: { xs: "none", md: "inline-flex" },
};
export const mobileButtonStyles = {
  color: COLOR.WHITE,
  fontWeight: "400",
  display: { xs: "inline-flex", md: "none" },
  svg: {
    fill: COLOR.PRIMARY_RED,
  },
  "& .MuiButton-startIcon": {
    margin: "0",
  },
};

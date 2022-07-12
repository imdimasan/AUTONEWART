import { COLOR } from "constants/colors";

export const contactButtonStyles = {
  color: COLOR.ACCENT,
  fontWeight: "400",
  svg: {
    fill: COLOR.TRETIARY,
  },
  display: { xs: "none", md: "inline-flex" },
};
export const mobileButtonStyles = {
  color: COLOR.ACCENT,
  fontWeight: "400",
  display: { xs: "inline-flex", md: "none" },
  svg: {
    fill: COLOR.TRETIARY,
  },
  "& .MuiButton-startIcon": {
    margin: "0",
  },
};

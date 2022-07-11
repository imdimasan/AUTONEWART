import { COLOR } from "constants/colors";

export const contactButtonStyles = {
  color: COLOR.ACCENT,
  fontWeight: "400",
  svg: {
    fill: COLOR.TRETIARY,
  },
};

export const menuButtonStyles = {
  flexDirection: "column",
  background: "#5c5c5c",
  border: "none",
  color: COLOR.ACCENT,
  textTransform: "none",
  padding: "5px 10px",
  fontWeight: "400",
  width: "150px",
  gap: "5px",
  svg: {
    fill: COLOR.TRETIARY,
    transition: "250ms",
  },
  "& .MuiButton-startIcon": {
    margin: "0",
  },
  "&:hover": {
    color: COLOR.ACCENT,
    background: COLOR.TRETIARY,
    border: "none",
    svg: {
      fill: COLOR.PRIMARY,
    },
  },
};

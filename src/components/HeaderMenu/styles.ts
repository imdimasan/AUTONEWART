import { COLOR } from "constants/colors";

export const menuButtonStyles = {
  flexDirection: "column",
  background: COLOR.DARK_GRAY,
  border: "none",
  color: COLOR.WHITE,
  textTransform: "none",
  padding: "5px 10px",
  fontWeight: "400",
  width: "150px",
  gap: "5px",
  svg: {
    fill: COLOR.WHITE_GRAY,
    transition: "250ms",
  },
  "& .MuiButton-startIcon": {
    margin: "0",
  },
  "&:hover": {
    color: COLOR.WHITE,
    background: COLOR.PRIMARY_RED,
    border: "none",
    svg: {
      fill: COLOR.WHITE,
    },
  },
};

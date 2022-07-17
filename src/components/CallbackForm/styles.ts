import { COLOR } from "constants/colors";

export const inputStyles = {
  background: COLOR.LIGHT_GRAY,
  color: COLOR.WHITE,
  input: {
    borderRadius: "5px",
    lineHeight: "1",
    padding: "14px",
    borderColor: COLOR.WHITE_GRAY,
    WebkitBoxShadow: `inset 0 0 0 50px ${COLOR.LIGHT_GRAY}`,
    WebkitTextFillColor: COLOR.WHITE,
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

export const inputLabelStyles = {
  top: "-3px",
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
    transform: "translate(10px, -4px) scale(0.75)",
  },
};

export const formButtonStyles = {
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
  "&:disabled": {
    background: COLOR.LIGHT_GRAY,
    color: COLOR.DARK_GRAY,
  },
};

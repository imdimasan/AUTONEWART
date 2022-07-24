import { Button, TextField } from "@mui/material";
import lottie from "lottie-web";
import { useRef, useState } from "react";
import { telegramNotification } from "utils/telegram";
import { ICallbackForm } from "./interfaces";
import { formButtonStyles, inputLabelStyles, inputStyles } from "./styles";

const CallbackForm = ({ setOpenMenu }: ICallbackForm) => {
  const initialValues = {
    name: "",
    phone: "",
    message: "",
  };

  const [values, setValues] = useState(initialValues);
  const [messageSent, setMessageSent] = useState(false);
  const lottieRef = useRef<HTMLDivElement>(null);

  const changeValues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await telegramNotification(values);
    if (response.ok) {
      setMessageSent(true);
      if (lottieRef.current) {
        const lottieAnimation = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: require("assets/lottie/message-sent.json"),
        });
        lottieAnimation.addEventListener("complete", () => {
          lottieAnimation.removeEventListener("complete");
          setOpenMenu(false);
        });
        lottieAnimation.play();
      }
    } else {
      console.log("Error");
    }
  };

  return (
    <>
      {!messageSent && (
        <>
          <TextField
            fullWidth
            label="Ваше имя"
            name="name"
            value={values.name}
            onChange={changeValues}
            sx={{
              marginBottom: "5px",
            }}
            InputLabelProps={{
              sx: inputLabelStyles,
            }}
            InputProps={{
              sx: inputStyles,
            }}
          />
          <TextField
            fullWidth
            label="Номер телефона"
            name="phone"
            value={values.phone}
            inputMode="numeric"
            onChange={changeValues}
            sx={{
              marginBottom: "5px",
            }}
            InputLabelProps={{
              sx: inputLabelStyles,
            }}
            InputProps={{
              sx: inputStyles,
            }}
          />
          <TextField
            fullWidth
            label="Сообщение"
            multiline
            name="message"
            minRows={2}
            maxRows={2}
            value={values.message}
            onChange={changeValues}
            sx={{
              marginBottom: "5px",
            }}
            InputLabelProps={{
              sx: inputLabelStyles,
            }}
            InputProps={{
              sx: inputStyles,
            }}
          />
          <Button
            fullWidth
            onClick={handleSubmit}
            sx={formButtonStyles}
            disabled={!values.name && !values.phone}
          >
            Отправить сообщение
          </Button>
        </>
      )}
      <div ref={lottieRef}></div>
    </>
  );
};

export default CallbackForm;

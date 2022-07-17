import { Button, TextField } from "@mui/material";
import lottie from "lottie-web";
import { useRef, useState } from "react";
import { telegramNotification } from "utils/telegram";
import { ICallbackForm } from "./interfaces";
import { formButtonStyles, inputLabelStyles, inputStyles } from "./styles";

const CallbackForm = ({ setOpenMenu }: ICallbackForm) => {
  const inputInitialValues = {
    name: "",
    phone: "",
    message: "",
  };

  const [inputValues, setInputValues] = useState(inputInitialValues);
  const [messageSent, setMessageSent] = useState(false);
  const lottieRef = useRef(null);

  const changeValues = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await telegramNotification(inputValues);

    if (response.ok) {
      setInputValues(inputInitialValues);
      setMessageSent(true);
      if (lottieRef.current) {
        const animation = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: require("assets/lottie/message-sent.json"),
        });
        animation.addEventListener("complete", () => {
          setOpenMenu(false);
        });
        animation.play();
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
            value={inputValues.name}
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
            value={inputValues.phone}
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
            value={inputValues.message}
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
            disabled={!inputValues.name && !inputValues.phone}
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

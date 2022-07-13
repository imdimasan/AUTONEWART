// const token = "Your bot token";
// const chatId = "Your chat ID";
// const url = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=";

interface IValues {
  name: string;
  phone: string;
  message: string;
}

export const telegramNotification = async ({ name, phone, message }: IValues) => {
  const messageBody = `
    =============================%0A
    🍖=== Новый заказ ===🍖%0A
    =============================%0A
    <b>Имя:</b> ${name}%0A
    <b>Телефон:</b> ${phone.replace("+", "%2B")}%0A
    <b>Оплата:</b> ${message}%0A
    ==========ЗАКАЗ=============%0A
    &parse_mode=html`;

  console.log(messageBody);
};

interface IValues {
  name: string;
  phone: string;
  message: string;
}

export const telegramNotification = async ({ name, phone, message }: IValues) => {
  const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHATID;

  const URL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=`;

  const messageBody = `==========================%0A🍖=== Новый заказ ===🍖%0A==========================%0A<b>Имя:</b> ${name}%0A<b>Телефон:</b> ${phone.replace(
    "+",
    "%2B"
  )}%0A<b>Оплата:</b> ${message}&parse_mode=html`;

  const response = await fetch(URL + messageBody);
  return response;
};

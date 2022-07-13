interface IValues {
  name: string;
  phone: string;
  message: string;
}

export const telegramNotification = async ({ name, phone, message }: IValues) => {
  const token = "1195246232:AAHTjNkeLWQw4wCFW9DbFcXWZ9PsyL8x0Jc";
  const chatId = "-487741813";
  const URL = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=`;

  const messageBody = `=============================%0A🍖=== Новый заказ ===🍖%0A=============================%0A<b>Имя:</b> ${name}%0A<b>Телефон:</b> ${phone.replace(
    "+",
    "%2B"
  )}%0A<b>Оплата:</b> ${message}%0A==========ЗАКАЗ=============%0A&parse_mode=html`;

  const response = await fetch(URL + messageBody);
  return response;
};

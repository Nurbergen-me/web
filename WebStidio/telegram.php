<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['mail'];
$tarif = $_POST['hidden'];
$time = $_POST['hidden-time'];

//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1206173584:AAGsFYYAJd9B42fY_RB9VwuRnvNeWDS0Z0Y";

//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "400819150";

//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email:' => $email,
  'Тариф:' => $tarif,
  'Таймер:' => $time,
);

//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

//https://api.telegram.org/bot1129916003:AAFH_HPyR8XzSNxV90mbEAOpNHSEeXfPQDk/sendMessage?chat_id=400819150&parse_mode=html&text=sfsdfsf

//Осуществляется отправка данных в переменной $sendToTelegram
// $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// $url = $GLOBALS["website"]."/sendMessage?chat_id=".$chat_id."&text=".urlencode($msg);
header("Location: https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}");

//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if (5==3) {
  echo "Thank you";
} else {
  echo "Error";
}
?>
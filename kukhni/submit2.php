<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{
  if (is_uploaded_file($_FILES['my_upload']['tmp_name'])) 
  { 
    //First, Validate the file name
    if(empty($_FILES['my_upload']['name']))
    {
      echo " File name is empty! ";
      exit;
    }

    $upload_file_name = $_FILES['my_upload']['name'];
    //Too long file name?
    if(strlen ($upload_file_name)>100)
    {
      echo " too long file name ";
      exit;
    }

    //replace any non-alpha-numeric cracters in th file name
    $upload_file_name = preg_replace("/[^A-Za-z0-9 \.\-_]/", '', $upload_file_name);

    //set a limit to the file upload size
    if ($_FILES['my_upload']['size'] > 1000000) 
    {
    echo " too big file ";
      exit;        
    }

    //Save the file
    $dest=__DIR__.'/uploads/'.$upload_file_name;
    if (move_uploaded_file($_FILES['my_upload']['tmp_name'], $dest)) 
    {
      echo 'File Has Been Uploaded !';
    }
  }
}

$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];
$sum = $_POST['sum'];
$sum2 = $_POST['sum2'];
$sum3 = $_POST['sum3'];
$avalue = $_POST['avalue'];
$bvalue = $_POST['bvalue'];
$cvalue = $_POST['cvalue'];

$nameItem = '';

if($sum3 == 22000) {
  $nameItem = 'Пленка ПВХ';
} else if($sum3 == 29000) {
  $nameItem = 'Пластик';
} else if($sum3 == 40000) {
  $nameItem = 'Массив';
} else if($sum3 == 30000) {
  $nameItem = 'Эмаль';
}

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';                                               // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mail.server.mailme@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'mailserver'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('mail.server.mailme@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('a-snab@mail.ru');     // Кому будет уходить письмо 
$mail->addAddress($email);               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/calculator-ani.png'); 
//$file_to_attach = $_FILES['file']['name'];

$mail->AddAttachment($upload_file_name);        // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Кухни на Дом';
$mail->Body    = 'Имя:' .$name . '<br> Телефон: ' .$phone. '<br>Почта этого пользователя: ' .$email.'<br><br>
                        Сумма расчета: ' .$sum .' = '. $sum2.'метров x '. $sum3 .'<br>Длина стороны A = '.$avalue.'<br>Длина стороны Б = '.$bvalue.'<br>Длина стороны С = '.$cvalue.'<br>Материал: '.$nameItem ;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>
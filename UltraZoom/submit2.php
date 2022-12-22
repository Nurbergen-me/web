<?php 

if (isset($_REQUEST["tel"]));
if (isset($_REQUEST["name"]));
if (isset($_REQUEST["texta"]))
{
    $PROP = array();
    $PROP["PHONE"] = $_REQUEST["tel"];
    $PROP['name'] = $_REQUEST['name'];
    $PROP['texta'] = $_REQUEST['texta'];
    
    $mail = "nurik.eleshov@gmai.com";
    $message='';
    $headers = "MIME-Version: 1.0\r\n"; 
    $headers .= "From:  <".$mail.">\r\n"; 
    $headers .= "Content-type: text/html; charset=utf-8\r\n"; 
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";     
    $message.='<p><strong>Имя:</strong> '.$PROP["name"].'</p>';
    $message.='<p><strong>Телефон:</strong> '.$PROP["PHONE"].'</p>';
    $message.='<p><strong>Комментарий:</strong> '.$PROP["texta"].'</p>';
    $message.='<p><strong>Отправлено:</strong> '.date("d-m-Y H:i:s").'</p>';
    $message.='<br/><br/><br/>';
    $message.='Письмо сгенерировано автоматически. Отвечать на него не нужно.';
    $theme='ТЕХНИЧЕСКОЕ СОПРОВОЖДЕНИЕ IT-ИНФРАСТРУКТУРЫ ВАШЕГО БИЗНЕСА';
    $mailed = mail($mail, $theme, $message, $headers);
} 
?>
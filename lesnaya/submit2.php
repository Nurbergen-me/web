<?php 

if (isset($_REQUEST["tel"]))
{
    $PROP = array();
    $PROP["PHONE"] = htmlspecialchars($_REQUEST["tel"]);
    $PROP['name'] = htmlspecialchars($_REQUEST['name']);
    
    $mail = "nurik.eleshov@gmail.com";
    $message='';
    $headers = "MIME-Version: 1.0\r\n"; 
    $headers .= "From: Live-Лесная <".$mail.">\r\n"; 
    $headers .= "Content-type: text/html; charset=utf-8\r\n"; 
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";     
    $message.='<p><strong>Имя:</strong> '.$PROP["name"].'</p>';
    $message.='<p><strong>Телефон:</strong> '.$PROP["PHONE"].'</p>';
    $message.='<p><strong>Отправлено:</strong> '.date("d-m-Y H:i:s").'</p>';
    $message.='<br/><br/><br/>';
    $message.='Письмо сгенерировано автоматически. Отвечать на него не нужно.';
    $theme='Live-Лесная';
    $mailed = mail($mail, $theme, $message, $headers);
} 
?>
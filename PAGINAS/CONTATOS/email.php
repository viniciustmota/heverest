<?php

if(isset($_POST['email']) && !empty($_POST['email'])){

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['menssage']);

$to = "everest0040@gmail.com";
$subject = "Contato - EVEREST";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Mensagem: ".$mensagem;
$header = "From:vinicius@everest.com"."\r\n".
            "Replay-To:".$email."\e\n".
            "X=Mailer:PHP/".phpversion();
if(mail($to,$subject,$body,$header)){

    echo("Email enviado com sucesso!");

}else{
    echo("O Email não pode ser enviado");
}

}

?>
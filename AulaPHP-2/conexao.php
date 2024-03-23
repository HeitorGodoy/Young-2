<?php

// SEMPRE PASSAR 4 INFORMAÇÕES
$servidor = 'localhost' ;
$cadastrar = 'cadastrar' ;
$usuario = 'root' ;
$senha = '' ;

$mysqli = new mysqli($servidor, $usuario, $senha, $cadastrar);

if($mysqli ->error){
    die("Falha ao conectar ao banco de dados :(");
}


?>
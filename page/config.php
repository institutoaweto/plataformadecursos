<?php

$dbhost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'formulario-leonardo';


$conexao = new mysqli($dbhost,$dbUsername,$dbPassword,$dbName);

//if($conexao->connect_errno)
//{
//    echo "erro";
//}
//else 
//{
//    echo "Conexão Feita";
//}

?>
<?php

    if(isset($_POST['submit']))
    {
        //print_r('Nome:' . $_POST['nome']);
        //print_r('<br>');
        //print_r('Senha:' . $_POST['senha']);
        //print_r('<br>');


        include_once('config.php');

        $nome = $_POST['nome'];
        $senha = $_POST['senha'];


        $result = mysqli_query($conexao, "INSERT INTO usuarios(nome,senha) VALUES ('$nome','$senha')");
    }


?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/7349bc3776.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="shortcut icon" href="https://i.postimg.cc/zvjKKqB6/logotipo.png">
    <link rel="stylesheet" href="../css/login.css">
    <title>Página de Login</title>
</head>
<body>

    <style>
        body{
            background-color: #031620;
            overflow-x: hidden;
            font-family: Arial, Helvetica, sans-serif;
        }
        a{
            display: flex;
            text-decoration: none;
            color: white; 
        }
    </style>

    <main>
        <form action="login.php" method="POST" class="back-login">

            <h2>Faça seu Login</h2>
            <input type="text" id="input-nome" name="nome" placeholder="Nome">
            <input type="password" id="input-senha" name="senha" placeholder="Senha">
            <input type="submit" name="submit" id="submit">

        </form>

    </main>    
    

</body>
</html>
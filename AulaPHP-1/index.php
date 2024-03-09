<?php
include('conexao.php');

if (isset($_POST['email']) || isset($_POST['pass'])) {
    if (strlen($_POST['email']) == 0) {
        echo "Preencha seu E-mail";
    } else if (strlen($_POST['pass']) == 0) {
        echo "Preencha sua Senha";
    } else {
        // email e senha do formulario
        $email = $_POST['email'];
        $pass = $_POST['pass'];

        // comando sql para ver se o usuario existe
        $sql_codigo = "SELECT * FROM dados WHERE email = '$email' AND senha = '$pass'";
        // lançar codigo no banco de dados
        $sql_query = $mysqli->query($sql_codigo) or die("Falha de execução . $msqli->error");

        echo $sql_query;
    }
}
?>
<!DOCTYPE html>
<html lang="PT-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aula 1 - Login com Banco de Dados</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div>
        <h1>
            Acesse a sua conta
        </h1>
        <form action="" method="post">
            <div>
                <label for="Email"></label>
                <input type="email" name="email" required>
            </div>
            <div>
                <label for="Senha"></label>
                <input type="password" name="pass" required>
            </div>
            <button type="submit">Entrar</button>
        </form>
    </div>
</body>

</html>
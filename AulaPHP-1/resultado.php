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

        $quantidade = $sql_query ->num_rows;

        if($quantidade == 1)
        {
            $usuario = $sql_query->fetch_assoc();
            var_dump ($usuario['nome']);
            var_dump ($usuario['id']);
        }
        else{
            echo "falha ao logar";
        }
        
    }
}
?>
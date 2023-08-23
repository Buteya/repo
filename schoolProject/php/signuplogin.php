<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signed Up</title>
</head>

<body>
    <?php
    if (isset($_POST['signup'])) {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmPassword = $_POST['confirmPassword'];
    }
    ?>
    <h2>Data captured successfully</h2>
    <input type="text" value="var_dump($_POST['data'])"></input>
</body>

</html>
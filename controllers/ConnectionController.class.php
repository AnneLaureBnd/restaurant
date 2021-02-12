<?php

class ConnectionController
{
    public function display()
    {
        //display
        $template = "index.phtml";
        require 'views/admin/layout.phtml';
    }
    
    public function connection()
    {
        //if user submit the connection form
        if(!empty($_POST))
        {
            //secure the email format
            $admin_email = htmlspecialchars($_POST['email']);

            //verify if email post is in database
            $adminModel = new ConnectionModel();
            $admin = $adminModel->getAdmin($admin_email);

            //if email and password are corrects, let connect
            if($admin && password_verify($_POST['password'], $admin['admin_password']))
            {
                $_SESSION['admin_email'] = $admin['admin_email'];
                header("HTTP/1.1 200 OK");
            }
            //if email is known, lets connect
            else
            {
                //else, email isn't known
                header("HTTP/1.1 401 Unauthorized");
                //encode array in json
                echo json_encode([
                    'error' => 'Email ou mot de passe invalide']);
            }
        }
    }
    
    public function disconnect()
    {
        //destroy all login sessions
        session_destroy();
        
        //redirection to home page after disconnect
        header('location:index.php');
    }
}
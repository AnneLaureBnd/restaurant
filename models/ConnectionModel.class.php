<?php

class ConnectionModel extends ModelManager
{
    //get admins from database
    public function getAdmin($admin_email)
    {
        $req = 'SELECT admin_email, admin_password FROM admins WHERE admin_email = ?';
        $admin = $this->queryOne($req, [$admin_email]);
        return $admin;
    }
}
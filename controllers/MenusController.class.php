<?php

class MenusController
{
    public function display()
    {
        //display
        $template = "menus.phtml";
        require 'views/layout.phtml';
    }
}
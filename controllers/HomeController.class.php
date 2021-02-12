<?php

class HomeController
{
    public function display()
    {
        //display
        $template = "index.phtml";
        require 'views/layout.phtml';
    }
}
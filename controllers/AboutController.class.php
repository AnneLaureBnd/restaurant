<?php

class AboutController
{
    public function display()
    {
        //display
        $template = "about.phtml";
        require 'views/layout.phtml';
    }
}
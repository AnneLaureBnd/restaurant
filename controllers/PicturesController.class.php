<?php

class PicturesController
{
    public function display()
    {
        //display
        $template = "pictures.phtml";
        require 'views/layout.phtml';
    }
}
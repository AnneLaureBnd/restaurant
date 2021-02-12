<?php

class GiftBoxesController
{
    public function display()
    {
        //display
        $template = "gift_boxes.phtml";
        require 'views/layout.phtml';
    }
}
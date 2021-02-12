<?php

//connection
session_start();

//autoload
spl_autoload_register(function($class)
{
    if(stristr($class, 'controller') !== FALSE)
    {
        require 'controllers/' . $class . '.class.php';
    }
    else if (stristr($class, 'model') !== FALSE)
    {
      require 'models/' . $class . '.class.php';  
    }
    else
    {
        require 'File not found';
    }
});

//differents pages
if(isset($_GET['page']))
{
    switch($_GET['page'])
    {
        case 'home':
            $controller = new HomeController();
            $controller->display();
            break;
        case 'submitReserve':
            $controller = new ReservationController();
            $controller->addReservation();
            break;
        case 'newsletter':
            $controller = new NewsletterController();
            $controller->submitNewsletter();
            break;
        case 'take':
            $controller = new TakeAwayMenusController();
            $controller->display();
            break;
        case 'gift':
            $controller = new GiftBoxesController();
            $controller->display();
            break;
        case 'menu':
            $controller = new MenusController();
            $controller->display();
            break;
        case 'pictures':
            $controller = new PicturesController();
            $controller->display();
            break;
        case 'about':
            $controller = new AboutController();
            $controller->display();
            break;
        case 'admin':
            $controller = new AdminController();
            $controller->display();
            break;
        case 'login':
            $controller = new ConnectionController();
            $controller->connection();
            break;
        case 'disconnect':
            $controller = new ConnectionController();
            $controller->disconnect();
            break;
        case 'deleteSubscriber':
            $controller = new NewsletterController();
            $controller->deleteSubscriber();
            break;
        case 'archiveReservation':
            $controller = new ReservationController();
            $controller->archiveReservation();
            break;
        case 'deleteReservation':
            $controller = new ReservationController();
            $controller->getArchiveReservations();
            break;
        default:
            $controller = new HomeController();
            $controller->display();
            break;
    }
}

else
{
    $controller = new HomeController();
    $controller->display();
}
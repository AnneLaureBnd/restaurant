<?php

class AdminController
{
    public function display()
    {
        //get all the subscribers from the newsletter
        $subscribersModel = new NewsletterModel();
        $subscribers = $subscribersModel->getSubscribers();
        
        //get all the waiting reservations
        $awaitReservationsModel = new ReservationModel();
        $awaitReservations = $awaitReservationsModel->getAwaitReservations();
        
        //get all the archives reservations
        $validateReservationsModel = new ReservationModel();
        $validateReservations = $validateReservationsModel->getArchiveReservations();
        
        //display
        $template = "index.phtml";
        require 'views/admin/layout.phtml';
    }
}
<?php
class ReservationController
{
    public function addReservation()
    {
        //if the form isn't empty, verify inputs
        if(!empty($_POST)){
            $name = htmlspecialchars($_POST['name']);
            $cutlery = htmlspecialchars($_POST['number']);
            $date = htmlspecialchars($_POST['date']);
            $time = htmlspecialchars($_POST['time']);
            $phone = htmlspecialchars($_POST['tel']);
            $email = htmlspecialchars($_POST['email']);
            
            //and add the reservation in bdd
            $addReservationModel = new ReservationModel();
            $addReservation = $addReservationModel->addReservation($name, $cutlery, $date, $time, $phone, $email);
            header('Location: index.php?page=home');
        }
    }
    
    public function archiveReservation()
    {
        //get one reservation
        $reservation = $_GET['id'];

        //archive reservation on click on the check button
        $archiveReservationModel = new ReservationModel();
        $archiveReservationModel->archiveReservation($reservation);
        
        //refresh reservations list
        $awaitReservationsModel = new ReservationModel();
        $awaitReservations = $awaitReservationsModel->getAwaitReservations();
        
        //encode array in json
        echo json_encode($awaitReservations);
    }
    
    public function getArchiveReservations()
    {
        //get one reservation
        $validateReservation = $_GET['ok'];

        //delete reservation on click on the trash button
        $deleteReservationModel = new ReservationModel();
        $deleteReservationModel->deleteReservation($validateReservation);
        
        //refresh reservations list
        $validateReservationsModel = new ReservationModel();
        $validateReservations = $validateReservationsModel->getArchiveReservations();

        //encode array in json
        echo json_encode($validateReservations);
    }
}
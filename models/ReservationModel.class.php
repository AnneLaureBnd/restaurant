<?php

class ReservationModel extends ModelManager
{
    //add reservation in database
    public function addReservation($name, $cutlery, $date, $time, $phone, $email)
    {
        $req = 'INSERT INTO reservations (reservation_name, reservation_cutlery, reservation_date, reservation_time, reservation_phone, reservation_email, reservation_visibility) VALUES (?, ?, ?, ?, ?, ?, 1)';
        $this->queryAdd($req, [$name, $cutlery, $date, $time, $phone, $email]);
    }
    
    //get all new reservations / await reservations
    public function getAwaitReservations()
    {
        $req = 'SELECT id_reservation, reservation_name, reservation_cutlery, reservation_date, reservation_time, reservation_phone, reservation_email FROM reservations WHERE reservation_visibility = 1';
        $awaitReservations = $this->queryMany($req);
        return $awaitReservations;
    }
    
    //on click on the check button, archive an "await reservation" to "archive reservations"
    public function archiveReservation($id)
    {
        $req = 'UPDATE reservations SET reservation_visibility = 0 WHERE id_reservation = ?';
        $this->queryOne($req, [$id]);
    }
    
    //get all the archive reservations / older reservations
    public function getArchiveReservations()
    {
        $req = 'SELECT id_reservation, reservation_name, reservation_cutlery, reservation_date, reservation_time, reservation_phone, reservation_email FROM reservations WHERE reservation_visibility = 0';
        $validateReservations = $this->queryMany($req);
        return $validateReservations;
    }
    
    //on click on the trash button, delete the reservation
    public function deleteReservation($id)
    {
        $req = 'DELETE FROM reservations WHERE id_reservation = ?';
        $this->queryOne($req, [$id]);
    }
}
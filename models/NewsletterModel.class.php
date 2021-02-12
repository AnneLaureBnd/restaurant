<?php

class NewsletterModel extends ModelManager
{
    //add a subscriber in database
    public function addSubscriber($newsletter_email)
    {
        $req = 'INSERT INTO subscribers (subscriber_email) VALUES (?)';
        $submitNewsletter = $this -> queryAdd($req,[$newsletter_email]);
    }
    
    //get all the subscribers from database
    public function getSubscribers(): array
    {
        $req = 'SELECT subscriber_email FROM subscribers';
        $subscribers = $this->queryMany($req);
        return $subscribers;
    }
    
    //delete a subscriber from database
    public function deleteSubscriber($email)
    {
        $req = 'DELETE FROM subscribers WHERE subscriber_email = ?';
        $this->queryOne($req, [$email]);
    }
}
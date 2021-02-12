<?php

class NewsletterController
{
    public function submitNewsletter()
    {
        if(!empty($_POST))
        {
            //secure the email format
            $subscriber_email = htmlspecialchars($_POST['subscriber_email']);
            
            //get the subscribers from database
            $subscribersModel = new NewsletterModel();
            $subscribers = $subscribersModel->getSubscribers();
            
            //transform the array to get the email only
            $subscribers = array_map(function ($subscriber) 
            {
                return $subscriber['subscriber_email'];
            }, $subscribers);
            
            //verify if the email is already registered
            if (in_array($subscriber_email, $subscribers))
            {
                //if it's already registered, throw this error
                header("HTTP/1.1 400 Bad Request");
                
                //encode array in json (key and value)
                echo json_encode([
                    'error' => 'Votre email est déjà inscrit à notre newsletter.'
                ]);
            }
            
            //else, add the subscriber in the database
            else
            {
                $submitNewsletterModel = new NewsletterModel();
                $submitNewsletter = $submitNewsletterModel->addSubscriber($subscriber_email);
                
                //throw the success
                header("HTTP/1.1 201 Created");
                echo json_encode([
                    'success' => 'Vous êtes bien inscris à notre newsletter.'
                ]);
            }
        }
    }
    
    public function deleteSubscriber()
    {
         //get one subscriber
        $subscriberEmail = $_GET['email'];

        //delete subscriber on click on the trash button
        $deleteSubscriberModel = new NewsletterModel();
        $deleteSubscriberModel->deleteSubscriber($subscriberEmail);
        
        //refresh subscribers list
        $subscribersModel = new NewsletterModel();
        $subscribers = $subscribersModel->getSubscribers();

        //encode array in json
        echo json_encode($subscribers);
    }
}
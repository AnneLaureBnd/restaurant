<?php

abstract class ModelManager
{
    private $bdd;
     
    //constructor --> database connection
    public function __construct()
    {
        try
        {
            $host = 'localhost';
            $base = 'live-37_annelaurebon_restaurant';
            $user = 'annelaurebon';
            $password = 'abe01f21ODBiOTYwOWFhN2M0MjliNWI5NWE3MTlmef12ff91';
            
            $this->bdd = new PDO("mysql:host=$host;dbname=$base;charset=utf8",$user,$password);
        }
        
        //in case of connection error
        catch(Exception $e)
        {
            echo 'Problème de connexion à la BDD';
            echo $e->getMessage();
        }
}
     
    protected function queryOne(string $query,array $params = []) : ?array
    { 
         //search only one data in database
         $query = $this->bdd->prepare($query);
         $query -> execute($params);
         $result = $query->fetch(PDO::FETCH_ASSOC);
         
         // fetch can return false if the query does not match anything
         // if the result is not false; it means the query found a match
         // if so, we simply return the result as an array
         if ($result !== false) {
             return $result;
         }
         
         // if the result is false; we return null so it's okay with the typing
         return null;
    }
    
    protected function queryMany(string $query,array $params = []) : array
    {
        //search many datas in database
        $query = $this->bdd->prepare($query);
        $query -> execute($params);
        $results = $query->fetchAll();
        return $results;
    }
    
    protected function queryAdd(string $query, array $params = [])
    {
        //add data in database
        $query = $this->bdd->prepare($query);
        $query -> execute($params);
        //var_dump($query->errorInfo());
    }
}
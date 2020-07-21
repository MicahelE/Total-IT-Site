<?php
$name = $_POST["name"];
$email = $_POST["email"];
$phoneno = $_POST["phoneno"];
$projecttype = $_POST["projecttype"];
$description = $_POST["description"]; 

$EmailTo = "mikeetokakpan@totalitnigeria.com";
$Subject = "TotalIT Contact Form";
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "phoneno: ";
$Body .= $phoneno;
$Body .= "\n";

$Body .= "projecttype: ";
$Body .= $projecttype;
$Body .= "\n";
 
$Body .= "description: ";
$Body .= $description;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>
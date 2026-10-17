

  let mygender="Female";
  function printGender()
{
    let colour = "brown";
    if(mygender.startsWith("Female"))
    {
        var age=30;
        let colour="pink";
      console.log("Inside if-block, color:", colour); 
    }
    else{
        var age=35;
          console.log("Inside if-block, color:", colour); 

    }
     console.log("Outside block, color:", colour);            
    console.log("Outside block, age:", age);  

}
 printGender();
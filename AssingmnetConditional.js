function runTests()
{
 let runTest="Regression";

    switch(runTest)
    {
        case "Regression":
        console.log("Run the regression suite");
        break;

         case "Smoke":
        console.log("Run the Smoke suite");
        break;
         case "Sanity":
        console.log("Run the Sanity suite");
        break;

        default:
        console.log("No need to run any test ");
    }
   
}

 runTests();
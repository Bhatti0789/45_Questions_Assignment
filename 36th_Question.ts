/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed 
   on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. 
   Call the function.*/

    function make_shirt ( size = "" , text = "" )
    {
        console.log( "Your shirt is of" , size , "size with the printed text" , text )
    }

    make_shirt( "small" , "I'm beginner in Coding")

    make_shirt( "medium" , "I'm intermediate in Coding")

    make_shirt( "large" , "I'm Expert in Coding")
/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized 
with the person’s name. */

    const friendsNames = [ "Ayan" , "Tayyab" , "Sidra" , "Momal" , "Kinza" ]

    let message = ", Practice Daily To Improve Your Programimg SKills"
        
    /*    for ( i = 0 ; i < friendsNames.length ; i++) 
        {
            console.log( friendsNames[i] + "," , message )
        }
    */
   friendsNames.map( (i) => console.log( i + message) ) 
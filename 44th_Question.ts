// /* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have 
//    one parameter that collects as many items as the function call provides, and it should print a summary of the 
//    sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/

   function Sandwiches ( ...order )
   {
        console.log( "Sandwich Ordered : " )

        for ( let i = 0 ; i <= order.length ; i++ )
        {
            console.log( order [ i ] )
        }
   }

   console.log( "Enjoy your meal, Folks \n" );

   Sandwiches ( "Club Sandwich" , "Grilled Cheese" , "Reuben" , "Turkey and Avocado")

   Sandwiches ( "Tuna Salad" , "Egg Salad" , "Philly Cheese Steak" )

   Sandwiches ( "Chicken Salad" , "Peanut Butter" , "Ham and Cheese" )

    // function Sandwich (...items)
    // {
    //     console.log( "You ordered a Sandwich with:" + items . join(", ") )
    // }

    // Sandwich ( "Club Sandwich" , "Grilled Cheese" , "Reuben" , "Turkey and Avocado")

    // Sandwich ( "Tuna Salad" , "Egg Salad" , "Philly Cheese Steak" )

    // Sandwich ( "Chicken Salad" , "Peanut Butter" , "Ham and Cheese" )

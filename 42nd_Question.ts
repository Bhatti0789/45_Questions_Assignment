/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
   modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to 
   see that the list has actually been modified.*/

    let magician_Name = [ "Harry" , "David" , "Criss" , "Lance" ]

        function make_great()
        {
            for( let magician of magician_Name)
            {
                console.log( "The Great" , magician)
            }
        }

    make_great()
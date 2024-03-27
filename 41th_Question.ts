/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints 
   the name of each magician in the array.*/

    let magician_Name = [ "Harry" , "David" , "Criss" , "Lance" ]

      function show_magicians()
      {
        for( let magician of magician_Name)
        {
            console.log(magician)
        }
      }
    
      show_magicians()
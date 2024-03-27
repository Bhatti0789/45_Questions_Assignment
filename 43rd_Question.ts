/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
   of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate 
   array. Call show_magicians() with each array to show that you have one array of the original names and one array 
   with the Great added to each magician’s name.*/

   let magician_Name = [ "Harry" , "David" , "Criss" , "Lance" ]

   let magician_Name_Copy = [...magician_Name]

    function make_great( text = "" )
    {
        let greeting = ""
            
            for( let magician of magician_Name)
            {
                greeting += text + " " + magician + "\n"
            }
        return greeting
    }

let copy = make_great("Hello")

let newArray = copy . split('\n')

    console.log(newArray)

    console.log(magician_Name);

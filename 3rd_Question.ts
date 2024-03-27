// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let perName = "MuhammaD AbdullaH"

    console.log( "Lowercase: " , perName . toLowerCase() )

    console.log( "Uppercase: " , perName . toUpperCase() )

    let words = perName . split ( " " )

    let titlecaseName = ""

        for(let i = 0 ; i < words.length; i++)
            {
                titlecaseName += words[i] . charAt(0) . toUpperCase() + words[i] . slice(1) . toLowerCase() + " "
            }
    console.log("Titlcase: " , titlecaseName)
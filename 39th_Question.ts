/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function
 should return a string formatted like this:
 "Lahore, Pakistan"
 Call your function with at least three city-country pairs, and print the value that’s returned.*/

 function city_country ( city = "" , country = "")
 {
    return city + country
 }

 let cc1 = city_country( "Lahore," , " Pakistan" )

 let cc2 = city_country( "Paris," , " France" )

 let cc3 = city_country( "Sydeny," , " Australia" )

    console.log(cc1)

    console.log(cc2)

    console.log(cc3)

/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
   comparisons, write more tests. Have at least one True and one False result for each of the following:
    • Tests for equality and inequality with strings
    • Tests using the lower case function
    • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
    and less than or equal to
    • Tests using "and" and "or" operators
    • Test whether an item is in a array
    • Test whether an item is not in a array*/


    let bike = "YBR_G" 

    let car = "Rebon"

        if ( bike.length == car.length ) 
        {
            console.log( bike , "word lenght is equal to" , car )
        }
        
        else
        {
            console.log( bike , "word length is not equal to" , car )
        }
    
        if ( bike == car ) 
        {
            console.log( bike , "is equal to" , car )
        }
        else
        {
            console.log( bike , "is not equal to" , car )
        }

    let personAge = 27
    
    let minVoterAge = 18

    let kidAge = 15

        if ( personAge >= 18 )
        {
            console.log( "Your age is greater than the minimum Voter Age which is" , minVoterAge )
        }
        else ( kidAge <= 17 )
        {
            console.log( "Your Age is less than the minimum Voter Age which is" , minVoterAge )
        }

        if ( kidAge <= 17 && kidAge >= 1 )
        {
            console.log( "You are a kid and you are young" )
        }
        else ( minVoterAge >= 18 || personAge <= 120 )
        {
            console.log( "You are Adult or you are over from 18")
        }
        
    let countries = [ "Pakistan" , "Afghanistan" , "Iran" , "China" , "India"]

        if (countries.includes("China"))
        {
            console.log( "China is included in an array")
        }

        if (!countries.includes("Saudi Arabia"))
        {
            console.log( "Entered country is not included in an array" )
        }
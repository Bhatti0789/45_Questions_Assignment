/* More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to 
   invite to dinner.
   • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you
   found a bigger dinner table.
   • Add one new guest to the beginning of your array.
   • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
   • Print a new set of invitation messages, one for each person in your list. */

    let guest = [ "Ali" , "Moazzam" , "Usman" ]

    // let begGuest = "Bilal"

        guest.unshift( "Bilal")

    //      console.log(guest)

    let midGuest = "Daniyal"

    let midIndex = guest.length / 2

        guest.splice(midIndex,0,midGuest)

    //      console.log(guest)

        guest.push("Ayan")

          console.log(guest)

        guest.map( (arr) => console.log( "Dear" , arr + ", I would like to invite you own Dinner"))

        console.log("I Found a Bigger Dinner Table.");
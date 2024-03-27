/* Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a 
   unique username.
   • Make a list of five or more usernames called current_users.
   • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the 
     current_users list.
   • Loop through the new_users list to see if each new username has already been used. If it has, print a message that
     the person will need to enter a new username. If a username has not been used, print a message saying that the 
     username is available.
   • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

    let current_users = [ "Admin" , "Ali" , "Daniyal" , "Osama" , "Bilal" ]

    let new_users = [ "Sadia" , "Kinza" , "Momal" , "Admin" , "Sara"]

    let current_users_lowercase = current_users.map ( current_user => current_user.toLowerCase() )

    let new_users_lowercase = new_users.map ( users => users.toLowerCase() )


        for ( let new_user of new_users_lowercase )
        {
            if ( current_users_lowercase.includes( new_user ) )
            {
                console.log( new_user , "you will need to enter a new username" )
            }
            else
            {
                console.log( new_user , "username is available")
            }
        }

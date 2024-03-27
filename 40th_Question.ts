/* Album: Write a function called make_album() that builds a Object describing a music album. The function should take 
   in an artist name and an album title, and it should return a Object containing these two pieces of information. Use 
   the function to make three dictionaries representing different albums. Print each return value to show that Objects 
   are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the 
   number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the 
   album’s Object. Make at least one new function call that includes the number of tracks on an album.*/

   function make_album ( artistName = "" , albumTitle = "" )
   {
      return { artistName , albumTitle }
   }

   let dic_1 =  make_album ( "Bilal" , "Rock Series" )

   let dic_2 =  make_album ( "Daniyal" , "Pop Series" )

   let dic_3 =  make_album ( "Fizza" , "Drum Series" )

   console.log(dic_1);

   console.log(dic_2);

   console.log(dic_3);

   function newAlbum ( artistName = "" , albumTitle = "" , numberOfTracks = undefined )
   {
      return { artistName , albumTitle , numberOfTracks }
   }

   let dic_4 =  newAlbum ( "Bilal" , "Rock Series" , 37 )

   let dic_5 =  newAlbum ( "Daniyal" , "Pop Series" , 29 )

   let dic_6 =  newAlbum ( "Fizza" , "Drum Series" )

   console.log(dic_4);

   console.log(dic_5);

   console.log(dic_6);


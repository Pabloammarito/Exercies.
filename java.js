
   /*const JsonOrder = {

      "Order Name": "Charles",
      "Order id": 2,
      "Price": 20,
      "List of drinks": ["Water", "Faxe kondi"],
      "Order extra": ["Kakao", "Ice cream"]



}
   console.log(JsonOrder);

    */


   /*const JsonOrder2 = {

      "Order Name": "Maria",
      "Order id": 3,
      "Price": 10,
      "List of drinks": ["pepsi", "juice"],
      "Order extra": ["Burger", "chips"]



   }
   console.log(JsonOrder2);

    */


   /*[{
      "name": "Peter",
      "age": 2
   }, {
      "name": "Hans",
      "age": 3

   }]

    */
  //  Exercise 1 - level 1
  // Fetch the movies and log them out to the console

   // sends a request to https://yesno.wtf/api/
  /* fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
       .then(response => response.json())
       .then(Movies => {
          console.log(Movies);
          console.log(totalMovies(Movies))

       });

   */




// Exercise 2 - level 1
  // Render the following string to the html using the fetched movies array: 6527 movies fetched
  /*fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
       .then(response => response.json())
       .then(Movies => {
          console.log(Movies)

        const h1= document.createElement("h1")

          h1.innerHTML =  Movies.length + " Movies fetched"

          document.body.appendChild(h1);

       });

   */

// Exercise 3 - level 1
  // Render the first movie in the movies array

  /* fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
       .then(response => response.json())
       .then(Movies => {
          console.log(Movies[0]);

       });

   */



 //Exercise 3 - level 1 part 2


  /* fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
       .then(response => response.json())
       .then(Movies => {
          console.log(Movies[0].title + " is a movie from " + Movies[0].year + "  it has a rating of "+ Movies[0].rating + " has amount of " + Movies[0].votes + " votes " + " is " + Movies[0].running_times + " seconds long ");

       });

   */

   //Exercise 4 - level 2
//-- Det jeg startet med og det virket ikke


   /*fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
       .then(response => response.json())
       .then(Movies => {
           console.log(Movies)

           for (let i = 0; i < Movies.length ; i++) {


               const titleP = Movies[i].title;
               const yearP = Movies[i].year;
               const ratingP = Movies[i].rating;
               const votesP = Movies[i].votes;
               const running_timesP = Movies[i].running_times;



               /*const titlemovies = document.createElement("ul")
               titlemovies.innerHTML =  titleP
               document.body.appendChild(titlemovies);

               const Yearmovies = document.createElement("li")
               Yearmovies.innerHTML =  yearP
               document.body.appendChild(yearmovies);

               const ratingmovies = document.createElement("li")
               ratingmovies.innerHTML = ratingP
               document.body.appendChild(ratingmovies);

               const votesmovies = document.createElement("li")
               votesmovies.innerHTML =  votesP
               document.body.appendChild(votesmovies);

               const runningtimesmovies = document.createElement("li")
               runningtimesmovies.innerHTML = running_timesP
               document.body.appendChild( runningtimesmovies);

                */

              /* const Moviestring = Movies[i].title;
               const listElement = document.createElement("li");
               listElement.innerHTML =MovieAsString;
               document.querySelector("#list").appendChild(listElement);

           }});

               */

//-- Det jeg sluttet med og det virket- Credit Deniz

             /*  fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
                   .then(response => response.json())
                   .then (Movies => {
                       console.log(Movies)

                       for (let i = 0; i < Movies.length; i++) {

                           const titleP = Movies[i].title;
                           const yearP = Movies[i].year;
                           const ratingP = Movies[i].rating;
                           const votesP = Movies[i].votes;
                           const running_timesP = Movies[i].running_times;

                           let titlemovies = document.createElement("ul")
                           titlemovies.innerHTML =  titleP;
                           document.body.appendChild(titlemovies)

                           let yearmovies = document.createElement("li")
                           yearmovies.innerHTML = yearP;
                           document.body.appendChild(yearmovies)

                           let ratingmovies = document.createElement("li")
                           ratingmovies.innerHTML = ratingP;
                           document.body.appendChild(ratingmovies)

                           let votesmovies = document.createElement("li")
                           votesmovies.innerHTML = votesP;
                           document.body.appendChild(votesmovies)

                           let runningtimesmovies = document.createElement("li")
                           runningtimesmovies.innerHTML = running_timesP;
                           document.body.appendChild(runningtimesmovies)
                       }
                   });

              */




   //Exercise 5 level 2

   fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
       .then(response => response.json())
       .then (Movies => {
           console.log(Movies)

               const button = document.querySelector("#Movies").addEventListener("click", function(){
                   for (let i = 0; i < Movies.length ; i++) {
                           if (Movies[i].year <= 2014) {


                           const Movies2014 = Movies[i].title
                           let title2014 = document.createElement("li")
                           title2014.innerHTML = Movies2014
                           document.body.appendChild(title2014)

                   }

           }

       });

       })

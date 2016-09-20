$(document).ready(function() {


  $("submit#butt").click(function(event) {
    var ageInput = parseInt($('#age').val());
    var hairInput = $('#hair').val();
    var interestsInput = $('input:radio[name=interests]:checked').val();
    var genreInput = $('#genre').val();
    var locationInput = $('#location').val();

    event.preventDefault();

    if (ageInput) {
      if (ageInput >= 50) {
        alert("Sorry, they're already dead.")
      } else if ( ageInput >=18 && hairInput === "brown" ) {
          if (interestsInput === 'charity') {
            if (genreInput === 'comedy') {
              $("#results").addClass(".aziz");
              $("#results").show();
            } else if (genreInput === 'drama') {
              $("#results").addClass(".bourne");
              $("#results").show();

            } else if (genreInput === 'nolan') {
              $("#results").addClass(".nolan");
              $("#results").show();

            }

          } else if (interestsInput === 'dining') {
            if (genreInput === 'comedy') {
              $("#results").addClass(".aziz");
              $("#results").show();

            } else if (genreInput === 'drama') {
              $("#results").addClass(".bourne");
              $("#results").show();

            } else if (genreInput === 'nolan') {
              $("#results").addClass(".nolan");
              $("#results").show();
            }


          } else if (interestsInput === 'adventure') {
            if (genreInput === 'comedy') {
              $("#results").addClass(".aziz");
              $("#results").show();

            } else if (genreInput === 'drama') {
              $("#results").addClass(".bourne");
              $("#results").show();

            } else if (genreInput === 'nolan') {
              $("#results").addClass(".nolan");
              $("#results").show();
            }
            }

          } else if ( ageInput >=18 && hairInput === "black" ){
        if (interestsInput === 'charity') {
          if (genreInput === 'comedy') {
            $("#results").addClass(".aziz");
            $("#results").show();
          } else if (genreInput === 'drama') {
            $("#results").addClass(".bourne");
            $("#results").show();

          } else if (genreInput === 'nolan') {
            $("#results").addClass(".nolan");
            $("#results").show();

          }

        } else if (interestsInput === 'dining') {
          if (genreInput === 'comedy') {
            $("#results").addClass(".aziz");
            $("#results").show();

          } else if (genreInput === 'drama') {
            $("#results").addClass(".bourne");
            $("#results").show();

          } else if (genreInput === 'nolan') {
            $("#results").addClass(".nolan");
            $("#results").show();
          }


        } else if (interestsInput === 'adventure') {
          if (genreInput === 'comedy') {
            $("#results").addClass(".aziz");
            $("#results").show();

          } else if (genreInput === 'drama') {
            $("#results").addClass(".bourne");
            $("#results").show();

          } else if (genreInput === 'nolan') {
            $("#results").addClass(".nolan");
            $("#results").show();
          }
          }

        } else if ( ageInput >=18 && hairInput === "red" ){
        if (interestsInput === 'charity') {
          if (genreInput === 'comedy') {
            $("#results").addClass(".aziz");
            $("#results").show();
          } else if (genreInput === 'drama') {
            $("#results").addClass(".bourne");
            $("#results").show();

          } else if (genreInput === 'nolan') {
            $("#results").addClass(".nolan");
            $("#results").show();

          }

        } else if (interestsInput === 'dining') {
          if (genreInput === 'comedy') {
            $("#results").addClass(".aziz");
            $("#results").show();

          } else if (genreInput === 'drama') {
            $("#results").addClass(".bourne");
            $("#results").show();

          } else if (genreInput === 'nolan') {
            $("#results").addClass(".nolan");
            $("#results").show();
          }


        } else if (interestsInput === 'adventure') {
          if (genreInput === 'comedy') {
            $("#results").addClass(".aziz");
            $("#results").show();

          } else if (genreInput === 'drama') {
            $("#results").addClass(".bourne");
            $("#results").show();

          } else if (genreInput === 'nolan') {
            $("#results").addClass(".nolan");
            $("#results").show();
          }
          }




      } else {
        alert("get you lost you PERV!")
      }
    } else {
      alert("Please enter your age!")
    }
  });

});

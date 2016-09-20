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

            } else if (genreInput === 'drama') {

            } else if (genreInput === 'nolan') {

            }

          } else if (interestsInput === 'dining') {
            if (genreInput === 'comedy') {

            } else if (genreInput === 'drama') {

            } else if (genreInput === 'nolan') {

            }


          } else if (interestsInput === 'adventure') {
            if (genreInput === 'comedy') {

            } else if (genreInput === 'drama') {

            } else if (genreInput === 'nolan') {

            }
            }

          } else {
            alert("please fill this out, DAMN IT")
          }


      } else if ( ageInput >=18 && hairInput === "black" ){
          if (interestsInput === 'charity') {

          } else if (interestsInput === 'dining') {

          } else if (interestsInput === 'adventure') {

          } else {
            alert("please fill this out, DAMN IT")
          }


      } else if ( ageInput >=18 && hairInput === "red" ){
          if (interestsInput === 'charity') {

          } else if (interestsInput === 'dining') {

          } else if (interestsInput === 'adventure') {

          } else {
            alert("please fill this out, DAMN IT")
          }




      } else {
        alert("get you lost you PERV!")
      }
    } else {
      alert("Please enter your age!")
    }
  });




});

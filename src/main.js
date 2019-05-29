import { Counter } from './count-up-by.js';

$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();

    let finalNum = parseInt($("#final").val());
    let countBy = parseInt($("#numberMult").val());

    console.log(finalNum);
    console.log(countBy);

  $("#userResult").append(Counter(finalNum, countBy));
  });
});

window.onload = function () {
   const passnum = localStorage.getItem('selectedSeats');
   var cou = 0;
   const seatsArray = passnum.split(','); // Assuming passnum is a comma-separated string
   for (let i = 0; i < seatsArray.length; i++) {
       cou++;
   }

   localStorage.setItem('SeatsCount', cou);
   document.getElementById('St').textContent = cou;
   const P = localStorage.getItem('selectedclasPrice');
   var form = document.getElementById("PassDetails");

   for (var i = 1; i <= cou; i++) {
       var div = document.createElement("div");
       div.innerHTML = "<h3 class='Pd'>Passenger " + i + " Details:</h3>" +
           "<label for='name" + i + "'>Name:</label>" +
           "<input type='text' id='name" + i + "' name='name" + i + "' required>" +
           "<br>" +
           "<label for='age" + i + "'>Age:</label>" +
           "<input type='number' id='age" + i + "' name='age" + i + "' min='1' required>" +
           "<br>" +
           "<label for='email" + i + "'>Email:</label>" +
           "<input type='email' id='email" + i + "' name='email" + i + "' >" +
           "<br>";

       form.appendChild(div);
   }

   var submitButton = document.createElement("input");
   submitButton.setAttribute("type", "submit");
   submitButton.setAttribute("id", "butn");
   submitButton.setAttribute("value", "Confirm");
   form.appendChild(submitButton);

   document.getElementById("PassDetails").addEventListener("submit", function (event) {
       event.preventDefault(); // Prevent form submission

       // Initialize an empty array to store passenger details
       var passengers = [];

       // Loop through each input field dynamically created for passengers
       for (var i = 1; i <= cou; i++) {
           var passenger = {
               name: document.getElementById("name" + i).value,
               age: document.getElementById("age" + i).value,
               email: document.getElementById("email" + i).value
           };
           passengers.push(passenger);
       }

       // Store passenger details in localStorage
       localStorage.setItem("passengers", JSON.stringify(passengers));

       // Redirect to another page
       window.location.href = "ticket_display.html";
   });
}

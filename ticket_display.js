    //     // Retrieve ticket data array from local storage
    // // <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>

    //     let passengers = JSON.parse(localStorage.getItem('passengers')) || [];
    //     let seats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
    //     var img = localStorage.getItem('imageSrc');
    //     var from = localStorage.getItem('From');
    //     var to = localStorage.getItem('To');
    //     var Depdate = localStorage.getItem('departureDate');
    //     var Arrdate = localStorage.getItem('ArrivalDate');
    //     var deptime = localStorage.getItem('deptime');
    //      var arrtime = localStorage.getItem('arrtime');



    //     // Display tickets for each passenger
    //     let ticketContainer = document.getElementById('ticketdisplay');
    //     passengers.forEach((passenger, index) => {
    //         let selectedSeat = seats[index];    
    //         let ticketHTML = `
       

    //             <div id="ticketdisplay">
    //             <div class="ticket">
    //                 <div class="logo">
    //                     <span id="image"><img src="${img}"></span>
    //                 </div>
    //                 <div class="fr">
    //                <p>FROM<br><span id="from">${from}</span></p>
    //                 </div>
    //                 <div class="to">
    //                     <p>TO <br><span id="to">${to}</span></p>
    //                 </div>
    //                 <div class="passenger">
    //                     <p>PASSENGER NAME<br><span id="pass">${passenger.name}</span></p>
    //                 </div>
    //                 <div class="dep">
    //                     <p>DEPARTURE <br><span id="Dep">${deptime}</span><br><span id="depdate">${Depdate}</span></p>
    //                 </div>
    //                 <div class="arr">
    //                     <p>ARRIVAL <br><span id="Arr">${arrtime}</span><br><span id="arrdate">${Arrdate}</span></p>
    //                 </div>
    //                 <div class="gate">
    //                     <p>Gate <br><span id="gatenumber">N/A</span></p>
    //                 </div>
    //                 <div class="seatnum">
    //                     <p>Seat <br><span id="seatnumber">${selectedSeat}</span></p>
        
    //                 </div>
    //             </div>
    //         </div>
    //         `;
    //         ticketContainer.innerHTML += ticketHTML;
    //     });
    //     document.getElementById('downloadPDF').addEventListener('click', function() {
    //         // Create new jsPDF instance
    //         let pdf = new jsPDF();

    //         // Add HTML content from ticket display div to PDF
    //         pdf.html(ticketContainer, {
    //             callback: function(pdf) {
    //                 // Save PDF with filename "tickets.pdf"
    //                 pdf.save('tickets.pdf');
    //             }
    //         });
    //     });
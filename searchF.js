document.addEventListener('DOMContentLoaded', function() {
    const loginLink = document.getElementById('login-link');
            
// Check if an email is stored in localStorage
const email = localStorage.getItem('Email');

// If an email is found, change the text of the login link to "Logout"
if (email) {
    loginLink.textContent = 'Logout';
    
    // Optionally, you can update the href attribute to handle logout
    // loginLink.href = '#'; // Set this to the logout URL or function if needed
}
    // Code to run after the DOM content has loaded
    const From1 = localStorage.getItem('From');
    const To1 = localStorage.getItem('To');

    document.getElementById('To2').textContent = To1;
    document.getElementById('From2').textContent = From1;
    document.getElementById('To3').textContent = To1;
    document.getElementById('From3').textContent = From1;
    document.getElementById('Dname').textContent = From1;
    document.getElementById('Aname').textContent = To1;
    document.getElementById('Dname1').textContent = From1;
    document.getElementById('Aname1').textContent = To1;
    document.getElementById('Dname2').textContent = From1;
    document.getElementById('Aname2').textContent = To1;
    document.getElementById('Dname3').textContent = From1;
    document.getElementById('Aname3').textContent = To1;
    document.getElementById('Dname4').textContent = From1;
    document.getElementById('Aname4').textContent = To1;
    document.getElementById('Dname5').textContent = From1;
    document.getElementById('Aname5').textContent = To1;
    document.getElementById('Dname6').textContent = From1;
    document.getElementById('Aname6').textContent = To1;
    document.getElementById('Dname7').textContent = From1;
    document.getElementById('Aname7').textContent = To1;



});
function next(clickedButton){
            // Traverse DOM to find the parent div containing flight information
            let flightDiv = clickedButton.closest('.f1, .f2, .f3, .f4, .i1, .i2, .i3, .i4');

            // Retrieve necessary data from the flightDiv
            // let departure = flightDiv.querySelector('[id^=Dname]').textContent.trim();
            // let arrival = flightDiv.querySelector('[id^=Aname]').textContent.trim();
            let imageSrc = flightDiv.querySelector('img').getAttribute('src');
            let time1 = flightDiv.querySelector('[class^=time1]').textContent.trim();
            let time2 = flightDiv.querySelector('[class^=time2]').textContent.trim();
    
            // Example of storing data in local storage
            // localStorage.setItem('departure', departure);
            // localStorage.setItem('arrival', arrival);
            localStorage.setItem('imageSrc', imageSrc);
            localStorage.setItem('deptime',time1);
            localStorage.setItem('arrtime',time2);
    
            // You can now do further processing with this data or redirect to another page
            // For example:

    window.location.assign("seat.html");
}

// document.addEventListener('DOMContentLoaded', function() {
//     // Code to run after the DOM content has loaded
//     const From1 = localStorage.getItem('From');
//     const To1 = localStorage.getItem('To');

//     // Check if elements exist before updating their text content
//     const To2Element = document.getElementById('To2');
//     const From2Element = document.getElementById('From2');
    
//     if (To2Element && From2Element) {
//         To2Element.textContent = To1;
//         From2Element.textContent = From1;
//     } else {
//         console.error("Elements with IDs 'To2' and/or 'From2' not found.");
//     }
// });

const From = document.getElementById('dep');
const To = document.getElementById('arr');
const form =document.getElementById('sub');
const Ddate = document.getElementById('depdate');
const Adate = document.getElementById('ardate');

const loginLink = document.getElementById('login-link');
            
// Check if an email is stored in localStorage
const email = localStorage.getItem('Email');

// If an email is found, change the text of the login link to "Logout"
if (email) {
    loginLink.textContent = 'Logout';
    
    // Optionally, you can update the href attribute to handle logout
    // loginLink.href = '#'; // Set this to the logout URL or function if needed
}


form.addEventListener('submit', function(e){
    if(From.value === To.value){
        alert("Please select differnt destination.");
        e.preventDefault(); 
    }
   else if(Ddate.value === Adate.value){
    alert("Date cannot be the same.");
    e.preventDefault(); 


   }
    else{
    e.preventDefault();
    const FromValue = From.value;
    const ToValue = To.value;
    const DdateValue = Ddate.value;
    const AdateValue = Adate.value;

  
    localStorage.setItem('From',FromValue);
    localStorage.setItem('To',ToValue);
    localStorage.setItem('departureDate',DdateValue);
    localStorage.setItem('ArrivalDate',AdateValue);


    window.location.href ="searchF.html"
    }
    
});


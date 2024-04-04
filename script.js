const From = document.getElementById('dep');
const To = document.getElementById('arr');
const form =document.getElementById('sub');
const Ddate = document.getElementById('depdate');
const Adate = document.getElementById('ardate');


form.addEventListener('submit', function(e){
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
    
});

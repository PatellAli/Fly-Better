const container = document.querySelector('.con');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total =document.getElementById('total');
const clas =document.getElementById('clas');

populateUI();
let ticketPrice = +clas.value;
//save selected class   data
function setclassdata(classIndex, classprice){
    localStorage.setItem('selectedclasIndex', classIndex);
    localStorage.setItem('selectedclasPrice', classprice);
}
//update total and count

function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(function (seat) {
    return [...seats].indexOf(seat);
  });
  
  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));

  const selectedSeatsCount =selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
//get data from local storage and populate the UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
          seat.classList.add('selected');
        }
      });
    }

    const selectedClassIndex =localStorage.getItem('selectedclasIndex');
    if(selectedClassIndex != null){
        clas.selectedIndex = selectedClassIndex;

    }
}
//class select
clas.addEventListener('change', e =>{
    ticketPrice=+e.target.value;
    setclassdata(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});
container.addEventListener('click',(e) =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');
    }
    updateSelectedCount();
});
updateSelectedCount();

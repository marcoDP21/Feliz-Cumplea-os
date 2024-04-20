var title = document.getElementById("challenge_title");
var paragraph = document.getElementById("paragraph");


const refreshStatus = () => {
  // Set the current time
  let day = new Date().getDate();
  let month = new Date().getMonth()+1;
  console.log(day, month);
  // If the time is between 8 am and 10 pm
  if (day == 21 && month == 4) {
    // Update text and add classes
    title.innerHTML = "FELIZ CUMPLEAÑOS!";
    paragraph.innerHTML = "https://docs.google.com/document/d/1lZCa-Jr61P-HsDXTfHifjWHM5rRusAeBJBV5ckgmTyo/edit?usp=sharing";
    
  } else {
    title.innerHTML = "¡Mando burro! 🦙";
    paragraph.innerHTML = "Aún no es la fecha de tu cumpleaños. Vuelve a este cuarto el 21 de Abril. Una sorpresa te aguarda...";
  }
}

// run when starting
refreshStatus();

// updates every 8 seconds
setInterval(refreshStatus, 8000);
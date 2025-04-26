function updateClock() {
    const now = new Date();
  
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondDegree = ((seconds / 60) * 360) + 90;
    const minuteDegree = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    const hourDegree = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
  
    document.getElementById('secondHand').style.transform = `rotate(${secondDegree}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('hourHand').style.transform = `rotate(${hourDegree}deg)`;
  }
  
  // Update every second
  setInterval(updateClock, 1000);
  
  // Start immediately
  updateClock();
  
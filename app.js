function calculateNextBirthday() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();
    var nextBirthday;
    
    if (birthdate.getMonth() < today.getMonth() || (birthdate.getMonth() === today.getMonth() && birthdate.getDate() < today.getDate())) {
      nextBirthday = new Date(today.getFullYear() + 1, birthdate.getMonth(), birthdate.getDate());
    } else {
      nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    }
  
    var timeDifference = nextBirthday.getTime() - today.getTime();
    var daysUntilNextBirthday = Math.ceil(timeDifference / (1000 * 3600 * 24));
  
    document.getElementById("result").innerHTML = "Your next birthday is in " + daysUntilNextBirthday + " days.";
  }
  
  function displayDateTime() {
    var now = new Date();
    var dateTimeString = "Current Date and Time: " + now.toLocaleString();
    document.getElementById("currentDateTime").innerHTML = dateTimeString;
  }
  
  // Call the displayDateTime function to display current date and time on page load
  displayDateTime();
  
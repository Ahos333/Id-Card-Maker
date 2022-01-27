function idCard() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    
    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;
    
    var age = document.getElementById("age").value;
    var phoneNumber = document.getElementById("phone-number").value;
    age = parseInt(age);
    phoneNumber = parseInt(phoneNumber);
    
    
    var numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);
    

    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] <= 300) {
        document.getElementById("postAge").innerHTML = "Age: " + age;
      } else if (numberArray[i] > 100) {
        document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
      } else {
        document.getElementById("postAge").innerHTML = "Invalid age";
        document.getElementById("postPhoneNumber").innerHTML = "Invalid phone number";
      }
      
    }
    
    

  }
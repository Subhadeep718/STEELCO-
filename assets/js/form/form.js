


$(document).ready(function(){
    $('#Material').change(function(){

      var selectedMaterial = $(this).val();
      if (selectedMaterial !== '0') {
        $('#quantitySection').css('display', 'block');
      } else {
        $('#quantitySection').css('display', 'none');
      }
    });
  });




$(document).ready(function(){
    $('#myForm').submit(function(e){
      e.preventDefault(); // prevent form submission
      var valid = true;

     
       

      // Name validation
      var name = $('#Name').val();
      if(name === ''){
        $('#errorName').text('Please enter your name');
        valid = false;
      } else {
        $('#errorName').text('');
       
      }

      // Email validation
      var email = $('#Email').val();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
      if(email === ''){
        $('#errorEmail').text('Please enter your email');
        valid = false;
      } else if (!emailRegex.test(email)) {
        $('#errorEmail').text('Please enter a valid email address');
        valid = false;
      } else {
        $('#errorEmail').text('');
      }

      // Address validation
      var address = $('#Address').val();
      if(address === ''){
        $('#errorAddress').text('Please enter your address');
        valid = false;
      } else {
        $('#errorAddress').text('');
      }

      // Country code validation
    //   var countryCode = $('#Country_Code').val();
    //   if(countryCode === '0'){
    //     $('#errorCountryCode').text('Please select your country code');
    //     valid = false;
    //   } else {
    //     $('#errorCountryCode').text('');
    //   }

        // Phone number validation
        var phone = $('#Phone_No').val();
        if(phone === ''){
        $('#errorPhone').text('Please enter your phone number');
        valid = false;
        } else if (phone.length !== 10) {
        $('#errorPhone').text('Please enter a 10-digit phone number');
        valid = false;
        } else {
        $('#errorPhone').text('');
        }


      // Material validation
    //   var material = $('#Material').val();
    //   if(material === '0'){
    //     $('#errorMaterial').text('Please select material');
    //     valid = false;
    //   } else {
    //     $('#errorMaterial').text('');
    //   }

      // Quantity validation
    //   var quantity = $('#Quantity').val();
    //   if(quantity === '0'){
    //     $('#errorQuantity').text('Please select quantity');
    //     valid = false;
    //   } else {
    //     $('#errorQuantity').text('');
    //   }

      if(valid){
        // Form is valid, you can submit it
        alert('Form submitted successfully');
        // Uncomment the line below to actually submit the form
        // this.submit();
      }
    });
  });
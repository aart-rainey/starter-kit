$('.contact-form__send-btn').on('click', function(e){
	e.preventDefault();

  var $this = $(this),
      form = $this.closest('.contect-form'),
      name = form.find('#name').val(),
      email = form.find('#email').val(),
      message = form.find('#message').val(),
      re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(email) && name.length>1 && text.length>1){
    $.ajax({
      url: "php/ajax.php",
      method: "POST",
      data: "sendform=1&name="+name+"&email="+email+"&message="+message,
      success: function(msg){
        if(msg==="1"){
          alert('Success');
        }
        else{
          alert('Serverside Error');
        }
      }
    })
  }
  else{
    alert('Error');
  }
});
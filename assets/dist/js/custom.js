
    //mycode start-----

    setTimeout(startMycode, 1000);

    function startMycode() {
      if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
        }, false);
      } else {
        document.attachEvent('oncontextmenu', function() {
          window.event.returnValue = false;
        });
      }

      document.onkeypress = function (event) {
       event = (event || window.event);
       return keyFunction(event);
     }
     document.onmousedown = function (event) {
       event = (event || window.event);
       return keyFunction(event);
     }
     document.onkeydown = function (event) {
       event = (event || window.event);
       return keyFunction(event);
     }         
     function keyFunction(event){
       if (event.keyCode == 123) {
         return false;
       }
       if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
         return false;
       }
       if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
         return false;
       }
       if (event.keyCode == 83) {
         return false;
       }
       if (event.ctrlKey && event.keyCode == 85) {
         return false;
       }
       if (event.keyCode == 116) {
         return false;
       }
     }

     $('body').bind('cut copy', function(event) {
       event.preventDefault();
     });
     document.addEventListener("keyup", function (e) {
      var keyCode = e.keyCode ? e.keyCode : e.which;
      if (keyCode == 44) {
        stopPrntScr();
      }
    });
     function stopPrntScr() {

      var inpFld = document.createElement("input");
      inpFld.setAttribute("value", ".");
      inpFld.setAttribute("width", "0");
      inpFld.style.height = "0px";
      inpFld.style.width = "0px";
      inpFld.style.border = "0px";
      document.body.appendChild(inpFld);
      inpFld.select();
      document.execCommand("copy");
      inpFld.remove(inpFld);
    }
  }
       
//----mycode end

  $(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) {    
           $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None; Secure";
  //alert(document.cookie)
}

function setCookieOne(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (20 * 1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None; Secure";
  //document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  //alert(document.cookie)
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



var swalathAddFormValidator = $("#swalathAddForm").validate({
      ignore: "",
      errorElement: 'span',
      errorClass: 'error text-danger',
      errorPlacement: function (error, element) {
      if (element.hasClass("btn-check")) {
          error.appendTo(element.parent().parent().parent());
      } else {
          error.appendTo(element.parent());
      }
      },
      rules: {
          nameInput: {
            required: true,
          },
          phoneInput: {
            required: true,
            number: true,
          },
          swalathInput: {
            required: true,
            number: true,
          },
      },
      messages: {
          nameInput: {
              required: "നിങ്ങളുടെ പേര് ചേര്‍ക്കുക",
          },
          phoneInput: {
              required: "നിങ്ങളുടെ ഫോണ്‍ നമ്പര്‍ ചേര്‍ക്കുക",
              number: "നിങ്ങളുടെ ഫോണ്‍ നമ്പര്‍ ചേര്‍ക്കുക",
          },
          swalathInput: {
              required: "നിങ്ങള്‍ ചൊല്ലിയ സ്വലാത്തുകളുടെ എണ്ണം ചേര്‍ക്കുക",
              number: "നിങ്ങള്‍ ചൊല്ലിയ സ്വലാത്തുകളുടെ എണ്ണം ചേര്‍ക്കുക",
          },
          
      },
      submitHandler: function () {
          
      },
  
});


var timer = setInterval(function() {
    if (getCookie('mytimeout') == '') {
      clearInterval(timer);
      $('#nameInput').prop('disabled',false);
      $('#phoneInput').prop('disabled',false);
      $('#swalathInput').prop('disabled',false);
      $('#save-swalath-btn').text('സേവ്').prop('disabled',false);
    } else {
      $('#save-swalath-btn').text('സേവ് ചെയ്തു').prop('disabled',true);
      $('#nameInput').prop('disabled',true);
      $('#phoneInput').prop('disabled',true);
      $('#swalathInput').prop('disabled',true);
    }
  }, 1000);




$('#save-swalath-btn').on('click', function() {
    if($("#swalathAddForm").valid()) {
      var getName = $('#nameInput').val()
          var getPhone = $('#phoneInput').val()
          var getSwalath = $('#swalathInput').val()

          let formdata = new FormData()
          formdata.append('action', 'vw')
          formdata.append('name', getName)
          formdata.append('phone', getPhone)
          formdata.append('swalath', getSwalath)
          formdata.append('bowser', browserDetect)
          formdata.append('systemcode', systemcode)



          $.ajax({
             method: 'POST',
             url: gcode,
             data: formdata,
             dataType: 'json',
             contentType: false,
             processData: false,
             beforeSend: function(){
                $('.loader-bg').fadeIn()
              }
            })
            .done(function(callback){
              // callback = JSON.parse(callback.result)
              // $('#totalSwalathView').removeClass('d-none');
              // console.log(callback.result.TotalSwalath)

              setCookie('ph', getPhone, 20);
              setCookieOne('mytimeout', '-');


              $('#yourTotalSwalathView, #totalSwalathView').removeClass('d-none');
              $('#yourTotalSwalathView span').text(callback.result.YourSwalath);
              $('#totalSwalathView span').text(callback.result.TotalSwalath);
              $('#swalathInput').val('')


              /*$('#save-swalath-btn').text('സേവ് ചെയ്തു').prop('disabled',true);
              $('#nameInput').prop('disabled',true);
              $('#phoneInput').prop('disabled',true);
              $('#swalathInput').prop('disabled',true);*/
              /*if(!callback.result) {
              }*/ 

              var timer = setInterval(function() {
                if (getCookie('mytimeout') == '') {
                  clearInterval(timer);
                  $('#nameInput').prop('disabled',false);
                  $('#phoneInput').prop('disabled',false);
                  $('#swalathInput').prop('disabled',false);
                  $('#save-swalath-btn').text('സേവ്').prop('disabled',false);
                } else {
                  $('#save-swalath-btn').text('സേവ് ചെയ്തു').prop('disabled',true);
                  $('#nameInput').prop('disabled',true);
                  $('#phoneInput').prop('disabled',true);
                  $('#swalathInput').prop('disabled',true);
                }
              }, 1000);


            })
            .fail(function(callback) {
            })
           .always(function(){
              $('.loader-bg').fadeOut();
            });
    }
});

var gcode = 'https://script.google.com/macros/s/AKfycbzOmT2rEYVlFcECHwu5M8gYNb_VGEaDkIRquglj4pBdvXm2AafFYYc1j6NkqN-E9iDk/exec';

    var xtraDetails = Object.keys(bowser).filter(function (key) {
        if (bowser[key] === true) {
          return bowser[key];
        }
      });

      var xtraDetails = JSON.stringify(xtraDetails).replace(/[{}]/g, "").replace(/,/g, "  ").replace(/\"/g, "");
      var browserDetect = bowser.name + "-" + bowser.version + "  " + bowser.osname + (bowser.osversion ? "-" + bowser.osversion : '') + " " + xtraDetails;

      var systemcode

      var getSystemCode = new Fingerprint2();
      getSystemCode.get(function(result, components) {

        systemcode = result

        var getLocalPh = getCookie('ph');


        var formdata = new FormData()
          formdata.append('action', 'chk')
          formdata.append('systemcode', systemcode)
          if (getLocalPh != "" && getLocalPh != null) {
            formdata.append('localph', getLocalPh)
          } else {
            formdata.append('localph', '')
          }
          

          $.ajax({
             method: 'POST',
             url: gcode,
             data: formdata,
             dataType: 'json',
             contentType: false,
             processData: false,
             beforeSend: function(){
              $('.loader-bg').fadeIn();
              }
            })
            .done(function(callback){
              if(callback.result == "false") {
              } else {
                $('#nameInput').val(callback.result.Name);
                $('#phoneInput').val(callback.result.Phone);
                $('#yourTotalSwalathView').removeClass('d-none');
                $('#yourTotalSwalathView span').text(callback.result.Swalath);
              }
                $('#nameInput').prop('disabled', false);
                $('#phoneInput').prop('disabled', false);
                $('#swalathInput').prop('disabled', false);
                $('#save-swalath-btn').prop('disabled', false);


            })
            .fail(function(callback) {

            })
           .always(function(){
             $('.loader-bg').fadeOut();
            });
      });


      

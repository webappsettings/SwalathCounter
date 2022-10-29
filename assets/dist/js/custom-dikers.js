
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
      /* if (event.keyCode == 123) {
         return false;
       }*/
       if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
         return false;
       }
       if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
         return false;
       }
       if (event.ctrlKey && event.shiftKey && event.keyCode == 83) {
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


var localExpiryDate = 30;
var localExpiryFastSec = 5;
var getLocalyI;


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
}

function setCookieOne(cname, cvalue, fastSec) {
  const d = new Date();
  d.setTime(d.getTime() + (fastSec * 1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None; Secure";
  //document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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



var dikersAddFormValidator = $("#dikersAddForm").validate({
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
          dikersInput: {
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
          dikersInput: {
              required: "നിങ്ങള്‍ ചൊല്ലിയ ദിക്റുകളുടെ എണ്ണം ചേര്‍ക്കുക",
              number: "നിങ്ങള്‍ ചൊല്ലിയ ദിക്റുകളുടെ എണ്ണം ചേര്‍ക്കുക",
          },
          
      },
      submitHandler: function () {
          
      },
  
});





var timer = setInterval(function() {
    if (getCookie('d-mytimeout') == '') {
      clearInterval(timer);
      $('#nameInput').prop('disabled',false);
      $('#phoneInput').prop('disabled',false);
      $('#dikersInput').prop('disabled',false);
      $('#save-dikers-btn').text('സേവ്').prop('disabled',false);
    } else {
      $('#save-dikers-btn').text('സേവ് ചെയ്തു').prop('disabled',true);
      $('#nameInput').prop('disabled',true);
      $('#phoneInput').prop('disabled',true);
      $('#dikersInput').prop('disabled',true);
    }
  }, 1000);



// var gc = 'AKfycbwEXe3ouBMI2WtEthrU85O-QyoGnwKt_ecB3TCM_G9czUzssiFEdydYHKCxOlPziUo0';
var gcode = 'https://script.google.com/macros/s/AKfycbwK73V4Y2wLDrqCrDVysjcHlODP8pUpRrpjYGO_mBbm3etm7czmMntjTEphg0ymj52e/exec';


$('#save-dikers-btn').on('click', function() {
    if($("#dikersAddForm").valid()) {
      var getName = $('#nameInput').val()
          var getPhone = $('#phoneInput').val()
          var getDikers = $('#dikersInput').val()

          let formdata = new FormData()
          formdata.append('action', 'vw')


           var getLocalyI = getCookie('d-'+getPhone)
            if (getLocalyI != "" && getLocalyI != null) {
              formdata.append('localyI', getLocalyI)
            } else {
                getLocalyI = getCookie('d-yI');
              if (getLocalyI != "" && getLocalyI != null) {
                var brkgetLocalyI = getLocalyI.split('-')[1];
                alert(brkgetLocalyI)
                formdata.append('localyI', brkgetLocalyI)
              } else {
                formdata.append('localyI', '')
              }
            }


          //formdata.append('yourLocalIndex', getCookie('yI'))

          formdata.append('name', getName)
          formdata.append('phone', getPhone)
          formdata.append('dikers', getDikers)
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
                $('#nameInput').prop('disabled',true);
                $('#phoneInput').prop('disabled',true);
                $('#save-Dikers-btn').text('സേവ് ചെയ്തു').prop('disabled',true);
                $('.loader-bg').fadeIn()
              }
            })
            .done(function(callback){
              // callback = JSON.parse(callback.result)
              // $('#totalDikersView').removeClass('d-none');
              console.log(callback.result)

              setCookie('d-ph', getPhone, localExpiryDate);
              setCookie('d-yI', callback.result.yourIndex, localExpiryDate);
              setCookie('d-'+getPhone, callback.result.yourIndex, localExpiryDate);

              setCookieOne('d-mytimeout', '-', localExpiryFastSec);



              $('#yourTotalDikersView, #totalDikersView, #oldDikersView').removeClass('d-none');
              $('#yourTotalDikersView span').text(callback.result.YourDikers);
              $('#totalDikersView span').text(callback.result.TotalDikers);
              $('#dikersInput').val('')

              $('#oldDikersView span').text(callback.result.OldDikers);


              /*$('#save-dikers-btn').text('സേവ് ചെയ്തു').prop('disabled',true);
              $('#nameInput').prop('disabled',true);
              $('#phoneInput').prop('disabled',true);
              $('#dikersInput').prop('disabled',true);*/
              /*if(!callback.result) {
              }*/ 

              var timer = setInterval(function() {
                if (getCookie('d-mytimeout') == '') {
                  clearInterval(timer);
                  $('#nameInput').prop('disabled',false);
                  $('#phoneInput').prop('disabled',false);
                  $('#dikersInput').prop('disabled',false);
                  $('#save-dikers-btn').text('സേവ്').prop('disabled',false);
                } else {
                  $('.person-detail-view').slideUp();
                  $('#detail-edit-btn').removeClass('d-none');
                  $('#save-dikers-btn').text('സേവ് ചെയ്തു').prop('disabled',true);
                  $('#nameInput').prop('disabled',true);
                  $('#phoneInput').prop('disabled',true);
                  $('#dikersInput').prop('disabled',true);
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

        


        var formdata = new FormData()
          formdata.append('action', 'chk')
          formdata.append('systemcode', systemcode)





          var getLocalPh = getCookie('d-ph');
          if (getLocalPh != "" && getLocalPh != null) {
            var brkgetLocalPh = getLocalPh.split('-')[1];
            formdata.append('localph', brkgetLocalPh)
          } else {
            formdata.append('localph', '')
          }


          var getLocalyI = getCookie('d-'+getLocalPh)
            if (getLocalyI != "" && getLocalyI != null) {

                var brkgetLocalyI = getLocalyI.split('-')[1];
                alert(brkgetLocalyI)

              formdata.append('localyI', brkgetLocalyI)
            } else {
                formdata.append('localyI', '')
                /*getLocalyI = getCookie('d-yI');
              if (getLocalyI != "" && getLocalyI != null) {
                var brkgetLocalyI = getLocalyI.split('-')[1];
                alert(brkgetLocalyI)
                formdata.append('localyI', getLocalyI)
              } else {
                formdata.append('localyI', '')
              }*/
            }

        if (getLocalyI != "" && getLocalyI != null) {

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
                setCookie('d-yI', callback.result.yourIndex, localExpiryDate);
                $('#nameInput').val(callback.result.Name);
                $('#phoneInput').val(callback.result.Phone);
                $('#yourTotalDikersView').removeClass('d-none');
                $('#yourTotalDikersView span').text(callback.result.Dikers);
                $('#totalDikersView').removeClass('d-none');
                $('#totalDikersView span').text(callback.result.TotalDikers);

                $('.person-detail-view').slideUp();
                $('#detail-edit-btn').removeClass('d-none');

                $('#dikersInput').focus();

                if(callback.result.OldDikers != '') {
                  $('#oldDikersView').removeClass('d-none');
                  $('#oldDikersView span').text(callback.result.OldDikers);
                }
                
              }
                $('#nameInput').prop('disabled', false);
                $('#phoneInput').prop('disabled', false);
                $('#dikersInput').prop('disabled', false);
                $('#save-dikers-btn').prop('disabled', false);

            })
            .fail(function(callback) {

            })
           .always(function(){
             $('.loader-bg').fadeOut();
            });
         } else {
            $('#nameInput').prop('disabled', false);
              $('#phoneInput').prop('disabled', false);
              $('#dikersInput').prop('disabled', false);
              $('#save-dikers-btn').prop('disabled', false);
              $('.loader-bg').fadeOut();
         }
      });


$('#detail-edit-btn').on('click', function() {
  $(this).addClass('d-none');
  $('.person-detail-view').slideDown();
})

      

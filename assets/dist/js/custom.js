
    //mycode start-----

    /*setTimeout(startMycode, 1000);

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
  }*/
       
//----mycode end



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
              console.log('before send')
                // $('.loader').fadeIn()
              }
            })
            .done(function(callback){
              // callback = JSON.parse(callback.result)
              $('#totalSwalathView').removeClass('d-none');

              console.log('result= ',callback)
              $('#yourTotalSwalathView span').text(callback.result.YourSwalath);
              $('#totalSwalathView span').text(callback.result.TotalSwalath);
              $('#swalathInput').val('')
              /*if(!callback.result) {
              }*/ 

            })
            .fail(function(callback) {
            })
           .always(function(){
              // $('.loader').fadeOut()
              // console.log('after send')
            });
    }
});

var gcode = 'https://script.google.com/macros/s/AKfycbwwyBlpCOGIer2oUuROwNKpcPYSFsTazW-mrm6Wj-CnTBDe6zX6cj2dNAayJe1asMVL/exec';

    var xtraDetails = Object.keys(bowser).filter(function (key) {
        if (bowser[key] === true) {
          return bowser[key];
        }
      });

      var xtraDetails = JSON.stringify(xtraDetails).replace(/[{}]/g, "").replace(/,/g, "  ").replace(/\"/g, "");
      var browserDetect = bowser.name + "-" + bowser.version + "  " + bowser.osname + (bowser.osversion ? "-" + bowser.osversion : '') + " " + xtraDetails;
      // console.log('browserDetect=', browserDetect);

      var systemcode

      var getSystemCode = new Fingerprint2();
      getSystemCode.get(function(result, components) {

        systemcode = result



        var formdata = new FormData()
          formdata.append('action', 'chk')
          formdata.append('systemcode', systemcode)

          $.ajax({
             method: 'POST',
             url: gcode,
             data: formdata,
             dataType: 'json',
             contentType: false,
             processData: false,
             beforeSend: function(){
              }
            })
            .done(function(callback){
              // console.log(callback)
              if(callback.result == "false") {

              } else {
                $('#nameInput').val(callback.result.Name).prop('disabled', false);
                $('#phoneInput').val(callback.result.Phone).prop('disabled', false);
                $('#swalathInput').prop('disabled', false);
                $('#yourTotalSwalathView span').text(callback.result.Swalath);
              }
              $('#save-swalath-btn').prop('disabled', false);
            })
            .fail(function(callback) {
            })
           .always(function(){
             
            });
      });


      


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

    var xtraDetails = Object.keys(bowser).filter(function (key) {
        if (bowser[key] === true) {
          return bowser[key];
        }
      });

      var xtraDetails = JSON.stringify(xtraDetails).replace(/[{}]/g, "").replace(/,/g, "  ").replace(/\"/g, "");
      var browserDetect = bowser.name + "-" + bowser.version + "  " + bowser.osname + (bowser.osversion ? "-" + bowser.osversion : '') + " " + xtraDetails;
      console.log('browserDetect=', browserDetect);

      var systemcode

      var getSystemCode = new Fingerprint2();
      getSystemCode.get(function(result, components) {

        systemcode = result

        console.log(result)
      });

    $('#save-swalath-btn').on('click', function() {


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
         url: 'https://script.google.com/macros/s/AKfycbyOdRoM_PEBhULAFUyA6XlwmGWcnqiRmwyn_B26FrtlxDwYGu5L-4O3iCUI0t936c8y/exec',
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

          $('#totalSwalathView span').html(callback.result)
          $('#swalathInput').val('')

          console.log('result= ',callback)
          /*if(!callback.result) {
          

          }*/ 

        })
        .fail(function(callback) {
        })
       .always(function(){
          // $('.loader').fadeOut()
          console.log('after send')
        });
  })
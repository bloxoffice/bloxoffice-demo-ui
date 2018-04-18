function createProject(data){
     $.ajax({
             type: "POST",
             url: "http://example.com",
             data: JSON.stringify(data),// now data come in this function
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             success: function (data, status, jqXHR) {

                 alert("success");// write success in " "
             },

             error: function (jqXHR, status) {
                 // error handler
                 console.log(jqXHR);
                 alert('fail' + status.code);
             }
          });
    }

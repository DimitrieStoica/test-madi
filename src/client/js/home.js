function postItem(type, ip, port) {
        ip=$("#masterIP").val();
        port=$("#masterPort").val();
        $.ajax({
            type: "POST",
            url: "http://localhost:3000/client",
            timeout: 2000,
            data: { ip: ip, port: port, type: type },
            success: function(data) {
              console.log("success");
            },
            error: function(jqXHR, textStatus, err) {
                //show error message
                alert('text status '+textStatus+', err '+err)
            }
        });

    }//postItem()

function getMaster() {
 $.ajax({
           type: "GET", 
           url: "http://localhost:3000/client",
           contentType: "application/json",
           success: function(data) {
             $('#dataMaster').text(data);
             console.log("success");
           },
           error: function(jqXHR, textStatus, err) {
             //show error message
           alert('text status '+textStatus+', err '+err)
            }
          });

}


function getName() {
 $.ajax({  
           type: "GET", 
           url: "http://localhost:3000/client",
           contentType: "application/json",
           success: function(data) {
             $('#dataName').text(data);
             console.log("success");
           },
           error: function(jqXHR, textStatus, err) {
             //show error message
           alert('text status '+textStatus+', err '+err)
            }
          });

}


function getTask() {
 $.ajax({  
           type: "GET", 
           url: "http://localhost:3000/client",
           contentType: "application/json",
           success: function(data) {
             $('#dataTask').text(data);
             console.log("success");
           },
           error: function(jqXHR, textStatus, err) {
             //show error message
           alert('text status '+textStatus+', err '+err)
            }
          });

}


function getPosition() {
 $.ajax({  
           type: "GET", 
           url: "http://localhost:3000/client",
           contentType: "application/json",
           success: function(data) {
             $('#dataPosition').text(data);
             console.log("success");
           },
           error: function(jqXHR, textStatus, err) {
             //show error message
           alert('text status '+textStatus+', err '+err)
            }
          });

}

    $("#masterSubmit").on('click', function() {
        var type = 9;
        ip=$("#masterIP").val();
        port=$("#masterPort").val();
        postItem(type, ip, port)
    });

    $("#masterGetData").on('click', function() {
       getMaster();
    }); 

    $("#getNameSubmit").on('click', function() {
        var type = 2;
        ip=$("#masterIP").val();
        port=$("#masterPort").val();
        postItem(type, ip, port)
    }); 

    $("#getName").on('click', function() {
      getName();

    });
 
    $("#getTaskSubmit").on('click', function() {
        var type = 8;
        ip=$("#masterIP").val();
        port=$("#masterPort").val();
        postItem(type, ip, port)
    }); 

    $("#getTask").on('click', function() {
       getTask();

      });

    $("#getPositionSubmit").on('click', function() {
        var type = 3;
        ip=$("#masterIP").val();
        port=$("#masterPort").val();
        postItem(type, ip, port)
    });

    $("#getPosition").on('click', function() {
           getPosition();
      });


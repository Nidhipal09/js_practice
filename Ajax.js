function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

        let txt=this.responseText;
        let obj = JSON.parse(txt);
        
        var listitems = '';
        $.each(obj, function(key, value){
            listitems += `<option value=${key} > ${value} </option>`;
        });

        $("#brow").append(listitems);

        $("input").keydown(function(){
            var str=$("input").val();
            $("#p1").text(str);
          });
          $("input").keyup(function(){
              var str=$("input").val();
              $("#p1").text(str);
          });

    }
    xhttp.open("GET", "IndianStates.json");
    xhttp.send();


  }


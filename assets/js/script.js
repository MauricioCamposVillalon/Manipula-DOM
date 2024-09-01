$(document).ready(function() {
    
    $(".text-body-secondary").click(function() {
      let idBoton = $(this).attr("id");
      $("#detalles" + idBoton).toggle();
      console.log("#detalles" + idBoton);
      
    });


    $(".btn-close").click(function() {
        $(".detalles").hide();
        
    });



  });
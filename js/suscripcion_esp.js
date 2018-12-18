function send(){ 
swal({
 title: '¿Estas seguro de enviar este formulario?',
 /* text: 'You will not be able to recover this imaginary file!', */
 type: 'warning',
 showCancelButton: true,
 confirmButtonText: 'Si, enviar!',
 cancelButtonText: 'Cancelar'
}).then((result) => {
 if (result.value) {
   swal(
     'Enviado!','Su formulario fue enviado!.','success'
   )
   sends();
 // For more information about handling dismissals please visit
 // https://sweetalert2.github.io/#handling-dismissals
 } else if (result.dismiss === swal.DismissReason.cancel) {
   swal(
     'Cancelado!', 'Su formulario no se envio', 'error'
   )
 }
})
} 

function sends()
{

var first_name = document.getElementById("first_name").value;
var last_name = document.getElementById("last_name").value;
var email = document.getElementById("email").value;



$.ajax({
type: 'POST',
crossDomain: true,
url: "http://45.33.42.216:5000/suscription",
data: JSON.stringify({"email":email,"first_name":first_name,"last_name":last_name}),
error: function(e) {
console.log(e);
},
success: function (data) { 
var names = data
console.log(names);

},
dataType: "json",
contentType: "application/json"
});

document.getElementById("first_name").value="";
document.getElementById("last_name").value="";
document.getElementById("email").value="";

}


function send(){ 
swal({
 title: '¿iñiyniyuqchu kachkanki kay qillqa huntachinata apachinaykipaq?',
 /* text: 'You will not be able to recover this imaginary file!', */
 type: 'warning',
 showCancelButton: true,
 confirmButtonText: 'Arí, apachiy!',
 cancelButtonText: 'mana apachinapaq'
}).then((result) => {
 if (result.value) {
   swal(
     'Aparqachinkiñam','Huntachisqayki qillqaqa aparqachikunñam!.','success'
   )
   sends();
 // For more information about handling dismissals please visit
 // https://sweetalert2.github.io/#handling-dismissals
 } else if (result.dismiss === swal.DismissReason.cancel) {
   swal(
     'manam aparqachikunchu!', 'Huntachisqayki qillqaqa manam aparqachikunchu', 'error'
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


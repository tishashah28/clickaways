let btn=document.querySelector("#sub")
btn.addEventListener("click",function(e){
    e.preventDefault
    let frm=document.querySelector("form")
      
    console.log("hello")
    var name = document.getElementById("name").value;
    if (name == "") 
    {
        document.getElementById("name").style.borderColor = "Red";
        // return false;
    }

      var contact = document.getElementById("err1").value;
     console.log(contact)
     var pattern = /^\d{10}$/;
     var msg=document.querySelector("#err11")
    if (!contact.match(pattern)) {
        
        msg.innerText="Not allow"
        // return false;
    }

    var pass = document.getElementById("err2").value;
    if (pass.length < 6) {
        document.getElementById("err12").innerText = "INVALID PASSWORD RANGE";
        // return false;
    }

    var cpass = document.getElementById("err3").value;
    if (!cpass.match(pass)) {
        document.getElementById("err13").innerHTML = "BOTH PASSWORD SHOULD BE SAME";
    }
})

function validate() {
   
}
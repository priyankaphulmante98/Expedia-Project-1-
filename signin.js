var store_data= JSON.parse(localStorage.getItem("userData"))
   
   var form = document.querySelector("form");
   form.addEventListener("submit",function(event){
    event.preventDefault()
    var data={
        email:form.email.value,
        password:form.password.value,
    };

    

    if(store_data===null){
        alert("Please create an account");
    }else if(store_data.email===data.email && store_data.password===data.password){
      //   alert("sign in Successful");
      window.location.href="valid.html"
        localStorage.setItem("login",JSON.stringify(datstore_a))
       
     
    }
    else{
        alert("User Does not exist");
       
    }

   })

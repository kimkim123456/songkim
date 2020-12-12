window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })
  
  function toggle(){
    var header = document.querySelector("header");
    header.classList.toggle("active");
  }

  let video = document.querySelector('video');
  window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY/ - 600;
    video.style.opacity = value;
  })


  function validation(){
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("check");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)){
      form.classList.add("valid");
      form.classList.remove("invalid");
      text.innerHTML = "Email address is valid"
      text.style.color = "#00ff00"
    }else{
      form.classList.remove("valid");
      form.classList.add("invalid");
      text.innerHTML = "Please enter valid email address"
      text.style.color = "#ff0000"
    }
    if (email == ""){
      form.classList.remove("valid");
      form.classList.remove("invalid");
      text.innerHTML = ""
      text.style.color = "#00ff00"
    }
  }

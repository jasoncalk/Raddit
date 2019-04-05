let today = new Date();
    let dateString = 
    today.getMonth() +1 + "/" + 
    today.getDay() + "/" + 
    today.getFullYear() + " " + 
    (today.getHours() > 12 ? today.getHours() -12 : today.getHours()) + ":" + 
    (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()) +
    (today.getHours() > 12 ? "PM" : "AM");
  document.getElementById("post-one").innerHTML = dateString;

  function likePost(number){
    let post = "";
    switch (number) {
      case 1:
        post="first-post-thumb";
        break;
      case 2:
        post="second-post-thumb";
        break;
      default:
        post="first-post-thumb";
    }

    var thumbs = document.getElementById(post);
    if (thumbs.classList.contains("thumbs-liked")) {
      thumbs.classList.remove("thumbs-liked");
    }
    else {
      thumbs.classList.add("thumbs-liked");
    }
  }
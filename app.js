
let btn = document.getElementById("post");
btn.addEventListener("click", function (e) {
  let txt = document.getElementById("txt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    blogobj = [];
  } else {
    blogobj = JSON.parse(notes);
  }
  let user = document.getElementById("user");
  let date = document.getElementById("date");
  let topic = document.getElementById("topic");
  let us = user.value;
  let dt = date.value;
  let tp = topic.value;
  
  let u = `<h3 style="font-weight:600;text-align:center;">It's ${us} and today's date is ${dt} topic of blog is ${tp}</h3><br>`;
  blogobj.push(u + txt.value);
  txt.value = "";
  user.value = "";
  date.value = "";
  topic.value = "";

  localStorage.setItem("notes", JSON.stringify(blogobj));

});



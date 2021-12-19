displayblog();

function displayblog() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    blogobj = [];
  } else {
    blogobj = JSON.parse(notes);
  }
  let html = "";

  blogobj.forEach(function (element, index) {
    html += `<div class="ps" id="ps"><p>${element}</p>
    <button class="del" id="${index}" onclick="delblog(this.id)">delete blog</button></div>`;
  });
  let y = document.getElementById("nb");
  if (blogobj.length != 0) {
    y.innerHTML = html;
  } else {
    y.innerHTML = `<div class="typewriter" style="position:absolute ;left:800px; text-align:center; font-size:40px;">Nothing To Show Add Some Blog</div>`;
  }
}
function delblog(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    blogobj = [];
  } else {
    blogobj = JSON.parse(notes);
  }
  blogobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(blogobj));

  displayblog();
}
let s = document.getElementById("srch");
s.addEventListener("input", function (e) {
  let t = s.value.toLowerCase();

  let b = document.getElementsByClassName("ps");
  Array.from(b).forEach(function (e) {
    let c = e.innerText;
    if (c.includes(t)) {
      e.style.display = "block";
    } else {
      e.style.display = "none";
    }
  });
});


function dark_mode() {
    var eliment = document.body;
    eliment.classList.toggle("dark-mode");
}

const btn = document.getElementById('my_cal_body');

btn.addEventListener('click', function dark_mode() {
  const backgroundColor = btn.style.backgroundColor;

  if (backgroundColor === 'salmon') {
    btn.style.backgroundColor = 'green';
  } else if (backgroundColor === 'green') {
    btn.style.backgroundColor = 'purple';
  } else {
    btn.style.backgroundColor = 'salmon';
  }
});

function disply_delete() {
    document.getElementById("disply_show").value = ""
}

function delete_one(){
  document.getElementById("disply_show").value = document.getElementById("disply_show").value.substring(0, document.getElementById("disply_show").value.length - 1);
}

function input(newValue) {
  document.getElementById("disply_show").value += newValue;
    if ( document.getElementById("disply_show").value.length === 9){
      window.alert("Please don't enter more than 8 characters")
      document.getElementById("disply_show").value = document.getElementById("disply_show").value.substring(0, document.getElementById("disply_show").value.length - 1);
   }
  };

function result() {
    var a = document.getElementById("disply_show").value;
    var b = eval(a)
    document.getElementById("disply_show").value = b;
}


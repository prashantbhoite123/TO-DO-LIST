const form = document.querySelector("form");
const addBtn = document.querySelector(".addbtn");
const ulcon = document.querySelector(".ulcon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#input");
  if (input.value.trim() === "") {
    alert("Abe jaldi bol kal suba panvel niklna hai");
  } else {
    ulcon.innerHTML += `<li><input type="checkbox" class="checkBox"> ${input.value} <i class="fa-solid fa-trash"></i></li>`;
    input.value = "";

    const delTodo = document.querySelectorAll(".fa-solid");

    delTodo.forEach((del) => {
      del.addEventListener("click", (e) => {
        e.target.parentNode.remove();
      });
    });

    let taskComplete = document.querySelectorAll(".checkBox");

    taskComplete.forEach((check) => {
      check.addEventListener("click", (e) => {
        e.target.parentNode.classList.toggle("check");
      });
    });
  }
});

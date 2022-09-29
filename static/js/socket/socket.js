function back() {
  location.href = "/roomlist";
}

let messages = document.getElementById("messages");
let form = document.getElementById("form");
let input = document.getElementById("input");

socket.on("notice", (msg) => {
  let item = document.createElement("li");
  let span = document.createElement("span");
  span.classList.add("msg");
  span.classList.add("chat__custom");
  span.textContent = msg;
  item.classList.add("notice");
  item.append(span);
  messages.appendChild(item);
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!input.value) return;

  let item = document.createElement("li");
  let span = document.createElement("span");
  item.classList.add("mymsg");
  span.classList.add("msg");
  span.classList.add("chat__custom");
  span.classList.add("all");
  span.textContent = `${name} : ${input.value}`;
  item.append(span);
  messages.appendChild(item);
  messages.scrollTo(0, messages.scrollHeight);
  socket.emit("chat message", {
    room_id: `room${room_id}`,
    msg: input.value,
  });
  socket.emit("db message", {
    msg: `${"dyun"}.${nowTime()}.${input.value}`,
  });
  input.value = "";
});

socket.on("chat message", function (data) {
  console.log("aaaaaaa", data);
  let item = document.createElement("li");
  let span = document.createElement("span");
  span.classList.add("chat__custom");
  span.classList.add("msg");
  span.textContent = `${data.msg}`;
  span.classList.add("all");
  item.append(span);
  messages.appendChild(item);
  messages.scrollTo(0, messages.scrollHeight);
});

var socket = io.connect();

socket.emit("welcome", "(클라이언트) 반가워");

socket.on("welcome from server", (data) => {
  console.log(data);

  console.log(data.name, data.msg);
});

function hellobtn() {
  console.log("hello");
  socket.emit("hellobtn", "hello");
}

function studybtn() {
  console.log("study");
  socket.emit("studybtn", "study");
}

function byebtn() {
  console.log("bye");
  socket.emit("byebtn", "bye");
}

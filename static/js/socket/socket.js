var client_list = {};
// {소켓아이디 : 닉네임, 소켓아이디 : 닉네임 , .....}

var socket = io.connect();
//   var data = {
//     msg: msg,
//   };

// 입장 메시지 시작

function myOnClick() {
  socket.emit("showchat", { ibjangmsg: $("#ibjangmsg").val() });
  $("#ibjangmsg").val("");
}
socket.on("showchat", (ibjangmsg) => {
  $(".chat_wrap").append(`<div class="notice">${ibjangmsg}</div>`);
});
// 입장 메시지 끝

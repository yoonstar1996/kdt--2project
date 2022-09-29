const { default: axios } = require("axios");

axios({
  usl: "/roomlist",
  method: "post",
  data: {
    room_id: sessionStorage.getItem("id"),
  },
});

function goChatting(room_id) {
  location.href = `/socket/${room_id}`;
}
function back() {
  location.href = `/`;
}

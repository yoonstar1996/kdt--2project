const { default: axios } = require("axios");

function chattingRoom(title, id) {
  const data = {
    other_id: id,
    title: title,
    user_id: "dyun022",
  };
  axios({
    url: "/api/roomcheck",
    method: "post",
    data: data,
  }).then((res) => {
    console.log("res.data", res.data.room_id);
    if (res.data) {
      location.href = `/socket/${res.data.room_id}`;
    } else {
      createChattingRoom(title, id);
    }
  });
}

function createChattingRoom(title, id) {
  const data = {
    other_id: id,
    title: title,
    user_id: "dyun022",
  };

  axios({
    url: "/api/room",
    method: "post",
    data: data,
  }).then((res) => {
    location.href = `/socket/${res.data.id}`;
  });
}
function heart() {
  var myheart = $(".heart-1").children("i");
  if ($(myheart).hasClass("heart-i")) {
    $(myheart).removeClass("heart-i").addClass("heart-click");
  } else $(myheart).removeClass("heart-click").addClass("heart-i");
}

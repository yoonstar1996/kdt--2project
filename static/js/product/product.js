function chattingRoom(title, other_id, img) {
  const data = {
    other_id: other_id,
    title: title,
    img: img,
    user_id: sessionStorage.getItem("id"),
  };
  axios({
    url: "/api/roomcheck",
    method: "post",
    data: data,
  }).then((res) => {
    if (res.data) {
      location.href = `/socket/${res.data.room_id}`;
    } else {
      createChattingRoom(title, other_id, img);
    }
  });
}

function createChattingRoom(title, other_id, img) {
  const data = {
    other_id: other_id,
    title: title,
    img: img,
    user_id: sessionStorage.getItem("id"),
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

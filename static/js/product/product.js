function chattingRoom(title, id) {
  const data = {
    other_id: id,
    title: title,
    user_id: "dyun",
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
    user_id: "dyun",
  };

  axios({
    url: "/api/room",
    method: "post",
    data: data,
  }).then((res) => {
    location.href = `/socket/${res.data.id}`;
  });
}

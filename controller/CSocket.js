const { Room, ChatContent, Participation } = require("../model");

// 채팅 페이지
exports.socket = (req, res) => {
  res.render("socket/socket");
};

// 채팅 방 만들기
exports.socket_create = (req, res) => {
  const data = {
    name: req.body.name,
  };
  Room.create(data).then((result) => {
    console.log(result);
    const chat_data = {
      room_id: result.id,
      content: "",
    };
    ChatContent.create(chat_data).then((result) => {});
    const participation_my_data = {
      user_id: req.body.user_id,
      room_id: result.id,
    };
    const participation_other_data = {
      user_id: req.body.other_id,
      room_id: result.id,
    };
    Participation.create(participation_my_data).then((result) => {});
    Participation.create(participation_other_data).then((result) => {});
    res.send(true);
  });
};

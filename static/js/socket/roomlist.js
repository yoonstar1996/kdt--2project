function goChatting(room_id) {
  location.href = `/socket/${room_id}`;
}
function back() {
  location.href = `/`;
}

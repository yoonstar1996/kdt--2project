function nowTime() {
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜
  let day = today.getDay(); // 요일
  let hours = today.getHours(); // 시
  let minutes = today.getMinutes(); // 분

  return (
    year + ":" + month + ":" + date + ":" + day + ":" + hours + ":" + minutes
  );
}

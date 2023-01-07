const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let datetime = new Date();
  const result = addDays(
    new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate()),
    100
  );

  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;

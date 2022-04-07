const { ipcMain } = require("electron");
const groupWords = require("./groupWords");
const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");

ipcMain.on("process-subtitle", async (event, paths) => {
  let rows = await pathsToRows(paths);
  let words = await prepareData(rows);
  let groupedWords = await groupWords(words);

  event.reply("process-subtitle", groupedWords);
});

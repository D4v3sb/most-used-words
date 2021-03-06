module.exports = (rows) => {
  return new Promise((resolve, reject) => {
    try {
      const words = rows
        .filter(filterValidRow)
        .map(removePunctuation)
        .map(removeTags)
        .reduce(mergeRows)
        .split(" ")
        .map((word) => word.toLowerCase())
        .map((word) => word.replace('"', ""));

      resolve(words);
    } catch (e) {
      reject(e);
    }
  });
};

function filterValidRow(row) {
  const notNumber = !parseInt(row.trim());
  const notEmpty = !!row.trim();
  const notIntervals = !row.includes("-->");

  return notEmpty && notNumber && notIntervals;
}

const removePunctuation = (row) => row.replace(/[,?!.-]/g, "");
const removeTags = (row) => row.replace(/(<[^>]+)>/gi, "").trim();
const mergeRows = (fullText, row) => `${fullText} ${row}`;

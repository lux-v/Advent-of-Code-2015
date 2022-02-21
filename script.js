const fs = require("fs");
const https = require("https");

/* const file = fs.createWriteStream("data.txt");

https.get("https://www.w3.org/TR/PNG/iso_8859-1.txt", response => {
  var stream = response.pipe(file);

  stream.on("finish", function() {
    console.log("done");
  });
});
 */

fs.readFile("./data.txt", (err, data) => {
  if (err) {
    console.log(err);
  }

  var gore = 0;
  var dolje = 0;
  var char_pos = 0;

  for (const ch of data.toString()) {
    char_pos++;
    if (ch === "(") {
      gore++;
    }
    if (ch === ")") {
      dolje++;
    }

    if (gore - dolje === -1) {
      console.log(char_pos);
      break;
    }
  }
  console.log("Nalazi se na", gore - dolje, " katu.");
  console.log("Character position", char_pos);
});

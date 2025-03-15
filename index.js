
let express = require("express");
let app = express();
let PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
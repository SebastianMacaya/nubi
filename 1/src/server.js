import app from "./app.js";
import "./db.js";

const PORT = 8080;
app.listen(PORT, () => console.log(`💻 Server on port ${PORT}`));

const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4001;
app.use(express.json()); //yadi body mae sae kuch data pass karke lana ho hoga

// mongodb connect
require("./config/database").connect();
const useRouter = require("./routes/user");

app.use("/api/v1", useRouter); //mount
app.listen(PORT, () => {
  console.log(`app is listening at${PORT}`);
});

const express = require('express');
const studentRoutes = require('./api/routes/studentRouter');
const errorHandler = require('./api/utils/errorMiddleware');
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res)=>{
 res.send("Server is Working")
})
app.use('/api', studentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

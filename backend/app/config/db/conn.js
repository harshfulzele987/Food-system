const mongoose = require('mongoose');

const DB =  process.env.DATA_BASE; 
//'mongodb+srv://harsh12:Harsh123@cluster0.t8td1.mongodb.net/food?retryWrites=true&w=majority';
mongoose.connect(DB ,{
    useNewUrlParser: true,
   // useCreateIndex : true,
    useUnifiedTopology : true,
   // useFindAndModify :false
}).then(()=>{
    console.log("Connection succesful");
}).catch((err) =>{ console.log(err)})


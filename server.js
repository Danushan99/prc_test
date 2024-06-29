const express = require('express');
const mongoose = require('mongoose');
const teacherRoutes = require('./routes/teacherRoutes');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


app.use('/teachers' , teacherRoutes);

mongoose.connect('mongodb+srv://sayanthan:sayanthan@cluster0.5id612t.mongodb.net/TicketBooking?retryWrites=true&w=majority' , {
    useNewUrlParser : true,
    useUnifiedTopology:true,
});


const db = mongoose.connection;
db.on('error' , console.error.bind(console , 'connection error'));
db.once('open' , () => {
    console.log('Connected to mongodb');
});


const PORT = 3000;

app.listen(PORT , () => {
    console.log(`Server running on ${PORT}`);
})
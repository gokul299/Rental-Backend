const express = require('express')
const app = express()
const dbConnection = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/cars', require('./routes/carsRoute'))
app.use('/users', require('./routes/usersRoute'))
app.use('/bookings', require('./routes/bookingsRoute'))


const path = require('path')

if (process.env.NODE_ENV === 'production') {

    app.use('/', express.static('client/build'))

    app.get('*', (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello World!'))





app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))
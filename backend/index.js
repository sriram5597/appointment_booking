const express = require('express');
const Mongoose = require('mongoose');
const Cors = require('cors');

// dbconfig
Mongoose.connect('mongodb://127.0.0.1:27017/appointment_booking_app',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

const db = Mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db..'));
db.once('open', () => console.log('connected to db...'));

// routers
const AuthRouter = require('./routers/AuthRoute');
const AdminRouter = require('./routers/AdminRoute');
const LocationRouter = require('./routers/LocationRoute');
const ShopRouter = require('./routers/ShopRouter');
const ServiceRouter = require('./routers/ServiceRouter');
const StaffRouter = require('./routers/StaffRouter');
const OfferRouter = require('./routers/OfferRouter');
const BookingRouter = require('./routers/BookingRoute');

const app = express();
app.use(express.json());

app.use('/auth', AuthRouter);
app.use('/admin', AdminRouter);
app.use('/location', LocationRouter);
app.use('/shop', ShopRouter);
app.use('/service', ServiceRouter);
app.use('/staff', StaffRouter);
app.use('/offer', OfferRouter);
app.use('/booking', BookingRouter);

app.use(Cors());

app.listen(8080, () => {
    console.log('server running at 8080...');
});

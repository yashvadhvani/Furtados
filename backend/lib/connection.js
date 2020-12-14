const { set, connect, connection } = require('mongoose');

set('useCreateIndex', true);
set('useFindAndModify', true);


console.log(process.env.MONGO_DB_CONNECT_STRING);
connect(process.env.MONGO_DB_CONNECT_STRING, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
connection.once('open', () => {
  console.log('connected to DB');
}).on('error', (err) => {
  console.log('err', err);
});
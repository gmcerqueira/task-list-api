import { MongoClient } from 'mongodb';

const MONGO_DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017';

const DB_NAME = 'task-list-api';

const connection = () => MongoClient.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit();
  });

export default connection;

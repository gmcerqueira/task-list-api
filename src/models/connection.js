import { MongoClient } from 'mongodb';

const MONGO_DB_URL = 'mongodb://localhost:27017'; // for local accesses
const DB_NAME = 'task_list_api';

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

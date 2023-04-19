import { Db, MongoClient } from 'mongodb';

if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) {
  throw new Error('WARNING: Suivez les instructions du README afin de setup les variables d\'env Mongo')
}

export class MongoDb {
  private client?: MongoClient
  public db?: Db

  constructor(
    private uri: string,
    private db_name: string
  ) {}

  async initMongoDb() {
    if (!process.env.MONGO_URI || !process.env.MONGO_DB_NAME) return;
    this.client = new MongoClient(process.env.MONGO_URI)
    await this.client.connect()
    this.db = this.client.db(process.env.MONGO_DB_NAME)
  }
}

export const mongo = new MongoDb(process.env.MONGO_URI, process.env.MONGO_DB_NAME)

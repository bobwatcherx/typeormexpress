import {DataSource} from 'typeorm'
import {Tblpost} from './entities/Post.entities';

export const AppDataSource = new DataSource({
    type: "better-sqlite3",
    database: "./main.sqlite",
    synchronize: true,
    logging: true,
    entities: [Tblpost],
    subscribers: [],
    migrations: [],
})
AppDataSource.initialize()
    .then(() => {
      console.log("Berhasil inilize ")
    })
    .catch((error) => console.log(error))

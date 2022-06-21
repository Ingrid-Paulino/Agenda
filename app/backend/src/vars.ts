import dotenv from "dotenv" //1°

dotenv.config() //1°

const { env } = process //1°

export default { //1°
  // configuração por base de cada pasta
  api: { //1°
    port: Number(env.API_PORT || env.PORT || 3004)
  },
  mysql: {
    uri: env.MYSQL_URI || "mysql://root:123456@127.0.0.1:3002/agenda"
  },
}

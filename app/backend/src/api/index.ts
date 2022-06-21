import express from "express"

const api = express()

api.use(express.json())

// const PORT = 3004

api.get("/", (_req, res) => {
  res.send("Começando projeto")
})

// api.listen(PORT, () => {
//   console.log("Rodando na porta 3004")
// })

export default api

const express = require('express')
const axios = require('axios')
const Redis = require("ioredis")

require('dotenv').config()

const redis = new Redis({
    port: process.env.REDIS_PORT || 6379,
    host: process.env.REDIS_HOST || "127.0.0.1"
})

const app = express()

const apiUrl = process.env.GITHUB_API

app.get('/', async (req, resp) => {
    const cache = await redis.get('profile')

    const cacheParse = JSON.parse(cache)

    if (cacheParse) return resp.status(200).send(cacheParse)

    try {
        const response = await axios.get(apiUrl)

        redis.set("profile", JSON.stringify(response.data), "EX", 60)

        resp.status(200).send(response.data)
    } catch(err) {
        resp.status(404).send(err)
    }
})

const port = 3000
app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})
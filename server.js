const http = require('http')
const https = require('https')
const express = require('express')
const path = require('path')
const fs = require('fs')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const helmet = require('helmet')

// Config file
const dotenv = require('dotenv')
dotenv.config()

// Configure express
const app = express()
app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Set template engine
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

// Serve assets
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
app.use('/jquery-ui', express.static(path.join(__dirname, 'node_modules/jquery-ui/dist')))
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')))
app.use('/bootstrap-icons', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')))
app.use('/sweetalert2', express.static(path.join(__dirname, 'node_modules/sweetalert2/dist')))

// Handle errors
app.use((error, req, res, next) => res.status(error.status || 500).json({ error }))

// Routes for requests
const router = require('./router')
app.use('/', router)

// Start HTTPS server
if (String(process.env.https_port) === 'true') {
    const key = fs.readFileSync('./ssl/key.pem')
    const cert = fs.readFileSync('./ssl/cert.pem')
    const httpsServer = https.createServer({ key, cert }, app)

    httpsServer.listen(process.env.https_port, () => console.log(`HTTPS server is up and listening on port ${process.env.https_port}`))
}

// Start HTTP server
const httpServer = http.createServer(app)
httpServer.listen(process.env.http_port, () => console.log(`HTTP server is up and listening on port ${process.env.http_port}`))
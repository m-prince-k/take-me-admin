require("dotenv").config();
require("./config/config.js");
require("./models/index.js")
const http=require("http");
const express=require("express");
const compression =require('compression');
const helmet = require("helmet");
const rateLimit =require("express-rate-limit")
const nocache =require('nocache');
const bodyParser =require('body-parser');

const routes =require('./src/routes/api.js');
const swaggerUi =require("swagger-ui-express");
const swaggerDocument =require("./swagger.js");

const app= express();


//safe header for web restricted
app.use(function (req, res, next) {
    res.setHeader(process.env.CONTENT_SECURITY,process.env.HEADER_SLUG);
    next();
});



//const server= http(app);

//middleware define as per dependencies

app.use(compression());
app.use(express.json());
app.use(nocache());
app.use(helmet());


//inject body parser and public folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: ['application/json', 'application/csp-report', 'application/reports+json'] }));

app.use(express.static('./src/public'));
app.use('/upload', express.static('./src/public/upload'));

app.use("/api/v1/takeme",routes)

//rate limiting define for throttle as per calls
// app.use(rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 25, // 25 calls
// 	})
// 	);
// app.use(swaggerUi.swaggerSecurity({
//     api_key:"" 
// }))

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




app.get('/test',(req,res) => {
    return res.send("testing...")
});


app.use((req,res,error) => {res.status(500).send('Something broke!')})

app.listen(parseInt(process.env.PORT,10) || 4000, () => console.log(`Server listen post at http://localhost:${process.env.PORT}`))

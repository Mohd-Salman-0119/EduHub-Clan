const { cors, cookieParser, express, bodyParser } = require('./imports/modules.imports');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


module.exports = { app }
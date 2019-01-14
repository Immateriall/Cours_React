import express from "express";
import router from "./routes/routes";
import bodyParser = require("body-parser");

class App {
  public express;

  constructor() {
    this.express = express();
    
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    
    this.express.use(router);
  }
}

export default new App().express;

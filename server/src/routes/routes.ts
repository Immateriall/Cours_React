import express from "express";

let router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello World!"
  });
});

router.get("/test", (req, res) => {
  res.json({
    message: "Je suis un test de GET!"
  });
});

router.post("/test", (req, res) => {
  console.log("BODY : ", req.body.hello);
  res.json({
    message: "Je suis un test de POST!"
  });
});

export default router;

// import express from "npm:express@^4.18";
import express from "https://esm.sh/express@4.18.2"

const app = express();

app.get("/", function (req: Request, res: Response) {
    res.send("Hello World!");
})

app.listen(3000);
console.log("listening on 3000 ...")

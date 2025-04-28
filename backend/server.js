import app from "./src/app.js";

try {

    app.listen(8000, () => {
        console.log("servidor rodando...")
    })
} catch(error) {
    console.log(error.message)
}
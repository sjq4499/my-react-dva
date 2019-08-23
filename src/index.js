import dva from "dva"
import App from "@/App"
import createModel from "@/store/index"

let app = dva()

app.router(App)
createModel(app)
app.start("#root")
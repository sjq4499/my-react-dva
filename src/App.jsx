import React from "react"
import {Router} from "dva/router"
import RouterView from "@/router/RouterView"
import routes from "@/router/routes"

export default function App({history}){
  return<Router history={history}>
    <RouterView routes={routes}></RouterView>
  </Router>
}
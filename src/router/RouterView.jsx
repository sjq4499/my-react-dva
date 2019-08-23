import React, { Component } from 'react'
import {Route,Switch,Redirect} from "dva/router"

export default class RouterView extends Component {
  render() {
    let {routes}=this.props
    let redirectArr=routes.filter(item=>item.redirect)
    routes=routes.filter(item=>!item.redirect)
    return (
      <Switch>
          {
            routes.map((item,index)=>{
              return <Route path={item.path} key={index} render={(props)=>{
                return <item.component {...props} children={item.children}></item.component>
              }}></Route>
            }).concat(
              redirectArr.map((item,index)=>{
                return <Redirect key={index} from ={item.path} to={item.redirect}></Redirect>
              })
            )
          }
      </Switch>
    ) 
  }
}

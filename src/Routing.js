import React from 'react'
import {Route,Routes} from "react-router-dom"
import { CreateEmployee } from './Components/CreateEmployee'
import { ViewEmployee } from './Components/ViewEmployee'

export const Routing = () => {
  return (
    <Routes>
        <Route path="/list" element={<ViewEmployee/>}></Route>
        <Route path="/create" element={<CreateEmployee/>}></Route>

    </Routes>
  )
}
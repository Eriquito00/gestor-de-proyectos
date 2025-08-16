import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import List from "./components/List.jsx";

const root = createRoot(document.getElementById('root'))
const lists = createRoot(document.getElementById('lists'))

root.render(
  <StrictMode>
    <h1>"Nombre del proyecto"</h1>
    {/* falta boton para poder crear una nueva lista */}
  </StrictMode>
)

lists.render(
  <StrictMode>
    <>
      <List name={"Test List1"}/>
      <List name={"Test List2"}/>
      <List name={"Test List3"}/>
      <List name={"Test List4"}/>
      <List name={"Test List5"}/>
      <List name={"Test List6"}/>
      <List name={"Test List7"}/>
      <List name={"Test List8"}/>
      <List name={"Test List9"}/>
      <List name={"Test List10"}/>
    </>
  </StrictMode>
)
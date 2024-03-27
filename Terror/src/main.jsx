import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/header/header'
import Mainweb from './Components/mainweb/mainweb'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Mainweb/>
  </React.StrictMode>,
)

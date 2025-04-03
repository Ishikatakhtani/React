
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// importing css
import"./ishika.css/."

//import card css
import "./card.css/."
//linking bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
    <App />
)

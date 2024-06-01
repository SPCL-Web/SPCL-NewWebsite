import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import toast, { Toaster } from 'react-hot-toast';

import { AuthProvider } from "./context/auth";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
     <AuthProvider>
     <Toaster />
    <App />
   
    </AuthProvider>
  </React.StrictMode>
)

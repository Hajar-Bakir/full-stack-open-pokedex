// Importieren der benötigten Module
import React from 'react'
import { createRoot } from 'react-dom'
import App from './App' // Annahme: Die App-Komponente wird in der Datei "App.js" definiert.

// Erstellen eines Wurzelknotens für die React-Anwendung und Rendern der App-Komponente in diesem Wurzelknoten
const root = createRoot(document.getElementById('root')) // Holen des DOM-Elements mit der ID "root"
root.render(<App />) // Rendern der App-Komponente in diesem Wurzelknoten


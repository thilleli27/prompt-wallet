import { app, BrowserWindow } from 'electron';

function createWindow() {
  // Créer la fenêtre du navigateur.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // et chargez l'index.html de l'application.
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);     
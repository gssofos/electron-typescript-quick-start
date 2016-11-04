"use strict";
const electron_1 = require('electron');
let win;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 300, height: 300 });
    win.setMenuBarVisibility(false);
    win.on('closed', () => {
        win = null;
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});

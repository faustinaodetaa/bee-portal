const electron = require("electron");
var { app, BrowserWindow, Tray, Menu } = require("electron");
var path = require("path");
var url = require("url");
var iconPath = path.join(__dirname, "bee.png");
let tray = null;

app.on("ready", function () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: iconPath,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  mainWindow.on("minimize", () => {
    if (tray) {
      return mainWindow.hide();
    }
    tray = new Tray(iconPath);

    const template = [
      {
        label: "Show",
        click: function () {
          mainWindow.show();
        },
      },
      {
        label: "Maximize",
        click: function () {
          mainWindow.maximize();
        },
      },
      {
        label: "Minimize",
        click: function () {
          mainWindow.minimize();
        },
      },
      {
        label: "Exit",
        click: function () {
          mainWindow.close();
        },
      },
    ];

    const contextMenu = Menu.buildFromTemplate(template);
    tray.setContextMenu(contextMenu);
    tray.setToolTip("bee-portal");
    mainWindow.hide();
  });
});

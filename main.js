const { app, BrowserWindow } = require("electron");

const MAC_OS = "binay";

const IS_DEV = process.env.IS_DEVELOPMENT 

const createWindow = () => {
  // Create the browser window, with default size
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.menuBarVisible = false

  try {
    const developmentURL = "http://fluid.lvh.me:3000";
    const productionURL = "https://www.fluid.app/";
    win.loadURL(IS_DEV ? developmentURL : productionURL);
  } catch (error) {
    console.error(error);
  }
};

/**
 * Start the application
 */
app.whenReady().then(createWindow);

/**
 * Quit the application when all windows are closed.
 */
app.on("window-all-closed", () => {
  /**
   * On macOS it is common for applications and their menu bar
   * to stay active until the user quits explicitly with Cmd + Q
   * or by clicking the "Quit" menu item.
   */
  if (process.platform !== MAC_OS) {
    app.quit();
  }
});
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    resizable: false,          // 창 크기 변경 방지
    fullscreenable: false,     // 전체화면 비활성
    minimizable: true,
    maximizable: false,
    autoHideMenuBar: true,     // 상단 메뉴 제거
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      devTools: false           // DevTools 완전 비활성화
    }
  });

  win.loadFile("index.html");

  // 링크나 팝업창 열기 방지 (보안)
  win.webContents.setWindowOpenHandler(() => {
    return { action: "deny" };
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  app.quit();
});
# 華冠文理補習班 Landing Page

一頁式招生網站，包含國英數自課程介紹、試聽課程通知及預約評估表單展示。

## 本機預覽

```bash
pnpm dev
```

## Vercel Preview

此 repository 使用 `vercel.json` 將靜態 Landing Page 輸出至 `vercel-output`。將 repository 匯入 Vercel 後，連接 GitHub repository，推送分支即可建立 Preview Deployment。

預約表單會將稱呼、電話及家長填寫的選填資料送至華冠專用 Google 試算表，由 Apps Script 網頁應用程式接收。網頁表單使用跨來源不透明回應，畫面會顯示送出狀態；若送出失敗，請電話聯繫補習班。

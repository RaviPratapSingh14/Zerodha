# Zerodha

A full-stack Zerodha stock trading clone built using modern web technologies.  
This project replicates Zerodha's landing pages and dashboard experience including:
- User authentication (Signup / Login)
- Live-style watchlist UI
- Order placing simulation
- Holdings and positions view
- Funds & Apps routes
- Responsive layout

---

## 🛠 Tech Stack

### **Frontend**
- React (CRA)
- React Router DOM
- Context API (Global State)
- Axios
- CSS & Bootstrap

### **Backend**
- Node.js / Express (Mock API)
- JSON or In-Memory data simulation
- Token auth simulation

---

## 📂 Project Structure


Zerodha/
├── frontend/
│ ├── src/
│ │ ├── landing_page/
│ │ ├── components/ (Dashboard)
│ │ ├── index.js
│ │ └── ...
│ └── package.json
│
├── dashboard/
│ ├── src/
│ │ ├── components/
│ │ ├── GeneralContext.js
│ │ ├── Home.js
│ │ ├── Dashboard.js
│ │ └── ...
│ └── package.json
│
└── backend/
├── index.js (mock APIs)
└── package.json



---

## 🔐 Features

✔ User Login & Signup  
✔ JWT-like token storage  
✔ Protected dashboard redirect  
✔ Buy order window  
✔ Orders list auto update  
✔ Holdings simulation  
✔ Positions simulation  
✔ Funds & Apps route  
✔ Responsive layout  
✔ Context-based global state management  

---

## 🧩 Dashboard Modules

| Module | Description |
|--------|-------------|
| Summary | Displays metrics, charts & quick data |
| WatchList | Shows stocks with Buy button |
| Orders | Shows placed orders |
| Holdings | Shows owned stocks |
| Positions | Shows intraday open trades |
| Funds | Shows account balance |
| Apps | Quick access links |

---

## ▶️ Running the Project Locally

### **1. Start Backend**
```sh
cd backend
npm install
npm start

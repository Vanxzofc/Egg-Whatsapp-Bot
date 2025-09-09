# 🟢 Bot WhatsApp Pterodactyl Egg

Egg ini digunakan untuk menjalankan **Bot WhatsApp berbasis Node.js** di panel [Pterodactyl](https://pterodactyl.io).  
Support berbagai versi Node.js (v1–v24) dengan image resmi dari [parkervcp/yolks](https://github.com/parkervcp/yolks).  

---

## ✨ Fitur
- Pilihan Node.js lengkap (v1–v24)  
- Auto install dependency dari `package.json`  
- Variabel startup fleksibel (**CMD_RUN**)  
- Langsung jalan begitu server start (auto start)  
- Bisa dipakai untuk bot berbasis **Baileys**, **Venom-Bot**, **WWebJS**, dll  

---

## 🐳 Pilihan Node.js (Docker Image)
Egg ini menyediakan semua image Node.js dari v1 hingga v24:  

- `ghcr.io/parkervcp/yolks:nodejs_1`  
- `ghcr.io/parkervcp/yolks:nodejs_2`  
- `ghcr.io/parkervcp/yolks:nodejs_3`  
- `ghcr.io/parkervcp/yolks:nodejs_4`  
- `ghcr.io/parkervcp/yolks:nodejs_5`  
- `ghcr.io/parkervcp/yolks:nodejs_6`  
- `ghcr.io/parkervcp/yolks:nodejs_7`  
- `ghcr.io/parkervcp/yolks:nodejs_8`  
- `ghcr.io/parkervcp/yolks:nodejs_9`  
- `ghcr.io/parkervcp/yolks:nodejs_10`  
- `ghcr.io/parkervcp/yolks:nodejs_11`  
- `ghcr.io/parkervcp/yolks:nodejs_12`  
- `ghcr.io/parkervcp/yolks:nodejs_13`  
- `ghcr.io/parkervcp/yolks:nodejs_14`  
- `ghcr.io/parkervcp/yolks:nodejs_15`  
- `ghcr.io/parkervcp/yolks:nodejs_16`  
- `ghcr.io/parkervcp/yolks:nodejs_17`  
- `ghcr.io/parkervcp/yolks:nodejs_18`  
- `ghcr.io/parkervcp/yolks:nodejs_19`  
- `ghcr.io/parkervcp/yolks:nodejs_20`  
- `ghcr.io/parkervcp/yolks:nodejs_21`  
- `ghcr.io/parkervcp/yolks:nodejs_22`  
- `ghcr.io/parkervcp/yolks:nodejs_23`  
- `ghcr.io/parkervcp/yolks:nodejs_24`  

👉 Tinggal pilih versi Node.js sesuai kebutuhan bot kamu pas bikin server di panel.  

---

## 🔧 Variabel Lingkungan

| Nama Variabel   | Deskripsi                        | Default     |
|-----------------|----------------------------------|-------------|
| `CMD_RUN`       | Perintah untuk menjalankan bot   | `npm start` |

---

## 🚀 Cara Pakai
1. Import file egg ini ke **Nest** di panel Pterodactyl.  
2. Buat server baru menggunakan egg **Bot WhatsApp**.  
3. Pilih **versi Node.js** sesuai kebutuhan (v1–v24).  
4. Upload file bot kamu ke server (`/home/container`).  
5. Pastikan ada `package.json` agar dependency otomatis ter-install.  
6. Atur variabel `CMD_RUN` sesuai command bot (contoh: `node index.js`).  
7. Start server → bot langsung jalan 🚀.  

---


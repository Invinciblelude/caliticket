# Cali Ticket

Simple wholesale board:

- **Deps** 250–500
- **Light assist** 500–650
- **Indoor** 650–900
- **Media** gallery
- **Come shop** — facility payments, Crypto / Cash, WhatsApp **916-550-7310**

## Preview locally

```bash
cd ~/cali-ticket
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080

## Upload live site

After you change inventory, media, or copy:

```bash
cd ~/cali-ticket
./upload.sh "short note about what changed"
```

Or with no message:

```bash
./upload.sh
```

Pushes to GitHub Pages → **https://caliticket.shop** (usually live in 1–2 min).

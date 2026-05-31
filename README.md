# AI Interviewer

- `frontend/` — React + Vite
- `backend/` — Express + Neon PostgreSQL

## Vercel deploy

1. Import [AI-INTERVIEWER-okay](https://github.com/shubhayyadav84/AI-INTERVIEWER-okay)
2. **Framework Preset:** Other (uses `vercel.json` — static Vite build + `/api` serverless)
3. Add env vars: `DATABASE_URL`, `JWT_SECRET`, `OPENROUTER_API_KEY`
4. Deploy

- UI: `https://your-app.vercel.app/`
- API health: `https://your-app.vercel.app/api/health`

Do **not** set a root `server.js` on Vercel — frontend is served from `frontend/dist`.

## Local

```bash
cd backend && copy .env.example .env   # fill in values
cd backend && npm install && npm run start
cd frontend && npm install && npm run dev
```

Frontend: http://localhost:5173 — API: http://localhost:5000

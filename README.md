# AI Interviewer

- `frontend/` — React + Vite
- `backend/` — Express + Neon PostgreSQL

## Vercel deploy

1. Import [AI-INTERVIEWER-okay](https://github.com/shubhayyadav84/AI-INTERVIEWER-okay)
2. Add env vars: `DATABASE_URL`, `JWT_SECRET`, `OPENROUTER_API_KEY`, `FRONTEND_URL`
3. Deploy

Health: `/api/health`

## Local

```bash
cd backend && copy .env.example .env   # fill in values
cd backend && npm install && npm run start
cd frontend && npm install && npm run dev
```

Frontend: http://localhost:5173 — API: http://localhost:5000

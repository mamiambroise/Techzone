# Techzone Platform

Architecture séparée : `frontend/` (React) et `backend/` (NestJS, Prisma, PostgreSQL). La maquette historique reste dans `dist/`.

## Démarrage

```bash
npm run install:all
cp backend/.env.example backend/.env
npm run db:setup
npm run db:seed --prefix backend
npm run dev
```

Le script `db:setup` crée la base indiquée par `DATABASE_URL` si elle n’existe pas, puis applique Prisma.

- Frontend : http://localhost:3000
- API : http://localhost:3001/api/v1
- Santé : http://localhost:3001/api/v1/health


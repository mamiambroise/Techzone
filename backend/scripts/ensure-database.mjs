import pg from 'pg';
const databaseUrl=process.env.DATABASE_URL;if(!databaseUrl)throw new Error('DATABASE_URL absent. Copiez .env.example vers .env.');
const target=new URL(databaseUrl),database=target.pathname.replace(/^\//,'');if(!/^[a-zA-Z0-9_]+$/.test(database))throw new Error('Nom de base invalide.');
const maintenance=new URL(databaseUrl);maintenance.pathname='/postgres';maintenance.search='';const client=new pg.Client({connectionString:maintenance.toString()});
await client.connect();try{const result=await client.query('SELECT 1 FROM pg_database WHERE datname = $1',[database]);if(!result.rowCount){await client.query(`CREATE DATABASE "${database}"`);console.log(`Base ${database} créée.`)}else console.log(`Base ${database} déjà disponible.`)}finally{await client.end()}


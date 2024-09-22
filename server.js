import express from 'express';
import cors from 'cors'; 
import sequelize from './src/database/config.js';
import challengesRoutes from './src/routes/challenges.routes.js';
import realWorldChallengesRoutes from './src/routes/realWorldChallenges.routes.js';
import commentsRoutes from './src/routes/comment.routes.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/challenges', challengesRoutes);
app.use('/realChallenges', realWorldChallengesRoutes);
app.use('/comments', commentsRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

  sequelize.sync({ alter: true }).then(() => {
    console.log('Database & tables created!');
  });
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

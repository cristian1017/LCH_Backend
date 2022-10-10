import app from './app.js';
import { sequelize } from './database/database.js';

async function main() {
  try {
    await sequelize.sync();
    app.listen(process.env.PORT || 9000)
  } catch (error) {
    throw new Error(error)
  }
}

main();
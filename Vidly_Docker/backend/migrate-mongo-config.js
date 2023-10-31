const db = require("./db");
const db2 = require("./db2"); // Importe as configurações para o segundo banco de dados, você pode ajustar o nome do módulo conforme necessário.


module.exports = {
  mongodb: {
    url: db.url, // URL do primeiro banco de dados
    url2: db2.url, // URL do segundo banco de dados

    databaseName: "vidly", // Nome do banco de dados para o primeiro banco de dados

    databaseName2: "vidly2", // Nome do banco de dados para o segundo banco de dados

    options: {
      useNewUrlParser: true, // Opções para o primeiro banco de dados
      useUnifiedTopology: true, // Opções para o primeiro banco de dados
    },

    options2: {
      useNewUrlParser: true, // Opções para o segundo banco de dados
      useUnifiedTopology: true, // Opções para o segundo banco de dados
    },
  },

  // O restante da configuração permanece o mesmo para ambas as bases de dados
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
};

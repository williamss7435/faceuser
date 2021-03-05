const databaseConf = {
    dialect: 'postgres',
    username: 'postgres',
    password: 'docker',
    database: 'faceuser',
    host: 'localhost',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
}

module.exports = databaseConf;
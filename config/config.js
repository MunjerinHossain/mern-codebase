const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",

//Please open these commands before running at localhost

//   mongoUri: process.env.MONGODB_URI ||
//   process.env.MONGO_HOST ||
//   'mongodb://' + (process.env.IP || 'localhost') + ':' +
//   (process.env.MONGO_PORT || '27017') +
//   '/codebase'
// }

//Connect your mongodb atlas here:

mongoUri: "mongodb+srv://adminadmin:admin2020@mernprojectcluster.uvjz3.mongodb.net/mern-project?retryWrites=true&w=majority"
  
}

export default config

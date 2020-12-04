const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb+srv://adminadmin:admin2020@mernprojectcluster.uvjz3.mongodb.net/mern-project?retryWrites=true&w=majority"
}

export default config

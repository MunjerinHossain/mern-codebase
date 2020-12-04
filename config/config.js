const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: "mongodb+srv://mernadmin:mernadmin123@mern-skill-cluster.be1me.mongodb.net/mern-skill?retryWrites=true&w=majority"
}

export default config

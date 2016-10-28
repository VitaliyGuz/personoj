const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
  JWT_TOKEN: process.env.JWT_TOKEN || 'schtanySorokGryven'
};

export default config;

module.exports = {
  emaimFrom: process.env.EMAIL_FROM,
  emailPass: process.env.EMAIL_PASS,
  emailAdmin: process.env.EMAIL_ADMIN,
  mongoURI: process.env.MONGO_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  port:process.env.PORT
};

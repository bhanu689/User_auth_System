const whitelist = [
  "http://localhost:4240", // Example origin
  "http://localhost:5173", // Example origin
  "http://localhost:5000"   // Add your origin here
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) { // Allow requests with no origin (like mobile apps)
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

export { corsOptions };
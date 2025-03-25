import sql from "mssql";

const config = {
  user: "root2", // Replace with your database username
  password: "123", // Replace with your database password
  server: "localhost", // Replace with your database host
  database: "faei_website", // Replace with your database name
  options: {
    encrypt: false, // Set to true if using Azure SQL
    trustServerCertificate: true // Required for self-signed certificates
  }
};

export const getDatabaseConnection = async () => {
  try {
    const pool = await sql.connect(config);
    return pool;
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
};

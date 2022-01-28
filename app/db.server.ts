import { CosmosClient } from "@azure/cosmos";

// When in dev environnement, disable node's tls reject
if (process.env.NODE_ENV === "development") {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

if (!process.env.COSMOS_DB_CONNECTION_STRING) {
  throw new Error("COSMOS_DB_CONNECTION_STRING is not defined");
}

const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);

const database = client.database("db-randonom");
const container = database.container("Names");

export { database, container };

import { getDB } from "./db.config.js";
const db = getDB();
export const foodCollection = db.collection("foodCollection");
export const requestedCollection = db.collection("requestedCollection");

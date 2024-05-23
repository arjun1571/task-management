import mongoose from "mongoose";

// const connectMongoDB = async (): Promise<void> => {
//   try {
//     const mongoURI = process.env.MONGODB_URI;
//     if (!mongoURI) {
//       throw new Error(
//         "MONGODB_URI is not defined in the environment variables."
//       );
//     }

//     await mongoose.connect(mongoURI);

//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };

// export default connectMongoDB;

// global.mongoose = {
//   conn: null,
//   promise: null,
// };

// export async function dbConnect() {
//   if (global.mongoose && global.mongoose.conn) {
//     console.log("connect from privious");
//     return global.mongoose.conn;
//   } else {
//     const consString = process.env.MONGODB_URI;
//     const promise = mongoose.connect(consString, {
//       autoIndex: true,
//     });
//     global.mongoose = {
//       conn: await promiseHooks,
//       promise,
//     };
//     console.log("nely connnect");
//     return await promise;
//   }
// }

const connection: { isConnected: number } = {
  isConnected: 0,
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI!);

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;

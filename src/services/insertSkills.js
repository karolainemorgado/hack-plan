// import { ObjectId } from "mongodb";
// import { getMongoCollection } from "../../data/mongodb";

// const insertSkills = async (selectedSkills, userId) => {
//     try {
//         const collection = await getMongoCollection('DBtest', 'users');

//         const result = await collection.updateOne(
//             { _id: new ObjectId(userId) },
//             { 
//                 $set: { 
//                     'recruiterSkills.jobSkills': selectedSkills 
//                 } 
//             }
//         );

//         return result.modifiedCount > 0; 
//     } catch (error) {
//         throw error;
//     }
// };

// export { insertSkills };

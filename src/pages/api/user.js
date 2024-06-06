// import { findCorrelatedCandidates } from "@/services/orderedCandidateSuggestions";
// import { getUserById } from "@/services/user";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const body = JSON.parse(req.body);
//     const userId = body.userId;
//     const user = await getUserById(userId);

//     const candidates = await findCorrelatedCandidates(user);
//     res.status(200).json({ user, candidates });
//   }

//   if (req.method === "GET") {
//     const { type } = req.query;
//     const { uid } = req.query;
//     const user = await getUserById(uid);

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     if (type === "chosenCandidate") {
//       const chosenCandidate = user.candidateSuggestions.find(
//         (candidate) => candidate._id === user.chosenCandidate
//       );
//       if (chosenCandidate) {
//         res.status(200).json(chosenCandidate);
//       } else {
//         res.status(404).json({ message: "Chosen candidate not found" });
//       }
//     } else {
//       res.status(200).json(user);
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }

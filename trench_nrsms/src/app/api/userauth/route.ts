
import { firebaseAppInitialize } from "@/firebase/firebaseCongif";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";

// Initialize Firebase
const auth = getAuth(firebaseAppInitialize);

export default async function creteUsserWithEmailHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body; // Assuming email and password are part of the request body

      // Create the user account
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // User creation successful
      const user = userCredential.user;
      res.status(201).json({ message: 'User created successfully', user });

    } catch (error:any) {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(400).json({ error: errorCode, message: errorMessage });
    }
  } else {
    // Return an error for unsupported HTTP methods
    res.status(405).end('Method Not Allowed');
  }
}

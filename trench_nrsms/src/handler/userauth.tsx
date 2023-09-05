
import { firebaseAppInitialize } from "@/firebase/firebaseCongif";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { toast } from "react-hot-toast";

// Initialize Firebase
const auth = getAuth(firebaseAppInitialize);

export default async function creteuserwithemailHandler(email:string, password:string) {

  try {
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // User creation successful
    const user = userCredential.user;
    toast.success('Successfully Login!')
    const message= await user.uid;
    toast.success(message)

  } catch (error: any) {
    // Handle errors
    toast('Error:', error);
  }
}


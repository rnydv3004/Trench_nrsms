
import { firebaseAppInitialize } from "@/config/firebase/firebaseCongif";
import { getAuth, createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { toast } from "react-hot-toast";
import axios from 'axios';

// Initialize Firebase
const auth = getAuth(firebaseAppInitialize);

export default async function createUserWithEmailHandler(email: string, password: string) {

  try {

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential)
    // User creation successful
    const user = userCredential.user;
    

    const request = {
      email: user.email,
      uid: user.uid
    }

    console.log(request)
    axios.post('/api/userdata', request)
      .then((response) => {
        // Handle success
        console.log('Data inserted successfully:', response.data);
      })
      .catch((error) => {

        deleteUser(user).then(() => {
          // User deleted.
        }).catch(() => {
          // An error ocurred
          // ...
        });
        // Handle error
        console.error('Error inserting data:', error);
    });

    toast.success('Successfully Login!')
    const message = user.uid;
    toast.success(message)

  } catch (error: any) {
    // Handle errors
    toast('Error:', error.message);
  }
}


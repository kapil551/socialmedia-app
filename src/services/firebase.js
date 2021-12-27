import { firebase } from '../lib/firebase';

// check for username created is duplicate or not
export async function doesUsernameExist(username) {
    const result = await firebase
      .firestore()
      .collection('users')
      .where('username', '==', username.toLowerCase())
      .get();
  
    return result.docs.length > 0; // retrun true for result.docs.length > 0 and false for result.docs.length == 0 
  }
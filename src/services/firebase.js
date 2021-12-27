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

// get user from the firestore where userId === userId (passed from the auth)
export async function getUserByUserId(userId) {

    const result = await firebase
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get();

    console.log(result);
    
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
  
    return user;
}


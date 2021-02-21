import firebase from './firebase';

const firestore = firebase.firestore();

export const createUser = (uid, data) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};

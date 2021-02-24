import firebase from './firebase';

const firestore = firebase.firestore();

export const createUser = (uid, data) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};

export const createSite = (data) => {
  return firebase.firestore().collection('sites').add(data);
};

export const createFeedback = (data) => {
  return firebase.firestore().collection('feedback').add(data);
};

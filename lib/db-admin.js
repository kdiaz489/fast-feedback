import FeedbackLink from '@/components/FeedbackLink';
import { compareDesc, parseISO } from 'date-fns';
import firebase from './firebase-admin';

export const getAllFeedback = async (siteId) => {
  try {
    const snapshot = await firebase
      .collection('feedback')
      .where('siteId', '==', siteId)
      .get();
    const feedback = [];
    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });
    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );
    return { feedback };
  } catch (error) {
    return { error };
  }
};

export const getAllSites = async (siteId) => {
  try {
    const snapshot = await firebase.collection('sites').get();
    const sites = [];

    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });
    return { sites };
  } catch (error) {
    return { error };
  }
};

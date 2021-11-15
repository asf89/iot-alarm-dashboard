import { firebaseDatabase } from '../utils/FirebaseUtils';
import { ref, onValue } from '@firebase/database';

export default class FirebaseService {
  static getCount = (nodePath, callback) => {
    const query = ref(firebaseDatabase, nodePath);
    onValue(query, (snapshot) => {
      const data = snapshot.val();
      callback(data);
    });
    return query;
  };
}

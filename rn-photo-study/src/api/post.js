import {
  collection,
  getFirestore,
  doc,
  setDoc,
  query,
  getDocs,
  orderBy,
  limit,
  startAfter,
  where,
  deleteDoc
} from 'firebase/firestore';

const getOption = ({ after, uid }) => {
  const collectionRef = collection(getFirestore(), 'posts');

  if (uid) {
    return after
      ? query(
          collectionRef,
          where('user.uid', '==', uid),
          orderBy('createdTs', 'desc'),
          startAfter(after),
          limit(10)
        )
      : query(
          collectionRef,
          where('user.uid', '==', uid),
          orderBy('createdTs', 'desc'),
          limit(10)
        );
  } else {
    return after
      ? query(
          collectionRef,
          orderBy('createdTs', 'desc'),
          startAfter(after),
          limit(10)
        )
      : query(collectionRef, orderBy('createdTs', 'desc'), limit(10));
  }
};

export const createPost = async ({ photos, location, text, user }) => {
  console.log('firebase createPost : ' + JSON.stringify(user));

  try {
    const { uid, displayName, photoURL } = user;
    const collectionRef = collection(getFirestore(), 'posts');
    const documentRef = doc(collectionRef);
    const id = documentRef.id;
    await setDoc(documentRef, {
      id,
      photos,
      location,
      text,
      user: { uid, displayName, photoURL },
      createdTs: Date.now()
    });
  } catch (e) {
    console.log('createPost error : ' + e);
    throw new Error('글 작성 실패');
  }
};

export const getPosts = async ({ after, uid }) => {
  console.log('firebase getPosts : ' + JSON.stringify(uid));

  const option = getOption({ after, uid });

  const documentSnapshot = await getDocs(option);
  const list = documentSnapshot.docs.map((doc) => doc.data());
  const last = documentSnapshot.docs[documentSnapshot.docs.length - 1];
  return { list, last };
};

export const deletePost = async (id) => {
  console.log('firebase deletePost : ' + JSON.stringify(id));

  await deleteDoc(doc(getFirestore(), `posts/${id}`));
};

export const updatePost = async (post) => {
  console.log('firebase updatePost : ' + JSON.stringify(post));
  try {
    await setDoc(doc(getFirestore(), `posts/${post.id}`), post);
  } catch (e) {
    console.log('updatePost error : ' + e);
    throw new Error('글 수정 실패');
  }
};

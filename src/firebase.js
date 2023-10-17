import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBxeUaNTOipD3lNHGfp3GmvJh_ShRE0qYk",
    authDomain: "portfolio-site-and-blog.firebaseapp.com",
    projectId: "portfolio-site-and-blog",
    storageBucket: "portfolio-site-and-blog.appspot.com",
    messagingSenderId: "963999945324",
    appId: "1:963999945324:web:f7c880ea99585582d2fe49",
    measurementId: "G-J89FWY45NF"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

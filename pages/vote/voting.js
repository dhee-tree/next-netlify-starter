import Head from 'next/head';
import { useEffect } from 'react';

import {auth} from '../../utils/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function Voting() {

    const db = getFirestore();
    const colRef = collection(db, 'users');
    const [user, loading] = useAuthState(auth);
    // const analytics = getAnalytics(app);

    useEffect(() => {
        getDocs(colRef).then((snapshot) => {
            let users = []
            snapshot.docs.forEach((doc) => {
                var email = doc.data().email;
                users.push(email)
            });
            console.log(users);
        });
    }, []);

    if(user) {
        var greet = user.displayName;
    } else {
        var greet = 'guest';
    }

    return (
        <div className="shadow-lg p-4 mb-4 bg-white rounded m-5">
            <Head>
                <title>Voting</title>
            </Head>
            <p>Hello {greet}, please enter your code below.</p>
            <input type="text" id="EUC" placeholder="Enter Code" className="border border-success rounded p-1"></input> <br/><br/>
            <button class="btn btn-success">Check My Code</button>
        </div>
    );
}

    //console.log(user);
    // const getUsers = () => {
    //     db.collection('users').onSnapshot((snapshot) => {
    //         snapshot.docs.map((doc) => {
    //             console.log(doc.data());
    //         });
    //     });
    // };

    // useEffect(() => {
    //     getUsers();
    // }, []);

    // async function getUsers(db) {
    // const citiesCol = collection(db, 'users');
    // const citySnapshot = await getDocs(citiesCol);
    // const cityList = citySnapshot.docs.map(doc => doc.data());
    // return cityList;
    // }

    // getUsers();
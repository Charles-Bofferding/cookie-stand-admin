import {useState} from 'react'
import Head from '../components/Head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {

  // Create a single store
  const [store, setStore] = useState({});

  const addStore = (newStore) => {
    //This is a holy grail of 
    console.log(JSON.stringify(newStore, null, 2));
    setStore(newStore);
    setStores([...stores, newStore]);
  }

  const [stores, setStores] = useState([]);


  return (
    <>
      <Head title = "Cookie Stand Admin"/>
      <Header/>
      <Main stores={stores} onSubmit={addStore}/>
      <Footer stores={stores}/>
    </>
  )
}

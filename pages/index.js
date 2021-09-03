import {useState, useEffect} from 'react'
import Head from '../components/Head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import axios from 'axios';


export default function Home() {

  // Setting up state things
  const [store, setStore] = useState({});
  const [stores, setStores] = useState([]);

  const addStore = async (newStore) => {
    console.log(JSON.stringify(newStore, null, 2));
    setStore(newStore);
    setStores([...stores, newStore]);
    const response = await axios.post(`${url}/api/`)
  }

  const url = 'https://salmon-cookie-api.azurewebsites.net'

  const getStoresOld = () => {
    function CookieStore (location, minCustomers, maxCustomers, avgCart, hourlySales) {
      this.location = location;
      this.minCustomers = minCustomers;
      this.maxCustomers = maxCustomers;
      this.avgCart = avgCart;
      this.hourlySales = hourlySales;
    }
    const storesList = [
      new CookieStore('Seattle', 23, 65, 6.3, [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]),
    ]
    setStores(storesList)
  }

  const getStores = async () => {
    const response = await axios.get(`${url}/api/Store`);
    console.log(response.data);
    setStores(response.data);
  }

  const deleteStore = async (id) => {
    const response = await axios.delete(`${url}/api/DeleteStore/${id}`)
  }



  useEffect(() => {
    console.log('effect is running');
    getStores();
    console.log(stores);
  },[]);

  return (
    <>
      <Head title = "Cookie Stand Admin"/>
      <Main stores={stores} onSubmit={addStore}/>
      <Footer stores={stores}/>
    </>
  )
}

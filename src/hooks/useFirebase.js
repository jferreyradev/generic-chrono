import { useState } from "react"
import { collection, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export function useFirebase(dbconf) {

  const [data, setData] = useState([])

  async function saveData(collectionName, obj) {
    try {
      const docRef = await addDoc(collection(dbconf, collectionName), obj)

      //obtenerDatos()

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function updateData(collectionName, id, obj) {
    try {
      const docRef = doc(dbconf, collectionName);
      await updateDoc(docRef, obj);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function deleteData(collectionName, id) {
    try {

      await deleteDoc(doc(dbconf, collectionName, id));
      console.log("Document deleting with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getAllDocs(collectionName) {
    const querySnapshot = await getDocs(collection(dbconf, collectionName));
    let arr = []
    querySnapshot.forEach(doc =>
      arr.push({id: doc.id, data: doc.data()})
    )
    return arr
  }

  return [getAllDocs, saveData, updateData, deleteData]

}

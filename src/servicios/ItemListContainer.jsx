import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemListContainer = ({ categoria: categoriaProp }) => {
  const [servicios, setServicios] = useState([]);
  const [titulo, setTitulo] = useState("Servicios");
  const { categoria: categoriaUrl } = useParams();
  
  const categoria = categoriaProp || categoriaUrl;

  useEffect(() => {
    const serviciosRef = collection(db, "servicios");

    const q = categoria ? query(serviciosRef, where("categoria", "==", categoria)) : serviciosRef;

    getDocs(q)
      .then((resp) => {
        setServicios(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      });
  }, [categoria]);

  return (
    <ItemList servicios={servicios} titulo={categoria} />
  );
};

export default ItemListContainer;
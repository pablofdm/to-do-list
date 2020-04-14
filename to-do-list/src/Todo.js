import React, { useState, useEffect } from 'react'
import './Todo.css'
import List from './Components/List'
import TodoForm from './Components/TodoForm'
import Item from './Components/Item'
import Modal from './Components/Modal'


const SAVED_ITEMS = "savedItems"

export default function Todo(){

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState([]);

    useEffect(() => {
      let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
      if (savedItems) {
        setItems(savedItems);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]);


    function onAddItem(text) {
      let it = new Item(text);
      setItems([...items, it]);
      onHideModal();
    }

    function onItemDeleted(item) {
      let filteredItems = items.filter(it => it.id !== item.id);
      setItems(filteredItems);
    }

    function onDone(item) {
      let uptadetItems = items.map(it => {
        if (it.id == item.id) {
          it.done = !it.done;
        }
        return it;
      });

      setItems(uptadetItems);
    }

    function onHideModal(e){
       setShowModal(false);
    }

    return (
        <div className="container">
            <header className="header"><h1>Check-List do dia :</h1><button onClick={()=> {setShowModal(true)}}  className="addButton">+</button></header>
            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
        </div>
    )
}



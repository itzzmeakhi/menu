import React, { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Loader from '../Loader/Loader';

import nonVegImg from './../../assets/nonveg.jpg';
import vegImg from './../../assets/veg.jpg';
import gvImg from './../../assets/gv.png';

import { db } from './../../firebase.config';

const MenuList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getMenuList = async () => {
      const doc_refs = await getDocs(collection(db, 'items'));
      const res = [];
      doc_refs.forEach(doc => {
        res.push({
            id: doc.id, 
            ...doc.data()
        });
      });
      setCategories([...res]);
      setLoading(false);
    };
    getMenuList();
  }, []);
  return (
    <div>
      {loading ? <Loader /> : (
        <>
          <img src={gvImg} alt='' className='gv-img'/>
          <h1 className='menu-header'> Menu </h1>
          {categories.map((category, idx) => {
            const { id, name, doNotShowFoodLabel, dishes } = category;
            return (
              <Accordion key={id} alwaysOpen data-bs-theme="dark">
                <Accordion.Item eventKey={idx}>
                  <Accordion.Header>{name}</Accordion.Header>
                  <Accordion.Body>
                    {dishes.map((dish, idx) => (
                      <Card key={idx}>
                        <Card.Body>
                          <Card.Title>{dish.name}</Card.Title>
                          {!doNotShowFoodLabel && (
                            <>
                              <img src={dish.type === 'nonveg' ? nonVegImg : vegImg} alt='' />
                            </>
                          )}
                          {/* <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                          </Card.Text> */}
                        </Card.Body>
                      </Card>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MenuList;
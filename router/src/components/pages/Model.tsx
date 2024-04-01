import React from 'react'
import { adidasArr } from './Adidas'
import { useParams } from 'react-router-dom'
import styles from "../Site.module.css";

export const Model = () => {

    const params = useParams();
  return (
    <div>
        <h2> {adidasArr[Number(params.id)].model}</h2>
        <h3> {adidasArr[Number(params.id)].collection}</h3>
        <h4> {adidasArr[Number(params.id)].price}</h4>
       
        <img className={styles.snickersImg}
    src={adidasArr[Number(params.id)].picture}
    alt={adidasArr[Number(params.id)].model}
    />

        </div>
    // <img
    // src={adidas.picture}
    // alt={adidas.model}
    // />
  )
}

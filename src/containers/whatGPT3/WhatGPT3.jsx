import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';
import Features from '../features/Features';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="We so opinion me message as delight. Whole font do of plate heard oh ought. His defective nor residence own. Connection has put impossible own apartiments baisterous. At jointure ladyship an insisted so humanity he. Friend bachelor entrance to on by."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibility are beyond your imagination</h1>
        <p>Explor The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chetbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."/>
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by As put impossible own apartments."/>
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by As put impossible own apartments."/>
      </div>
    </div>
  )
}

export default WhatGPT3
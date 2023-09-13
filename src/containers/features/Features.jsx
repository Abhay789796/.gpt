import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improve and distrusts instanty',
    text: 'From they fine uydgvnkyuugyugenyugnyuwgenyuwgey',
  },
  {
    title: 'Improve and distrusts instanty',
    text: 'From they fine lihighfur5cuikbuhbityyviybiyty',
  },
  {
    title: 'Improve and distrusts instanty',
    text: 'From they fine iubnuidbdulidasbnuiaohnugewyu',
  },
  {
    title: 'Improve and distrusts instanty',
    text: 'From they fine rrugyyunyugrigyeworhgo83ygro78qg2ey',
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future Now and You just Need to Realize it. Stop into Future Today & Make it Happen.</h1>
        <p>Request Early access</p>
      </div>
      <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index}/>
      ))}
      </div>
    </div>
  )
}

export default Features
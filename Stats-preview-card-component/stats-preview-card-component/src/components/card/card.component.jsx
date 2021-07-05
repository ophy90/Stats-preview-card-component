import React from 'react';

import './card.styles.scss'

const Card = () => (
       <div className={'card'}>
           <div className={'text'}>
               <div className={'paragraphs'}>
                   <h1 className={'title'}>Get <span>insights</span> that help your business grow.</h1>
                   <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
               </div>
               <div className={'rows'}>
                   <ul className={'row first'}>
                       <li>10K+</li>
                       <li>314</li>
                       <li>12M+</li>
                   </ul>
                   <ul className={'row second'}>
                       <li>companies</li>
                       <li>templates</li>
                       <li>queries</li>
                   </ul>
               </div>
           </div>
            <div className={'image'}>
           </div>
    </div>
)

export default Card;
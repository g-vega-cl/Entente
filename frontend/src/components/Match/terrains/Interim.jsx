import React, { useState } from 'react';
import { StarFilled } from '@ant-design/icons';

const Interim = ({ color, setClickedRegion, Influence }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <StarFilled
        style={{
          fontSize: '38px',
          position: 'absolute',
          top: '50%',
          right: '50%',
          filter: 'saturate(10%)',
          color: selected ? 'white' : 'black',
          border: 'solid',
          borderColor: 'black',
          boxShadow: '1px 1px 1px black',
        }}
        onMouseEnter={() => {
          setSelected(true);
        }}
        onMouseLeave={() => {
          setSelected(false);
        }}
        onClick={() => {
          setClickedRegion('Interim');
        }}
      />
      <p
        style={{
          fontSize: '18px',
          position: 'absolute',
          fontWeight: 'bold',
          color: 'black',
          top: '61%',
          right: '49%',
          filter: 'saturate(10%)',
          border: 'solid',
          borderColor: 'black',
          boxShadow: '1px 1px 1px black',
        }}
      >
        {Influence}
      </p>
      <svg id='Interim' height='410' width='410' viewBox='0 0 800 800'>
        <path
          id='XMLID_1_'
          className='interim-st0'
          d='M84.8,560.6l-37.8-34l-23.6-22l-27.7-66.4l10.7-19.1l61.5-16.9l51.2-31.9l16.9-39L119.8,303
	l-10.5-84.5l-19.5-30.9l5.3-32.8l4.6-19.4l27.4-51.6l40.4-24.5l44.1-4.3l26-20l17.4-9.9c0,0,14.3-0.2,22.5,0
	c8.2,0.2,10.5,6.2,20.2,8c9.7,1.8,49.4,7.8,49.4,7.8l8.8,1.7c0,0-8-5.8,6.9-19.5c14.9-13.7,64.5,12.6,72.9,11.9
	c8.4-0.7,63.5-13.7,63.5-13.7L524,25c0,0,23.4,27.3,27.4,36.8c4,9.5,14.1,22,14.1,22s10.7,26.2,14.4,46s4,31.5,0.1,36.8
	c-3.8,5.3,0.9,18.6-3.2,21.5c-4.1,2.9,1.6,0.8-0.4,15.7s-4.9,37.6,2.2,47.8c7.1,10.2,10.6,30.7,10.6,30.7s23.8,31.6,23.7,31.5
	s3.9-9.6,0,9.2c-3.9,18.8,7.8,3.5-6.3,27.4s-1.3,36.1-19.7,51.9c-18.4,15.8-23.7,30.2-23.7,30.2l-4.2,13.7c0,0,1.9,13.3,0,15.2
	c-1.9,1.9-13.2,15.4-5.8,24c7.4,8.6,12.2,24.8,12.2,24.8l7.4,16.9l16.3,15l13.1,21.9L544,653.3l-13,38.5l-26.7,23.7l-9,19.6
	c0,0,2,1.9-10,5.2c-12,3.4-50.1,16.9-50.1,16.9s-16.4-1.4-30.5,6.6c-14.1,8.1-16.6-6.3-41.4-0.1c-24.8,6.2-40.1,10.2-40.1,10.2
	s-2.4-13.9-17.7-12.8s-35.9-15.4-35.9-15.4L253.9,729l-17.8-21.2l-5.2-6.1L154.1,735c0,0-7.6,15-16,16.5c-8.4,1.5-39.8-3.5-39.8-3.5
	l-11.8-1.6l-9.7-1.2L72.5,729c0,0,0.9-9.1,0-13.5s-4.5-23.1-4.5-23.1s-13.5-13.7-9.3-23.5c4.3-9.8,10.7-24.5,9.2-34.5
	c-1.5-10,9-20.3,9-20.3s2.1-21.8,4.5-24.8c2.4-3,8.3-6.5,5.9-17.6S84.8,560.6,84.8,560.6z'
          style={{
            fill: color,
            filter: selected ? 'saturate(50%)' : '',
            stroke: 'white',
            strokeWidth: '1px',
          }}
        />
      </svg>
    </>
  );
};
export default Interim;

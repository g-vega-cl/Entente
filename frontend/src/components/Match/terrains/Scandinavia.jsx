import React, { useState } from 'react';
import { StarFilled } from '@ant-design/icons';

const Scandinavia = ({
  Scandinavia,
  setClickedRegion,
  ScandinaviaInfluence,
}) => {
  const [selectedScandinavia, setSelectedScandinavia] = useState(false);
  return (
    <>
      <StarFilled
        style={{
          fontSize: '38px',
          position: 'absolute',
          top: '80%',
          right: '70%',
          filter: 'saturate(10%)',
          color: selectedScandinavia ? 'white' : 'black',
          border: 'solid',
          borderColor: 'black',
          boxShadow: '1px 1px 1px black',
        }}
        onMouseEnter={() => {
          setSelectedScandinavia(true);
        }}
        onMouseLeave={() => {
          setSelectedScandinavia(false);
        }}
        onClick={() => {
          setClickedRegion('Scandinavia');
        }}
      />
      <p
        style={{
          fontSize: '18px',
          position: 'absolute',
          fontWeight: 'bold',
          color: 'black',
          top: '89%',
          right: '79%',
          filter: 'saturate(10%)',
          border: 'solid',
          borderColor: 'black',
          boxShadow: '1px 1px 1px black',
        }}
      >
        {ScandinaviaInfluence}
      </p>
      <svg id='Scandinavia' height='450' width='450' viewBox='0 0 800 800'>
        <path
          id='XMLID_1_'
          class='scandinavia-st0'
          d='M106,778.7l14,1.7l11.1,0l8.2-1.1l2.2-5.5l-8.2-3.6l1.2-7.5l-0.6-11.8l10.3,13.7l11,7.5l5.1-1.6
	l5.4-0.4l-5,9.5l8.9,4.6l11,6.3l5.1-2l8.8-1.5l2.3-4.2l3.1-4.4l0.1-7.8v-12l4.6-3l-1.6-4.6l3.8-4.4l14.5,2.2h5.8l7.4,6.3l8.3-3.3
	l8.3,1.8l9.3-7.4l-4.2-6.1v-4.5l-3-7.6l3.5-4.9l7.3-0.4c0,0,5.7,5.4,10.3-0.1c4.6-5.5,9.9-7.6,9.9-7.6l11-7.4l1-8.1l12.1-18.6
	l-3.4-8.2l0.6-14.4l-4.4-9.2l4.2-6.7l0-12.8l-1-12.1l-0.6-8.3l12.9-16.8c0,0-4-0.9,0-4.7s3.6-13.6,3.6-13.6l5.5,1.7l4.5,1.9l4.4,2.6
	l3.5-7.4l4.8-8.1v-5.3l-8.8-2.6l5.5-6.7l5.8-7.5l-0.8-5.1l-5-2.5l-13-18.5l-7.7-7.9l-3.5-5.4c0,0-0.8-3.2-4.2-5.6
	c-3.3-2.4-3.3-2.4-3.3-2.4l-7-8.9c-1.3-6.4-2.7-11-2.7-11c5.3-13.1,5-15.2,3.7-19.2c-1.3-4-0.9,2.3-1.3-4c-0.3-6.3-3.8,0.6,1.7-11.2
	c5.5-11.9,0.9-15.9,0.9-15.9l4.9-9.8c0,0,3-3.2,4.3-7.1c1.3-4,7.2-8.5,7.2-8.5l6-14l13.8-15.8l10.1-20.2l9.8-6.6l2.9-10.8V319
	c-0.3-5.5-7.1-9.3-5.1-14.3c2-5,7.2-15.1,7.2-15.1l6.4-14.4l6.4-6.7l16.2-13.4l13.8-5.1l18.2,7.7c0,0,0.9,7,3.9,12.6
	c3,5.5,1.8,6.1-0.1,12.7s-5.8,8.2-11.4,16.1s-7.9,12.1-7.9,12.1l1.3,17.8l-2.8,4.3c0,0-3.1,4-5,9.9c-1.9,6-8,11.4-13.3,21.7
	s-6.6,20.6-6.6,20.6l-4.6,5.8c0.8,6.8-3.8,2.2,0.8,6.8s8.6,3.5,5.6,10.6c-3.1,7.1,1.9-0.3,1.9,8s1.2,7.7,0,13.4
	c-1.2,5.8,0.5,7.2,1.5,10.1s3.1,1.6,2.2,12.7c-0.9,11.1-0.9,11.1-0.9,11.1s-0.6,1,1.7,10.5c2.3,9.5-1.6,5,2.3,9.5
	c3.9,4.5,13,9.8,13,9.8l7.1,5.5l4.8,2.6c0,0,6.5,1.4,5.6,5c-0.9,3.6-2.7,0.5-0.9,3.6s7.9,5.1,7.9,5.1s2.3-0.1,4.2,1.6
	c1.9,1.8,9,1.1,9,1.1l3.8-2.5c0,0,5.3-3.4,11.9-6.3c6.7-2.9,6.7-2.9,6.7-2.9l11.4-5.9c3.8-2.9,12.3-9,12.3-9s2.9-4.7,7.1-7.6
	c4.2-2.9,9.6-3.3,9.6-3.3l8.1-3.7c0,0,2.9-2.7,6.4-5.8c3.5-3.2,17.8-3.4,17.1-4.2c-0.7-0.7,8.7-4.2,8.7-4.2l2.1-12.5l-3.1-17.1
	l11.3-17.9c0,0,5-2,3.7-11.4c-1.3-9.3,8.2-14.4,8.2-14.4l6-8.7c0,0,2.4-8.7,2.7-11.7s0-20.2,0-20.2s-5.7-11.7,0.1-11.3
	c5.8,0.3,0-8,0-8L562.8,319l-12.7-3.2l-7.6-2.7l2.7-11.4l-5.8-22.9l-6.6-8.9l-6.8-4.2c0,0,5.8,1.9-0.2-6.1c-6-8-3.3,0-6-8
	c-2.7-8-6.6-11.8-6.6-11.8l0.1-8.1l-1-4c0,0,3.9,2.1,0-7.5c-3.9-9.6-9.2-19.9-9.2-19.9l-4.7-11.1c0,0-5.8-7.2-8-9
	c-2.1-1.8-2.4-8.7-6.1-9.6s-6.1-7.9-7.1-11.2c-1-3.3-2.4-9.8-2.4-9.8s2.3-8.5,0-10.8c-2.3-2.3-5.1-14.6-5.1-14.6l3.3-8.4l-14.6-10
	l-3.4-5.4l-4.2-16.1l1.9-10.2l14.8-11.5l1.2-4.1l0-15.6l-19.2-0.7l-9.7-2.5l-5.9-1.4l28.2-12.3l-8.7-13l-18.1-5.2l-13.5-2.9
	c0,0,2.9-0.5-0.8,4s6.7,11.1-0.2,13.9c-7,2.8-11.5-1.4-11.5-1.4s-6.6-2.3-2.8-8.8c3.8-6.5,6-10.4,6-10.4s-12.6-2-15.8,0
	c-3.2,2-1.5,0-5.5,7.2s-1.4,15.4-1.4,15.4s8.5,9.6-8.3,9.8S366,31.5,366,31.5s-5.3-17.1-9.4-8.1s-13.1,17.2-13.1,17.2l-5,9.5
	c0,0-27.1,3.1-22.2,10.8c4.9,7.7,2.8,17.2,2.8,17.2s7,5,1,9.5c-5.9,4.5-15.7,3.8-15.7,3.8l-18.8-0.5l-4.2-3.3c0,0-7.9,7.7-14.9,13.6
	c-7,6-7,6-7,6l-12.2,13.6v8.4l-1.4,11.6l-15-14.4c0,0,1.4,1.1,1,10.2s-3.1,19.6-3.1,21s-5.9,17.5-4.2,24.9c1.7,7.4-6.4,9.3-6,17.8
	c0.4,8.5-9.1,14-9.8,15.2c-0.6,1.1,6,6.7,1.5,7.7s-4.5,1.1-4.5,1.1l1.9,9.3l-11.3,9.6c0,0-8,1.8-7.9,5.3s-0.8,6.6-1.3,11.1
	c-0.5,4.5-0.5-3.9-0.5,4.5c0,8.4,6.8,6.8,3.4,14.5c-3.5,7.7-8,7.8-9.4,13.8c-1.4,6.1-0.1,7.8-2.8,16.6c-2.8,8.8-2.8,8.8-2.8,8.8
	l-4.5,18.6l-5.2-0.4c0,0-5.6-4.8-10.4,2.9c-4.9,7.7-11.1,9.5-21.3,15.3c-5.1,2.9-10,7.4-13.5,11.2s-5.9,6.9-5.9,6.9
	s-4.5,7.5-4.2,11.1s-5,3.4-6.3,10.4c-1.3,7-5.9,11.5-5.9,11.5s-3.1-0.7-8.7,3.5s-8.7,11.9-8.7,11.9l-11.1,1.1l-4.5-0.4
	c0,0-10.7,9.7-15.8,14.2c-5.1,4.4,8.5,8.6,1.9,9.7s-5.6-0.4-6.6,1.1c-1,1.4-7,6.3-7,6.3s-2.8,9.5-2.1,13.7c0.7,4.2,1.4,6.3,1.4,6.3
	s2.4,15.4-0.7,16.8c-3.1,1.4-1.4,11.2-4.2,12.3s2.1,8.4,2.1,8.4s5.2-3.9,1.7,4.9c-3.5,8.8-0.7,16.8-0.7,16.8l1.7,9.1l5.2,6.7
	c0,0,1.4,3.9,1.7,7.7c0.3,3.9-0.3,5.3-4.2,6.7c-3.8,1.4-8.7-5.6-7.7,4.6s1,10.2,1,10.2l11.8,7.4c-7.3,7.7-10.4,13.7-10.4,13.7
	s-0.3-1.3,5.2,6.4s3.2,6.3,8.7,11.7c5.5,5.4-0.7,3.3,5.5,5.4s29.6,13,29.6,13l15.7-4.2l23-20.4l16.3-17.5l15-14.4l14.9,12l4.5,20
	l12.3,23.4l-3.1,11.4l10.9,18.3l6.8,18.3l6.5,7.4l4.1,9.2l5,8.3l-8.1,16l-14.4,7.9l-11.4,2l-6.3-3.2l-17.6,3l1.3-12.7l10.5-5.8
	l-8.5-9.2l-10.7-2.8l-5.3-18.6l4.3,2.1l5-10.5l4.8-17.3l-2.3-7.4l-17.8,1.7l2,5.8l-6.4,9.5c0,0,1.4-4.2-6.1,0.1
	c-7.5,4.2-7.5,4.2-7.5,4.2l-8.2,7.4c-4.6-0.6-10.1,5.6-10.1,5.6l-2.5,4.9l-1.8,7.3l-2.9,12.3c5,7.2,2.3,15.2,2.3,15.2l-0.8,9.3
	l-0.6,1.9l-2.5,9.9l-0.7,3.9l6.8,4.8l7.9,14.6L106,778.7z'
          style={{
            fill: Scandinavia,
            filter: selectedScandinavia ? 'saturate(50%)' : '',
          }}
        />
      </svg>
    </>
  );
};
export default Scandinavia;
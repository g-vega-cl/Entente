import France from './terrains/France';
import Spain from './terrains/Spain';
import UK from './terrains/UK';
import Germany from './terrains/Germany';
import Italy from './terrains/Italy';
import Russia from './terrains/Russia';
import Netherlands from './terrains/Netherlands';
import Scandinavia from './terrains/Scandinavia';
import Interim from './terrains/Interim';
import Balcans from './terrains/Balcans';

const MatchMap = ({ clickedRegion, setClickedRegion }: any) => {
  return (
    <div
      style={{ backgroundColor: '#877e73', height: '110vh', width: '110vw' }}
    >
      <div
        style={{
          width: '1536px',
          height: '864px',
          minWidth: '1536px',
          minHeight: '864px',
          backgroundColor: '#877e73',
          position: 'absolute',
          overflowY: 'hidden',
          overflowX: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '70%', right: '73%' }}>
          <Spain
            spainNorth='yellow'
            spainSouth='yellow'
            setClickedRegion={setClickedRegion}
          />
        </div>
        <div style={{ position: 'absolute', top: '40.5%', right: '66%' }}>
          <France
            franceEast='blue'
            franceWest='blue'
            franceSouth='blue'
            setClickedRegion={setClickedRegion}
          />
        </div>
        <div style={{ position: 'absolute', top: '4%', right: '75%' }}>
          <UK
            UKNorth='red'
            UKMid='red'
            UKSouth='red'
            setClickedRegion={setClickedRegion}
          />
        </div>
        <div style={{ position: 'absolute', top: '17.7%', right: '53.7%' }}>
          <Germany
            GermanyEast='brown'
            GermanySouth='brown'
            GermanyWest='brown'
            setClickedRegion={setClickedRegion}
          />
        </div>
        <div style={{ position: 'absolute', top: '57.9%', right: '51.9%' }}>
          <Italy
            ItalyNorth='#00b806'
            ItalySouth='#00b806'
            setClickedRegion={setClickedRegion}
          />
        </div>
        <div style={{ position: 'absolute', top: '-50%', right: '-10%' }}>
          <Russia
            RussiaEast='purple'
            RussiaWest='purple'
            setClickedRegion={setClickedRegion}
          />
        </div>
        <div style={{ position: 'absolute', top: '31%', right: '71%' }}>
          <Netherlands
            Netherlands='#292222'
            setClickedRegion={setClickedRegion}
          />
        </div>
        <div style={{ position: 'absolute', top: '-31.7%', right: '45%' }}>
          <Scandinavia
            Scandinavia='#292222'
            setClickedRegion={setClickedRegion}
          />
        </div>
        <div style={{ position: 'absolute', top: '17%', right: '38%' }}>
          <Interim color='#292222' setClickedRegion={setClickedRegion} />
        </div>
        <div style={{ position: 'absolute', top: '47%', right: '30%' }}>
          <Balcans color='#292222' setClickedRegion={setClickedRegion} />
        </div>
      </div>
    </div>
  );
};

export default MatchMap;

import { Button, Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import GetTurn from './GetTurn';
//Note: We are letting people know the modifiers before choosing. But idk for now.
//To fix just send event titles and descriptions and an identifier and send call to backend when it happens.
const Event = (io: any, event: any, setShowEvent: any) => {
  const screenWidth = window.screen.availWidth;
  const eventVW = screenWidth < 1000 ? '80vw' : '50vw';
  const eventRight = screenWidth < 1000 ? '8%' : '25%';
  const params: any = useParams();
  const matchId = params?.id;
  const selectEventChoice = (choice: string) => {
    setShowEvent(false);
    GetTurn(io, choice, event._id, matchId);
  };
  if (event?.description) {
    return (
      <div
        style={{
          zIndex: 1,
          width: eventVW,
          backgroundColor: 'white',
          position: 'absolute',
          top: '30%',
          boxShadow: '2px 2px 2px black',
          right: eventRight,
        }}
      >
        <Row>
          <Col
            span={24}
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '18px',
              padding: '5px',
              textAlign: 'center',
            }}
          >
            {event.title}
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '18px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            {event.description}
          </Col>
        </Row>
        <Row style={{ marginTop: '13px', marginBottom: '13px' }}>
          <Col
            span={12}
            style={{
              display: 'flex',
              fontSize: '18px',
              paddingLeft: '15px',
            }}
          >
            <Button onClick={() => selectEventChoice('firstChoice')}>
              ⬅️ {event.firstChoice.title}
            </Button>
          </Col>
          <Col
            span={12}
            style={{
              display: 'flex',
              fontSize: '18px',
              justifyContent: 'flex-end',
              paddingRight: '15px',
            }}
          >
            <Button onClick={() => selectEventChoice('secondChoice')}>
              {event.secondChoice.title} ➡️{' '}
            </Button>
          </Col>
        </Row>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default Event;

import { Tooltip } from 'antd';

// DO THIS ONE AND ALSO THE TIMER. ALSO A TIMER THAT REFRESHES DATA EVERY 10 SECONDS
const EndTurnButton = (data: any, io: any, user_name: any, match_id: any) => {
  const indicatorsFontSize = '24px';
  const getTimeLeft = () => {
    if (data?.lastTurn) {
      const now = new Date();
      const secondsLeft = (
        120 -
        (now.getTime() - new Date(data?.lastTurn).getTime()) / 1000
      ).toFixed(0);
      return `${secondsLeft}`;
    }
    return '120';
  };

  if (data.nation_name) {
    return (
      <Tooltip title='End turn'>
        <div
          style={{
            position: 'absolute',
            height: '45px',
            backgroundColor: 'white',
            zIndex: 1,
            display: 'flex',
            boxShadow: '2px 2px 2px black',
            top: '93%',
            right: '3%',
          }}
        >
          <p
            style={{
              marginRight: '20px',
              marginLeft: '20px',
              fontSize: indicatorsFontSize,
            }}
          >
            ⌛ {getTimeLeft()}
          </p>
        </div>
      </Tooltip>
    );
  } else {
    return <p>loading...</p>;
  }
};

export default EndTurnButton;

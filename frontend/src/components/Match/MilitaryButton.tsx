import { Select, InputNumber, Button, Tooltip, Row, Col } from 'antd';

const { Option } = Select;
const MilitaryButton = (
  data: any,
  setShowMilitary: any,
  showMilitary: boolean,
  io: any,
  user_name: any,
  match_id: any,
  militaryBuy: any,
  setMilitaryBuy: any,
  deployTerritory: any,
  setDeployTerritory: any
) => {
  const indicatorsFontSize = '24px';
  const screenWidth = window.screen.availWidth;
  const divVW = screenWidth < 1000 ? '80vw' : '50vw';
  const divRight = screenWidth < 1000 ? '8%' : '25%';
  const toggleShowMilitary = () => {
    setShowMilitary(!showMilitary);
  };
  const onChangeInput = (value: any) => {
    setMilitaryBuy(value);
  };

  const onBuyMilitary = () => {
    if (io) {
      //NEED TO WRITE THIS IN BACKEND.
      io.emit('buy_military_influence', { user_name, match_id, militaryBuy, deployTerritory });
    }
  };

  const onSelectDeployTerritory = (value: any) => {
    setDeployTerritory(value);
  };

  if (data.turn) {
    return (
      <>
        <Tooltip title='Buy influence'>
          <Button
            style={{
              position: 'absolute',
              height: '45px',
              width: '50px',
              backgroundColor: 'white',
              zIndex: 1,
              display: 'flex',
              boxShadow: '2px 2px 2px black',
              top: '45px',
            }}
            onClick={() => toggleShowMilitary()}
          >
            <p
              style={{
                padding: '5px',
                fontSize: indicatorsFontSize,
              }}
            >
              💂{' '}
            </p>
          </Button>
        </Tooltip>
        {showMilitary && (
          <div
            style={{
              zIndex: 1,
              width: divVW,
              backgroundColor: 'white',
              position: 'absolute',
              top: '30%',
              boxShadow: '2px 2px 2px black',
              right: divRight,
            }}
          >
            <Row style={{ marginTop: '13px', marginBottom: '13px' }}>
              <Col
                span={8}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  paddingLeft: '15px',
                }}
              >
                <InputNumber
                  max={data.cash}
                  onChange={onChangeInput}
                  value={militaryBuy}
                />
              </Col>
              <Col
                span={8}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Select
                  style={{ width: 120 }}
                  value={deployTerritory}
                  onChange={onSelectDeployTerritory}
                >
                  {data.territories.map((territoryName: any, key: any) => {
                    return (
                      <Option key={key} value={territoryName.name}>
                        {territoryName.name}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
              <Col
                span={8}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Button
                  onClick={() => {
                    onBuyMilitary();
                  }}
                >
                  Buy
                </Button>
              </Col>
            </Row>
          </div>
        )}
        ;
      </>
    );
  } else {
    return (
      <Tooltip title='Select option to buy influence'>
        <Button
          style={{
            position: 'absolute',
            height: '45px',
            width: '50px',
            backgroundColor: 'white',
            zIndex: 1,
            display: 'flex',
            boxShadow: '2px 2px 2px black',
            top: '45px',
          }}
        >
          <p
            style={{
              padding: '5px',
              fontSize: indicatorsFontSize,
            }}
          >
            💂{' '}
          </p>
        </Button>
      </Tooltip>
    );
  }
};

export default MilitaryButton;

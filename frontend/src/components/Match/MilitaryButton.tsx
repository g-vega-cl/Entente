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
  setDeployTerritory: any,
  attackTerritory: any,
  setAttackTerritory: any,
  fromAttackTerritory: any,
  setFromAttackTerritory: any,
  attackValue: any,
  setAttackValue: any
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
      io.emit('buy_military_influence', {
        user_name,
        match_id,
        militaryBuy,
        deployTerritory,
      });
    }
    toggleShowMilitary();
  };

  const onSelectDeployTerritory = (value: any) => {
    setDeployTerritory(value);
  };

  const getmaxTerritoryInfluence = (data: any) => {
    if (data.allTerritories.length > 0) {
      let maxTerritoryInfluence = 0;
      data.allTerritories.forEach((allTerritory: any) => {
        if (allTerritory.owner === data.nation_name) {
          if (maxTerritoryInfluence < allTerritory.influence) {
            maxTerritoryInfluence = allTerritory.influence;
          }
        }
      });
      return maxTerritoryInfluence;
    }
    return 0;
  };

  const onAttackTerritory = () => {
    if (io) {
      io.emit('attack_territory', {
        user_name,
        match_id,
        attackTerritory,
        fromAttackTerritory,
        attackValue,
      });
    }
    toggleShowMilitary();
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
            <Row style={{ paddingTop: '13px', paddingBottom: '13px' }}>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  paddingLeft: '15px',
                }}
              >
                <InputNumber
                  max={getmaxTerritoryInfluence(data)}
                  onChange={(value: any) => {
                    setAttackValue(value);
                  }}
                  value={attackValue}
                />
              </Col>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Select
                  style={{ width: 120 }}
                  value={fromAttackTerritory}
                  onChange={(value: any) => setFromAttackTerritory(value)}
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
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Select
                  style={{ width: 120 }}
                  value={attackTerritory}
                  onChange={(value: any) => setAttackTerritory(value)}
                >
                  {/* IN THE BACKEND CHECK IF YOU ARE OWNER OF TERRITORY, IF YOU ARE, MOVE THEM */}
                  {data.allTerritories.map(
                    (allTerritoriesName: any, key: any) => {
                      return (
                        <Option key={key} value={allTerritoriesName.name}>
                          {allTerritoriesName.name}
                        </Option>
                      );
                    }
                  )}
                </Select>
              </Col>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <Button
                  onClick={() => {
                    onAttackTerritory();
                  }}
                >
                  Attack!
                </Button>
              </Col>
            </Row>
            <Row style={{ paddingTop: '13px', paddingBottom: '13px' }}>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <p>How many attack influence?</p>
              </Col>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <p>From where do we attack</p>
              </Col>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <p>Who should we attack?</p>
              </Col>
              <Col
                span={6}
                style={{
                  display: 'flex',
                  fontSize: '18px',
                  justifyContent: 'flex-end',
                  paddingRight: '15px',
                }}
              >
                <p>Confirm attack?</p>
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

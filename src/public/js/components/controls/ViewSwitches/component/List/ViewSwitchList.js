import React from 'react';
import classNames from 'classnames';

import ViewSwitch from '../Item/ViewSwitch';
import './ViewSwitchList.scss';

const ViewSwitchList = props => {
  const { switches, toggleSwitch, fireButtonAction, checkedState, disabledState } = props;
  const leftSide = [],
    rightSide = [];

  switches.forEach((item, i) => {
    const isLastItem = i === switches.length - 1;
    const side = isLastItem ? rightSide : leftSide;

    side.push(
      <div className={classNames({ itemSpacingWrapper: !isLastItem })} key={item.key}>
        <ViewSwitch
          itemKey={item.key}
          name={item.name}
          subMenuItems={item.children}
          checkedState={checkedState}
          disabledState={disabledState}
          toggleSwitch={toggleSwitch}
          fireButtonAction={fireButtonAction}
        />
      </div>
    );
  });

  return (
    <div className="ViewSwitchList">
      <div className={'side'}>{leftSide}</div>
      <div className={'side'}>{rightSide}</div>
    </div>
  );
};

export default ViewSwitchList;

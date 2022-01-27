import React from 'react';
import './SeasonDisplay.css';
const seasonConfig = {
    Summer: {
      text: "Let's hit the beach!",
      iconName: 'sun'
    },
    Winter: {
      text: 'Burr it is cold!',
      iconName: 'snowflake'
    }
  };

function season(latitude,month){
    if(month>2 && month<9){
        return latitude >0 ? "Summer":"Winter";
    }
    else {
        return latitude > 0 ? "Winter":"Summer";
    }
}
function SeasonDisplay(props){
    // console.log(props);
    const seasons = season(props.latitude,new Date().getMonth());

    const { text, iconName } = seasonConfig[seasons];

  return (
    <div className={`season-display ${seasons}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
}

export default SeasonDisplay

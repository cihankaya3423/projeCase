import React, { memo } from "react";
import { Spin } from "antd";
import PropTypes from "prop-types";
//<Loading size="" innerPageActive={true}/>

// size = middle / small /large
// innerPageActive = sayfa içerisinde arka plana pusluk yapıyor

const Loading = memo((props) => {
  const { size, innerPageActive } = props;
  return (
    <div className={"loading " + (innerPageActive ? "loading--innerPage" : "")}>
      <Spin size={size || "large"} />
    </div>
  );
});

Loading.propTypes = {
  size: PropTypes.string,
  innerPageActive: PropTypes.bool,
};

export default Loading;

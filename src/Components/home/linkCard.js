import React, { memo } from "react";
import confirmModal from "../../Shared/partnerComponents/messages/confirmModal";
import {
  getLocalstorage,
  setLocalstorage,
} from "../../Shared/utils/localStore/localStorage";
import { windowOpenBlank } from "../../Shared/utils/mixedControl";
import "./css/linkCard.scss";
import { message } from "antd";

const LinkCard = memo(
  ({ pointCount, url, name, sortOrder, id, setCurrent }) => {
    const voteControl = (type) => {
      const newData = getLocalstorage("data");
      const findIndex = newData.findIndex((item) => item.id === id);
      const selectItem = newData[findIndex];
      if (type === "up") {
        selectItem.pointCount += 1;
      } else {
        selectItem.pointCount -= 1;
      }
      selectItem.updateDate = new Date();
      setLocalstorage("data", newData);

      sortOrder(newData);
    };

    // item silme
    const removeItem = () => {
      const newData = getLocalstorage("data");
      const findIndex = newData.findIndex((item) => item.id === id);
      const name = newData[findIndex].name;
      confirmModal("confirm", "Kaldırmak istiyor musunuz:", name, () => {
        newData.splice(findIndex, 1);
        setLocalstorage("data", newData);
        sortOrder(newData);

        message.success(`${name} added `);

        // sayfayı ayarlıyor
        setCurrent((prev) => {
          if (newData.length / 5 > prev - 1) return prev;
          else return prev - 1;
        });
      });
    };

    return (
      <div className="linkCard">
        <span className="material-icons linkCard--delete" onClick={removeItem}>
          remove_circle
        </span>

        <div className="linkCard-points">
          <span className="linkCard-points__count">{pointCount}</span>
          <span className="linkCard-points__text">POINTS</span>
        </div>
        <div className="linkCard-content">
          <h1 className="linkCard-content__title">{name}</h1>
          <div
            to={url}
            className="linkCard-content__url"
            onClick={() => windowOpenBlank(url)}
          >
            ({url})
          </div>

          <div className="linkCard-content-btn">
            <div
              className="linkCard-content-btn-vote"
              onClick={() => voteControl("up")}
            >
              <span className="material-icons">arrow_upward</span>
              <span className="linkCard-content-btn-vote__text">Up Vote</span>
            </div>
            <div
              className="linkCard-content-btn-vote"
              onClick={() => (pointCount > 0 ? voteControl("down") : null)}
            >
              <span className="material-icons">arrow_downward</span>
              <span className="linkCard-content-btn-vote__text">Down Vote</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default LinkCard;

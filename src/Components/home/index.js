import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FormCustom from "../../Shared/partnerComponents/formElement/formCustom";
import { getLocalstorage } from "../../Shared/utils/localStore/localStorage";
import "./css/home.scss";
import LinkCard from "./linkCard";
import { Form, Pagination } from "antd";
import FormSelectBox from "../../Shared/partnerComponents/formElement/formSelectBox";

const Home = (props) => {
  const [form] = Form.useForm();
  const [linkList, setLinkList] = useState(
    !global.sortValue ? getLocalstorage("data") : []
  );
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const sortValue = global.sortValue;
    if (sortValue) {
      sortOrder(null, sortValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // sort type varsa sort ediyor  yoksa normal datayı setliyor
  const sortOrder = useCallback((data, sortTypeID) => {
    const sortId = sortTypeID || global.sortValue;
    const newData = data || getLocalstorage("data");
    const newSortType = sortId ? (sortId === 1 ? "big" : "small") : null;
    if (newSortType) {
      if (newData?.length > 0) {
        const newSortData = newData.sort(function (a, b) {
          const dateControl = new Date(b.updateDate) - new Date(a.updateDate);
          const equalsPoint = a.pointCount === b.pointCount;
          if (newSortType === "big")
            return equalsPoint ? dateControl : b.pointCount - a.pointCount;
          else return equalsPoint ? dateControl : a.pointCount - b.pointCount;
        });
        setLinkList(newSortData);
      }
    } else {
      setLinkList(newData);
    }
  }, []);

  // order by select
  const selectBoxOnChange = useCallback(
    (value) => {
      global.sortValue = value;

      sortOrder(null, value);
    },
    [sortOrder]
  );

  // order by select
  const currentControl = useCallback((value) => {
    setCurrent(value);
  }, []);

  const listComponent = useMemo(() => {
    return linkList?.slice((current - 1) * 5, 5 * current).map((item, i) => {
      const { pointCount, url, name, id } = item;
      return (
        <LinkCard
          key={i}
          id={id}
          linkList={linkList}
          pointCount={pointCount}
          url={url}
          name={name}
          sortOrder={sortOrder}
          setCurrent={setCurrent}
        />
      );
    });
  }, [linkList, sortOrder, current]);

  return (
    <div className="home">
      {/* new button */}
      <Link to="/linkCreate" className="home-createBtn">
        <div className="home-createBtn-icon">
          <span className="material-icons">add</span>
        </div>
        <span className="home-createBtn__text">SUBMIT A LINK</span>
      </Link>

      <div className="home-line"></div>
      {/* filter */}
      <FormCustom
        initialValues={{ orderBy: global.sortValue }}
        formSettings={form}
        Form={Form}
      >
        <FormSelectBox
          selectData={[
            { id: 1, name: "Most Voted(Z > A)" },
            { id: 2, name: "Most Voted(A > Z)" },
          ]}
          propName="orderBy"
          disabled={!linkList?.length > 0}
          selectBoxOnChange={selectBoxOnChange}
          placeholder="Order By"
          allowClear={true}
          fullDataReturn={true}
        />
      </FormCustom>

      {listComponent}

      {linkList?.length > 0 && (
        <Pagination
          total={linkList?.length}
          current={current}
          onChange={currentControl}
          pageSize={5}
        />
      )}
    </div>
  );
};

export default Home;

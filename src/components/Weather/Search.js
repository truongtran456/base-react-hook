import { useState } from "react";
import axios from "axios";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [locationArr, setLocationArr] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isFocusInput, setIsFocusInput] = useState(false);
  let history = useHistory();

  const handleSearchBtn = async () => {
    setIsLoadingData(true); //loading
    setLocationArr([]); //set rong

    let response = await axios({
      method: "post",
      url: "http://localhost:8080/get-data-by-url",
      data: {
        url: `https://www.metaweather.com/api/location/search/?query=${keyword}`,
      },
    });

    if (response && response.data) {
      let result = response.data;
      let _locationArr = [];
      if (!_.isEmpty(result)) {
        //not empty
        for (let key in result) {
          _locationArr.push(result[key]); //day vao mang
        }
        setLocationArr(_locationArr);
      } else {
        setLocationArr([]); //empty
      }
    }
    setIsLoadingData(false);
    setIsFocusInput(false);
  };
  const handleViewDetail = (woeid) => {
    history.push(`/weather/detail/${woeid}`);
  };

  return (
    <div className="search-weather-container">
      <div className="search-inputs">
        <input
          type="text"
          placeholder="Search ..."
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)} //lay gia tri cua input search
          onFocus={() => setIsFocusInput(true)}
        />
        <button onClick={() => handleSearchBtn()}>Search</button>
      </div>

      {isLoadingData === true && (
        <div style={{ padding: "15px" }}>LoadingData...</div>
      )}

      <div className="result-container">
        {locationArr &&
          locationArr.length > 0 &&
          locationArr.map((item, index) => {
            //in ra ket qua
            return (
              <div className="result-child" key={`location-${index}`}>
                <div className="title">Title: {item.title}</div>
                <div className="type">Type: {item.location_type}</div>
                <div className="woeid">
                  <span
                    onClick={() => handleViewDetail(item.woeid)}
                    title="Click to view detail"
                  >
                    <b>Woeid: {item.woeid}</b>
                  </span>
                </div>
                <div className="latt_long">Latt_long: {item.latt_long}</div>
              </div>
            );
          })}
        {/* search kqu kh co gia tri thi in ra */}
        {!isFocusInput &&
          keyword &&
          locationArr &&
          locationArr.length === 0 && (
            <div>Not found data with keyword={keyword}</div>
          )}
      </div>
    </div>
  );
};
export default Search;

import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCityList } from "../services/Service";
const AsycnSearch = (props) => {
  const loadOptions = async (searchedValue, listArray) => {
    let data = [];
    if (searchedValue) {
      //  console.debug({ searchedValue });
      data = await getCityList(searchedValue);
    }
    const obj = {
      options: data.data.data,
    };
    console.log(obj);
    return obj;
  };
  const onSelectValue = (selectedValue) => {
    //     console.log({ selectedValue });
    props.setCityDetails(selectedValue);
  };
  return (
    <div>
      <AsyncPaginate
        loadOptions={loadOptions}
        debounceTimeout={600}
        onChange={onSelectValue}
      />
    </div>
  );
};

export default AsycnSearch;

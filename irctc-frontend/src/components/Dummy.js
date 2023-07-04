import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import NearMeIcon from '@mui/icons-material/NearMe';

const SearchSelect = ({fieldText,searchItem,setSearchItem,showText}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'MDU', label: 'Madurai Jn - MDU'},
    { value: 'MS', label: 'Chennai Egmore - MS' },
    { value: 'SDN', label: 'Sholavandan - SDN' },
    { value: 'DG', label: 'Dindigul Jn - DG' },
    { value: 'TPJ', label: 'Tiruchchirapali'},
    { value: 'ALU', label: 'Ariyalur' },
    { value: 'VRI', label: 'Vridhachalam Jn' },
    { value: 'VM', label: 'Villupuram Jn' },
    { value: 'CGL', label: 'Chengalpattu'},
    { value: 'TBM', label: 'Tambaram' },
    { value: 'TJ', label: 'Thanjavur' },
    { value: 'KUM', label: 'Kumbakonam' },
    { value: 'MV', label: 'Mayiladuturai Jn' },
    { value: 'CDM', label: 'Chidambaram' },
  ];

  useEffect(()=>{
    for(let i=0;i<options.length;i++){
      if(fieldText ==='From' && options[i].value===searchItem.from){
        setSelectedOption(options[i])
      }
      else if(fieldText ==='To' && options[i].value===searchItem.to){
        setSelectedOption(options[i])
      }
    }
  },[searchItem])

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if(fieldText=='From'){
      setSearchItem({...searchItem,"from":selectedOption.value,"fromStationName":selectedOption.label})
    }else{
      setSearchItem({...searchItem,"to":selectedOption.value,"toStationName":selectedOption.label})
    }
  };
  console.log(searchItem)


  return (
    <div className='px-4 py-2 w-2/5	min-w-max'>
      {
        showText &&
        <h1 className='text-sm text-blue-600 '>{fieldText}</h1>
      }
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        isSearchable
        placeholder="Search"
      />
    </div>
  );
};

export default SearchSelect;

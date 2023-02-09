import { t } from 'i18next';
import { componentsToColor } from 'pdf-lib';
import { propTypes } from 'pdf-viewer-reactjs';
import React, { Component, useState, useEffect } from 'react';
import {Popup } from 'semantic-ui-react'
import { Accordion, Item } from 'semantic-ui-react';
import UnitsRangeSlider from '../unitsrangeslider/UnitsRangeSlider';
import Helper from "../../helper";
import { useTranslation } from "react-i18next";
let Buildingfilter;
let unitTypeFilter;
let UnitTypeDimension = [];
let NewPriceValue;
let AmenityFilter;
const helper = new Helper();
const AccordionExampleStyled = (selectedStorageType) => {
  const filters = JSON.parse(localStorage.getItem('Units'));
  const [filterBuilding, setFilterBuiding] = useState([]);
  const [filterUnitType, setfilterUnitType] = useState([]);
  const [filterDimensions, setfilterDimensions] = useState([]);
  const [PriceRangeArrayvalue, setPriceRangeArrayvalue] = useState();
  const [filterAmenity, setfilterAmenity] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectAll, setSelectAll] = useState(true);
  const [minPriceState, setMinPriceState] = useState();
  const [maxPriceState, setMaxPriceState] = useState();
  const [PriceRangeStatus, setPriceRangeStatus] = useState(true);
  const { t, i18n } = useTranslation();
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex);
  }

  const pricerangeOnchangevalue = (data) => {
    setPriceRangeArrayvalue(data);
  }


  function checkStoragePriceRange(PriceRangeArray, storageCategoryValue) {
    let PriceArray = [];
    PriceRangeArray.map((array) => {
      if (array.storageTypeId === storageCategoryValue) {
        PriceArray.push({ storageTypeId: array.storageTypeId, MinPrice: array.MinPrice, MaxPrice: array.MaxPrice })
      }
    });

    if (typeof PriceArray !== "undefined" && PriceArray !==null && PriceArray !=="" && PriceArray.length > 0){
      let minvalue = Math.min.apply(Math, PriceArray.map(function (o) { return o.MinPrice; }));
    
      let maxValue = Math.max.apply(Math, PriceArray.map(function (o) { return o.MaxPrice; }));
      
      NewPriceValue = {
        "minPrice": minvalue,
        "maxPrice": maxValue,
      }

      if (NewPriceValue.maxPrice === NewPriceValue.minPrice) {
        let priceRangeHiding = document.getElementById("pricerange-hide");
        if (typeof priceRangeHiding !=="undefined" && priceRangeHiding !==null && priceRangeHiding !==""){
          priceRangeHiding.style.display = 'none';
        }
      }else{
        let priceRangeHiding = document.getElementById("pricerange-hide");
        if (typeof priceRangeHiding !=="undefined" && priceRangeHiding !==null && priceRangeHiding !==""){
          priceRangeHiding.style.display = 'block';
        }
      }
      sessionStorage.setItem("MinValue", minvalue);
      sessionStorage.setItem("MaxValue", maxValue);
    }

   
    

  
    
  }

  if (typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof filters.building !== 'undefined' && filters.building !== null && filters.building !== "" && filters.building.length > 0 && selectedStorageType.storageTypeValue !== 'undefined' && selectedStorageType.storageTypeValue !== null) {
    Buildingfilter = filters.building.filter(i => i.storageTypeId === selectedStorageType.storageTypeValue);
  }
  if (typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof filters.unitType !== 'undefined' && filters.unitType !== null && filters.unitType !== "" && filters.unitType.length > 0 && selectedStorageType.storageTypeValue !== 'undefined' && selectedStorageType.storageTypeValue !== null) {
    // /console.log(`check test`+unitTypesarr);
    unitTypeFilter = filters.unitType.filter(i => i.storageTypeId === selectedStorageType.storageTypeValue);
    let unitTypesarr = (Object.values(unitTypeFilter.reduce((acc, cur) => Object.assign(acc, { [cur.unitTypeName]: cur }), {})));
    let result = unitTypeFilter.reduce(function (r, a) {
      r[a.unitTypeName] = r[a.unitTypeName] || [];
      r[a.unitTypeName].push(a);
      return r;
    }, Object.create(null));
    UnitTypeDimension = result;
    unitTypeFilter = unitTypesarr;
  }

  if (typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof filters.priceRangeValue !== 'undefined' && filters.priceRangeValue !== null && filters.priceRangeValue !== "" && filters.priceRangeValue.length > 0 && selectedStorageType.storageTypeValue !== 'undefined' && selectedStorageType.storageTypeValue !== null) {

    checkStoragePriceRange(filters.priceRangeValue, selectedStorageType.storageTypeValue);
  }
  if (typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof filters.amenityValue !== 'undefined' && filters.amenityValue !== null && filters.amenityValue !== "" && filters.amenityValue.length > 0 && selectedStorageType.storageTypeValue !== 'undefined' && selectedStorageType.storageTypeValue !== null) {
    AmenityFilter = filters.amenityValue.filter(i => i.storageTypeId === selectedStorageType.storageTypeValue);
  }

  const storageTypeOptions = typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof filters.storageType !== 'undefined' && filters.storageType !== null && filters.storageType !== "" && filters.storageType.length > 0 ?
    filters.storageType.map(storageType => {
      return {
        key: storageType.storageTypeId,
        text: storageType.storageTypeName,
        value: storageType.storageTypeId
      }
    }) : '';

  const onChangeUnitMesurement = (e, unitMeasurement, unitTypeId) => {
    debugger
    if (e.target.checked) {
      setfilterDimensions([...filterDimensions, { unitmesurement: unitMeasurement, unitTypeid: unitTypeId }]);
    } else {
      setfilterDimensions((item) => item.filter((i) => i.unitTypeid !== unitTypeId));
    }

  }

  const selectAllBuilding = () => {
    setFilterBuiding([]);
    Buildingfilter.forEach((item) => {
      setFilterBuiding((items) => [...items, { buildingname: item.buildingName, buildingid: item.buildingId }]);
    });
  }

  const selectAllUnitType = () => {
    setfilterUnitType([]);
    unitTypeFilter.forEach((item) => {
      setfilterUnitType((items) => [...items, { unitTypename: item.unitTypeName, unitTypeid: item.unitTypeId }]);
    });
  }

  const clearAllBuilding = () => {
    setFilterBuiding([]);
  }

  const clearAllUnitType = () => {
    setfilterUnitType([]);
  }


  const selectAllDimension = () => {
    setfilterDimensions([]);
    unitTypeFilter.forEach((item) => {
      setfilterDimensions((items) => [...items, { unitTypeid: item.unitTypeId, unitmesurement: item.unitMeasurement }]);
    });
  }

  const clearAllDimension = () => {
    setfilterDimensions([]);
  }


  const selectAllAmenityCheckbox = () => {
    setfilterAmenity([]);
    AmenityFilter.forEach((item) => {
      setfilterAmenity((items) => [...items, { amenitiesname: item.name, amenitiesid: item.id }]);
    });
  }

  const clearAllAmenityCheckbox = () => {
    setfilterAmenity([]);
  }

  const onChangeBuilding = (e, buildingname, buildingid) => {
    if (e.target.checked === true) {
      setFilterBuiding([...filterBuilding, { buildingname: buildingname, buildingid: buildingid }]);
    } else {
      setFilterBuiding((item) => item.filter((i) => i.buildingid !== buildingid));
    }
  }

  const sixStorageOnChangeAmenity = (e, amenitiesName, amenitiesId) => {
    if (e.target.checked === true) {
      setfilterAmenity([...filterAmenity, { amenitiesname: amenitiesName, amenitiesid: amenitiesId }]);
    } else {
      setfilterAmenity((items) => items.filter((i) => i.amenitiesid !== amenitiesId));
    }
  }
  const onChangeUnitType = (e, unitTypeName, unitTypeId) => {
    console.log(`dimension_${unitTypeName.split(" ").join("")}`);
   let dimension = document.querySelectorAll(`.dimension_${unitTypeName.split(" ").join("").replace(/[&\\+()~%'",:?<>{}!@#]/g, '')}`);
   console.log(dimension);
    if (e.target.checked) {
      dimension.forEach((element)=> {
        console.log(element);
       
        element.disabled = false;
      })
      
      setfilterUnitType([...filterUnitType, { unitTypename: unitTypeName, unitTypeid: unitTypeId }]);
    } else {
      let removeFilter;
      dimension.forEach((element)=> {
        if(element.checked){
          console.log(element.value);
          setfilterDimensions((item) => item.filter((i) => i.unitTypeid !== element.value));

        }
        element.checked = false;
        element.disabled = true;
        console.log(removeFilter);
       
       
      })
     
  
      setfilterUnitType((item) => item.filter((i) => i.unitTypeid !== unitTypeId));
    }
  }

  const removeBuilding = (buildingid) => {
    setFilterBuiding((item) => item.filter((i) => i.buildingid !== buildingid));
  }
  const removeUnitType = (unitTypeId) => {
    setfilterUnitType((item) => item.filter((i) => i.unitTypeid !== unitTypeId));
  }

  const removeUnitDimension = (unitTypeId) => {
    setfilterDimensions((item) => item.filter((i) => i.unitTypeid !== unitTypeId));
  }

  const removeAmenities = (amenitiesId) => {
    setfilterAmenity((item) => item.filter((i) => i.amenitiesid !== amenitiesId));
  }
  const clearAllFilters = () => {
    setFilterBuiding([]);
    setfilterUnitType([]);
    setfilterDimensions([]);
    setfilterAmenity([]);
    setPriceRangeArrayvalue([]);
    setMaxPriceState(0);
    setMinPriceState(0);
  }

  function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}


  const applyAllFiterValues = () => {
    debugger
    let selectedbuildingId;
    let selectedUnitTypeId;
    let selectedAmenitiesId;
    let selectedDimension;
    let finalUnitTypeId=[];
    
    if (typeof filterBuilding !== "undefined" && filterBuilding !== "" && filterBuilding !== null) {
      selectedbuildingId = filterBuilding.filter((i) => i.buildingid).map((item) => {
        return item.buildingid;
      });
    }
    if (typeof filterUnitType !== "undefined" && filterUnitType !== "" && filterUnitType !== null) {
      filterUnitType.forEach((i)=> {
        let dimension = document.querySelectorAll(`.dimension_${i.unitTypename.split(" ").join("").replace(/[&\\+()~%'",:?<>{}!@#]/g, '')}`);
        dimension.forEach((element)=>{
         if(!element.checked){
          console.log(element.value);

         }
        })
        
      })
      selectedUnitTypeId = filterUnitType.filter((i) => i.unitTypeid).map((item) => {
        return item.unitTypeid;
      });
    }
    if (typeof filterAmenity !== "undefined" && filterAmenity !== "" && filterAmenity !== null) {
      selectedAmenitiesId = filterAmenity.filter((i) => i.amenitiesid).map((item) => {
        return item.amenitiesid;
      });
    }

    if(typeof filterDimensions !== "undefined" && filterDimensions !== "" && filterDimensions !== null ){
      
      selectedDimension = filterDimensions.filter((i) => i.unitTypeid).map((item) => {
        return item.unitTypeid;
      });

      
    }

    finalUnitTypeId =arrayUnique(selectedUnitTypeId.concat(selectedDimension));
    console.log(finalUnitTypeId);
    let FilterSearchId = {
      buildingid: selectedbuildingId,
      unitTypeid: finalUnitTypeId,
      amenitiesid: selectedAmenitiesId,
      priceRange: PriceRangeArrayvalue
    }

    selectedStorageType.unitsearchFilters(FilterSearchId);

  }

  return (

    <Accordion styled>
      <Accordion.Title active={activeIndex === 0} index={0}>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex justify-content-between align-items-center'>
            <img src="/assets/images/filter.png" alt="" />{t("Filters")}
          </div>
          <div>
            <p className='fs-8 text-success' onClick={() => clearAllFilters()}>{t("Clear All")}</p>
          </div>
        </div>
        <div className='row mt-3 selectedFilter'>

          {typeof filterBuilding !== "undefined" && filterBuilding !== null && filterBuilding !== "" && filterBuilding.length > 0 ?
            filterBuilding.map((item) => {
              return <div key={item.buildingid} className='col-lg-4 col-md-6 col-sm-4'>
                <p className='fs-8 d-flex justify-content-between align-items-center p-1 mr-1 mb-1'>{item.buildingname}<a onClick={() => removeBuilding(item.buildingid)}><img src='/assets/images/wrong.svg' alt='Close' /></a></p>
              </div>
            }) : ""}


          {typeof filterUnitType !== "undefined" && filterUnitType !== null && filterUnitType !== "" && filterUnitType.length > 0 ?
            filterUnitType.map((item) => {
              return <div key={item.unitTypeid} className='col-lg-4 col-md-6 col-sm-4'>
                <p className='fs-8 d-flex justify-content-between align-items-center p-1 mr-1'>{item.unitTypename}<a onClick={() => removeUnitType(item.unitTypeid)}><img src='/assets/images/wrong.svg' alt='Close' /></a></p>
              </div>

            }) : ""}


          {typeof filterDimensions !== "undefined" && filterDimensions !== "" && filterDimensions !== null && filterDimensions.length > 0 ?
            filterDimensions.map((item) => {
              return <div key={item.unitTypeid} className='col-lg-4 col-md-6 col-sm-4'>
                <p className='fs-8 d-flex justify-content-between align-items-center p-1 mr-1'>{item.unitmesurement}<a onClick={() => removeUnitDimension(item.unitTypeid)}><img src='/assets/images/wrong.svg' alt='Close' /></a></p>
              </div>
            }) : ""
          }

          {typeof filterAmenity !== "undefined" && filterAmenity !== "" && filterAmenity !== null && filterAmenity.length > 0 ?
            filterAmenity.map((item) => {
              return <div key={item.amenitiesid} className='col-lg-4 col-md-6 col-sm-4'>
                <p className='fs-8 d-flex justify-content-between align-items-center p-1 mr-1'>{item.amenitiesname}<a onClick={() => removeAmenities(item.amenitiesid)}><img src='/assets/images/wrong.svg' alt='Close' /></a></p>
              </div>
            }) : ""

          }
        </div>
      </Accordion.Title>

      <Accordion.Title className='d-flex justify-content-between align-items-center'
        active={activeIndex === 1}
        index={1}
        onClick={handleClick}
      >
        <div className='d-flex justify-content-between align-items-center'>
          <img src="/assets/images/building.png" alt="" />{t("Building")}
        </div>
        <div>
          <img src="/assets/images/arrow-down.png" alt="" />
        </div>
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <div>
          {/* <h6 className='fw-600 mb-1'>Building</h6> */}
          <div className='text-success text-right'>
            {selectAll ? <a onClick={() => selectAllBuilding()} >{t("Select All")}</a> : ""} | <a onClick={() => clearAllBuilding()}>{t("Clear All")}</a>
          </div>
          <ul>
            {typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof filters.building !== 'undefined' && filters.building !== null && filters.building !== "" && filters.building.length > 0 ?
              Buildingfilter.map(buildingVal => {
                return <li key={buildingVal.key}><input value={buildingVal.buildingId} id={buildingVal.buildingId}
                  className='mr-1 mb-1' type="checkbox" checked={filterBuilding.find((item) => item.buildingid === buildingVal.buildingId)} onChange={(e) => onChangeBuilding(e, buildingVal.buildingName, buildingVal.buildingId)} />{buildingVal.buildingName}</li>
              })
              : ''}
          </ul>
          {typeof Buildingfilter !== 'undefined' && Buildingfilter !== null && Buildingfilter !== '' && Buildingfilter.length > 5 ? (
            <a className='text-success text-right d-none' href='/'>MORE</a>
          ) : ''}
        </div>
      </Accordion.Content>
      <Accordion.Title className='d-flex justify-content-between align-items-center'
        active={activeIndex === 2}
        index={2}
        onClick={handleClick}
      >
        <div className='d-flex justify-content-between align-items-center'>
          <img src="/assets/images/unit-type.png" alt="" />{t("Unit Type")}
        </div>
        <div>
          <img src="/assets/images/arrow-down.png" alt="" />
        </div>
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        <div>
          {/* <h6 className='fw-600 mb-1'>LARGE</h6> */}
          <div className='text-success text-right'>
            {selectAll ? <a onClick={() => selectAllUnitType()}>{t("Select All")}</a> : ""}  | <a onClick={() => clearAllUnitType()}>{t("Clear All")}</a>
          </div>
          <ul>
            {typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof filters.unitType !== 'undefined' && filters.unitType !== null && filters.unitType !== "" && filters.unitType.length > 0 ?
              unitTypeFilter.map(unitTypeValue => {
                return <li key={unitTypeValue.key}><input value={unitTypeValue.unitTypeId} checked={filterUnitType.find((item) => item.unitTypeid === unitTypeValue.unitTypeId)} className='mr-1 mb-1' type="checkbox" onChange={(e) => onChangeUnitType(e, unitTypeValue.unitTypeName, unitTypeValue.unitTypeId)} />{unitTypeValue.unitTypeName}</li>
              })
              : ''}
          </ul>
        </div>
      </Accordion.Content>
      <Accordion.Title className='d-flex justify-content-between align-items-center'
        active={activeIndex === 3}
        index={3}
        onClick={handleClick}
      >
        <div className='d-flex justify-content-between align-items-center'>
          <img src="/assets/images/dimensions.png" alt="" />{t("Dimensions")}
        </div>
        <div>
          <img src="/assets/images/arrow-down.png" alt="" />
        </div>
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 3}>
        <div>
          <div className='text-success text-right'>
            {selectAll ? <a onClick={() => selectAllDimension()}>{t("Select All")}</a> : ""}  | <a onClick={() => clearAllDimension()} >Clear All</a>
          </div>
          <ul>

            {typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof UnitTypeDimension !== 'undefined' && UnitTypeDimension !== null && UnitTypeDimension !== "" ?
              Object.keys(UnitTypeDimension).map(data => {
                console.log(data);
                return UnitTypeDimension[data].map(dimension => {
                  return <li key={dimension.key}><input  disabled={true} value={dimension.unitTypeId}  className={`mr-1 mb-1 dimension_${data.split(" ").join("").replace(/[&\\+()~%'",:?<>{}!@#]/g, '')}`} type="checkbox" onChange={(e) => onChangeUnitMesurement(e, dimension.unitMeasurement, dimension.unitTypeId)} />{dimension.unitMeasurement}{helper.measurementDisplayFormat(dimension.measurementType)}</li>
                })
              })
              : ''
              }
          </ul>
          {/* onClick={this.props.modal} */}
          <a href="javascript:void(0);" className='text-success text-right d-none' >MORE</a>
        </div>
      </Accordion.Content>

      {/* <div id="pricerange-hide">

        <Accordion.Title className='d-flex justify-content-between align-items-center'
          active={activeIndex === 4}
          index={4}
          onClick={handleClick}
        >
          <div className='d-flex justify-content-between align-items-center'>
            <img src="/assets/images/price-range.png" alt="" />{t("Price Range")}
          </div>
          <div>
            <img src="/assets/images/arrow-down.png" alt="" />
          </div>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <div>
          {NewPriceValue?
          <UnitsRangeSlider priceRange={NewPriceValue} minprice = {(min)=> setMinPriceState(min)} maxprice = {(max)=>setMaxPriceState(max)}  pricerangeinitialvalue={pricerangeOnchangevalue}/>
          : ""
          }
          </div>
        </Accordion.Content>

      </div> */}


      {
        typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof AmenityFilter !== 'undefined' && AmenityFilter !== null && AmenityFilter !== "" && AmenityFilter.length > 0 ?
          <><Accordion.Title className={`d-flex justify-content-between align-items-center`}
            active={activeIndex === 5}
            index={5}
            onClick={handleClick}
          >
            <div className={`d-flex justify-content-between align-items-center `}>
              <img src="/assets/images/amenity.png" alt="" />{t("Amenity")}
            </div>
            <div>
              <img src="/assets/images/arrow-down.png" alt="" />
            </div>
          </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
              <div>

                <div className='text-success text-right'>
                  {selectAll ? <a onClick={() => selectAllAmenityCheckbox()} >{t("Select All")}</a> : ""} | <a onClick={() => clearAllAmenityCheckbox()}>Clear All</a>
                </div>

                <ul>
                  {typeof filters !== 'undefined' && filters !== null && filters !== '' && typeof AmenityFilter !== 'undefined' && AmenityFilter !== null && AmenityFilter !== "" && AmenityFilter.length > 0 ?
                    AmenityFilter.map(amenityfilterValue => {
                      return <li key={amenityfilterValue.key}><input value={amenityfilterValue.id} checked={filterAmenity.find((item) => item.amenitiesid === amenityfilterValue.id)} className='mr-1 mb-1' type="checkbox" onChange={(e) => sixStorageOnChangeAmenity(e, amenityfilterValue.name, amenityfilterValue.id)} />{amenityfilterValue.name}</li>
                    })
                    : ''}
                </ul>
                <a href="/" className='text-success text-right d-none'>MORE</a>
              </div>
            </Accordion.Content></>
          : ''
      }

      <div className='text-center my-2'>
        <button className='ui button bg-white border-success-dark-light-1 text-success fs-7 fw-400 px-5 mx-1 mb-1 mb-sm-1 px-sm-2' onClick={() => clearAllFilters()}>{t("Clear All")}</button>
        <button className='ui button bg-success-dark text-white fs-7 fw-400 px-5 mx-1 mb-1 mb-sm-1 px-sm-2' onClick={() => applyAllFiterValues()} >{t("Apply")}</button>
      </div>
    </Accordion >


  )
}

export default AccordionExampleStyled;

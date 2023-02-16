import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faPlane} from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';

import { faCalendar} from '@fortawesome/free-solid-svg-icons';
import { faPerson} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import  { useEffect, useState } from "react";
import { compareAsc, format } from 'date-fns'
import { useNavigate } from "react-router-dom";

import React from 'react'

export const Header = ({type}) => {

 

  

    const [openDate,setOpenDate]=useState(false);
    const [destination,setDestination]=useState("");

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [openOptions,setOpenOptions]=useState(false);
      const [options,setOptions]=useState({
        adult : 0,
        children : 0,
        room : 1,
});

const navigate = useNavigate();

const handlesearch = () =>{
    navigate("/hotels",{state:{destination,date,options}});
}


 const [counterofadult,setCounterOfAdult]=useState(0);
 const [counterofchildren,setCounterOfChildren]=useState(0);
 const [counterofroom,setCounterOfRoom]=useState(1);
 

 const incrementaladult = () =>{
   
setCounterOfAdult(counterofadult+1);
 };

 const decrementaladult = () =>{
   
    if(counterofadult>0){
        setCounterOfAdult(counterofadult-1);
    }
    else{
        setCounterOfAdult(0);
    }
   
};

const incrementalchildren = () =>{
    console.log("clicked")
setCounterOfChildren(counterofchildren+1);
 };

 const decrementalchildren = () =>{
    console.log("clicked")
    if(counterofchildren>0){
        setCounterOfChildren(counterofchildren-1);
    }
    else{
        setCounterOfChildren(0);
    }
   
};

const incrementalroom = () =>{
    console.log("clicked")
setCounterOfRoom(counterofroom+1);
 };

 const decrementalroom = () =>{
    console.log("clicked")
    if(counterofroom>0){
        setCounterOfRoom(counterofroom-1);
    }
    else{
        setCounterOfRoom(0);
    }
   
};


  return (
    <div className="header">
        <div className={ type==="list" ?"headerContainer listMode":"headerContainer"}>
        <div className="headerList">
            <div className="headerListitem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>

            <div className="headerListitem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>

            <div className="headerListitem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rental</span>
            </div>

            <div className="headerListitem">
            <FontAwesomeIcon icon={faBed} />
            <span>attraction</span>
            </div>

            <div className="headerListitem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
            </div>

           
           
        </div>
       { type !== "list" && (
       <>
       
        <h1 className="headerTitle">Find your next stay</h1>
            <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
            <button className="headerButton">Sign in</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerSearchIcon"/>
                    <input type="text" onChange="{(event)=>setDestination(event.target.value)}"placeholder='Enter your Destination' className='headerSearchInput' />
                </div>

                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendar} className="headerSearchIcon" />
                    <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>
                        {`${format(date[0].startDate , "dd/MM/yyyy")} to ${format(date[0].endDate , "dd/MM/yyyy")} `}</span>
                   {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}  className="date"
/>}
                  
                </div>

                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
                <span  onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{counterofadult} -Adult {counterofchildren} -Children  {counterofroom} -Room</span>
              {openOptions && <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button onClick={decrementaladult} className="optioncounterbtn">-</button>
                    <span className="optioncounternumber">{counterofadult}</span>
                    <button onClick={incrementaladult} className="optioncounterbtn">+</button>
                    </div>
                </div>

                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button onClick={decrementalchildren} className="optioncounterbtn">-</button>
                    <span className="optioncounternumber">{counterofchildren}</span>
                    <button  onClick={incrementalchildren} className="optioncounterbtn">+</button>
                    </div>
                </div>

                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                    <button onClick={decrementalroom} className="optioncounterbtn">-</button>
                    <span className="optioncounternumber">{counterofroom}</span>
                    <button  onClick={incrementalroom} className="optioncounterbtn">+</button>
                    </div>
                </div>
              
               </div>
               }
                </div>

                <div className="headerSearchItem">
               
                <button onClick={handlesearch} className='headerButton'>Search</button>
                </div>
            </div>
            </>
            )}
        </div>
    </div>
   
  );
}
export default Header;
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incNumber, decNumber, multNumber, divNumber} from './actions/index'
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import './App.css';

function Calc() {

  const firstState = useSelector((state) => state.counterNumber)
  const secondState = useSelector((state) => state.calcNumber)
  const dispatch = useDispatch()

  return (
    <div className="calc">
      <div className="container text-center d-flex justify-content-center flex-column align-items-center">
      <h1 className="text-secondary">Increment/Decrement Counter</h1>
      <h4 className="text-secondary">using React Redux</h4>
      <div className="quantity d-flex p-2">
        <button title="Decrement" className="btn btn-primary m-2 quantity__minus" onClick={() => {
          dispatch(decNumber(10))
        }}><span><VscChromeMinimize/></span></button>
        <input type="text" name="quantity" className="text-center quantity__input" value={firstState} />
        <button title="Increment" className="btn btn-primary m-2 quantity__plus" onClick={() => {
          dispatch(incNumber(5))
        }}><span><VscAdd/></span></button>
      </div>
      </div>

      <div className="container text-center d-flex justify-content-center flex-column align-items-center">
      <h1 className="text-secondary">Multiplication/Divider Counter</h1>
      <h4 className="text-secondary">using React Redux</h4>
      <div className="quantity d-flex p-2">
        <button title="Divide" className="btn btn-primary m-2 quantity__minus" onClick={() => {
          dispatch(divNumber(5))
        }}><span>/</span></button>
        <input type="text" name="quantity" className="text-center quantity__input" value={secondState} />
        <button title="Multiply" className="btn btn-primary m-2 quantity__plus" onClick={() => {
          dispatch(multNumber(5))
        }}><span>*</span></button>
      </div>
      </div>
    </div>
  );
}

export default Calc;

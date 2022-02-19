import React from 'react'

const FilterBTN = ({ name, index, items }) => {
  return (
    <div>
      <style jsx>
        {`
      .s: checked +label {
        background-color: #0b5ed7;
        color: white;
      }

      input[type="radio"]{
        display: none;
      }
      `}
      </style>
      <div className="form-check">
        <input className="form-check-input s" type="radio" name={name} id={`${name}-${index}`} />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
      </div>
    </div>
  )
}

export default FilterBTN
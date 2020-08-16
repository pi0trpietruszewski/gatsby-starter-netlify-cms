import React from "react"
import "./Checkbox.css"
import { ErrorLabel } from "../TextInput/TextInput.styles"

export const Checkbox = ({ name, error, ...props }) => (
  <div>
    <input
      ref={props.onRef}
      type="checkbox"
      name={name}
      id={name}
      value={props.value}
    />
    <label className="labelCheckbox" htmlFor={name}>
      {props.label}
    </label>
    <br />
    {error && error[name] && <ErrorLabel>{error[name].message}</ErrorLabel>}
  </div>
)

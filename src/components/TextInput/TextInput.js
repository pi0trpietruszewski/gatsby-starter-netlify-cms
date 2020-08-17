import React from "react"
import { ErrorLabel, InputC } from "./TextInput.styles"
import { colors } from "../../theme/Colors"
import { FontFamilies, FontSizes } from "../../theme/Typography"

const TextInput = ({
  label,
  onChange,
  value,
  placeholder,
  onRef,
  name,
  error,
}) => {
  return (
    <view className="d-flex flex-column">
      <label
        style={{
          marginBottom: 25,
          color: colors.text,
          fontFamily: FontFamilies.subtitle,
          fontSize: FontSizes.default,
        }}
      >
        {label}
      </label>
      <InputC
        name={name}
        ref={onRef}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      {error && error[name] && <ErrorLabel>{error[name].message}</ErrorLabel>}
    </view>
  )
}

export default TextInput

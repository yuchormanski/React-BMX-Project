import { useEffect, useReducer } from "react";
import styles from "./EditContactInfo.module.css";
import EditTextInput from "./editComponents/EditTextInput.jsx";
import { reducer } from "./editComponents/reducer.js";

function EditContactInfo({ info, setInfo, base64 }) {
  const initialState = {
    email: info.email,
    firstName: info.firstName,
    lastName: info.lastName,
    iban: info.iban,
    balance: info.balance,
    phone: info.phone,
    city: info.city,
    role: info.role,
    country: info.address.country,
    district: info.address.district,
    postCode: info.address.postCode,
    block: info.address.block,
    apartment: info.address.apartment,
    street: info.address.street,
    floor: info.address.floor,
    strNumber: info.address.strNumber,
    id: info.id,
    imageUrl: base64,
  };

  const [
    {
      email,
      firstName,
      lastName,
      iban,
      balance,
      phone,
      city,
      country,
      district,
      postCode,
      block,
      street,
      strNumber,
      apartment,
      floor,
      imageUrl,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      dispatch({ type: "setImage", payload: base64 });
    },
    [base64]
  );

  return (
    <>
      <form className={styles.form}>
        {/* FIRST NAME */}
        <EditTextInput
          inputValue={firstName}
          dispatch={dispatch}
          action="setFirstName"
          type="text"
          content={"First Name"}
        />
        {/* LAST NAME */}
        <EditTextInput
          inputValue={lastName}
          dispatch={dispatch}
          action="setLastName"
          type="text"
          content={"Last Name"}
        />
        {/* EMAIL */}
        <EditTextInput
          inputValue={email}
          dispatch={dispatch}
          action="setEmail"
          type="email"
          content={"Email"}
        />
        {/* IBAN */}
        <EditTextInput
          inputValue={iban}
          dispatch={dispatch}
          action="setIban"
          type="text"
          content={"IBAN"}
        />
        {/* BALANCE
        <EditTextInput
          inputValue={balance}
          dispatch={dispatch}
          action="setBalance"
          type="tel"
          content={"Account"}
        /> */}
        {/* PHONE */}
        <EditTextInput
          inputValue={phone}
          dispatch={dispatch}
          action="setPhone"
          type="text"
          content={"Phone"}
        />
        {/* CITY */}
        <EditTextInput
          inputValue={city}
          dispatch={dispatch}
          action="setCity"
          type="text"
          content={"City"}
        />
        {/* COUNTRY */}
        <EditTextInput
          inputValue={country}
          dispatch={dispatch}
          action="setCountry"
          type="text"
          content={"Country"}
        />
        {/* POSTCODE */}
        <EditTextInput
          inputValue={postCode}
          dispatch={dispatch}
          action="setPostCode"
          type="text"
          content={"Post Code"}
        />
        {/* DISTRICT */}
        <EditTextInput
          inputValue={district}
          dispatch={dispatch}
          action="setDistrict"
          type="text"
          content={"District"}
        />
        {/* BLOCK*/}
        <EditTextInput
          inputValue={block}
          dispatch={dispatch}
          action="setBlock"
          type="text"
          content={"Block"}
        />
        {/* FLOOR*/}
        <EditTextInput
          inputValue={floor}
          dispatch={dispatch}
          action="setFloor"
          type="text"
          content={"Floor"}
        />
        {/* APARTMENT*/}
        <EditTextInput
          inputValue={apartment}
          dispatch={dispatch}
          action="setApartment"
          type="text"
          content={"Apartment"}
        />
        {/* STREET*/}
        <EditTextInput
          inputValue={street}
          dispatch={dispatch}
          action="setStreet"
          type="text"
          content={"Street"}
        />
        {/* STREET*/}
        <EditTextInput
          inputValue={strNumber}
          dispatch={dispatch}
          action="setStrNumber"
          type="text"
          content={"Street"}
        />
      </form>
    </>
  );
}

export default EditContactInfo;

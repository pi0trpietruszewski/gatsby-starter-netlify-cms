import React, { useState } from "react"

import { Card } from "../Card"
import TextInput from "../TextInput/TextInput"
import Button from "../Button/Button"
import woman from "./womanContact.svg"
import { Img } from "../Img"
import { FormTitle } from "./AboutSection.styles"
import { useForm } from "react-hook-form"
import { Loader } from "../Loader/Loader"
import { MediumTitle } from "../FeaturedMedium/FeaturedMedium.styles"
import { ErrorLabel } from "../TextInput/TextInput.styles"
import { Checkbox } from "../Checkbox/Checkbox"

const ContactFormSection = () => {
  const { register, handleSubmit, watch, errors } = useForm()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const renderSuccess = () => {
    return (
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div>
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
        <MediumTitle>Dziękujemy, wkrótce skontaktujemy się z Tobą</MediumTitle>
      </div>
    )
  }

  const renderForm = () => (
    <form name={'contactForm'} id={'contactForm'}   onSubmit={handleSubmit(submit)}>
      <FormTitle>
        Zostaw namiar,
        <br /> odezwiemy się
      </FormTitle>
      <TextInput
        label={"E-mail"}
        name={"email"}
        placeholder={"np. aneta@poczta.onet.pl"}
        onRef={register({ required, pattern: email })}
        error={errors}
      />
      <div className="my-4">
        <TextInput
          name={"phone"}
          onRef={register({ required, pattern: phone })}
          label={"Telefon"}
          placeholder={"987 789 789"}
          error={errors}
        />
      </div>
      {/*<div className="my-4">*/}
      {/*  Administratorem podanych przez Ciebie danych osobowych jest P2 Patrycja*/}
      {/*  Piotrowska Piotr Pietruszewski S.C. z siedzibą w Świnoujściu (72-602),*/}
      {/*  ul. Barlickiego 10a/15. Podanie danych jest dobrowolne. Odmowa podania*/}
      {/*  danych skutkuje brakiem możliwości kontaktu z naszej strony. Szczegółowe*/}
      {/*  informacje dotyczące przetwarzania i ochrony danych osobowych znajdują*/}
      {/*  się tutaj*/}
      {/*</div>*/}
      <div className="my-4">
        <Checkbox
          error={errors}
          onRef={register({ required })}
          name={"rodo"}
          label={"Akceptuję Politykę Prywatności"}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column">
        {status !== null && status !== "success" && (
          <ErrorLabel className="mb-3">{status}</ErrorLabel>
        )}
        {loading ? <Loader /> : <Button>Wyślij!</Button>}
      </div>
    </form>
  )

  const submit = data => {
    console.log(data)
    setStatus(null)
    setLoading(true)
    fetch("/.netlify/functions/sendmail", {
      method: "POST",
      body: JSON.stringify({
        email: data.email.toLowerCase(),
        phone: data.phone,
      }),
    }).then(response => {
      if (response.ok) {
        setStatus("success")
      } else {
        response.text().then(content => {
          debugger
          setStatus(content)
        })
      }
      setLoading(false)
    })
  }
  debugger
  return (
    <section className="row py-5 d-flex justify-content-center align-items-center">
      <div className="col-12 col-xl-6 mb-5">
        <Card>{status === "success" ? renderSuccess() : renderForm()}</Card>
      </div>
      <div className="col-12 col-xl-6 my-5 d-flex align-items-stretch  justify-content-around flex-wrap">
        <Img src={woman} />
      </div>
    </section>
  )
}

const required = { message: "Pole jest wymagane", value: true }
const phone = {
  message: "Podaj numer telefonu w formacie 123456789",
  value: /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/,
}
const email = {
  message: "Podaj prawidłowy adres email (przyklad@przyklad.pl)",
  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
}

export default ContactFormSection

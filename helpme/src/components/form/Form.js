import React, { useState , useRef } from "react";
import "./Form.css";
import Calender from "../UI/calender/Calender";
import Dropdown from "../UI/dropdown/Dropdown";
import IconTextField from "../UI/iconTextField/IconTextField";
import StyledCheckBox from "../UI/styleCheckBox/StyledCheckBox";

import { database } from "../../utils/firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

import BadgeIcon from "@mui/icons-material/Badge";
import GroupIcon from "@mui/icons-material/Group";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumer] = useState();
  const [city, setCity] = useState();
  const [budget, setBudget] = useState();
  const [personNumber, setPersonNumber] = useState();
  const [date, setDate] = useState(new Date());
  const [organizationGroup, setOrganizationGroup] = useState({
    food: false,
    cinema: false,
    concert: false,
    museum: false,
    sport: false,
    workshop: false,
    openairact: false,
    accommodation: false,
  });

  const [isChildren, setisChildren] = useState(false);
  const [isPat, setisPat] = useState(false);
  const [other, setOther] = useState("");

  const [nameHelperText ,  setNameHelperText] = useState();
  const [surnameHelperText , setSurnameHelperText] = useState();
  const [emailHelperText ,  setEmailHelperText] = useState();
  const [phoneNumberHelperText ,  setPhoneNumberHelperText] = useState();
  const [cityHelperText ,  setCityHelperText] = useState();
  const [budgetHelperText ,  setBudgetHelperText] = useState();

  const organizations = [
    {
      checkName: "food",
      organization: "Yemek",
      checked: organizationGroup.food,
    },
    {
      checkName: "cinema",
      organization: "Sinema/Tiyatro",
      checked: organizationGroup.cinema,
    },
    {
      checkName: "concert",
      organization: "Konser",
      checked: organizationGroup.concert,
    },
    {
      checkName: "museum",
      organization: "M??ze/Sanat Galerisi",
      checked: organizationGroup.museum,
    },
    {
      checkName: "sport",
      organization: "Spor M??sabakalar??",
      checked: organizationGroup.sport,
    },
    {
      checkName: "workshop",
      organization: "At??lye",
      checked: organizationGroup.workshop,
    },
    {
      checkName: "openairact",
      organization: "A????khava Aktiviteleri",
      checked: organizationGroup.openairact,
    },
    {
      checkName: "accommodation",
      organization: "Konaklama",
      checked: organizationGroup.accommodation,
    },
  ];

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#ffe0cf",
    "&:hover": {
      backgroundColor: "#ddb998",
    },
  }));

  const onClickHandler = async (event) => {
    debugger;
    if(validate()){
    event.preventDefault();
    const form = {
      name: name,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
      city: city,
      budget: budget,
      personNumber: personNumber,
      date: date.toString(),
      organizations: organizationGroup,
      children: isChildren,
      pat: isPat,
      additional: other,
    };
    try {
      const docRef = await addDoc(collection(database, "forms"), form);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    const message = {
      html:`<h3>Merhaba ${name} ${surname}!</h3>
      Plan??n?? haz??rlamak i??in senden k??????k bir ??cret taliebimiz olacakt??. A??a????da belirtti??imiz IBAN numaras??na 50TL haz??rl??k ??cretini yat??rman durumunda plan??n?? sana 2 g??n i??inde iletiyor olaca????z.
      <br></br>Organizasyon yapmak bizim i??in bir keyif ve memnun kalaca????ndan eminiz.
      <br></br><code>IBAN: </code>
      
      <br></br>Tekrar bizi tercih etti??in i??in te??ekk??r eder mutlu bir g??n dileriz !`,
      subject:"help.me bilgilendirme"

    }
    try {
      const docRef = await addDoc(collection(database, "mail"), {
        to:email,
        message:message
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    navigate("/goodby");
  }
  };

  
  const validate = () => {
    let validation = true;
    debugger;

    if(name === ""){
     setNameHelperText("L??tfen ad??n??z?? giriniz.");
     validation=false;
    } 
    if(surname === ""){
      setSurnameHelperText("L??tfen soyad??n??z?? giriniz.");
      validation=false;

    }
    if (email === "" || (/.+@.+\.[A-Za-z]+$/).test(email) !== true){
      setEmailHelperText("Ge??erli bir mail adresi giriniz");
      validation=false;

    }
    if (phoneNumber === undefined || phoneNumber.length !== 10){
      setPhoneNumberHelperText("Telefon numaran??z?? do??ru giriniz.");
      validation=false;

    }

    if (city === undefined ){
      setCityHelperText("L??tfen ??ehir se??iniz");
      validation=false;

    }
    if (budget === undefined ){
      setBudgetHelperText("L??tfen b??t??e se??iniz.");
      validation=false;

    }

    return validation;
  };

  const nameChangeHandler = (name) => {
    setName(name);
  };

  const surnameChangeHandler = (surname) => {
    setSurname(surname);
  };

  const emailChangeHandler = (email) => {
    setEmail(email);
  };

  const phoneNumberChangeHandler = (phoneNumber) => {
    setPhoneNumer(phoneNumber);
  };

  const otherChangeHandler = (other) => {
    setOther(other);
  };

  const selectCityHandler = (city) => {
    setCity(city);
  };

  const selectBudgetHandler = (budget) => {
    setBudget(budget);
  };

  const personNumberChangeHandler = (personNumber) => {
    setPersonNumber(personNumber);
  };

  const onDateChangeHandler = (newDate) => {
    setDate(newDate);
  };

  const onCheckOrganizationGroupHandler = (checkBoxName, checked) => {
    setOrganizationGroup({
      ...organizationGroup,
      [checkBoxName]: checked,
    });
  };

  const onChekedChildrenHandler = (checked) => {
    setisChildren(checked);
  };

  const onCheckedPatHandler = (checked) => {
    setisPat(checked);
  };
  return (
    <div className="main_div">
      <h1>Hadi ba??layal??m</h1>
      <form className="form">
        <div>
          <p>Bu program?? kimin i??in yapaca????m??z?? ????renelim.. </p>
          <div id="userInfo">
            <IconTextField
              textFieldLabel={"Ad??n??z"}
              textFielType={"text"}
              textFieldValue={name}
              iconComponent={
                <BadgeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              }
              onChangeHandler={nameChangeHandler}
              helperText={nameHelperText}
            />
            <IconTextField
              textFieldLabel={"Soyad??n??z"}
              textFielType={"text"}
              textFieldStyle={{
                marginLeft: "20px",
                "& .MuiInput-underline:after": { borderBottomColor: "#ffe0cf" },
                "& label.Mui-focused": {
                  color: "#ffe0cf",
                },
              }}
              textFieldValue={surname}
              onChangeHandler={surnameChangeHandler}
              helperText={surnameHelperText}
            />
          </div>
        </div>
        <div>
          <p>
            Size ula??mak i??in bizimle payla??mak istedi??iniz ileti??im
            bilgilerinizi girebilir misin?
          </p>
          <IconTextField
            textFieldLabel={"Email"}
            textFielType={"text"}
            iconComponent={
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            }
            placeholder="example@gmail.com"
            textFieldValue={email}
            onChangeHandler={emailChangeHandler}
            helperText={emailHelperText}
          />
          <IconTextField
            textFieldLabel={"Telefon"}
            textFielType={"number"}
            placeholder="536 656 90 54"
            iconComponent={
              <PhoneIphoneIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
            }
            textFieldValue={phoneNumber}
            onChangeHandler={phoneNumberChangeHandler}
            helperText={phoneNumberHelperText}
          />
        </div>
        <div id="calender">
          <p style={{ marginBottom: "20px" }}>??imdi s??ra g??n?? belirlemekte!</p>
          <Calender date={date} onChangeHandler={onDateChangeHandler} />
        </div>
        <div>
          <p>Hangi ??ehir?</p>
          <Dropdown
            list={props.cities}
            dropdownLabel={"??ehirler"}
            selectedValue={city}
            onSelectHandler={selectCityHandler}
            helperText={cityHelperText}
          />
        </div>
        <div>
          <p>Bu etkinlik i??in ne kadar b??t??e ay??rd??n ?</p>
          <Dropdown
            list={props.budgets}
            dropdownLabel={"B??t??e"}
            selectedValue={budget}
            onSelectHandler={selectBudgetHandler}
            helperText={budgetHelperText}
          />
        </div>
        <div>
          <p>
            Bu etkinlikte yaln??z m??s??n yoksa seninle birlikte gelecekler var m???
          </p>
          <IconTextField
            textFieldLabel={"Ki??i Say??s??"}
            textFielType={"number"}
            iconComponent={
              <GroupIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            }
            textFieldValue={personNumber}
            onChangeHandler={personNumberChangeHandler}
          />
          <StyledCheckBox
            labelStyle={{
              fontFamily: `"Quicksand" ,sans-serif`,
              fontSize: "medium",
            }}
            checkBoxLabel={"Yan??n??zda ??ocuk olacak m?? ?"}
            checkboxName="children"
            onChecked={onChekedChildrenHandler}
          />
          <StyledCheckBox
            labelStyle={{
              fontFamily: `"Quicksand" ,sans-serif`,
              fontSize: "medium",
            }}
            checkBoxLabel={"Evcil hayvan??n??z sizinle gelecek mi ?"}
            checkboxName="pat"
            onChecked={onCheckedPatHandler}
          />
        </div>
        <div>
          <p>Peki hangisini yapmak istiyorsun? Birden fazla se??ebilirsin ..</p>
          {organizations.map((organization) => {
            return (
              <StyledCheckBox
                key={organization.checkName}
                labelStyle={{
                  fontFamily: `"Quicksand" ,sans-serif`,
                  fontSize: "medium",
                }}
                checkBoxLabel={organization.organization}
                checkboxName={organization.checkName}
                checked={organization.checked}
                onChecked={onCheckOrganizationGroupHandler}
              />
            );
          })}
          <p>
            Eklemek istediklerini ya da mutlaka olsun dediklerini yazabilirsin
          </p>
          <IconTextField
            textFielType={"text"}
            iconComponent={
              <TextSnippetIcon
                sx={{ color: "action.active", mr: 1, my: 0.5 }}
              />
            }
            textFieldValue={other}
            onChangeHandler={otherChangeHandler}
            np
          />
        </div>
      </form>
      <ColorButton
        sx={{ marginBottom: "10px", width: "50%" }}
        variant="contained"
        onClick={onClickHandler}
        type="submit"
      >
        G??NDER
      </ColorButton>
    </div>
  );
};

export default Form;

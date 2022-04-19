import React, { useState } from "react";
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
  const [date, setDate] = useState();
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
      organization: "Müze/Sanat Galerisi",
      checked: organizationGroup.museum,
    },
    {
      checkName: "sport",
      organization: "Spor Müsabakaları",
      checked: organizationGroup.sport,
    },
    {
      checkName: "workshop",
      organization: "Atölye",
      checked: organizationGroup.workshop,
    },
    {
      checkName: "openairact",
      organization: "Açıkhava Aktiviteleri",
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
      Planını hazırlamak için senden küçük bir ücret taliebimiz olacaktı. Aşağıda belirttiğimiz IBAN numarasına 50TL hazırlık ücretini yatırman durumunda planını sana 2 gün içinde iletiyor olacağız.
      <br></br>Organizasyon yapmak bizim için bir keyif ve memnun kalacağından eminiz.
      <br></br><code>IBAN: </code>
      
      <br></br>Tekrar bizi tercih ettiğin için teşekkür eder mutlu bir gün dileriz !`,
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

  const onChekedChildrenHandler = (name, checked) => {
    setisChildren(checked);
  };

  const onCheckedPatHandler = (name, checked) => {
    setisPat(checked);
  };
  return (
    <div className="main_div">
      <h1>Hadi başlayalım</h1>
      <form className="form">
        <div>
          <p>Bu programı kimin için yapacağımızı öğrenelim.. </p>
          <div id="userInfo">
            <IconTextField
              textFieldLabel={"Adınız"}
              textFielType={"text"}
              textFieldValue={name}
              iconComponent={
                <BadgeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              }
              textFieldStyle={{
                "& .MuiInput-underline:after": { borderBottomColor: "#ffe0cf" },
                "& label.Mui-focused": {
                  color: "#ffe0cf",
                },
              }}
              onChangeHandler={nameChangeHandler}
            />
            <IconTextField
              textFieldLabel={"Soyadınız"}
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
            />
          </div>
        </div>
        <div>
          <p>
            Size ulaşmak için bizimle paylaşmak istediğiniz iletişim
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
            textFieldStyle={{
              "& .MuiInput-underline:after": { borderBottomColor: "#ffe0cf" },
              "& label.Mui-focused": {
                color: "#ffe0cf",
              },
            }}
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
            textFieldStyle={{
              "& .MuiInput-underline:after": { borderBottomColor: "#ffe0cf" },
              "& label.Mui-focused": {
                color: "#ffe0cf",
              },
            }}
          />
        </div>
        <div id="calender">
          <p style={{ marginBottom: "20px" }}>Şimdi sıra günü belirlemekte!</p>
          <Calender date={date} onChangeHandler={onDateChangeHandler} />
        </div>
        <div>
          <p>Hangi şehir?</p>
          <Dropdown
            list={props.cities}
            dropdownLabel={"Şehirler"}
            selectedValue={city}
            onSelectHandler={selectCityHandler}
          />
        </div>
        <div>
          <p>Bu etkinlik için ne kadar bütçe ayırdın ?</p>
          <Dropdown
            list={props.budgets}
            dropdownLabel={"Bütçe"}
            selectedValue={budget}
            onSelectHandler={selectBudgetHandler}
          />
        </div>
        <div>
          <p>
            Bu etkinlikte yalnız mısın yoksa seninle birlikte gelecekler var mı?
          </p>
          <IconTextField
            textFieldLabel={"Kişi Sayısı"}
            textFielType={"number"}
            iconComponent={
              <GroupIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            }
            textFieldValue={personNumber}
            onChangeHandler={personNumberChangeHandler}
            textFieldStyle={{
              "& .MuiInput-underline:after": { borderBottomColor: "#ffe0cf" },
              "& label.Mui-focused": {
                color: "#ffe0cf",
              },
            }}
          />
          <StyledCheckBox
            labelStyle={{
              fontFamily: `"Quicksand" ,sans-serif`,
              fontSize: "medium",
            }}
            checkBoxLabel={"Yanınızda çocuk olacak mı ?"}
            checkboxName="children"
            onChecked={onChekedChildrenHandler}
          />
          <StyledCheckBox
            labelStyle={{
              fontFamily: `"Quicksand" ,sans-serif`,
              fontSize: "medium",
            }}
            checkBoxLabel={"Evcil hayvanınız sizinle gelecek mi ?"}
            checkboxName="pat"
            onChecked={onCheckedPatHandler}
          />
        </div>
        <div>
          <p>Peki hangisini yapmak istiyorsun? Birden fazla seçebilirsin ..</p>
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
            textFieldStyle={{
              "& .MuiInput-underline:after": { borderBottomColor: "#ffe0cf" },
              "& label.Mui-focused": {
                color: "#ffe0cf",
              },
            }}np
          />
        </div>
      </form>
      <ColorButton
        sx={{ marginBottom: "10px", width: "50%" }}
        variant="contained"
        onClick={onClickHandler}
        type="submit"
      >
        GÖNDER
      </ColorButton>
    </div>
  );
};

export default Form;

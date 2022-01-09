import React, { useState } from "react";
import "./Form.css";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import GroupIcon from "@mui/icons-material/Group";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { yellow } from "@mui/material/colors";
import { styled } from '@mui/material/styles';

const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = React.useState("");
  const [value, setValue] = useState();
  const organizations = [
    "Yemek",
    "Sinema/Tiyatro",
    "Konser",
    "Müze/Sanat Galerisi",
    "Spor Müsabakaları",
    "Atölye Çalışmaları",
    "Açıkhava Aktiviteleri",
    "Konaklama",
  ];

  const cities = ["İstanbul", "Tekirdağ", "Edirne", "Kırklareli"];
  const budgets = [
    "200-500",
    "500-1000",
    "1000-1500",
    "1500-2000",
    "2000 üzeri",
  ];

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#ffe4cf",
    '&:hover': {
      backgroundColor: "#ddb998",
    },
  }));

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="main_div">
      <h1>Hadi başlayalım</h1>
      <form className="form">
        <div>
          <p>Bu programı kimin için yapacağımızı öğrenelim.. </p>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <BadgeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField label="Adınız" variant="standard" type="text"/>
            <TextField
              label="Soyadınız"
              variant="standard"
              sx={{ marginLeft: "10px"}}
            />
          </Box>
        </div>
        <div>
          <p>
            Size ulaşmak için bizimle paylaşmak istediğiniz iletişim
            bilgilerinizi girebilir misin?
          </p>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Email" variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PhoneIphoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Telefon" variant="standard" type="number" />
          </Box>
        </div>
        <div id="calender">
          <p style={{marginBottom:"20px"}}>Şimdi sıra günü belirlemekte!</p>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label="Tarih ve Saat"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>
        </div>
        <div>
          <p>Hangi şehir?</p>
          <FormControl fullWidth>
            <InputLabel id="label_cities">Şehirler</InputLabel>
            <Select
              labelId="label_cities"
              sx={{ display: "flex", width: "25%", margin: "2px" }}
              value={city}
              label="Şehirler"
              onChange={handleChange}
            >
              {cities.map((city) => {
                return <MenuItem value={city}>{city}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <div>
          <p>Bu etkinlik için ne kadar bütçe ayırdın ?</p>
          <FormControl fullWidth>
            <InputLabel id="label_budgets">Bütçe</InputLabel>
            <Select
              labelId="label_budgets"
              sx={{ display: "flex", width: "25%", margin: "2px" }}
              value={city}
              label="Bütçe"
              onChange={handleChange}
            >
              {budgets.map((budget, index) => {
                return <MenuItem value={index}>{budget}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <div>
          <p>
            Bu etkinlikte yalnız mısın yoksa seninle birlikte gelecekler var mı?
          </p>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <GroupIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField label="Kişi Sayısı" variant="standard" />
          </Box>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography
                  sx={{
                    fontFamily: `"Quicksand" ,sans-serif`,
                    fontSize: "medium",
                  }}
                >
                  Yanınzda çocuk olacak mı ?
                </Typography>
              }
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography
                  sx={{
                    fontFamily: `"Quicksand" ,sans-serif`,
                    fontSize: "medium"
                  }}
                >
                  Evcil hayvanınız sizinle gelicek mi ?
                </Typography>
              }
            />
          </FormGroup>
        </div>
        <div>
          <p>Peki hangisini yapmak istiyorsun? Birden fazla seçebilirsin ..</p>
          {organizations.map((organization) => {
            return (
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label={
                    <Typography
                      sx={{
                        fontFamily: `"Quicksand" ,sans-serif`,
                        fontSize: "medium",
                      }}
                    >
                      {organization}
                    </Typography>
                  }
                />
              </FormGroup>
            );
          })}
        </div>
      </form>
      <ColorButton sx={{ width: "50%", margin: "5px" }} variant="contained" >Gönder</ColorButton>
    </div>
  );
};

export default Form;

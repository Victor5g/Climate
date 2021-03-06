import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, ScrollView } from "react-native";
import * as Location from "expo-location";

import {
  Title,
  ContentTitle,
  ContentIlustration,
  TitleTemp,
  TextMoisture,
  TextBold,
  TextDay,
  TextDate,
  TextAddres,
  ContentMinMax,
  TextMinMax,
} from "./styles";

import { getClimate } from "../../services/weather";

import { weekNames } from "../../../utils/weeks";
import { monthNames } from "../../../utils/months";
import { modelWeather } from "../../model/weather";

import themes from "../../themes";

import Gradient from "../../components/Gradient";
import Shimmer from "../../components/Shimmer";
import Illustration from "../../components/Illustration";
import Icon from "../../components/Icons";
import ButtonUp from "../../components/Button";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState(themes.sunTheme);

  const [weather, setWeather] = useState<modelWeather>();
  const [addres, setAddres] = useState<Location.LocationGeocodedAddress>();
  const [currentDate, setDate] = useState({ week: "", date: "" });

  const reqLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return false;
    }
    return true;
  };

  const getLocationAddres = async (lat: number, long: number) => {
    let t = await Location.reverseGeocodeAsync({
      latitude: lat,
      longitude: long,
    });
    setAddres(t[0]);
  };

  const getCurrentDate = () => {
    let instance = new Date();
    let date = instance.getDate();
    let day = weekNames[instance.getDay()];
    let month = monthNames[instance.getMonth()];
    let year = instance.getFullYear();
    setDate({ week: day, date: `${date} de ${month} de ${year}` });
  };

  const getLocation = async () => {
    setVisible(false);
    let statePermission = await reqLocationPermission();
    if (statePermission) {
      let { coords } = await Location.getCurrentPositionAsync({});
      getLocationAddres(coords.latitude, coords.longitude);
      getWeather(coords.latitude, coords.longitude);
    } else {
      setVisible(false);
      Error("Permiss??o necess??ria para utilizar o Climate");
    }
  };

  const getWeather = async (lat: number, long: number) => {
    let response = await getClimate(lat, long);
    if (response.status === 200) {
      setWeather(response.data);
      dayOrNight(response.data.weather[0].icon);
    } else {
      setVisible(false);
      Error("Error, por favor tente mais tarde");
    }
  };

  const formater = (value: any) => {
    return value.toString().split(".")[0];
  };

  const dayOrNight = (value: string) => {
    try {
      let day = value.includes("d");
      let night = value.includes("n");
      if (day) {
        setTheme(themes.sunTheme);
      }
      if (night) {
        setTheme(themes.nightTheme);
      }
    } catch {
      setVisible(false);
      Error("Error, por favor tente novamente mais tarde");
    } finally {
      setVisible(true);
    }
  };

  const Error = (message: string) => {
    Alert.alert(message);
  };

  useEffect(() => {
    getLocation();
    getCurrentDate();
  }, []);

  return (
    <Gradient theme={theme}>
      <ScrollView style={{ flex: 1, paddingTop: 30 }}>
        <ContentTitle>
          <Title>
            <Shimmer theme={theme} visible={visible}>
              {weather?.weather[0].description}{" "}
            </Shimmer>
          </Title>
        </ContentTitle>

        <ContentIlustration>
          {visible ? (
            <Illustration IconName={weather?.weather[0]?.icon} />
          ) : null}

          <Shimmer theme={theme} visible={visible}>
            <TitleTemp>
              {visible ? formater(weather?.main.temp) : null}&deg;
            </TitleTemp>
          </Shimmer>
        </ContentIlustration>

        <TextMoisture>
          <Shimmer width={100} theme={theme} visible={visible}>
            <Icon provider="Entypo" name="drop" size={24} color="white" />{" "}
            {weather?.main?.humidity}%
          </Shimmer>
        </TextMoisture>

        <TextDay>
          <Shimmer width={220} theme={theme} visible={visible}>
            <TextBold>{currentDate.week} </TextBold>
            <TextDate>{currentDate.date}</TextDate>
          </Shimmer>
        </TextDay>

        <TextAddres>
          <Shimmer width={360} theme={theme} visible={visible}>
            {addres?.street}, {addres?.streetNumber}, {addres?.city} -{" "}
            {addres?.region}, {addres?.postalCode}
          </Shimmer>
        </TextAddres>

        <ContentMinMax>
          <Shimmer width={350} theme={theme} visible={visible}>
            <TextMinMax>
              <TextBold>
                Max: {visible ? formater(weather?.main.temp_max) : null}&deg;
              </TextBold>
            </TextMinMax>

            <TextMinMax>
              <TextBold>
                Min: {visible ? formater(weather?.main.temp_min) : null}&deg;
              </TextBold>
            </TextMinMax>
          </Shimmer>
        </ContentMinMax>
      </ScrollView>

      <ButtonUp loading={visible} theme={theme} onPress={() => getLocation()} />
      <StatusBar translucent backgroundColor="transparent" />
    </Gradient>
  );
}

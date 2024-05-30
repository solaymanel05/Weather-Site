import React from "react";
import "./App.scss";
import SearchBar from "../components/SearchBar/SearchBar";
import Wallpaper from "../components/Wallpaper/Wallpaper";
import Weather from "../components/Weather/Weather";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Container>
        <SearchBar />
        <Wallpaper />
        <Weather />
      </Container>
    </div>
  );
}

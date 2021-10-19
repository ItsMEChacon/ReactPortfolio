import React from "react";
import Project from "../Project";
import Readme from "../Projects/ReadMe.png";
import WeatherDashdboard from "../Projects/WeatherDashboard.png";
import WorkScheduler from "../Projects/WorkScheduler.png";
import Cosmopawlitan from "../Projects/Cosmopawlitan.png";


function Portfolio() {
  return (
      <div>
        <Project
          name="Cosmopawlitan"
          image={Cosmopawlitan}
          description= "Website created to help in the adoption of animals from local shelters"
          deploy="https://stark-anchorage-96319.herokuapp.com/"
          repository="https://github.com/Artydabomb/Animal-Adoption-Database" 
        />
        <Project
          name="Readme Generator"
          image={Readme}
          description="App dedicated to creating a ReadMe for projects."
          repository="https://github.com/ItsMEChacon/ReadMe"
        />
        <Project
          name="Weather Dashboard"
          image={WeatherDashdboard}
          description="App dedicated to returning weather forecast for the week"
          deploy="https://itsmechacon.github.io/WeatherApp/" 
          repository="https://github.com/ItsMEChacon/WeatherApp"
        />
        <Project
          name="Work Scheduler"
          image={WorkScheduler}
          description= "App dedicated to creating a daily itinerary for work"
          deploy="https://itsmechacon.github.io/Day_Planner/"
          repository="https://github.com/ItsMEChacon/Day_Planner" 
        />
      </div>
  );
}

export default Portfolio;

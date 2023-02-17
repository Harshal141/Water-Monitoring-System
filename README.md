# Water-Management-System

This IOT project monitors water bodies using a monitoring device placed in various areas that measures the flow, temperature, pH, and tunbidity using an Arduino CPU and sensors, updating the database values.
The website offers a visual representation of data drawn from the database over the course of a week.

## Running the app locally

Run the command:

```bash
npm i
npm run dev
```

## Usage

Setup `default.json` file in config folder 

```JSON
{
    "mongoURI":"<mongoURI- create a cluster in mongodb atlas>",
    "jwtSecret": "<yourSecret- can be anything>"
}
```

## Frameworks and Languages
- NodeJs - for backend
- Express - as framework for server
- MongoDB - for database access
- ChartJs - to visualize data graphicaly
- Map Tiler Api - for rendering maps

## Curious About the hardware?
<details><summary>Click Here to Learn More</summary>

### Arduino

Arduino Uno is a microcontroller having 14 digital input/output pins, 6 analog inputs, a USB connection, a power jack, an ICSP header and a reset button. Arduino delivers a typical form aspect that breakdowns the purposes of the micro-controller into a nadditional available set.

### Sensors
- pH Sensor
- Turbidity Sensor
- Flow Sensor
- Temp Sensor

### Setup image

<img width="250" alt="image" src="https://user-images.githubusercontent.com/91362856/219705056-8095510d-223a-437a-8b87-33bb024d393b.png">

</details>

## License

MIT License

Copyright © 2023 Harshal Patil

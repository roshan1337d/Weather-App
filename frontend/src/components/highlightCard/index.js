import classes from "./index.module.css";

import sunIcon from "../../assets/sun.png";
import windIcon from "../../assets/wind.png";
import cloudIcon from "../../assets/cloud.png";
import rainIcon from "../../assets/rain.png";
import precipitationIcon from "../../assets/precipitation.png";
import TextTransition, { presets } from 'react-text-transition';

const data = {
    sunlight: {
        title: "Sunlight",
        icon: sunIcon,
        unit: "Hours"
    },
    rainProbability: {
        title: "Rain Probability",
        icon: rainIcon,
        unit: "%"
    },
    windSpeed: {
        title: "Wind speed",
        icon: windIcon,
        unit: "Km/h"
    },
    cloudCover: {
        title: "Cloud cover",
        icon: cloudIcon,
        unit: "%"
    },
    precipitation: {
        title: "Precipitation",
        icon: precipitationIcon,
        unit: "Mm"
    },
    rainfallDuration: {
        title: "Rainfall duration",
        icon: rainIcon,
        unit: "Hours"
    }
};

export default function HighlightCard(props) {
    const cardData = data[props.type];

    return (
        <div className={classes.card}>
            <div className={classes.cardDataWrap}>
                <div className={classes.cardIcon}>
                    <img src={cardData.icon} alt="rain" />
                </div>
                <div className={classes.cardDetails}>
                    <div>{cardData.title}</div>
                    <div><TextTransition springConfig={presets.wobbly}>{props.data}</TextTransition></div>
                    <div>{cardData.unit}</div>
                </div>
            </div>
        </div>
    );
}
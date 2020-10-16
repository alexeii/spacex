import React from 'react';
import RellaxWrapper from 'react-rellax-wrapper';
import Main from '../Main/Main';
import './features.css';

const rocketImg = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'other': 'starship',
}


const Features = ({rocketFeatures}) => {

	const rocketName = rocketFeatures ? rocketFeatures.name : null;
	const rocketHeightMet = rocketFeatures ? rocketFeatures.height.meters : null;
	const rocketHeightFt = rocketFeatures ? rocketFeatures.height.feet : null;
	const rocketDiametrMet = rocketFeatures ? rocketFeatures.diameter.meters : null;
	const rocketDiametrFt = rocketFeatures ? rocketFeatures.diameter.feet : null;
	const rocketMassKg = rocketFeatures ? rocketFeatures.mass.kg : null;
	const rocketMassLb = rocketFeatures ? rocketFeatures.mass.lb : null;
	const rocketPayloadKg = rocketFeatures ? rocketFeatures.payload_weights[0].kg : null;
	const rocketPayloadLb = rocketFeatures ? rocketFeatures.payload_weights[0].Lb : null;
	const rocketDescr = rocketFeatures ? rocketFeatures.description : null;



	return (
	
    <section className="features">
		<h2 className="features-title">
		{rocketFeatures ? rocketFeatures.name : null} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{rocketHeightMet} m / {rocketHeightFt} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{rocketDiametrMet} m /{rocketDiametrFt} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{rocketMassKg} kg / {rocketMassLb} lb</td>
					</tr>
					<tr>
						<td className="table-column">PAYLOAD TO LEO</td>
						<td className="table-column">{rocketPayloadKg} kg / {rocketPayloadLb} lb</td>
					</tr>
				</thead>
			</table>
			<RellaxWrapper speed={14}>
			
			<img
				src={`img/${rocketImg.hasOwnProperty(rocketName) ? rocketImg[rocketName] : rocketImg.other}.png`}
				alt="rocket"
				className="rocket"
				
			/>
			</RellaxWrapper>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
				{rocketDescr}
				</p>
			</article>
		</div>
	</section>
)};

export default Features;
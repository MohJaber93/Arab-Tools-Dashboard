import * as React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import DualListBox from 'react-dual-listbox';
const options = [
    { value: 'luna', label: 'Moon' },
    { value: 'phobos', label: 'Phobos' },
    { value: 'deimos', label: 'Deimos' },
    { value: 'io', label: 'Io' },
    { value: 'europa', label: 'Europa' },
    { value: 'ganymede', label: 'Ganymede' },
    { value: 'callisto', label: 'Callisto' },
    { value: 'mimas', label: 'Mimas' },
    { value: 'enceladus', label: 'Enceladus' },
    { value: 'tethys', label: 'Tethys' },
    { value: 'rhea', label: 'Rhea' },
    { value: 'titan', label: 'Titan' },
    { value: 'iapetus', label: 'Iapetus' }
];
const planets = {
    earth: { name: 'Earth', moons: ['luna'] },
    mars: { name: 'Mars', moons: ['phobos', 'deimos'] },
    jupiter: { name: 'Jupiter', moons: ['io', 'europa', 'ganymede', 'callisto'] },
    saturn: { name: 'Saturn', moons: ['mimas', 'enceladus', 'tehys', 'rhea', 'titan', 'iapetus'] }
};
const RestrictAvailableExample = () => {
    const [planet, setPlanet] = useState('jupiter');
    const [selected, setSelected] = useState(['phobos', 'titan']);
    const onChange = (selected) => {
        setSelected(selected);
    };
    const onPlanetChange = (event) => {
        const planet = event.currentTarget.value;
        setPlanet(planet);
    };
    const renderPlanets = () => {
        return Object.keys(planets).map((planet_) => (<Form.Group key={planet_} className="d-inline">
                <div className="radio d-inline radio-primary">
                    <Form.Control type="radio" name="planets" id={planet_} value={planet_} defaultChecked={planet_ === planet} onChange={onPlanetChange}/>
                    <Form.Label htmlFor={planet_} className="cr">
                        {
            // @ts-ignore
            planets[planet_].name}
                    </Form.Label>
                </div>
            </Form.Group>));
    };
    return (<div className="restrict-available-container">
            <div className="moons mb-3">{renderPlanets()}</div>
            <DualListBox available={
        // @ts-ignore
        planets[planet].moons} options={options} selected={selected} onChange={onChange}/>
        </div>);
};
export default RestrictAvailableExample;

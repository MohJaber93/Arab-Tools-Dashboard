import * as React from 'react';
import { useState } from 'react';
import DualListBox from 'react-dual-listbox';
const options = [
    {
        label: 'Earth',
        options: [{ value: 'luna', label: 'Moon' }]
    },
    {
        label: 'Mars',
        options: [
            { value: 'phobos', label: 'Phobos' },
            { value: 'deimos', label: 'Deimos' }
        ]
    },
    {
        label: 'Jupiter',
        options: [
            { value: 'io', label: 'Io' },
            { value: 'europa', label: 'Europa' },
            { value: 'ganymede', label: 'Ganymede' },
            { value: 'callisto', label: 'Callisto' }
        ]
    }
];
const PreserveSelectOrderExample = () => {
    const [selected, setSelected] = useState(['io', 'luna', 'europa']);
    const onChange = (selected) => {
        setSelected(selected);
    };
    return <DualListBox name="moons" options={options} preserveSelectOrder selected={selected} showOrderButtons onChange={onChange}/>;
};
export default PreserveSelectOrderExample;

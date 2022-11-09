import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

function SelectOption({ optionsEntities }) {
    const [selectedOption, setSelectedOption] =  useState(optionsEntities[0]);

    const options = optionsEntities.map(entity => {
        const { id, optionName } = entity;

        return (
            <MenuItem key={ id } value={ optionName }>{ optionName }</MenuItem>
        );
    });

    const handleSelectionChange = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select id="demo-select-small"
                    onChange={ handleSelectionChange }
                    value={ selectedOption.optionName }>
                { options }
            </Select>
        </FormControl>
    )
}

export default SelectOption
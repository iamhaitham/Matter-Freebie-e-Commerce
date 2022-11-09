import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectOption({ 
    optionsEntities, 
    selectedOption, 
    handleSelectionChange 
}) {
    const options = optionsEntities.map(entity => {
        const { id, optionName } = entity;

        return (
            <MenuItem key={ id } value={ optionName }>{ optionName }</MenuItem>
        );
    });

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select id="demo-select-small"
                    onChange={ handleSelectionChange }
                    value={ selectedOption }>
                { options }
            </Select>
        </FormControl>
    )
}

export default SelectOption
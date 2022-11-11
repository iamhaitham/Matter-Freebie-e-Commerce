import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import filtersEntities from '../../models/filtersEntities';
import Button from '../../shared/Button/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './FiltersSection.module.css';
import sizesEntities from "../../models/sizesEntities";
import Size from "../../shared/Size/Size";
import { useState } from "react";

function FiltersSection({ handleSubFilter }) {
    const { 
        filtersButtonsStyles, 
        buttonWrapperStyles, 
        selectedSizeStyles,
        sizeStyles,
        sizesWrapperStyles,
        filtersSectionStyles,
        mainAccordionStyles
    } = styles;
    const [selectedSize, setSelectedSize] = useState({});

    function handleSizeClick(e, id) {
        setSelectedSize(sizesEntities[id - 1]);
    }

    const sizes = sizesEntities.map(entity => {
        const { id, size } = entity;
        
        return (
            <Size key={ id }
                  id={ id } 
                  sizeCustomCss={ id === selectedSize.id ? selectedSizeStyles : sizeStyles }
                  size={ size }
                  handleClick={ handleSizeClick }/>
        );
    });

    const accordion = filtersEntities.map(entity =>  {
        const { name, subFilters } = entity;

        const subFiltersEntities = subFilters?.map(subEntity => {
            const { name: subName } = subEntity;

            return (
                <div key={ subName } className='flex-column'>
                    <div className={ buttonWrapperStyles }
                            onClick={ (e) => handleSubFilter(e, subName) }>
                        <ArrowForwardIosIcon fontSize='50px'/>
                        <Button id={ subName }
                                content={ subName }
                                customButtonCss={ filtersButtonsStyles }/>
                    </div>
                </div>
            );
        });

        return (
            <div key={ name }>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}
                                      aria-controls="panel1a-content"
                                      id="panel1a-header">
                        <Typography>{ name }</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography component={'div'}>
                            { subFiltersEntities }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        );
    });

    return (
        <div className={ filtersSectionStyles }>
            <div className={ mainAccordionStyles }>
                { accordion }

                <p>SIZE</p>
                <div className='flex-column  justify-content-space-between'>
                    <div className={ sizesWrapperStyles }>
                        { sizes }
                    </div>
                    <p>SEE OUT SIZING GUIDE</p>
                </div>
            </div>
        </div>
    );
}

export default FiltersSection;
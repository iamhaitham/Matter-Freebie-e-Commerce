import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import filtersEntities from '../../models/filtersEntities';
import Button from '../../shared/Button/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './FiltersSection.module.css';

function FiltersSection({ handleSubFilter }) {
    const { filtersButtonsStyles, buttonWrapperStyles } = styles;

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
        <div className='flex-column'>
            { accordion }
        </div>
    );
}

export default FiltersSection;
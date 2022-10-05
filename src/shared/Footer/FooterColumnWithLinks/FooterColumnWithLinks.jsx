import styles from './FooterColumnWithLinks.module.css';

function FooterColumnWithLinks(props) {
    const { listItem, columnTitleSpan, itemsList } = styles;
    const footerColumnWithLinksCss = {
        columnTitleCss: `${ columnTitleSpan }`,
        footerColumnWithLinksListWrapper: `${ itemsList }`,
        listItemCss: `${ listItem }`
    };
    const { listItemCss, columnTitleCss, footerColumnWithLinksListWrapper } = footerColumnWithLinksCss;

    const { entityId, columnTitle, columnItems } = props;
    const items = columnItems.map(columnItem => {
        const { id, item } = columnItem;

        return (
            <li className={ listItemCss } key={ id }>{ item }</li>
        );
    });

    return (
        <div key={ entityId } className='flex-column'>
            <span className={ columnTitleCss }>{ columnTitle }</span>
            <ul className={ footerColumnWithLinksListWrapper }>
                { items }
            </ul>   
        </div>
    );
}

export default FooterColumnWithLinks;
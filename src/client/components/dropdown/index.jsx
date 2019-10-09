import React from 'react'

const block = 'dropdown'

export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    openPopup = () => {
        this.setState({
            isOpen: true,
        })
    }

    closePopup = () => {
        this.setState({
            isOpen: false,
        })
    }

    handleSelect = (selectedItem) => {
        this.setState({ isOpen: false }, () => {
            if (this.props.onSelect) {
                this.props.onSelect(selectedItem)
            }
        })
    }

    renderPopup() {
        const { items = [], selectedItem: { title: selectedTitle } } = this.props;

        return <div className={`${block}__popup`}>
            <div className={`${block}__header`} />
            <div className={`${block}__list`}>
                {items.map(({ title, description }, key) => {
                    return <div key={key} onClick={() => this.handleSelect({
                        title, description
                    })} className={`${block}__item ${selectedTitle === title && `${block}__item_selected`}`}>
                        {title && <div className={`${block}__title`}>{title}</div>}
                        {description && <div className={`${block}__description`}>{description}</div>}
                    </div>
                })}
            </div>
        </div>
    }

    render() {
        const { selectedItem = {} } = this.props;
        const { isOpen } = this.state;

        return <div className={`${block} ${isOpen && `${block}_open`}`}>
            <button className={`${block}__control button`} onClick={this.openPopup}>{selectedItem.title}</button>
            {isOpen && this.renderPopup()}
        </div>
    }
}

import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export type SelectedItem = {
    title: string,
    description?: string
}

export type DropdownStateProps = {
    selectedItem?: SelectedItem,
    onSelect: (selectedItem: SelectedItem) => void
    items: Array<SelectedItem>
}

type DropdownProps = Partial<RouteComponentProps> & DropdownStateProps

type DropdownState = {
    isOpen: boolean
}

const block = 'dropdown'

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps) {
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

    handleSelect = (selectedItem: SelectedItem) => {
        this.setState({ isOpen: false }, () => {
            if (this.props.onSelect) {
                this.props.onSelect(selectedItem)
            }
        })
    }

    renderPopup() {
        const { items = [], selectedItem } = this.props;
        if (!selectedItem) return
        const  { title: selectedTitle } = selectedItem;
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
        const { selectedItem } = this.props;
        const { isOpen } = this.state;
        if (!selectedItem) return
        return <div className={`${block} ${isOpen && `${block}_open`}`}>
            <button className={`${block}__control button`} onClick={this.openPopup}>{selectedItem.title}</button>
            {isOpen && this.renderPopup()}
        </div>
    }
}

import React, { Component } from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const propTypes = {
    size: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    className: PropTypes.string,
    icon: PropTypes.string,
    iconposition: PropTypes.string,
    iconsize: PropTypes.string,
    color: PropTypes.string
};

const defaultProps = {
    size: '',
    variant: '',
    disabled: false,
    active: false,
    className: '',
    iconposition: 'left',
    iconsize: 'medium',
    icon: null,
    color: ""
};

export class Button extends Component {
    constructor(props) {
        super(props);
        this.allowediconsizes = ['small', 'medium', 'large'];
    }

    getTypeClass(type) {
        const classes = {
            primary: ' Button--primary',
            danger: ' Button--danger',
            tab: ' Button--tab',
            link: ' Button--link',
            outline: ' Button--outline',
            ghost: ' Button--ghost'
        };

        let className = "";
        let parts = type.split(" ");
        parts.forEach(part => {
            className += classes[part] || '';
        })

        return className;
    }

    getSizeClass(size) {
        const classes = {
            large: ' Button--large',
            small: ' Button--small',
            'full-width': ' Button--expanded'
        };

        return classes[size] || '';
    }

    getColorClass(size) {
        const classes = {
            white: ' Button--white'
        };

        return classes[size] || '';
    }

    render() {
        var classString = 'Button';
        let icon = "";
        if (this.props.loading) {
            classString += ' Button--disabled';
        }

        classString += this.getSizeClass(this.props.size);
        classString += this.getTypeClass(this.props.variant);
        classString += this.getColorClass(this.props.color);

        if (this.props.className) {
            classString = classString + ' ' + this.props.className;
        }
        if (this.props.active) {
            classString += ' Button--active';
        }
        if (this.props.disabled) {
            classString += ' Button--disabled';
        }

        if (this.props.icon) {
            if (this.allowediconsizes.indexOf(this.props.iconsize) < 0) {
                this.props.iconsize = 'medium';
            }
            let iconClass = `Button__icon Button__icon--${this.props.iconsize}`;
            icon = <img src={this.props.icon} alt={this.props.children.toString()} className={iconClass} />
        }

        let elementProps = Object.assign({}, this.props);
        delete elementProps.className;
        delete elementProps.active;

        if (this.props.button) {
            return (
                <button className={classString} {...elementProps}>
                    <React.Fragment>
                        {this.props.iconposition === 'left' && icon ? icon : null}
                        {this.props.loading ? 'Loading...' : this.props.children}
                        {this.props.iconposition === 'right' && icon ? icon : null}
                    </React.Fragment>
                </button>
            );
        } else {
            return (
                <div className={classString} {...elementProps}>
                    <React.Fragment>
                        {this.props.iconposition === 'left' && icon ? icon : null}
                        {this.props.loading ? 'Loading...' : this.props.children}
                        {this.props.iconposition === 'right' && icon ? icon : null}
                    </React.Fragment>
                </div>
            );
        }
       
            
        

        
    }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
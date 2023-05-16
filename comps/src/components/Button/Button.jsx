import './Button.css';
import PropTypes from 'prop-types';

export default function Button({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return <button>{children}</button>
}

Button.propTypes = {
  children: PropTypes.string,
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    if(Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(!!warning)+Number(!!danger)>1){
      throw new Error('Only one of primary, secondary, success, warning, danger can be specified');
    }
  }
}
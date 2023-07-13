// import './Button.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

  const finalStyle = classNames('px-3 py-1.5 border',{
    'border-blue-500 bg-blue-500 text-black': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-black': success,
    'border-yellow-400 bg-yellow-400 text-black': warning,
    'border-red-500 bg-red-500 text-black':danger,
    'bg-white': outline,
    'rounded-full': rounded,
    'text-blue-500': outline && primary,
    'text-gray-500': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  });

  return <button className={finalStyle}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    if(Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(!!warning)+Number(!!danger)>1){
      throw new Error('Only one of primary, secondary, success, warning, danger can be specified');
    }
  }
}
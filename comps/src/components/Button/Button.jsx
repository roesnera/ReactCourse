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

  // const styles = [];
  // let color = "";

  // if(primary){
  //   color = "-stone-300";
  //   styles.push("bg"+color);
  // } else if(secondary){
  //   color = "-stone-900";
  //   styles.push("bg"+color);
  // } else if(success){
  //   color = "-green-500";
  //   styles.push("bg"+color);
  // } else if(warning){
  //   color = "-yellow-300";
  //   styles.push("bg"+color);
  // } else if(danger){
  //   color = "-red-600";
  //   styles.push("bg"+color);
  // }



  // const finalStyle = styles.join(" ");
  // console.log(finalStyle);

  const finalStyle = classNames({
    'bg-stone-300': primary,
    'bg-stone-900': secondary,
    'bg-green-500': success,
    'bg-yellow-300': warning,
    'bg-red-600':danger
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
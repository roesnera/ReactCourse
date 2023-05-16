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

  const styles = [];
  let color = "";

  if(primary){
    color = "-stone-300";
    styles.push("bg"+color);
  } else if(secondary){
    color = "-stone-900";
    styles.push("bg"+color);
  } else if(success){
    color = "-green-500";
    styles.push("bg"+color);
  } else if(warning){
    color = "-yellow-300";
    styles.push("bg"+color);
  } else if(danger){
    color = "-red-600";
    styles.push("bg"+color);
  }



  const finalStyle = styles.join(" ");

  return <button className={finalStyle}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.string,
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    if(Number(!!primary)+Number(!!secondary)+Number(!!success)+Number(!!warning)+Number(!!danger)>1){
      throw new Error('Only one of primary, secondary, success, warning, danger can be specified');
    }
  }
}
import React from 'react';
import './Burger.css';

interface countInfo {
  count:number;
  classname:string;
}

const Burger:React.FC<countInfo> = ({classname,count}) => {
  return (
        <div className={classname}>{count}</div>
  );
};

export default Burger;
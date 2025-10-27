import React from "react";

interface ITitleProps {
  children?: any;
  classname?:string;
  //titleColor?:`#${string}`;
}
export function Title ({children,classname}:ITitleProps) {
 // const textColor= `${process.env.TiTLE_COLOR}`;

  return (
  <>
    <h1 className={`text-3xl mb-2 font-bold ${classname}`}>
     {children}
    </h1>
  </>
  

  )
};
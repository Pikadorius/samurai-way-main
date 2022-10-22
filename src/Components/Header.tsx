import React from "react";
import Button from './Button';

type HeaderPropsType = {
    title: string,
}

const Button1Foo = (value: string, numb: number) => {
    console.log(value,numb);
}

const Button2Foo = () => {
    console.log("i am stupid button");
}


const Header = ({title}:HeaderPropsType) => {
    console.log("Header rendering");
    return (
        <div>
            <h1>{title}</h1>
            <Button name={"News"} callBack={() => Button1Foo("i am button",21)}/>
            <Button name={"Stupid Button"} callBack={Button2Foo}/>
        </div>
    );
}

export default Header;
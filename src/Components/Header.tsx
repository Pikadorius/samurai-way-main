import React, {MouseEvent} from "react";
import Button from './Button';

type HeaderPropsType = {
    title: string,
}

const Header = ({title}:HeaderPropsType) => {
    console.log("Header rendering");


    const Button1Foo = (value: string, age: number) => {
        console.log(value,age);
    }

    const Button2Foo = () => {
        console.log("i am stupid button");
    }


    return (
        <div>
            <h1>{title}</h1>
            <Button name={"News"} callBack={() => Button1Foo("i am button 1",21)}/>
            <Button name={"Stupid Button"} callBack={Button2Foo}/>
        </div>
    );
}

export default Header;
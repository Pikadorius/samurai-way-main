import React, {MouseEvent} from "react";
import Button from './Button';

type HeaderPropsType = {
    title: string,
}

const Header = (props: HeaderPropsType) => {
    console.log("Header rendering");


    const Button1Foo = (value: string, age: number) => {
        console.log(value,age);
    }

    const Button2Foo = (value: string) => {
        console.log(value);
    }


    return (
        <div>
            <h1>{props.title}</h1>
            <Button name={"News"} callBack={() => Button1Foo("i am button 1",21)}/>
            <Button name={"About me"} callBack={() => Button2Foo("i am button 2")}/>
        </div>
    );
}

export default Header;
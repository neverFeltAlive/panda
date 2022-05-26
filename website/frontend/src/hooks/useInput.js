import React, {useState} from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [errorMessage, setErrorMessage] = useState(null);

    const nameRegex = /^[а-яА-Я]*$/;
    const mailRegex = /^[a-zA-Z\d.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/;
    const phoneRegex = /^[\d()\-+]*$/;

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        const {name, value} = e.target;

        if (value){
            if (name === "group_age" && name === "group_area" && name === "question" && name === "comment"){
                setValue(value);
            }
            else{
                if (name === "name"){
                    if (value.length <= 50){
                        if (value.match(nameRegex)){
                            setErrorMessage(null);
                        }
                        else{
                            setErrorMessage("Имя содержит недопустимые символы");
                        }
                    }
                    else{
                        setErrorMessage("Имя превышает допустимую длинну");
                    }
                }
                else if (name === "email"){
                    if (value.length <= 50){
                        if (value.match(mailRegex)){
                            setErrorMessage(null);
                        }
                        else{
                            setErrorMessage("Email некорректный");
                        }
                    }
                    else{
                        setErrorMessage("Email превышает допустимую длинну");
                    }
                }
                else if (name === "phone_number"){
                    if (value.length <= 15){
                        if (value.match(phoneRegex)){
                            setErrorMessage(null);
                        }
                        else{
                            setErrorMessage("Номер телефона содержит недопустимые символы");
                        }
                    }
                    else{
                        setErrorMessage("Номер телефона превышает допустимую длинну");
                    }
                }

                if (errorMessage === null){
                    setValue(value);
                }
            }

        }
    }

    return{
        value,
        errorMessage,
        onChange,
        onBlur,
    }
};

export default useInput;
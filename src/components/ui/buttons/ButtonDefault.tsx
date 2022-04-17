import React from 'react';
import style from './ButtonDefault.module.scss';

type Button = {
    title: string
}

const ButtonDefault: React.FC<Button> = ({ title }: Button) => {
    return (
        <button className={style.buttonDefault}>
            {title}
        </button>
    );
};

export default ButtonDefault;
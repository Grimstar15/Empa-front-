import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NewsList from '../../components/NewsList/NewsList';
import Form from '../../components/Form/Form';

import classes from './News.module.scss';

class News extends Component {
    render() {
        let formData = {
            title: 'Бүртгүүлэх',
            inputs: [
                {
                    label: 'Багцын сонголт'
                },
                {
                    label: 'Таны нэр'
                },
                {
                    label: 'Имэйл хаяг'
                },
                {
                    label: 'Утасны дугаар'
                },
                {
                    label: 'Байгууллагын нэр'
                },
                {
                    label: 'Имэйл хэрэглэгчийн тоо'
                }
            ]
        };

        return (
            <div className={classes.News}>
                <Header isHome={false} title={'Мэдээ'} bgColor='news' />
                <h2>Технологийн ертөнцөөр аялцгаая</h2>
                <NewsList />
                <Form
                    title={formData.title}
                    inputs={formData.inputs}
                />
            </div>
        );
    }
}

export default News;

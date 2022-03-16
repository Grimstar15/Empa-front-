import React from 'react';

import Button from '../UI/Button/Button';
import Cards from '../../components/Cards/Cards';

import classes from './News.module.scss';

const news = (props) => (
    <div className={classes.NewsList}>
        <Cards>
            <div className={classes.News}>
                <img src={'http://localhost:5000/static/img/news/inspire.jpg'} alt="News" />
                <h2>Inspire 2019: Бизнесээ дараагийн түвшинд гаргах боломж</h2>
                <p>Өнөөгийн хурдтай өөрчлөгдөж буй, хурц өрсөлдөөнт дижитал эринд амжилттай, тогтвортой үйл
                ажиллагаа явуулахын тулд аливаа компани дотоод соёлоо шинэчлэн технологийг үр дүнтэй ашигладаг
                        ажилтнуудаар багаа бүрдүүлэх [...]</p>
                <Button link="/">Дэлгэрэнгүй</Button>
            </div>
            <div className={classes.News}>
                <img src={'http://localhost:5000/static/img/news/inspire.jpg'} alt="News" />
                <h2>Inspire 2019: Бизнесээ дараагийн түвшинд гаргах боломж</h2>
                <p>Өнөөгийн хурдтай өөрчлөгдөж буй, хурц өрсөлдөөнт дижитал эринд амжилттай, тогтвортой үйл
                ажиллагаа явуулахын тулд аливаа компани дотоод соёлоо шинэчлэн технологийг үр дүнтэй ашигладаг
                        ажилтнуудаар багаа бүрдүүлэх [...]</p>
                <Button link="/">Дэлгэрэнгүй</Button>
            </div>
            <div className={classes.News}>
                <img src={'http://localhost:5000/static/img/news/inspire.jpg'} alt="News" />
                <h2>Inspire 2019: Бизнесээ дараагийн түвшинд гаргах боломж</h2>
                <p>Өнөөгийн хурдтай өөрчлөгдөж буй, хурц өрсөлдөөнт дижитал эринд амжилттай, тогтвортой үйл
                ажиллагаа явуулахын тулд аливаа компани дотоод соёлоо шинэчлэн технологийг үр дүнтэй ашигладаг
                        ажилтнуудаар багаа бүрдүүлэх [...]</p>
                <Button link="/">Дэлгэрэнгүй</Button>
            </div>
        </Cards>
    </div>
);

export default news;

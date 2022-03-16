import React from 'react';

import classes from './KidsProgram.module.scss';

const KidsProgram = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.HeaderContainer}>
                <h2>Хичээлийн хуваарь</h2>
            </div>
            <div className={classes.ContentContainer}>
                <table>
                    <tr class={classes.borderBottom}>
                        <th>Даваа</th>
                        <th>Мягмар</th>
                        <th>Лхагва</th>
                        <th>Пүрэв</th>
                        <th>Баасан</th>
                        <th>Бямба</th>
                        <th>Ням</th>
                    </tr>
                    <tr class={classes.borderBottom}>
                        <td>10:00 - 11:30</td>
                        <td></td>
                        <td></td>
                        <td>10:00 - 11:30</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class={classes.borderBottom}>
                        <td>10:00 - 11:30</td>
                        <td></td>
                        <td></td>
                        <td>10:00 - 11:30</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr class={classes.borderBottom}>
                        <td>10:00 - 11:30</td>
                        <td></td>
                        <td></td>
                        <td>10:00 - 11:30</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>10:00 - 11:30</td>
                        <td></td>
                        <td></td>
                        <td>10:00 - 11:30</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default KidsProgram;

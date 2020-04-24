import React from 'react';
import Card from './index.js';

const CardList = (props) => {
    let users = [];
    if (props.users) {
        users = props.users.map(user => <Card key={user.id} {...user} />);
    }
    return ( 
        <div>
            {users}
        </div>
     );
}
 
export default CardList;
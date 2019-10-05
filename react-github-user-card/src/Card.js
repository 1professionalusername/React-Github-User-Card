import React from 'react';

function Card(props) {

    return (
        <div className='container'>
            <div className='card'>
                <div className='border'></div>
                <div className='avatar'>
                    <img src={props.data.avatar_url} alt="user" />
                </div>
                <hr />
                <div className='stats'>
                    <h2>{props.data.name}</h2>
                    <hr class='bottom' />
                    <div className='bio'>
                        <p>Handle:</p>
                        <a href={props.data.html_url}>{props.data.login}</a>
                        <p>Location:</p>
                        <div>{props.data.location}</div>
                        <p>Bio:</p>
                        <p> {props.data.bio}</p>

                    </div>
                </div>
            </div>
            <div className='card2'>
                <h3>Followers:</h3>
                {props.followers.map(follower => {
                    return (
                        <p>
                            {follower.login}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}
export default Card;


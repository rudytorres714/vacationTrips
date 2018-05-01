import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

const Photo = (props) => {

    const post = props.post
    return <figure className="figure"> 
                <Link to={`/single/${post.id}`}> <img className="photo" src={post.imageLink} alt={post.description} /></Link>
                <figcaption> <p> {post.description} </p></figcaption>
                <div className="button-container">

                <button
                    onClick = {() => {
                    props.startRemovingPost(props.index, post.id)
                    props.history.push('/')
                }}> <FontAwesome
                    name="trash-o"
                    size="2x"

                />Remove</button>
                 <Link className="button" to={`/single/${post.id}`}>
                    <div className="comment-count">

                        <div>  <FontAwesome
                            name="comment-o"
                            size="2x"
                        /> <br/> </div>
                        {props.comments[post.id] ? props.comments[post.id].length : 0}
                    </div>

                 </Link>

                </div>
    </figure>

}

Photo.propTypes = {
    posts: PropTypes.object.isRequired,
}

export default Photo
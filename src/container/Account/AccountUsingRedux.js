import React, {Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import * as Actions from "../../store/actions/actions";


class AccountUsingRedux extends Component {

    state = {
        blogs: [],
        selBlog: null,
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                console.log(response);

                this.props.onBlogsLoad(response.data); // Redux way.

                /*this.setState((prevState, props) => {  // React Stateful way.
                    return {
                        blogs: response.data,
                    }
                });*/
            })
            .catch(error => {
                console.log(error);
            });
    }

    render = () => {

        let blogLIs = [];
        if (this.props.blogs && this.props.blogs.length > 0) {
            blogLIs = this.props.blogs.map(blog => {
                return <li key={blog.id}
                           style={{cursor: 'pointer'}}
                    //onClick={() => this.props.deleteBlog(blog.id)}
                >
                    {blog.userId} {blog.title} {blog.completed}
                    [<a onClick={() => this.props.fetchBlogAsync(blog.id)}>select</a><span> | </span>
                    <a onClick={() => this.props.deleteBlogAsync(blog.id)}>delete</a>]
                </li>;
            });
        }

        return (
            <div>
                <h3>Account Details</h3>
                <nav>
                    <ul>
                        {blogLIs}
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogsRdcr.blogs,
        selBlog: state.blogsRdcr.selBlog,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBlogsLoad: (blogs) => dispatch(Actions.onLoadBlogs(blogs)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountUsingRedux);
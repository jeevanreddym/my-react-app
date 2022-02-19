import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from "../../store/actions/actions";



class OrdersUsingSagas extends Component {

    componentDidMount() {
        this.props.loadBlogs();
    }

    render() {

        let blogLIs = [];
        if (this.props.blogs && this.props.blogs.length > 0) {
            blogLIs = this.props.blogs.map(blog => {
                return <li key={blog.id}
                           style={{cursor: 'pointer'}}>
                    {blog.userId} {blog.title} {blog.completed}
                    [<a onClick={() => this.props.fetchBlog(blog.id)}>select</a><span> | </span>
                    <a onClick={() => this.props.deleteBlog(blog.id)}>delete</a>]
                </li>;
            });
        }

        return (
            <div>
                <h3>Orders</h3>
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
        loadBlogs: () => dispatch(Actions.loadBlogsUsingSaga()),
        fetchBlog: (blogId) => dispatch(Actions.fetchBlogUsingSaga(blogId)),
        deleteBlog: (blogId) => dispatch(Actions.deleteBlogsUsingSaga(blogId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersUsingSagas);
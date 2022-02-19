import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from "../../store/actions/actions";


class Blogs extends Component {

    state = {
        blogs: [],
        selBlog: null,
    };

    componentDidMount() {
        this.props.loadBlogsUsingThunk();
    }

    render = () => {

        let blogLIs = [];
        if (this.props.blogs && this.props.blogs.length > 0) {
            blogLIs = this.props.blogs.map(blog => {
                console.log(blog.id);
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
                <h3>Blogs</h3>
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
        loadBlogsUsingThunk: () => dispatch(Actions.loadBlogsUsingThunk()),
        //onBlogsLoad: (blogs) => dispatch(Actions.onLoadBlogs(blogs)),
        fetchBlogAsync: (blogId) => dispatch(Actions.fetchBlogAsync(blogId)),
        deleteBlogAsync: (blogId) => dispatch(Actions.deleteBlog(blogId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

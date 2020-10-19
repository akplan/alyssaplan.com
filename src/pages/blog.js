import React from 'react'
import {useStaticQuery, Link, graphql} from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './styles/blog.module.scss'
import useDarkMode from 'use-dark-mode'

import Head from '../components/head'

const Blog = () => {

    const data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost(
        sort: {
          fields:publishedDate,
          order:DESC
        }
      ){
        edges{
          node{
            title
            slug
            publishedDate (formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
    `);

    const darkMode = useDarkMode();
    return(
        <Layout>
          <Head title="Blog" />
            <h1>Blargh</h1>
            <ol className={blogStyles.posts}>
                {
                    data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={`${blogStyles.post} ${darkMode.value ? blogStyles.darkMode: blogStyles.lightMode}`}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                  <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        );
                })}
            </ol>
        </Layout>
    )
}

export default Blog;
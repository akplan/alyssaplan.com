import React from 'react'

import { graphql } from 'gatsby'
import { BLOCKS} from "@contentful/rich-text-types"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import blogPostStyles from '../pages/styles/blogpost.module.scss'

import Head from '../components/head'

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}){
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body{
                json
            }
        }
    }
`


const Blog = (props) => {
const Text = ({children}) => <p className={blogPostStyles.post} lang="en-US">{children}</p>
    const options= {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.description['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            },
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
        }
    }
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )

}

export default Blog
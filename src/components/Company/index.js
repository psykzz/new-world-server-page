import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../Layout"

import * as styles from './company.module.css';

export const Company = ({data}) => {

    return (
        <Layout>
          <Helmet title={`${data.frontmatter.title} - Ishtakar`} />
          <div className={styles.wrapper}>
            <h1>{data.frontmatter.title}</h1>

            <h4><label>Governor</label> <span>{data.frontmatter.governor}</span></h4>
            <h5><label>Consul</label> <span>{data.frontmatter.consul.join(', ')}</span></h5>
            
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: data.html }}
            />
          </div>
        </Layout>
      )
}
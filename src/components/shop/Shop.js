import React, { useState } from 'react'
import styled from 'styled-components'
import Products from './Products.jsx'
import DOMPurify from "dompurify";
import ReactDOM from 'react-dom';

const myHTML = `<iframe src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=themick-20&marketplace=amazon&region=US&placement=B017RQZ1UI&asins=B017RQZ1UI&linkId=8c2ad5e8c9f0cda5ae9aebfe53cd26a4&show_border=true&link_opens_in_new_window=true"></iframe>`
const myHTML2 = `<p>Hello World"</p>`



// ReactDOM.render(<p>Hello</p>, document.getElementById('root'));

export default function Shop() {
    return (
        <div>
            <Div dangerouslySetInnerHTML={{ __html: myHTML }} />
            <Div dangerouslySetInnerHTML={{ __html: myHTML2 }} />
            <Products />
        </div>
    )
}

const Container = styled.div`
    color: red;
`
const Iframe = styled.iframe`
    height: 240px;
    width: 120px;
    border: 1px solid gray;
    color: white;
`
const Div = styled.div`
    height: 240px;
    width: 120px;
    border: 1px solid gray;
    color: white;
`
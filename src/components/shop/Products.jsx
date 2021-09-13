import React, { useState } from 'react'
import styled from 'styled-components'

import ReactDOM from 'react-dom';

const myelement2 = <iframe src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=themick-20&marketplace=amazon&region=US&placement=B017RQZ1UI&asins=B017RQZ1UI&linkId=e44db624b34330f5fe0a4434a08b29d0&show_border=false&link_opens_in_new_window=false"></iframe>;
const myelement1 = <p>hello from products</p>;
// const myelement2 = <p>hello from products</p>;

export default function Products() {
    return (
        <Div>
            {myelement1}
            {myelement2}
        </Div>
    )
}

const Div = styled.div`
    color: red;
`
const Iframe = styled.iframe`
    height: 240px;
    width: 120px;
    border: 1px solid gray;
`
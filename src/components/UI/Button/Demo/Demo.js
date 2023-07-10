import MyParagraph from "./MyParagraph";
import React from "react";

const Demo = props => {

    console.log('Demo Running!')

    return <MyParagraph>{props.show ? 'this is new!':''}</MyParagraph>
};

export default React.memo(Demo);

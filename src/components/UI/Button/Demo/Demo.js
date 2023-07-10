import MyParagraph from "./MyParagraph";

const Demo = props => {

    console.log('Demo Running!')

    return <MyParagraph>{props.show ? 'this is new!':''}</MyParagraph>
};

export default Demo;

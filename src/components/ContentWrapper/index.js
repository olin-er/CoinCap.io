import './ContentWrapper.scss';
import HeaderContentData from '../HeaderContentData';
import ContentApp from '../ContentApp';
import Layout from 'antd/lib/layout';

const {Content} = Layout;

const ContentWrapper = () => {
    return(
        <>
            <Content className='contentWrapper'>
                    <HeaderContentData />
                    <ContentApp />
            </Content>
        </>
     )
}
export default ContentWrapper;

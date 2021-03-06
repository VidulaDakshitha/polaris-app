import React, { Component } from 'react';

import { Redirect } from '@shopify/app-bridge/actions';
import createApp from '@shopify/app-bridge';

import {
  Layout,
  Page,
  FooterHelp,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  SettingToggle,
  Thumbnail,
  TextContainer,
} from '@shopify/polaris';
import {ImportMinor} from '@shopify/polaris-icons';
import queryString from 'query-string';


class Authentication extends Component {

    constructor(props){
        super(props);
        this.state={
            app_id:"",
            app_token:"",
            hash_salt:"",

        }

    }


    onSubmit=(e):void=>{
        e.preventDefault();

        const values={
  app_id:this.state.app_id,
  hash_salt:this.state.hash_salt,
  hash_token:this.state.hash_token
}



    }

componentDidMount():void{

    // const values = queryString.parse(window.location.href)
    // const host = values.host

// const host = "b25lcGF5LWdhdGV3YXktdGVzdC5teXNob3BpZnkuY29tL2FkbWlu";
//   const apiKey = 'e5646cb38c6ddda8cd1458ff19a7bf27';
// const redirectUri = 'https://eantheweb.vercel.app/';
// const permissionUrl = `https://${host}/admin/oauth/authorize?client_id=${apiKey}&scope=read_products,read_content,write_payment_gateways,write_payment_sessions&redirect_uri=${redirectUri}`;

//   const app = createApp({
//     apiKey: apiKey,
//     host: host,
//     forceRedirect: true
//   });

//   Redirect.create(app).dispatch(Redirect.Action.REMOTE, permissionUrl);
}


handleFirstChange(e):void{
   this.setState({
      [e.target.name]:e.target.value
    })

}

    render() {
          const breadcrumbs = [{content: 'Sample apps'}, {content: 'Create React App'}];
            const accountSectionDescription = 'Details of onepay payment gateway.';
        return (
            <div>
               
    <Page
      title="onepay payment gateway"
      breadcrumbs={breadcrumbs}
    >
      <Layout>
        {/* <Layout.AnnotatedSection
          title="Style"
          description="Customize the style of your checkout"
        >
          <SettingToggle
            action={{
              content: 'Customize Checkout',
            }}
          >
            Upload your store???s logo, change colors and fonts, and more.
          </SettingToggle>
        </Layout.AnnotatedSection> */}

        <Layout.AnnotatedSection
          title="Details"
          description={accountSectionDescription}
        >
         <Card sectioned>

         {/* <Thumbnail
  source="https://onepayserviceimages.s3.ap-southeast-1.amazonaws.com/onepay_gateway_logo/1625655409.796931.png"  size="large"
  alt="Black choker necklace"
/> */}
<img width="20%" src="https://onepayserviceimages.s3.ap-southeast-1.amazonaws.com/onepay_gateway_logo/1625655409.796931.png"/>
            <TextContainer>
              <p>
               onepay Payment Gateway allows you to accept payment on your Woocommerce store via Visa, MasterCard, AMEX, & Lanka QR services.
              </p>
              <Link url="https://www.onepay.lk/">Visit our site</Link>
            </TextContainer>
         </Card>
        
        </Layout.AnnotatedSection>

        <Layout.AnnotatedSection
          title="Merchant Information"
          description="Fill correct merchant information."
        >
          <Card sectioned>
            <FormLayout>
                <form onSubmit={this.onSubmit}>
                <TextField
                  value={this.state.app_id}
                  label="App ID"
                  placeholder="Enter App ID"
                  onChange={this.handleFirstChange()}
                 name="app_id"
                />
           
                 <TextField
                  value={this.state.hash_salt}
                  label="Hash Salt"
                  placeholder="Enter Hash Salt"
                  onChange={this.handleFirstChange()}
                  name="hash_salt"
                />

              <TextField
                value={this.state.hash_token}
                label="Access Token"
                placeholder="Enter Access Token"
                onChange={this.handleFirstChange()}
               name="hash_token"
              />

              {/* <ChoiceList
                allowMultiple
                choices={choiceListItems}
                selected={checkboxes}
                onChange={this.handleFirstChange()}
              /> */}

              <Button primary>Submit</Button>
              </form>
            </FormLayout>
          </Card>
        </Layout.AnnotatedSection>

        <Layout.Section>
          <FooterHelp>
            For more details on Polaris, visit our{' '}
            <Link url="https://polaris.shopify.com">style guide</Link>.
          </FooterHelp>
        </Layout.Section>
      </Layout>
    </Page>

            </div>
        );
    }
}

export default Authentication;
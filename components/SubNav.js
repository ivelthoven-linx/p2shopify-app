import React from "react";
import { Navigation, Layout } from "@shopify/polaris";

class SubNav extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.Section secondary>
          <Navigation location="/">
            <Navigation.Section items={this.props.items} />
          </Navigation>
        </Layout.Section>
        <Layout.Section>{this.props.children}</Layout.Section>
      </Layout>
    );
  }
}

export default SubNav;

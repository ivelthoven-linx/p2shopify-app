import React from "react";
import { Navigation, Layout, Card } from "@shopify/polaris";

import "../css/navigation.css";

class SubNav extends React.Component {
  render() {
    return (
      <Layout>
        <Layout.Section secondary>
          <Card sectioned>
            <Navigation location="/">
              <Navigation.Section items={this.props.items} />
            </Navigation>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card sectioned>{this.props.children}</Card>
        </Layout.Section>
      </Layout>
    );
  }
}

export default SubNav;

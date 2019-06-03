import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import {
  Card,
  TopBar,
  FilterType,
  ActionList,
  Frame,
  ResourceList,
  Avatar,
  TextStyle,
  Layout,
  Thumbnail
} from "@shopify/polaris";

const GET_PRODUCTS = gql`
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
const GET_IMAGES = gql`
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
          images(first: 5) {
            edges {
              node {
                id
                altText
                originalSrc
                transformedSrc
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                image {
                  id
                  altText
                  originalSrc
                  transformedSrc
                }
              }
            }
          }
        }
      }
    }
  }
`;

class ImageListing extends React.Component {
  state = {
    searchValue: "",
    appliedFilters: [
      // {
      //   key: "accountStatusFilter",
      //   value: "Account enabled"
      // }
    ]
  };

  handleSearchChange = searchValue => {
    this.setState({ searchValue });
  };

  handleFiltersChange = appliedFilters => {
    this.setState({ appliedFilters });
  };

  renderItem = item => {
    const { id, title } = item.node;
    let media = "";
    // const transformedSrc;
    if (typeof item.node.images.edges[0] !== "undefined") {
      const transformedSrc = item.node.images.edges[0].node.transformedSrc;
      const altText = item.node.images.edges[0].node.altText;
      media = <Thumbnail alt={altText} name={title} source={transformedSrc} />;
    }
    return (
      <Card sectioned>
        {media}
        <h3>
          <TextStyle variation="strong">{title}</TextStyle>
        </h3>
      </Card>
      // <ResourceList.Item id={id}>
      //   <h3>
      //     <TextStyle variation="strong">{title}</TextStyle>
      //   </h3>
      // </ResourceList.Item>
    );
  };

  render() {
    const resourceName = {
      singular: "customer",
      plural: "customers"
    };

    const filters = [
      {
        key: "orderCountFilter",
        label: "Number of orders",
        operatorText: "is greater than",
        type: FilterType.TextField
      },
      {
        key: "accountStatusFilter",
        label: "Account status",
        operatorText: "is",
        type: FilterType.Select,
        options: ["Enabled", "Invited", "Not invited", "Declined"]
      }
    ];

    const filterControl = (
      <ResourceList.FilterControl
        filters={filters}
        appliedFilters={this.state.appliedFilters}
        onFiltersChange={this.handleFiltersChange}
        searchValue={this.state.searchValue}
        onSearchChange={this.handleSearchChange}
        // additionalAction={{
        //   content: "Save",
        //   onAction: () => console.log("New filter saved")
        // }}
      />
    );

    return (
      <Card>
        <Query query={GET_IMAGES}>
          {({ data, loading, error }) => {
            if (loading) return <div>Loading…</div>;
            if (error) return <div>{error.message}</div>;
            let products = data.products.edges;
            return (
              <ResourceList
                resourceName={resourceName}
                items={products}
                renderItem={this.renderItem}
                filterControl={filterControl}
              />
              // <Card>
              //   {products.map(product => (
              //     <Card key={product.node.id}>{product.node.title}</Card>
              //   ))}
              // </Card>
            );
          }}
        </Query>
      </Card>
    );
  }
}

export default ImageListing;

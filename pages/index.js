import {
  Page,
  Card,
  ResourceList,
  Thumbnail,
  Query,
  TopBar,
  FilterType,
  Avatar,
  Heading,
  Link,
  DisplayText,
  Stack,
  Button,
  TextContainer,
  Pagination,
  Caption,
  Banner,
  List,
  DropZone,
  FileUpload,
  Collapsible,
  Modal
} from "@shopify/polaris";
import React from "react";
// sdf
import ProductCard from "../components/ProductCard";
import exampleData from "../ExampleData";
import Information from "../components/Information";

class Index extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      modalOpen: true,
      active: true,
      searchValue: "",
      isFirst: true,
      appliedFilters: [
        {
          key: "accountStatusFilter",
          value: "Account enabled"
        }
      ]
    };
  }

  handleSearchChange = searchValue => {
    this.setState({ searchValue });
  };

  handleFiltersChange = appliedFilters => {
    this.setState({ appliedFilters });
  };

  renderItem = item => {
    const { id, url, name, location } = item;
    return <ProductCard />;
  };

  skur = () => {
    const variantIdArray = [];
    for (const i in exampleData) {
      variantIdArray.push(exampleData[i]["product_id"]);
    }
    let variantId = Array.from(new Set(variantIdArray));

    return variantId;
  };

  render() {
    const { active } = this.state;

    const resourceName = {
      singular: "customer",
      plural: "customers"
    };

    const items = [{}];

    items.push(this.skur());

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
        additionalAction={{
          content: "Save",
          onAction: () => console.log("New filter saved")
        }}
      />
    );
    if (this.state.isFirst) {
      return <Information isFirst={true} />;
    } else {
      return (
        <Page
          fullWidth
          title="Ph2Shopify"
          forceRender
          primaryAction={{ content: "Upload" }}
        >
          <Stack distribution="trailing" />
          <Card sectioned={true}>
            <ResourceList
              resourceName={resourceName}
              items={items}
              renderItem={this.renderItem}
              filterControl={filterControl}
            />
          </Card>
        </Page>
      );
    }
  }
}
export default Index;

import {
  EmptyState,
  Layout,
  Page,
  ResourcePicker,
  Card,
  TextStyle,
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
  Collapsible
} from "@shopify/polaris";
import React from "react";
// import { Link } from "@shopify/polaris/types/components/AppProvider/utilities";
// 123123eqweqwe
class Index extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      searchValue: "",
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
    const media = <Avatar customer size="medium" name={name} />;

    return (
      <Card>
        <Card.Header
          actions={[
            {
              content: "-Coming soon-"
            }
          ]}
          title="Multiple Variant Images"
        />
        <Collapsible>
          <Card.Section>
            <Card />
          </Card.Section>
        </Collapsible>
      </Card>
    );
  };

  render() {
    const resourceName = {
      singular: "customer",
      plural: "customers"
    };

    const items = [
      {
        id: 341,
        url: "customers/341",
        name: "Mae Jemison",
        location: "Decatur, USA"
      },
      {
        id: 256,
        url: "customers/256",
        name: "Ellen Ochoa",
        location: "Los Angeles, USA"
      }
    ];

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

    return (
      <Page fullWidthtitle="Ph2Shopify" forceRender>
        <Stack distribution="trailing">
          <Button primary>Upload</Button>
        </Stack>
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
export default Index;

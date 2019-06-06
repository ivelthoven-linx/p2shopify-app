import React from "react";
import {
  Layout,
  Page,
  Card,
  Thumbnail,
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
  DropZone
} from "@shopify/polaris";

class Information extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      state: 0,
      files: [],
      rejectedFiles: [],
      hasError: false,
      isFirst: this.props.isFirst
    };
  }

  render() {
    const { files, hasError, rejectedFiles } = this.state;

    const fileUpload = !files.length && <DropZone.FileUpload />;
    const uploadedFiles = files.length > 0 && (
      <Stack vertical>
        {files.map((file, index) => (
          <Stack alignment="center" key={index}>
            <Thumbnail
              size="small"
              alt={file.name}
              source={window.URL.createObjectURL(file)}
            />
            <div>
              {file.name} <Caption>{file.size} bytes</Caption>
            </div>
          </Stack>
        ))}
      </Stack>
    );

    const errorMessage = hasError && (
      <Banner
        title="The following images couldn’t be uploaded:"
        status="critical"
      >
        <List type="bullet">
          {rejectedFiles.map((file, index) => (
            <List.Item key={index}>
              {`"${
                file.name
              }" is not supported. File type must be .gif, .jpg, .png or .svg.`}
            </List.Item>
          ))}
        </List>
      </Banner>
    );
    if (this.state.state === 0) {
      return (
        <Page title="Phomas">
          <Layout>
            <Layout.Section>
              <Card sectioned>
                <Card.Section>
                  <Stack>
                    <Stack.Item fill>
                      <Heading element="h1">Welcome to,</Heading>
                      <DisplayText size="extraLarge">Phomas</DisplayText>
                    </Stack.Item>
                    <Stack.Item>
                      <div style={{ height: "100px" }}>
                        <Pagination
                          // hasPrevious
                          // previousKeys={[74]}
                          // onPrevious={() => {
                          //   console.log("Previous");
                          // }}
                          hasNext
                          nextKeys={[75]}
                          onNext={() => {
                            this.setState({ state: 1 });
                          }}
                        />
                      </div>
                    </Stack.Item>
                  </Stack>
                </Card.Section>
                <Card.Section>
                  <TextContainer spacing="loose">
                    <p>
                      To empower your e-commerce sales and reduce costs, Linx
                      developed Phomas. A unique solution to manage the process
                      of E-commerce photography. Including an online retouch and
                      approval workflow and automated image conversion and
                      delivery. Get the max out of your web shop and reduce
                      returns by displaying the most photo realistic imagery.
                      Boost sales by speeding up the process. Phomas delivers!
                      Phomas is an integrated and highly configurable Cloud
                      Solution. Connect your photographers and your photo
                      retouch company. Deliver to your own web shop or these of
                      affiliates. Auto crop imagery based on business logic.
                      Phomas gives you the control you need to benifit most of
                      your e-commerce channel.
                    </p>
                  </TextContainer>
                  <Layout>
                    <video
                      autoPlay="autoplay"
                      loop="loop"
                      controls="controls"
                      width="500"
                      height="400"
                    >
                      <source
                        type="video/mp4"
                        src="https://phomas.com/Media/Default/Video/Phomas-PhotoShootManagement-HD.mp4"
                      />
                    </video>
                  </Layout>
                </Card.Section>
                <Layout>
                  <Link url="https://help.shopify.com/manual" external>
                    Get more detailed information at phomas.com
                  </Link>
                </Layout>
              </Card>
            </Layout.Section>
          </Layout>
        </Page>
      );
    } else if (this.state.state === 1) {
      return (
        <Page>
          <Layout>
            <Layout.Section>
              <Card sectioned>
                <Card.Section>
                  <Stack alignment="center">
                    <Stack.Item fill>
                      <DisplayText size="extraLarge">
                        Functionalities
                      </DisplayText>
                    </Stack.Item>
                    <Stack.Item>
                      <div style={{ height: "100px" }}>
                        <Pagination
                          hasPrevious
                          previousKeys={[74]}
                          onPrevious={() => {
                            this.setState({ state: 0 });
                          }}
                          hasNext
                          nextKeys={[75]}
                          onNext={() => {
                            this.setState({ state: 2 });
                          }}
                        />
                      </div>
                    </Stack.Item>
                  </Stack>
                </Card.Section>
                <Card.Section>
                  {/* ------------------------------------ */}
                  <TextContainer spacing="loose">
                    <Layout section={true}>
                      <Stack alignment="center">
                        <Layout.Section>
                          <Heading element="h1">Main image</Heading>
                          <br />
                        </Layout.Section>
                      </Stack>

                      <p>
                        The first image for each product is known as the
                        featured, or main, image. The featured image is shown on
                        collection pages, the cart page, the checkout page, and
                        your home page. Product images are displayed on your
                        online store to let your customers see what your
                        products look like. The images are also used on Shopify
                        POS and other sales channels. The best file type for
                        most product images is JPEG.
                      </p>
                    </Layout>
                  </TextContainer>
                  <br />
                  <hr />
                  <br />
                  {/* ------------------------------------ */}
                  <TextContainer spacing="loose">
                    <Layout section={true}>
                      <Stack alignment="center">
                        <Layout.Section>
                          <Heading element="h1">H-over</Heading>
                          <br />
                        </Layout.Section>
                      </Stack>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eros sapien, lacinia at lacus sit amet, aliquet
                        malesuada diam. Integer congue nibh non ipsum ornare
                        iaculis. Nulla ut scelerisque tortor. Nulla pharetra sem
                        rutrum diam ornare congue. Fusce eget ullamcorper massa.
                        Mauris porttitor dictum dapibus. Ut faucibus varius
                        pharetra. Proin sed rutrum odio.
                      </p>
                    </Layout>
                  </TextContainer>
                  <br />
                  <hr />
                  <br />
                  {/* -------------------------------- */}
                  <TextContainer spacing="loose">
                    <Layout section={true}>
                      <Stack alignment="center">
                        <Layout.Section>
                          <Heading element="h1">
                            Add multiple variant images
                          </Heading>
                          <br />
                        </Layout.Section>
                      </Stack>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eros sapien, lacinia at lacus sit amet, aliquet
                        malesuada diam. Integer congue nibh non ipsum ornare
                        iaculis. Nulla ut scelerisque tortor. Nulla pharetra sem
                        rutrum diam ornare congue. Fusce eget ullamcorper massa.
                        Mauris porttitor dictum dapibus. Ut faucibus varius
                        pharetra. Proin sed rutrum odio.
                      </p>
                    </Layout>
                    <br />
                    <br />
                  </TextContainer>
                  <Layout>
                    <Link url="/snippets" external>
                      See code snippets
                    </Link>
                  </Layout>
                  {/* -------------------------------- */}
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        </Page>
      );
    } else if (this.state.state === 2) {
      return (
        <Page>
          <Layout>
            <Layout.Section>
              <Card sectioned>
                <Card.Section>
                  <Stack alignment="center">
                    <Stack.Item fill>
                      <DisplayText size="extraLarge">
                        Final information
                      </DisplayText>
                    </Stack.Item>
                    <Stack.Item>
                      <div style={{ height: "100px" }}>
                        <Pagination
                          hasPrevious
                          previousKeys={[74]}
                          onPrevious={() => {
                            this.setState({ state: 1 });
                          }}
                          // hasNext
                          // nextKeys={[75]}
                          onNext={() => {
                            this.setState({ state: 2 });
                          }}
                        />
                      </div>
                    </Stack.Item>
                  </Stack>
                </Card.Section>
                <Card.Section>
                  {/* ------------------------------------ */}
                  <TextContainer spacing="loose">
                    <Layout section={true}>
                      <Stack alignment="center">
                        <Layout.Section>
                          <Heading element="h1">File naming</Heading>
                          <br />
                        </Layout.Section>
                      </Stack>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eros sapien, lacinia at lacus sit amet, aliquet
                        malesuada diam. Integer congue nibh non ipsum ornare
                        iaculis. Nulla ut scelerisque tortor. Nulla pharetra sem
                        rutrum diam ornare congue. Fusce eget ullamcorper massa.
                        Mauris porttitor dictum dapibus. Ut faucibus varius
                        pharetra. Proin sed rutrum odio.
                      </p>
                    </Layout>
                  </TextContainer>
                  <br />
                  <hr />
                  <br />
                  {/* ------------------------------------ */}
                  <TextContainer spacing="loose">
                    <Layout section={true}>
                      <Stack alignment="center">
                        <Layout.Section>
                          <Heading element="h1">
                            Information about the trial version
                          </Heading>
                          <br />
                        </Layout.Section>
                      </Stack>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin eros sapien, lacinia at lacus sit amet, aliquet
                        malesuada diam. Integer congue nibh non ipsum ornare
                        iaculis. Nulla ut scelerisque tortor. Nulla pharetra sem
                        rutrum diam ornare congue. Fusce eget ullamcorper massa.
                        Mauris porttitor dictum dapibus. Ut faucibus varius
                        pharetra. Proin sed rutrum odio.
                      </p>
                    </Layout>
                  </TextContainer>
                  {/* ------------------------------------ */}
                  {this.state.isFirst && (
                    <div>
                      <br />
                      <hr />
                      <br />
                      <TextContainer spacing="loose">
                        <Layout section={true}>
                          <Stack alignment="center">
                            <Layout.Section>
                              <Heading element="h1">
                                Upload your first image!
                              </Heading>
                            </Layout.Section>
                          </Stack>
                        </Layout>
                      </TextContainer>
                      <br />
                      <Stack vertical>
                        {errorMessage}
                        <DropZone
                          accept="image/*"
                          type="image"
                          onDrop={(files, acceptedFiles, rejectedFiles) => {
                            this.setState({
                              files: [...this.state.files, ...acceptedFiles],
                              rejectedFiles: rejectedFiles,
                              hasError: rejectedFiles.length > 0
                            });
                          }}
                        >
                          {uploadedFiles}
                          {fileUpload}
                        </DropZone>
                        <br />
                        <Layout>
                          <Button primary>Submit</Button>
                        </Layout>
                      </Stack>
                    </div>
                  )}
                  {/* -------------------------------- */}
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        </Page>
      );
    }
  }
}

export default Information;

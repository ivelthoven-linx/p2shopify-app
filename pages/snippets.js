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
  Popover,
  ActionList
} from "@shopify/polaris";
import React from "react";

class Index extends React.Component {
  render() {
    return (
      <Page
        forceRender={true}
        secondaryActions={[{ content: "Report Issue" }]}
        title="Snippets"
      >
        <Layout sectioned>
          <Card>
            <Card.Header
              actions={[
                {
                  content: "Collection-template at line 280"
                }
              ]}
              title="Hover-over"
            />
            <Card.Section>
              <TextContainer>
                <p>
                  This is used for the Product Listing Page. This will allow you
                  to have a second image shown on hover for each product which
                  has the corresponding hover-over image uploaded.
                </p>
              </TextContainer>
            </Card.Section>
            <Card.Section subdued>
              <p>
                <pre>
                  <code>
                    {`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
  const products = {
  {% for product in collection.products %}
    {{product.id}} : { 
     images: [
    {% for image in product.images %}
		{% assign just_url = image | img_url %}
     	{% assign url_pieces = just_url | split: "/" %}
      	{% assign url_pieces_size = url_pieces | size | minus: 1 %}
     	'{{just_url}}',
    {% endfor %}
     ]
    },
  {% endfor %}
      };
  console.log(products);
  
  const wrappers = $(".grid-view-item");
  wrappers.each(i => {
    const wrapper = $(wrappers[i]);
    const img = wrapper.find(".product-card__image-wrapper img");
    const classes = img.attr("class")
//     const productId = "gid://shopify/Product/" + img.data("linx-app-prod-id")
    
    //$.get(\`https://lx3ip.sse.codesandbox.io/check/hover?product_id=\${productId}\`, function(data) {
    
    const data = products[img.data("linx-app-prod-id")];
    //console.log(data);
    const hoverUrl = data.images.find((elm)=> { return elm.includes('hover') });
    
      if (hoverUrl) {
        img.before(\`<img 
		  id="linx_app_hover_\${img.data("linx-app-prod-id")}"
          class="\${classes}" 
style="display: none;max-width:\${img.css("max-width")};max-height:\${img.css(
                      "max-height"
                    )};"
          src="\${hoverUrl}"
			size="250px"
			data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"	
			data-sizes="auto" 
		>\`);
    	    
    
        const img2 = $(\`#linx_app_hover_\${img.data("linx-app-prod-id")}\`);
        let active = false;
        wrapper.mouseover(function() {
          if (!active) {
            active = true;
            img.fadeOut("slow");
          	img2.fadeIn("slow",function() {
              active=false
          	})
          }});
        wrapper.mouseout(function() {
          img2.fadeOut("slow", function() {
            console.log(img2);
//               img2.style.display = 'none';
          	});
          img.fadeIn("slow");
        });
      }
    //});
  });
  console.log("linx loaded");
</script>`}
                  </code>
                </pre>
              </p>
            </Card.Section>
          </Card>
          <Card>
            <Card.Header
              actions={[
                {
                  content: "-Coming soon-"
                }
              ]}
              title="Multiple Variant Images"
            />
            <Card.Section>
              <TextContainer>
                <p>
                  This is used for the Product Detail Page. This will allow you
                  to have a multiple main images for each variant.
                </p>
              </TextContainer>
            </Card.Section>
            <Card.Section subdued>
              <p>
                <pre>
                  <code />
                </pre>
              </p>
            </Card.Section>
          </Card>
        </Layout>
      </Page>
    );
  }
}

export default Index;

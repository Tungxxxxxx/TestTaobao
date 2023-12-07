import React from "react";
import { WebView } from "react-native-webview";
const script = `
var elementsToHide = document.getElementById("headerd");
elementsToHide.style.display = 'none';
var menu = document.getElementById("menu-24h-main-2023");
menu.style.display = 'none';
`;
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.webViewRef = null;
  }
  handleWebViewLoad = () => {
    if (this.webViewRef) {
      this.webViewRef.injectJavaScript(script);
    }
  };

  render() {
    const { searchUrl } = this.props.route.params;
    return (
      <WebView
        visible={false}
        // ref={webViewRef}a
        ref={(ref) => (this.webViewRef = ref)}
        source={{ uri: searchUrl }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={script}
        style={{ flex: 1 }}
        onLoad={this.handleWebViewLoad}
      />
    );
  }
}

export default Products;

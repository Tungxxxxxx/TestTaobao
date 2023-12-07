import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Button } from "react-native";
import { useState, useRef, useEffect } from "react";
import { WebView } from "react-native-webview";
import translate from "translate-google-api";
import { setNavigation } from "../redux/actions/setNavigation";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import cheerio from "react-native-cheerio";

export default function Home() {
  const [searchKey, setSearchKey] = useState(null);
  const [searchUrl, setSearchUrl] = useState(null);
  const navigation = useNavigation();
  const webViewRef = useRef(null);
  const productUrl =
    "https://item.taobao.com/item.htm?id=694368553460&spm=a2141.241046-vn.feeds.13&eurl=http://click.mz.simba.taobao.com/necpm&country=VN&itemIds=694368553460&scm=1007.35313.250647.0&mt=";

  const handleSearchChange = async (val) => {
    setSearchKey(val);
  };
  const handleClickSearch = async () => {
    const searchKeyTrans = await translateSearchKey(searchKey);
    console.log(searchKey);
    console.log(searchKeyTrans);
    const searchUrl = `https://s.taobao.com/search?catId=100&from=sea_1_searchbutton&q=${searchKeyTrans}&spm=a2141.241046-vn.searchbar.d_2_searchbox&tmhkh5=&type=p`;
    setSearchUrl(searchUrl);
    crawlData(searchUrl);
    //  navigation.navigate("Products", { searchUrl: searchUrl });

    WebBrowser.openBrowserAsync(searchUrl);
    // if (webViewRef.current) {
    //   // Sử dụng injectJavaScript để chạy đoạn mã JavaScript trong WebView
    //   const script = `
    //   var elementsToHide = document.getElementById("J_SiteNav");
    //   elementsToHide.style.display = 'none';
    // `;

    //   webViewRef.current.injectJavaScript(script);
    // }
  };
  const crawlData = (url) => {
    try {
      // Thực hiện yêu cầu HTTP để lấy HTML của trang web
      const response = axios.get(url).then(() => {
        const html = response.data;
        console.log(html);
      });
      // Sử dụng cheerio để phân tích HTML
      // const $ = cheerio.load(html);

      // Trích xuất thông tin từ HTML
      //  const title = $("title").text();
      // console.log("Title:", title);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const translateSearchKey = async (searchStr) => {
    const searchKeyTrans = await translate(searchStr, {
      // tld: "cn",
      to: "zh-cn",
    });
    return searchKeyTrans;
  };
  useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={{ width: "100%", height: 100 }}>
        <TextInput
          style={{ width: "100%", height: 50, backgroundColor: "pink" }}
          onChangeText={(val) => {
            handleSearchChange(val);
          }}
        />
        <Button title="Tìm kiếm" onPress={handleClickSearch} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

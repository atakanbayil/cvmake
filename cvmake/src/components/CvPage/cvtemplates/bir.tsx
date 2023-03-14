import { Image, Text, StyleSheet, Document, Page, Svg, Line, PDFViewer, View } from "@react-pdf/renderer";
import { Card } from "antd";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    padding: 10,
    border: "none",

  },
  info: {
    display: "flex",
    flexDirection: "column",
  },
  viewer: {
    padding: 0,
    marginTop: 15,
    width: "100%", //the pdf viewer will take up all of the width and height
    height: "69vh",
    border: "none",

  },
  foto: {
    width: "25vw",
    margin: 12,

  },
  p: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  txt: {
    margin: 7
  },
  title: {
    fontSize: "24px"
  }
});

export default function Bir(props: any) {

  return (
    <Card style={{ height: "80vh" }} >
      <PDFViewer showToolbar={true} style={styles.viewer}>
        <Document >
          <Page style={styles.page}>
            <div>
              <Text>{props.n.temel.name}</Text>
            </div>
         
          </Page>
        </Document>
        
      </PDFViewer>

    </Card>

  );
}
/*<PDFViewer style={styles.viewer}>*/

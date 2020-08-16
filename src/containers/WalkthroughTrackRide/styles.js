import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../Themes/";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.snow,
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT
  },

  slide: {
    flex:1,
    flexDirection: "column",
    justifyContent:'center',
  },

  buttongetstarted: {
    alignSelf: "center",
    justifyContent: "center",
    color: Colors.blue,
    fontWeight:'600'
  },

  signInbtn: {
    backgroundColor: 'white',
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 40,
    opacity:1,
    width: Metrics.WIDTH * 0.8,
    marginTop: 35
  },

  contentStyle: {
    backgroundColor: Colors.blue,
    flex:1,
    opacity:0.9,
    justifyContent:'center'
  },

  headertext: {
    textAlign: "center",
    alignSelf: "center",
    fontSize:30,
    fontWeight:'700',
    width: Metrics.WIDTH * 0.85,
    color:Colors.text,
    marginTop: Metrics.HEIGHT * 0.06
  },

  desctext: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 12,
    width: Metrics.WIDTH * 0.7,
    color:Colors.text,
    marginTop: Metrics.HEIGHT * 0.05
  },

  dot: {
    backgroundColor: Colors.transparent,
    borderWidth:1,
    borderColor:Colors.text,
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005,
    marginBottom: Metrics.HEIGHT * 0.005
  },

  activeDot: {
    backgroundColor: Colors.text,
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005,
    marginBottom: Metrics.HEIGHT * 0.005
  }
});

export default styles;

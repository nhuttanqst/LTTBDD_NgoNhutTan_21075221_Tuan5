import { Text, View } from "react-native";

const Screen_04 = () => {
  const [data, setData] = useState([
    {
      id: 1,
      thumbnail: require("../assets/DATA/Image 7 (2).png"),
      largeImage: require("../assets/DATA/Container 7 (2).png"),
      productName: "Candy",
      description: "Candy is sweet, colorful, various flavors, fun snack treat",
      price: 2.59,
      rating: 4.5,
    },
    {
      id: 2,
      thumbnail: require("../assets/DATA/Image 7 (1).png"),
      largeImage: require("../assets/DATA/Container 7 (1).png"),
      productName: "Orange",
      description: "Orange is a juicy, sweet fruit, rich in vitamin C",
      price: 1.99,
      rating: 5,
    },
    {
      id: 3,
      thumbnail: require("../assets/DATA/Image 7 (4).png"),
      largeImage: require("../assets/DATA/Container 7 (4).png"),
      productName: "Donut",
      description: "Donut is a sweet, delicious, deep-fried dessert",
      price: 2.99,
      rating: 4.5,
    },
    {
      id: 4,
      thumbnail: require("../assets/DATA/Image 7.png"),
      largeImage: require("../assets/DATA/Container 7.png"),
      productName: "Cherry",
      description: "Cherry is a small, round, sweet fruit",
      price: 1.49,
      rating: 4.9,
    },
  ]);

  return (
    <View>
      <Text>Screen 04</Text>
    </View>
  );
};

export default Screen_04;

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { IFavouriteProductsResponse } from "@/constants";
import { HeartOff, MinusIcon } from "lucide-react-native";

type DrinkFavouriteProps = {
  drinks: IFavouriteProductsResponse | null;
  modalVisible: boolean;
  handleModalClose: () => void;
  handleUnlike: (productId: string) => void;
  userId: string;
};

export const DrinkFavourite: React.FC<DrinkFavouriteProps> = ({
  drinks,
  modalVisible,
  handleModalClose,
  handleUnlike,
  userId,
}) => {
  const extractFavouriteProductId = (
    userId: string,
    productId: string
  ): string | undefined => {
    const matched = drinks?.favouriteProducts.find(
      (drink) => drink.userId === userId && drink.productId === productId
    );
    return matched?.id;
  };

  const renderItem = ({
    item,
  }: {
    item: { id: string; imageUrl: string; title: string; price: number };
  }) => {
    return (
      <View
        className="relative rounded-2xl p-3 shadow-lg bg-white flex-row items-center gap-4 mb-2"
        key={item.id}
      >
        <View className="w-1/3 h-32 rounded-lg">
          <Image
            source={{ uri: item.imageUrl }}
            className="w-full h-full rounded-2xl"
            resizeMode="contain"
          />
        </View>
        <View className="flex-1 flex-row items-center justify-between">
          <View className="flex-col gap-2 max-w-[160px]">
            <Text className="font-semibold">{item.title}</Text>
            <Text>{item.price.toLocaleString("vi-VN")}đ</Text>
          </View>
          <TouchableOpacity
            className="w-8 h-8 p-[2px] rounded-full flex items-center justify-center"
            onPress={() => {
              const favId = extractFavouriteProductId(userId, item.id);
              if (favId) {
                handleUnlike(favId);
              }
            }}
          >
            <HeartOff size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={handleModalClose}
    >
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="w-full h-full bg-gray-100">
          <View className="flex-row items-center justify-between px-4 py-2 bg-white mb-4">
            <View className="w-8 h-8" />
            <Text className="font-bold text-xl text-center flex-1">
              Sản phẩm yêu thích
            </Text>
            <TouchableOpacity
              className="w-8 h-8 rounded-full items-center justify-center"
              onPress={handleModalClose}
            >
              <MinusIcon size={24} color="black" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={(drinks?.products as Array<any>) || []}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 10 }}
            ListEmptyComponent={
              <View className="flex-1 items-center justify-center h-full mt-5">
                <Text className="text-lg text-gray-500">Chưa có sản phẩm</Text>
              </View>
            }
          />
        </View>
      </View>
    </Modal>
  );
};

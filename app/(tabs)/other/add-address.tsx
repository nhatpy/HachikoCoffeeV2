import {
    View, Text, Image, TouchableOpacity, TextInput, Pressable,
    Platform, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import CustomDropDown from '@/components/OtherScreen/CustomDropDown';

export default function AddAdress() {
    const navigation = useNavigation();

    const [address, setAddress] = useState("");
    const [building, setBuilding] = useState("");
    const [gate, setGate] = useState("");
    const [note, setNote] = useState("");
    const [recipientName, setRecipientName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const typeList = [
        { label: "Nhà", value: "home" },
        { label: "Cơ quan", value: "company" },
        { label: "Gym", value: "gym" },
    ];

    const onPress = () => {

    }

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Thêm địa chỉ mới",
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
                borderBottomWidth: 10,
                borderBottomColor: '#000000',
                backgroundColor: 'white',
            },
        });
    }, [navigation]);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1 bg-white"
            >
                <ScrollView
                    contentContainerStyle={{ paddingBottom: 20 }}
                    keyboardShouldPersistTaps="handled"
                    nestedScrollEnabled={true}
                >
                    <View className="py-5 px-7">
                        <View>
                            <View style={{ zIndex: 1000 }}>
                                <Text className="text-[16px] text-gray-500 font-semibold">Loại địa chỉ</Text>
                                <CustomDropDown items={typeList} placeholder="Nhà / Cơ quan / Gym" />
                            </View>
                            <View>
                                <Text className="text-[16px] text-gray-500 font-semibold mt-[15px]">Địa chỉ*</Text>
                                <TextInput
                                    placeholder="Nhập địa chỉ"
                                    className="p-[10px] border border-gray-300 rounded-[10px] text-[16px] bg-white mt-[10px]"
                                    value={address}
                                    onChangeText={setAddress}
                                />
                            </View>
                            <View>
                                <Text className="text-[16px] text-gray-500 font-semibold mt-[15px]">Tòa nhà, số tầng</Text>
                                <TextInput
                                    placeholder="Tòa nhà, số tầng"
                                    className="p-[10px] border border-gray-300 rounded-[10px] text-[16px] bg-white mt-[10px]"
                                    value={building}
                                    onChangeText={setBuilding}
                                />
                            </View>
                            <View>
                                <Text className="text-[16px] text-gray-500 font-semibold mt-[15px]">Cổng</Text>
                                <TextInput
                                    placeholder="Cổng"
                                    className="p-[10px] border border-gray-300 rounded-[10px] text-[16px] bg-white mt-[10px]"
                                    value={gate}
                                    onChangeText={setGate}
                                />
                            </View>
                            <View>
                                <Text className="text-[16px] text-gray-500 font-semibold mt-[15px]">Ghi chú khác</Text>
                                <TextInput
                                    placeholder="Hướng dẫn giao hàng"
                                    className="p-[10px] border border-gray-300 rounded-[10px] text-[16px] bg-white mt-[10px]"
                                    value={note}
                                    onChangeText={setNote}
                                />
                            </View>
                            <View>
                                <Text className="text-[16px] text-gray-500 font-semibold mt-[15px]">Tên người nhận</Text>
                                <TextInput
                                    placeholder="Hoàng Phan"
                                    className="p-[10px] border border-gray-300 rounded-[10px] text-[16px] bg-white mt-[10px]"
                                    value={recipientName}
                                    onChangeText={setRecipientName}
                                />
                            </View>
                            <View>
                                <Text className="text-[16px] text-gray-500 font-semibold mt-[15px]">Số điện thoại</Text>
                                <TextInput
                                    placeholder="09312"
                                    className="p-[10px] border border-gray-300 rounded-[10px] text-[16px] bg-white mt-[10px]"
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    keyboardType="phone-pad"
                                />
                            </View>
                            <TouchableOpacity className='bg-gray-200 py-4 px-5 rounded-[10px] items-center mt-[15px]'>
                                <Text className='text-white text-[16px] font-bold'>Thêm mới</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Divider, Layout, Text} from '@ui-kitten/components';
import {ConnectScreenProps} from '../../navigation/connect.navigator';
import {Toolbar} from '../../components/toolbar.component';
import {SafeAreaLayout, SafeAreaLayoutElement, SaveAreaInset,} from '../../components/safe-area-layout.component';
import {MenuIcon} from '../../assets/icons';
import QRCodeScanner from 'react-native-qrcode-scanner';

const PendingView = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text>Waiting</Text>
    </View>
);

const scannerRef: React.RefObject<QRCodeScanner> = React.createRef();
const reset = () => {
    if (scannerRef.current instanceof QRCodeScanner) {
        scannerRef.current.reactivate();
    }
}

const barcodeRecognized = (barcode) => {
    Alert.alert(
        "Connecting",
        barcode.data,
        [
            {text: "Cancel", onPress: reset, style: "cancel"},
            {text: "OK", onPress: reset}
        ],
    );
};

export const ConnectScreen = (props: ConnectScreenProps): SafeAreaLayoutElement => (

    <SafeAreaLayout
        style={styles.safeArea}
        insets={SaveAreaInset.TOP}>
        <Toolbar
            title='poop'
            backIcon={MenuIcon}
            onBackPress={props.navigation.toggleDrawer}
        />
        <Divider/>
        <Layout style={styles.container}>
            <QRCodeScanner
                ref={scannerRef}
                reactivateTimeout={2}
                showMarker={true}
                fadeIn={false}
                onRead={barcodeRecognized}>
                {({_, status}) => {
                    if (status !== 'READY') return <PendingView/>;
                }}
            </QRCodeScanner>
        </Layout>
    </SafeAreaLayout>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});

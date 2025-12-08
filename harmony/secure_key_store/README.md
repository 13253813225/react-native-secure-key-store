> 模板版本：v0.2.2

<p align="center">
  <h1 align="center"> <code>react-native-secure-key-store</code> </h1>
</p>
<p align="center">
    <a href="https://github.com/ovr/react-native-secure-key-store">
        <img src="https://img.shields.io/badge/platforms-android%20|%20ios%20|%20harmony%20-lightgrey.svg" alt="Supported platforms" />
    </a>
    <a href="https://github.com/ovr/react-native-secure-key-store/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
    </a>
</p>

> [!TIP] [Github 地址](https://github.com/react-native-oh-library/react-native-secure-key-store)

## 安装与使用
请到三方库的 Releases 发布地址查看配套的版本信息：

| 三方库版本 | 发布信息 | 支持RN版本 |
| ---------- | ------------------------------------------------------------ | ---------- |
| 2.6.1      | [@react-native-ohos/react-native-secure-key-store Releases](https://github.com/react-native-oh-library/react-native-secure-key-store/releases) | 0.72，0.77       |

对于未发布到npm的旧版本，请参考[安装指南](/zh-cn/tgz-usage.md)安装tgz包。

进入到工程目录并输入以下命令：

<!-- tabs:start -->

#### **npm**

```bash
# V2.6.1
npm install @react-native-ohos/react-native-secure-key-store 目前无
```

#### **yarn**

```bash
# V2.6.1
yarn add @react-native-ohos/react-native-secure-key-store 目前无
```

<!-- tabs:end -->

下面的代码展示了这个库的基本使用场景：

> [!WARNING] 使用时 import 的库名不变。

```ts
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, ScrollView, TouchableOpacity } from "react-native";
import RNSecureKeyStore, { ACCESSIBLE } from "react-native-secure-key-store";
const AppDemo: React.FC = () => {
  const [key, setKey] = useState<string>("key1");
  const [value, setValue] = useState<string>("value1");
  const [log, setLog] = useState<string>("");
  const handleSet = async () => {
    try {
      const res = await RNSecureKeyStore.set(key, value);
      setLog(prevLog => prevLog + `Set: key=${key}, value=${value}, res=${res}\n`);
      console.log("set res:", key, value, res);
    } catch (err) {
      Alert.alert("Set Error", JSON.stringify(err));
    }
  };

  const handleGet = async () => {
    try {
      const res = await RNSecureKeyStore.get(key);
      setLog(prevLog => prevLog + `Get: key=${key}, value=${value}, res=${res}\n`);
    } catch (err) {
      Alert.alert("Get Error", JSON.stringify(err));
    }
  };

  const handleRemove = async () => {
    try {
      const res = await RNSecureKeyStore.remove(key);
      setLog(prevLog => prevLog + `Remove: key=${key}, value=${value}, res=${res}\n`);
    } catch (err) {
      Alert.alert("Remove Error", JSON.stringify(err));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>React - Native SecureKeyStore Demo</Text>

      <View style={{ width: "90%", marginTop: 16 }}>
        <Text>Key</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={key}
            onChangeText={setKey}
            style={styles.input}
            placeholder="输入 key"
            autoCapitalize="none"
          />
          {key.length > 0 && (
            <TouchableOpacity onPress={() => setKey("")} style={styles.clearBtn}>
              <Text style={styles.clearText}>×</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={{ marginTop: 8 }}>Value</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.input}
            placeholder="输入 value"
          />
          {value.length > 0 && (
            <TouchableOpacity onPress={() => setValue("")} style={styles.clearBtn}>
              <Text style={styles.clearText}>×</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12 }}>
          <View style={{ flex: 1, marginRight: 6 }}>
            <Button title="Set" onPress={handleSet} />
          </View>
          <View style={{ flex: 1, marginLeft: 6 }}>
            <Button title="Get" onPress={handleGet} />
          </View>
          <View style={{ flex: 1, marginLeft: 6 }}>
            <Button title="Remove" onPress={handleRemove} color="#d9534f" />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginTop: 16 }}>
        <Text style={{ fontWeight: "600" }}>Log</Text>
        <Button title="Clear Log" onPress={() => setLog("")} />
      </View>
      <ScrollView style={styles.log} contentContainerStyle={{ padding: 8 }}>
        <Text>{ log || "No logs yet"}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40,
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginTop: 4,
    height: 40,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  clearBtn: {
    marginLeft: 5,
    padding: 5,
  },
  clearText: {
    fontSize: 18,
    color: '#999',
  },
  log: {
    marginTop: 12,
    width: "90%",
    maxHeight: 200,
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 4,
  },
});

export default AppDemo;
```

## 约束与限制

### 兼容性

要使用此库，需要使用正确的 React-Native 和 RNOH 版本。另外，还需要使用配套的 DevEco Studio 和 手机 ROM。

请到三方库相应的 Releases 发布地址查看 Release 配套的版本信息：

| 三方库版本 | 发布信息                                                     | 支持RN版本 |
| ---------- | ------------------------------------------------------------ | ---------- |
| 2.6.1      | [@react-native-ohos/react-native-secure-key-store Releases](https://github.com/react-native-oh-library/react-native-secure-key-store/releases) | 0.72，0.77   目前无       |

## 技术实现

### 安全存储机制

HarmonyOS 版本使用以下技术实现安全存储：

1. **HUKS (HarmonyOS Universal KeyStore)**
   - 使用 AES-256-GCM 加密算法
   - 密钥存储在系统级安全区域
   - 提供硬件级别的安全保护

2. **Preferences**
   - 用于存储加密后的数据
   - 数据以 JSON 格式存储（包含 cipherText, iv, authTag）

### 加密流程

```
原始数据 → AES-256-GCM 加密 → Base64 编码 → Preferences 存储
```

## API

```typescript
import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';

// 存储
await RNSecureKeyStore.set('key', 'value', { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY });

// 读取
const value = await RNSecureKeyStore.get('key');

// 删除
await RNSecureKeyStore.remove('key');

// 设置应用卸载时是否重置
RNSecureKeyStore.setResetOnAppUninstallTo(false);
```

## 平台差异

| 功能 | HarmonyOS | iOS | Android |
|------|-----------|-----|---------|
| 加密算法 | AES-256-GCM | Keychain 系统加密 | AES-256-GCM |
| 密钥存储 | HUKS | Secure Enclave | Android KeyStore |
| accessible 选项 |  ❌ 忽略 | ✅ 完整支持 | ❌ 忽略 |
| setResetOnAppUninstallTo | ❌ 忽略 | ✅ 支持 |  ❌ 忽略 |


## 开源协议

本项目基于 [The MIT License (MIT)](https://github.com/ovr/react-native-secure-key-store/blob/master/LICENSE) ，请自由地享受和参与开源。


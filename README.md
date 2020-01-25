# Node UDP お試し
- UDP通信の挙動を確認するお試しツール

## Required

|  | Version |
| :--- | :--- |
| node | >= 12.13.0 |
| npm | >= 6.9.0 |
| yarn | >= 1.19.1 |

## Install

```
yarn install
yarn build
```

## Usage
- 別々のコンソールを立ち上げて、以下のコマンドを実行する

```
yarn start:a
yarn start:b --host 127.0.0.1 --port 3002
```

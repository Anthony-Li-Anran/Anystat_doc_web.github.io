# 安装部署

## 环境准备

- **操作系统**：Windows/Linux/MacOS
- **Python版本**：Python 3.9+（***必须安装，推荐安装 Python 3.11+***）
- **Anaconda**（***必须安装***）
- **Github Desktop**（***非必须，但推荐安装***）

## 安装步骤

**以下安装步骤均在终端中进行**。若未下载 Github Desktop，则不使用第一步，把从 Github 上下载的 `.zip` 文件在本地文件夹解压缩。

1. 克隆项目到本地

```bash
# 如果使用Github Desktop，在终端中执行以下命令
# 否则，直接从GitHub下载ZIP文件并解压

# 克隆项目
# gh repo clone ElvisWang1111/AAAAAnystat
```

2. 将工作目录转到 Anystat 本体文件所在文件夹

```bash
cd (your working directory)
```

其中将括号和之内的内容替换为 Anystat 的文件夹地址即可。

3. 创建虚拟环境

```bash
conda create --name Anystat
conda activate Anystat
```

4. 安装依赖项

```bash
pip install -r requirements.txt
pip install playwright
playwright install
```

## 安装常见问题及解决方案

### Q: 如何准备 Python 环境？

#### Windows 端

从 Python 的[官方站点](https://www.python.org/)下载版本在3.9及以上的安装包，安装时务必勾选 **Add Python 3.x to PATH**。安装后打开终端输入

```bash
python --version
```

只要输出

```bash
Python (*version*)
```

其中 `(*version*)` 是实际输出的版本，应不低于 3.9，则说明安装成功。

安装 Anaconda 也请在[官方站点](https://www.anaconda.com/download)进行下载。

#### Mac 端

Mac 一般有已安装的版本较低的 Python，安装的方法和 Windows 是类似的，详情请跳转至[官方站点](https://www.python.org/downloads/macos/)，下载 `.pkg` 文件并安装对应版本。

#### Linux 端

Linux （或 Ubuntu） 是有内置的 Python 的，只要在 Linux 内升级或检查版本即可。若要更新 Python， 请在终端中输入

```bash
sudo apt update
```

如果想要安装指定版本，则输入

```bash
sudo apt install python3.x
```

将 `3.x` 替换为你想要安装的版本即可。想要验证版本，以 Python 3.12.7 为例，输入

```bash
python3.12.7 --version
```

便可获得版本序列号。
# 首次启动与 API 配置

## 启动应用

1. 若虚拟环境没有启用（直接看终端的交互行最左侧是否有被圆括号包围的字母），则使用

```bash
conda activate Anystat
```

启用，这里的虚拟环境 `Anystat` 是在[安装部署](../installation.md)章节的“安装步骤”中创建好的。

2. 启动应用：

```bash
streamlit run app.py
```

3. 在浏览器中打开显示的地址（通常是 `http://localhost:8501` ），这一步通常不需要手动操作，但若没有响应则将终端中的地址粘贴至浏览器中 Enter 即可。

## API 配置

**本程序运行需要提供 API key 来请求大模型调用，费用由用户承担。** 目前支持的平台是 ChatGPT，Deepseek，通义千问和智谱AI。注意在使用前在左侧边栏选择相应的大模型并填入API key后保存。

API获取方法详见[API key获取途径](../resources.md#api-key获取途径)。

## 结束运行

在结束运行时直接关闭浏览器 **不会真正关闭端口，需要在运行的终端处按下 `Ctrl+C` 来关闭端口来结束进程**。此外，请输入

```bash
conda deactivate
```

以关闭虚拟环境。
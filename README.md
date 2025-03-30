# Document Processor MCP

A powerful document processing MCP (Model Context Protocol) that integrates with Claude to extract and process text from various document formats. Built with the [Unstructured API](https://unstructured.io/) for accurate document parsing and structure preservation.

## 🚀 Features

- **Multi-format Support**: Process PDFs, DOCX, PPTX, TXT, and image files.
- **Intelligent Extraction**: Preserve document structure and formatting.
- **LLM Integration**: Output formatted for Large Language Models.
- **Claude Desktop Integration**: Seamless processing within Claude.

## 🛠️ Quick Start

### 1️⃣ Prerequisites

- **Node.js** (v14+ recommended)
- **npm** (Node Package Manager)
- **Unstructured API Key** (Get it from [here](https://platform.unstructured.io/app/account/api-keys))
- **Claude Desktop** (Installed locally)

### 2️⃣ Installation
```sh
git clone https://github.com/yashshah1910/document-processor-mcp.git
cd document-processor-mcp
npm install
npm run build
```

### 3️⃣ Configuration

- Create a `.env` file in the root directory and add:
```sh
UNSTRUCTURED_API_KEY=your_api_key_here
```

- Set up Claude Desktop config:
```json
{
  "mcpServers": {
    "documentProcessorMcp": {
      "command": "node",
      "args": ["YOUR/ABSOLUTE/PATH/document-processor-mcp/dist/index.js"],
      "disabled": false
    }
  }
}
```
- Restart Claude Desktop after making changes.

## 🔧 Usage

1. Start Claude Desktop.
2. Provide the file path to your document in Claude.
3. The MCP will automatically:
   - Read the file from the provided path.
   - Extract text content.
   - Maintain document structure.
   - Clean and preprocess data.
   - Return LLM-ready output.

## 📁 Project Structure
```
document-processor-mcp/
├── dist/           # Compiled files
├── src/            # Source files
├── node_modules/   # Dependencies
├── .env            # Environment variables
└── package.json    # Project dependencies
```

Feel free to open pull requests to improve the project! 💙

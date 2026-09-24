import fs from "node:fs/promises";  
const filepath = "userdata.txt";

async function createFile(content) {
    try {
        await fs.writeFile(filepath, content, "utf-8");
        console.log("File created successfully");
    } catch (error) {
        console.log("Error in creating file:", error);
    }
}

async function readFile() {
    try {
        const data = await fs.readFile(filepath, "utf-8"); 
        console.log("File read successfully:", data);
        return data;
    } catch (error) {
        if (error.code === "ENOENT") {
            console.log("File not found");
        } else {
            console.log("Error in reading file:", error);
        }
    }
}
async function updateFile(content) {
    try {
        await fs.appendFile(filepath, content, "utf-8");  
        console.log("File updated successfully");
    } catch (error) {
        console.log("Error in updating file:", error);
    }
}

async function deleteFile() {
    try {
        await fs.unlink(filepath);
        console.log("File deleted successfully");
    } catch (error) {
        console.log("Error in deleting file:", error);
    }
}


async function runFileDemo() {
    await createFile("Hello, this is initial content.\n");
    await readFile();
    await updateFile("This is appended content.\n");
    await readFile();
    await deleteFile();
}



runFileDemo();
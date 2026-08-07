import { fileURLToPath } from "node:url";
import fileSystemPromises from "node:fs/promises";
import nodePath from "node:path";
import CleanCSS from "clean-css";
import { minify as minifyHtml } from "html-minifier-terser";

const currentModuleFilePath = fileURLToPath(import.meta.url);
const currentModuleDirectoryPath = nodePath.dirname(currentModuleFilePath);

const SOURCE_DIRECTORY = nodePath.join(currentModuleDirectoryPath, "src");
const DISTRIBUTION_DIRECTORY = nodePath.join(currentModuleDirectoryPath, "dist");

async function createDirectoryIfDoesNotExist(directoryPath) {
    try {
        await fileSystemPromises.mkdir(directoryPath, { recursive: true });
    } catch (directoryCreationError) {
        throw directoryCreationError;
    }
}


async function minifyCssFile(sourceFileName, destinationFileName) {
    const sourcePath = nodePath.join(SOURCE_DIRECTORY, sourceFileName);
    const destinationPath = nodePath.join(DISTRIBUTION_DIRECTORY, destinationFileName);

    const rawCssContent = await fileSystemPromises.readFile(sourcePath, "utf-8");
    const cssMinifier = new CleanCSS({
        level: 0
    });
    const minificationOutput = cssMinifier.minify(rawCssContent);

    if (minificationOutput.errors.length > 0) {
        throw new Error(minificationOutput.errors.join("\n"));
    }

    await fileSystemPromises.writeFile(destinationPath, minificationOutput.styles, "utf-8");
}

async function minifyHtmlFile(sourceFileName, destinationFileName) {
    const sourcePath = nodePath.join(SOURCE_DIRECTORY, sourceFileName);
    const destinationPath = nodePath.join(DISTRIBUTION_DIRECTORY, destinationFileName);

    const rawHtmlContent = await fileSystemPromises.readFile(sourcePath, "utf-8");
    const minifiedHtmlContent = await minifyHtml(rawHtmlContent, {
        collapseWhitespace: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: false
    });

    await fileSystemPromises.writeFile(destinationPath, minifiedHtmlContent, "utf-8");
}

async function runBuildPipeline() {
    try {
        await createDirectoryIfDoesNotExist(DISTRIBUTION_DIRECTORY);

        await minifyCssFile("styles.css", "styles.css");

        const htmlFilesToProcess = [
            { source: "front-production.html", destination: "front-production.html" },
            { source: "front-recognition.html", destination: "front-recognition.html" },
            { source: "back.html", destination: "back.html" }
        ];

        for (const filePair of htmlFilesToProcess) {
            await minifyHtmlFile(filePair.source, filePair.destination);
        }

    } catch (pipelineError) {
        process.exit(1);
    }
}

runBuildPipeline();
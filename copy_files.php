<?php
// Configuration
$projectDirectory = 'C:\xampp\htdocs\subdomain-shop';
$outputFile = 'Components_content.txt';

// Get files from different directories
//$htmlFiles = glob($projectDirectory . '/*.html');
$jsFiles = glob($projectDirectory . '/js/*.js');
//$cssFiles = glob($projectDirectory . '/css/*.js');

// Add additional files manually
$additionalFiles = [
    'C:\xampp\htdocs\subdomain-logitech\js\product-page.js',
    'C:\xampp\htdocs\subdomain-new-standards\js\cart-page.js',
    'C:\xampp\htdocs\subdomain-new-standards\js\app.js',
    'C:\xampp\htdocs\subdomain-logitech\js\products-page.js',


//    'C:\xampp\htdocs\subdomain-new-standards\index.html',
//    'C:\xampp\htdocs\subdomain-new-standards\js\categories.js',
//    'C:\xampp\htdocs\subdomain-new-standards\js\products.js',
//    'C:\xampp\htdocs\subdomain-new-standards\js\cart-page.js',
//    'C:\xampp\htdocs\subdomain-new-standards\js\ecommerce-whatsapp.js',
//    'C:\xampp\htdocs\subdomain-new-standards\product.html',
//    'C:\xampp\htdocs\subdomain-new-standards\cart.html',
//    'C:\xampp\htdocs\subdomain-new-standards\js\ecommerce-core.js',
//    'C:\xampp\htdocs\subdomain-new-standards\js\alpine-product-viewer.js',
//    'C:\xampp\htdocs\subdomain-new-standards\js\app.js',
//    'C:\xampp\htdocs\subdomain-new-standards\checkout.html',
//    'C:\xampp\htdocs\subdomain-new-standards\js\app.js',
//    'C:\xampp\htdocs\subdomain-shop\js\main.js',
    // Add other important files you want to include
];

// Merge all files into one array
$allFiles = $jsFiles;
//$allFiles = array_merge($jsFiles, $cssFiles, $additionalFiles);

// Remove duplicates (in case some files were included in both glob and manual list)
$allFiles = array_unique($allFiles);

// Initialize content string
$finalContent = '';

// Process each file
foreach ($additionalFiles as $index => $targetFile) {
    // Check if file exists
    if (!file_exists($targetFile)) {
        echo "Warning: File does not exist: {$targetFile}\n";
        continue;
    }

    // Read the content of the target file
    $content = file_get_contents($targetFile);
    if ($content === false) {
        echo "Error: Unable to read the file {$targetFile}\n";
        continue;
    }

    // Add file path header
    $fileContent = "File Path: {$targetFile}\n\n" . $content;

    // Add to final content with separator (except for the first file)
    if ($index > 0) {
        $finalContent .= "\n\n\n\n\n\n"; // 6 new lines as separator
    }
    $finalContent .= $fileContent;
}

// Write the combined content to the output file
if (!empty($finalContent)) {
    $result = file_put_contents($outputFile, $finalContent);
    if ($result === false) {
        echo "Error: Unable to write to the file {$outputFile}\n";
    } else {
        echo "Successfully copied the content of " . count($additionalFiles) . " files to {$outputFile}\n";
    }
} else {
    echo "Error: No content was retrieved from the files\n";
}

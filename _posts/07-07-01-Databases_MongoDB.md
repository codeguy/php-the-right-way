---
isChild: true
title:   MongoDB
anchor:  databases_mongodb
---

## MongoDB {#databases_mongodb_title}

[MongoDB][1] is a leading NoSQL database that stores data in JSON-like documents, providing flexibility and scalability for various application needs. MongoDB can support multiple data models, making it versatile for different use cases.

### Features of MongoDB

- **Document Model**: Uses a JSON-like format to store data, which is more expressive and flexible.
- **Scalability**: Supports horizontal scaling through sharding.
- **Aggregation Framework**: Powerful querying and data aggregation capabilities.
- **High Performance**: Optimized for read and write operations.
- **Advanced Indexing**: MongoDB offers a comprehensive range of indexing options, including standard compound indexes, text indexes, vector indexes, and geospatial indexes.
- **Multi-Model Support**: MongoDB can support key-value, graph, and time-series data models, providing a comprehensive solution for various data needs.

### MongoDB as a Multi-Model Database

- **Key-Value Data**: MongoDB's flexible schema allows it to efficiently store key-value pairs, making it suitable for caching and session storage.
- **Graph Data**: MongoDB supports graph processing and storage through its rich document model, enabling complex relationships and queries similar to graph databases.
- **Time-Series Data**: MongoDB's native support for time-series data, with features like time-series collections, makes it ideal for IoT, financial data, and other applications requiring efficient time-based data storage and querying.

### MongoDB and PHP

MongoDB provides a robust driver for PHP, enabling developers to interact with MongoDB databases from their PHP applications.

#### Installing the MongoDB PHP Driver

To install the MongoDB PHP extension, you can use the following commands:

```shell
# Install the MongoDB extension for PHP
sudo pecl install mongodb

# Enable the extension in your php.ini file
echo "extension=mongodb.so" >> <YOUR_PHP_INI_PATH>/php.ini
```

To install the MongoDB Driver, you can use the following command:
```shell
composer require mongodb/mongodb
```

#### Using the MongoDB PHP Library
Once the driver is installed, you can use the MongoDB PHP library to connect to your MongoDB database and perform operations. Here's an example:

```php
<?php
require 'vendor/autoload.php'; // Include Composer's autoloader

use MongoDB\Client;

// Replace the placeholder with your Atlas connection string
$uri = '<your-moggodb-connection-uri>';

// Create a new client and connect to the server
$client = new Client($uri);
try {
    $collection = $client->demo->beers;

    // Insert a document
    $result = $collection->insertOne(['name' => 'Hinterland', 'brewery' => 'Coopers', 'abv' => 5.5]);
    echo "Inserted with Object ID '{$result->getInsertedId()}'\n";

    // Query a document
    $beer = $collection->findOne(['name' => 'Hinterland']);
    echo "Beer: ", $beer['name'], " Brewery: ", $beer['brewery'], " ABV: ", $beer['abv'], "\n";
} catch (Exception $e) {
    printf("Caught exception: %s\n", $e->getMessage());
}
?>
```


For more information, refer to the official [MongoDB PHP documentation][2].

### MongoDB and PHP Frameworks

MongoDB integrates seamlessly with popular PHP frameworks such as Laravel and Symfony. This compatibility allows developers to leverage MongoDB's powerful features while using the familiar structures and tools provided by these frameworks. For detailed instructions on how to integrate MongoDB with Laravel, please refer to the [Laravel MongoDB Documentation][3]. Similarly, for Symfony users, comprehensive guidance is available in the [Symfony MongoDB Documentation][4].



[1]: https://www.mongodb.com/
[2]: https://www.mongodb.com/docs/drivers/php-drivers/
[3]: https://www.mongodb.com/docs/drivers/php/laravel-mongodb/
[4]: https://www.mongodb.com/docs/drivers/php-frameworks/symfony/

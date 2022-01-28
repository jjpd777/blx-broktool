<?php
header("Content-Type: text/html;charset=utf-8");
/**
 * Connect to the database
 *
 * @return bool false on failure / mysqli MySQLi object instance on success
 */

function db_connect()
{
    $connectstr_dbhost = '';
    $connectstr_dbname = '';
    $connectstr_dbusername = '';
    $connectstr_dbpassword = '';

/*    foreach ($_SERVER as $key => $value) {
        if (strpos($key, "MYSQLCONNSTR_localdb") !== 0) {
            continue;
        }
        $connectstr_dbhost = preg_replace("/^.*Data Source=(.+?);.*$/", "\\1", $value);
        $connectstr_dbname = preg_replace("/^.*Database=(.+?);.*$/", "\\1", $value);
        $connectstr_dbusername = preg_replace("/^.*User Id=(.+?);.*$/", "\\1", $value);
        $connectstr_dbpassword = preg_replace("/^.*Password=(.+?)$/", "\\1", $value);
    }*/

    $connection;
    $connection = mysqli_connect('localhost', 'gyo', 'G3tuonlin3', 'brokers_network');

    if (!$connection) {
        echo "Error: Unable to connect to MySQL." . PHP_EOL;
        echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
        echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
        exit;
    }

    mysqli_query($connection, "SET NAMES 'utf8'");
        
    // If connection was not successful, handle the error
    if ($connection === false) {
        // Handle error - notify administrator, log to a file, show an error screen, etc.
        return mysqli_connect_error();
    }
    return $connection;
}

/**
 * Query the database
 *
 * @param $query The query string
 * @return mixed The result of the mysqli::query() function
 */
function db_query($query)
{
    // Connect to the database
    $connection = db_connect();
    mysqli_query($connection, "SET NAMES 'utf8'");
    // Query the database
    $result = mysqli_query($connection, $query) or die(mysqli_error($connection));
    return $result;
}

/**
 * Fetch rows from the database (SELECT query)
 *
 * @param $query The query string
 * @return bool False on failure / array Database rows on success
 */
function db_select($query)
{
    $rows = array();
    $result = db_query($query);
    // If query failed, return `false`
    if ($result === false) {
        return false;
    }
    // If query was successful, retrieve all the rows into an array
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}


/**
 * Fetch the last error from the database
 *
 * @return string Database error message
 */
function db_error()
{
    $connection = db_connect();
    return mysqli_error($connection);
}

/**
 * Quote and escape value for use in a database query
 *
 * @param string $value The value to be quoted and escaped
 * @return string The quoted and escaped string
 */
function db_quote($value)
{
    $connection = db_connect();
    return "'" . mysqli_real_escape_string($connection, $value) . "'";
}

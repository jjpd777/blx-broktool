<?php

$connectstr_dbhost = '';
$connectstr_dbname = '';
$connectstr_dbusername = '';
$connectstr_dbpassword = '';

foreach ($_SERVER as $key => $value) {
    if (strpos($key, "MYSQLCONNSTR_localdb") !== 0) {
        continue;
    }

    $connectstr_dbhost = preg_replace("/^.*Data Source=(.+?);.*$/", "\\1", $value);
    $connectstr_dbname = preg_replace("/^.*Database=(.+?);.*$/", "\\1", $value);
    $connectstr_dbusername = preg_replace("/^.*User Id=(.+?);.*$/", "\\1", $value);
    $connectstr_dbpassword = preg_replace("/^.*Password=(.+?)$/", "\\1", $value);
}


//connection variables
$host = $connectstr_dbhost;
$database = $connectstr_dbname;
$user = $connectstr_dbusername;
$pass = $connectstr_dbpassword;

//connection to the database
$conn = mysqli_connect($host, $user, $pass)
or die ('cannot connect to the database: ' . mysqli_error($conn));

//select the database
mysqli_select_db($conn, $database) or die ('cannot select database: ' . mysqli_error($conn));

//loop to show all the tables and fields
$loop = mysqli_query($conn, "SHOW tables FROM $database") or die ('cannot select tables');

while($table = mysqli_fetch_array($loop))
{

    echo "<table cellpadding=\"2\" cellspacing=\"2\" border=\"0\" width=\"75%\">
            <tr bgcolor=\"#666666\">
                <td colspan=\"5\" align=\"center\"><b><font color=\"#FFFFFF\">" . $table[0] . "</font></td>
            </tr>
            <tr>
                <td>Field</td>
                <td>Type</td>
                <td>Key</td>
                <td>Default</td>
                <td>Extra</td>
            </tr>";

    $i = 0; //row counter
    $row = mysqli_query($conn, "SHOW columns FROM " . $table[0]) or die ('cannot select table fields');

    while ($col = mysqli_fetch_array($row))
    {
        echo "<tr";

        if ($i % 2 == 0)
            echo " bgcolor=\"#CCCCCC\"";

        echo ">
            <td>" . $col[0] . "</td>
            <td>" . $col[1] . "</td>
            <td>" . $col[2] . "</td>
            <td>" . $col[3] . "</td>
            <td>" . $col[4] . "</td>
        </tr>";

        $i++;
    } //end row loop

    echo "</table><br/><br/>";
} //end table loop
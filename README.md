# (Windows Only) HTA Installer
  This HTA installer will compile unicode text based files to a single file .hta installer which can be installed on windows based corporate environments. The program was initially created for installing an intranet site that automatically creates network backups, while also storing a local copy of the site for backup purposes during network outages.<br>
  When the user attempts to run the installer, it will attempt to install to a user input local location, as well as a user input network drive location. <br>
To create compile a installer file, open up the Resources/files.json file:
  <ul>
    <li>"fName": is the installers name.</li>
    <li>"folders": stores all the directory names you would like the installer to make. <b>Note:</b> Create parent directories prior to the child directories. All directories will be installed relative to the locations input by the user running the installer.</li>
    <li>"from": acts as a file manifest, it records each of the files you would like compiled.</li>
    <li>"to": this is where the installer will install each individual file.</li>
  </ul>
The "from" and "to" index will correlate with one another. For instance, <b>from[1]</b> <i>will install the file to</i> <b>to[1]</b>. <br>

A sample files.json manifest would look something like this:
<pre>
  {
    "fName":"Console Installer",
    "folders":[
      "CP Console",
      "CP Console/Resources",
      "CP Console/Resources/Widgets"
    ],
    "from":[
      "index.htm",
      "Resources/styles.css",
      "Resources/scripts.js",
      "Resources/Widgets/launcher.htm"
    ],
    "to":[
      "CP Console/CP Console.htm",
      "CP Console/Resources/styles.css",
      "CP Console/Resources/scripts.js",
      "CP Console/Resources/Widgets/launcher.htm"
    ]
  }
  </pre>
  Once the files.json data is input, you can run the "Installer Compiler.hta" to create your hta installer.
